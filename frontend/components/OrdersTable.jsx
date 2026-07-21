import { Edit2, Trash2 } from "lucide-react";
import StatusTracker from "./StatusTracker";
import TimeLeftDisplay from "./TimeLeftDisplay";

const formatCurrency = (amount) =>
  `₱${Number(amount || 0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const formatDate = (date) => {
  if (!date) {
    return "N/A";
  }

  return new Date(date).toLocaleDateString();
};

const getPaymentLabel = (status) => {
  if (!status) {
    return "Unpaid";
  }

  return status.charAt(0).toUpperCase() + status.slice(1);
};

/**
 * Supports different backend ID field names.
 */
const getOrderId = (order) =>
  order?.id ?? order?.order_id ?? order?.uuid ?? order?._id ?? null;

const OrdersTable = ({
  orders = [],
  onView,
  onEdit,
  onDelete,
  onStatusChange,
}) => {
  const handleStatusChange = (order, newStatus) => {
    const orderId = getOrderId(order);

    if (!orderId) {
      console.error("Order ID is missing:", order);

      alert("Cannot update order status because the order ID is missing.");

      return;
    }

    /**
     * Payment check before release.
     */
    if (newStatus === "released") {
      const totalPrice = Number(order.total_price || 0);

      const amountPaid = Number(order.amount_paid || 0);

      const remainingBalance = totalPrice - amountPaid;

      if (remainingBalance > 0) {
        alert(
          `Cannot release order. Remaining balance: ₱${remainingBalance.toFixed(
            2,
          )}`,
        );

        return;
      }
    }

    if (onStatusChange) {
      onStatusChange(order, newStatus);
    }
  };

  return (
    <div className="card" style={{ padding: 0 }}>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Customer</th>
              <th>Weight</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Amount</th>
              <th>Completion</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => {
                const orderId = getOrderId(order);

                return (
                  <tr key={orderId ?? order.order_number ?? index}>
                    <td
                      style={{
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {order.order_number || "N/A"}
                    </td>

                    <td>
                      <div>
                        <p
                          style={{
                            fontWeight: 500,
                          }}
                        >
                          {order.customers?.name ||
                            order.customer_name ||
                            "Unknown Customer"}
                        </p>

                        <p
                          style={{
                            fontSize: 12,
                            color: "var(--text-muted)",
                          }}
                        >
                          {order.customers?.phone || order.customer_phone || ""}
                        </p>
                      </div>
                    </td>

                    <td>{order.weight_kg || 0}kg</td>

                    <td>
                      <StatusTracker
                        currentStatus={order.status}
                        onStatusChange={
                          onStatusChange
                            ? (status) => handleStatusChange(order, status)
                            : undefined
                        }
                      />
                    </td>

                    <td>
                      <span className={`badge badge-${order.payment_status}`}>
                        {getPaymentLabel(order.payment_status)}
                      </span>

                      {order.payment_status !== "paid" && (
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--danger)",
                            marginTop: 4,
                          }}
                        >
                          Balance:{" "}
                          {formatCurrency(
                            Number(order.total_price || 0) -
                              Number(order.amount_paid || 0),
                          )}
                        </div>
                      )}
                    </td>

                    <td
                      style={{
                        fontWeight: 600,
                        color: "var(--text-primary)",
                      }}
                    >
                      {formatCurrency(order.total_price)}
                    </td>

                    <td>
                      <TimeLeftDisplay
                        timeLeft={
                          order.estimated_completion
                            ? formatDate(order.estimated_completion)
                            : "Pending"
                        }
                      />
                    </td>

                    <td>
                      <div
                        style={{
                          display: "flex",
                          gap: 4,
                        }}
                      >
                        {onView && (
                          <button
                            type="button"
                            className="btn-icon"
                            title="View"
                            onClick={() => onView(order)}
                          >
                            View
                          </button>
                        )}

                        {onEdit && (
                          <button
                            type="button"
                            className="btn-icon"
                            title="Edit"
                            onClick={() => onEdit(order)}
                          >
                            <Edit2 size={16} />
                          </button>
                        )}

                        {onDelete && (
                          <button
                            type="button"
                            className="btn-icon"
                            title="Delete"
                            onClick={() => onDelete(order)}
                            style={{
                              color: "var(--danger)",
                            }}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={8} className="empty-state">
                  <p>No orders found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;

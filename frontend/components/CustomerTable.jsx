// frontend/src/components/CustomerTable.jsx

const CustomerTable = ({ customers = [], onEdit, onDelete }) => {
  return (
    <div
      className="
        overflow-x-auto
        rounded-lg
        border
        bg-white
      "
    >
      <table
        className="
          min-w-full
          text-sm
        "
      >
        <thead>
          <tr
            className="
              border-b
              bg-gray-50
              text-left
            "
          >
            <th className="px-4 py-3">Customer Name</th>

            <th className="px-4 py-3">Phone</th>

            <th className="px-4 py-3">Email</th>

            <th className="px-4 py-3">Address</th>

            <th className="px-4 py-3">Notes</th>

            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <tr
                key={customer.id}
                className="
                  border-b
                  hover:bg-gray-50
                "
              >
                <td
                  className="
                    px-4
                    py-3
                    font-medium
                  "
                >
                  {customer.name}
                </td>

                <td className="px-4 py-3">{customer.phone || "-"}</td>

                <td className="px-4 py-3">{customer.email || "-"}</td>

                <td className="px-4 py-3">{customer.address || "-"}</td>

                <td className="px-4 py-3">{customer.notes || "-"}</td>

                <td className="px-4 py-3">
                  <div
                    className="
                      flex
                      gap-2
                    "
                  >
                    <button
                      type="button"
                      onClick={() => onEdit(customer)}
                      className="
                        rounded
                        bg-yellow-500
                        px-3
                        py-1
                        text-xs
                        text-white
                        hover:bg-yellow-600
                      "
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(customer)}
                      className="
                        rounded
                        bg-red-500
                        px-3
                        py-1
                        text-xs
                        text-white
                        hover:bg-red-600
                      "
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="
                  px-4
                  py-8
                  text-center
                  text-gray-500
                "
              >
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;

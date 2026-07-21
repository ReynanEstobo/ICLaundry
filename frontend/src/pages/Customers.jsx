import { useEffect, useMemo, useState } from "react";

import CustomerSearch from "../../components/CustomerSearch";
import CustomerTable from "../../components/CustomerTable";
import CustomerModal from "../../components/CustomerModal";
import CustomerActions from "../../components/CustomerActions";

import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../API/customerAPI";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [editing, setEditing] = useState(false);

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  /**
   * ==============================================
   * LOAD CUSTOMERS
   * ==============================================
   */

  const loadCustomers = async () => {
    try {
      setLoading(true);

      setError("");

      const response = await getCustomers();

      setCustomers(Array.isArray(response) ? response : response.data || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  /**
   * ==============================================
   * SEARCH
   * ==============================================
   */

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const keyword = searchValue.toLowerCase();

      return (
        customer.name?.toLowerCase().includes(keyword) ||
        customer.phone?.toLowerCase().includes(keyword) ||
        customer.email?.toLowerCase().includes(keyword)
      );
    });
  }, [customers, searchValue]);

  /**
   * ==============================================
   * OPEN ADD MODAL
   * ==============================================
   */

  const handleAddCustomer = () => {
    setEditing(false);

    setSelectedCustomer(null);

    setShowModal(true);
  };

  /**
   * ==============================================
   * OPEN EDIT MODAL
   * ==============================================
   */

  const handleEditCustomer = (customer) => {
    setEditing(true);

    setSelectedCustomer(customer);

    setShowModal(true);
  };

  /**
   * ==============================================
   * CREATE CUSTOMER
   * ==============================================
   */

  const handleCreateCustomer = async (customerData) => {
    try {
      await createCustomer(customerData);

      await loadCustomers();

      setShowModal(false);

      setSelectedCustomer(null);
    } catch (error) {
      setError(error.message);

      alert(error.message);
    }
  };

  /**
   * ==============================================
   * UPDATE CUSTOMER
   * ==============================================
   */

  const handleUpdateCustomer = async (customerData) => {
    try {
      await updateCustomer(
        selectedCustomer.id,

        customerData,
      );

      await loadCustomers();

      setShowModal(false);

      setSelectedCustomer(null);

      setEditing(false);
    } catch (error) {
      setError(error.message);

      alert(error.message);
    }
  };

  /**
   * ==============================================
   * DELETE CUSTOMER
   * ==============================================
   */

  const handleDeleteCustomer = async (customer) => {
    const confirmed = window.confirm("Delete this customer?");

    if (!confirmed) {
      return;
    }

    try {
      await deleteCustomer(customer.id);

      await loadCustomers();
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <p>Loading customers...</p>;
  }
  return (
    <div
      className="
        space-y-6
        p-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <CustomerSearch value={searchValue} onSearchChange={setSearchValue} />

        <CustomerActions onAddCustomer={handleAddCustomer} />
      </div>

      {error && (
        <p
          className="
            text-red-500
          "
        >
          {error}
        </p>
      )}

      <CustomerTable
        customers={filteredCustomers}
        onEdit={handleEditCustomer}
        onDelete={handleDeleteCustomer}
      />

      {showModal && (
        <CustomerModal
          customer={selectedCustomer}
          isEditing={editing}
          onClose={() => {
            setShowModal(false);

            setSelectedCustomer(null);

            setEditing(false);
          }}
          onSubmit={editing ? handleUpdateCustomer : handleCreateCustomer}
        />
      )}
    </div>
  );
};

export default Customers;

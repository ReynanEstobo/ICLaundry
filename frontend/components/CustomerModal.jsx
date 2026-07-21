import { useEffect, useState } from "react";

const CustomerModal = ({
  customer = null,
  isEditing = false,
  onSubmit,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  useEffect(() => {
    if (!customer) {
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        notes: "",
      });

      return;
    }

    setFormData({
      name: customer.name || "",
      phone: customer.phone || "",
      email: customer.email || "",
      address: customer.address || "",
      notes: customer.notes || "",
    });
  }, [customer]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) {
      alert("Customer name is required.");
      return;
    }

    if (!formData.phone.trim()) {
      alert("Phone number is required.");
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-lg
          rounded-xl
          bg-white
          p-6
        "
      >
        <h2
          className="
            mb-5
            text-xl
            font-semibold
          "
        >
          {isEditing ? "Edit Customer" : "Add Customer"}
        </h2>

        <label htmlFor="customer-name" className="mb-1 block text-sm">
          Customer Name
        </label>

        <input
          id="customer-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="
            mb-4
            w-full
            rounded-lg
            border
            px-3
            py-2
          "
        />

        <label htmlFor="customer-phone" className="mb-1 block text-sm">
          Phone Number
        </label>

        <input
          id="customer-phone"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="
            mb-4
            w-full
            rounded-lg
            border
            px-3
            py-2
          "
        />

        <label htmlFor="customer-email" className="mb-1 block text-sm">
          Email
        </label>

        <input
          id="customer-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="
            mb-4
            w-full
            rounded-lg
            border
            px-3
            py-2
          "
        />

        <label htmlFor="customer-address" className="mb-1 block text-sm">
          Address
        </label>

        <textarea
          id="customer-address"
          name="address"
          rows={2}
          value={formData.address}
          onChange={handleChange}
          className="
            mb-4
            w-full
            rounded-lg
            border
            px-3
            py-2
          "
        />

        <label htmlFor="customer-notes" className="mb-1 block text-sm">
          Notes
        </label>

        <textarea
          id="customer-notes"
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          className="
            mb-5
            w-full
            rounded-lg
            border
            px-3
            py-2
          "
        />

        <div
          className="
            flex
            justify-end
            gap-3
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-lg
              bg-gray-200
              px-4
              py-2
            "
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="
              rounded-lg
              bg-blue-600
              px-4
              py-2
              text-white
              hover:bg-blue-700
            "
          >
            {isEditing ? "Update Customer" : "Create Customer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerModal;

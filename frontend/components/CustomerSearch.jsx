import { useEffect, useState } from "react";

const CustomerSearch = ({
  value = "",
  onSearchChange,
  placeholder = "Search customers...",
}) => {
  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleChange = (event) => {
    const value = event.target.value;

    setSearchValue(value);

    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center">
      <input
        id="searchCustomers"
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          outline-none
          transition
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
      />
    </div>
  );
};

export default CustomerSearch;

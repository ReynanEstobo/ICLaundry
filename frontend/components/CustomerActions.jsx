export default function CustomerActions({
  setShowModal,
  setEditing,
  onDelete,
}) {
  return (
    <>
      <button
        onClick={() => {
          setEditing(false);
          setShowModal(true);
        }}
      >
        Add Customer
      </button>

      <button
        onClick={() => {
          setEditing(true);
          setShowModal(true);
        }}
      >
        Edit Customer
      </button>

      <button onClick={onDelete}>
  Delete
</button>
    </>
  );
}
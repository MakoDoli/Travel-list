export default function Stats({ numberOfItems, packedItems }) {
  if (numberOfItems === 0)
    return (
      <p className="stats">Start adding items to your packig list 🧦👜👒</p>
    );
  return (
    <footer className="stats">
      {numberOfItems === packedItems.length ? (
        <em>You've got everything ready to go! 🚕</em>
      ) : (
        <em>
          {`You have ${numberOfItems} items on your list, You've already packed
        ${packedItems.length} (${(
            packedItems.length /
            (numberOfItems / 100)
          ).toFixed(2)}%) `}
        </em>
      )}
    </footer>
  );
}

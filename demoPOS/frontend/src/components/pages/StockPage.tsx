export default function StockPage() {
  const dummyArray = ["Angular", "VueJS", "ReactJS"];

  return (
    <div>
      <h2>Stock</h2>
      <ul>
        {dummyArray.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function App() {
  const tmp1 = "Hey";
  const tmp2 = 20;
  const tmp3 = true;

  return (
    <div>
      App {tmp1}, {tmp2}, {tmp3 ? "Yes" : "No"}
    </div>
  );
}

export default function App() {
  const tmp1 = "Hey";
  const tmp2 = 20;
  const tmp3 = true;

  function MyBox() {
    return <div>MyBox</div>;
  }

  const AnotherBox = () => {
    return <div>Another Box</div>;
  };

  return (
    <div>
      App {tmp1}, {tmp2}, {tmp3 ? "Yes" : "No"}
      <MyBox />
      <AnotherBox />
    </div>
  );
}

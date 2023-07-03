export default function App() {
  const tmp1 = "Hey";
  const tmp2 = 20;
  const tmp3 = true;

  function MyBox() {
    return <div>MyBox</div>;
  }

  // Component
  const AnotherBox = (props: any) => {
    return <div>Another Box: {props.title}</div>;
  };

  return (
    <div>
      App {tmp1}, {tmp2}, {tmp3 ? "Yes" : "No"}
      <MyBox />
      <AnotherBox title="Lek" />
    </div>
  );
}

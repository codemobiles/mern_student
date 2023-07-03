export default function App() {
  const tmp1 = "Hey";
  const tmp2 = 20;
  const tmp3 = true;

  function MyBox() {
    return <div>MyBox</div>;
  }

  // Component
  const AnotherBox = (props: { title: string; subtitle: string }) => {
    return (
      <div>
        Another Box:
        <ul>
          <li>{props.title}</li>
          <li>{props.subtitle}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      App {tmp1}, {tmp2}, {tmp3 ? "Yes" : "No"}
      <MyBox />
      <AnotherBox title="Lek" subtitle="555" />
    </div>
  );
}

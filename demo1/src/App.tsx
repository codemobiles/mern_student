export default function App() {
  const tmp1 = "Hey";
  const tmp2 = 20;
  const tmp3 = true;

  function MyBox() {
    return <div>MyBox</div>;
  }

  // Component
  type AnotherBoxProps = {
    title: string;
    subtitle: string;
    version?: number;
  };

  const AnotherBox = ({ title, subtitle, version }: AnotherBoxProps) => {
    return (
      <div>
        Another Box:
        <ul>
          <li>{title}</li>
          <li>{subtitle}</li>
          <li>{version}</li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      App {tmp1}, {tmp2}, {tmp3 ? "Yes" : "No"}
      <MyBox />
      <AnotherBox title="Lek" subtitle="555" version={10} />
      <button onClick={() => alert("Hey")}>ClickMe</button>
    </div>
  );
}

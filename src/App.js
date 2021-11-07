import Card from "./Card";
import "./App.css";
import data from "./data";

function App() {
  console.log(data);
  const element = data.map((el, index) => {
    return <Card key={index} type={el} />;
  });
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">{element}</div>
      </div>
    </section>
  );
}

export default App;

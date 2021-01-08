import "./App.css";
import Clock from "./todolistwork/TimeClock";
import Weather from "./todolistwork/Weather";

function App() {
  return (
    <div>
      <section className="canterInformation">
        <div className="js-clock">
          <h1>
            <Clock />
          </h1>
        </div>
        <form className="js-form form">
          <input type="text" placeholder="당신의 이름을 써주세요." />
        </form>

        <br />
        <br />
        <br />
        <form className="js-toDoForm">
          <input type="text" placeholder="오늘 할일을 적어보세요!!!" />
        </form>
        <ul className="js-toDoList"></ul>
        <div className="js-weather">
          <Weather />
        </div>
      </section>
    </div>
  );
}

export default App;

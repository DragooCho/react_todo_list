import "./App.css";
import Clock from "./todolistwork/TimeClock";
import Weather from "./todolistwork/Weather";
import UserRegistration from "./todolistwork/UserRegistration";

function App() {
  return (
    <div>
      <section className="canterInformation">
        <div className="js-clock">
          <h1>
            <Clock />
          </h1>
        </div>
        <UserRegistration />

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

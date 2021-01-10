import "./App.css";
import Clock from "./todolistwork/TimeClock";
import Weather from "./todolistwork/Weather";
import UserRegistration from "./todolistwork/UserRegistration";
import Todo from "./todolistwork/Todo";

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
        <Todo />
        <div className="js-weather">
          <Weather />
        </div>
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import "./scss/Style.css";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Nav />
      <Section prop={{name: 'Jhon .D'}}/>
      <Sidebar />
    </>
  );
}

export default App;

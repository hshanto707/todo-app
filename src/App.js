import { Container } from "react-bootstrap";
import "./App.css";
import InputForm from "./InputForm/InputForm";
import Notes from "./Notes/Notes";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="title">Todo App</h1>
        <div className="app-container">
          <InputForm />
          <Notes />
        </div>
      </Container>
    </div>
  );
}

export default App;

import "./App.css";
import Board from "./Components/Board/Board";
import Editable from "./Components/Editable/Editable";
function App() {
  return (
    <div className="app">
      <div className="app_navbar">
        <h2>Kanban</h2>
      </div>

      <div className="app_outer">
        <div className="app_boards">
          <Board />
          <Board />
          <div className="app_boards_board">
             
          </div>
          <Editable text="Add Board" placeholder="Enter Board Title"/>
        </div>
      </div>
    </div>
  );
}

export default App;

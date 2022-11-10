import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages & components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/:id" element={<Workout />} />
            <Route path="/workouts/:id/edit" element={<EditWorkout />} />
            <Route path="/workouts/new" element={<NewWorkout />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Chat from "./components/Chat";
import InstructionsPage from "./components/Instructions";

/* The App component includes routing to navigate between Homepage and Chat components. */

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Homepage */}
        <Route path="/" element={<Homepage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        
        {/* Route for Chat */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;

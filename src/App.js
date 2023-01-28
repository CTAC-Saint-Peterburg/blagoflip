import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import Chat from "./pages/Chat";
import Main from "./pages/Main";
import { NotFoundPage } from "./pages/NotFoundPage";
import Settings from "./pages/Settings";

function App() {
  return (
    <div className="main">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

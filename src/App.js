import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import { Header } from "./components/Header";
import Chat from "./pages/Chat";
import Main from "./pages/Main";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SignIn } from "./pages/SignIn";
import Settings from "./pages/Settings";

function App() {
  const auth = useSelector((state) => state.profile.data.signInStatus);
  console.log(auth);
  return (
    <div className="main">
      {auth ? <Header /> : ""}
      <Routes>
        <Route path="/" element={auth ? <Main /> : <SignIn />} />
        <Route path="/chat" element={auth ? <Chat /> : <SignIn />} />
        <Route path="/settings" element={auth ? <Settings /> : <SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

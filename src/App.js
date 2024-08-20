import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HistoryPage from "./pages/HistoryPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/main" element={<MainPage/>}/>
        <Route path="/history" element={<HistoryPage/>}/>
        <Route path="/*" element={<MainPage/>}/>
      </Routes>
    </>
  );
}

export default App;

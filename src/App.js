import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Content from "./pages/content";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Sidebar />
        <Content />
    </div>
  );
}

export default App;

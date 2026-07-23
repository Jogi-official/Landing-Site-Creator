import Navbar from "./components/Navbar/Navbar";
import PreviewCanvas from "./components/PreviewCanvas/PreviewCanvas";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      <main className="flex text-white flex-1">
        <SideBar />
        <PreviewCanvas />
      </main>
    </div>
  );
}

export default App;

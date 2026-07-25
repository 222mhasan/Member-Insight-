import "./App.css";
// import Footer from './components/Footer'
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <>
      <section>
        <div>
          <div className="min-h-screen bg-base-200 flex px-5">
            <SearchBox />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

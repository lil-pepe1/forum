import Navbar from "./components/NavBar";
import Topic from "./components/topic";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";
import "./app.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main">
        <Topic name="Trending" id="trending"></Topic>
        <Topic name="Computer and IT" id="computer_and_it"></Topic>
        <Topic name="Economy" id="economy"></Topic>
        <Topic name="Cars" id="cars"></Topic>
        <Topic name="Politics" id="politics"></Topic>
      </div>
      <Footer></Footer>
      <SearchModal></SearchModal>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./data.json";
import { useState } from "react";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  // modal function
  const [modalShow, setModalShow] = useState(false);
  const [theBeast, setTheBeast] = useState({}); //start of stretch goal
  const [hornsFilter, setHornsFilter] = useState("");

  function handleModal(beast) {
    setModalShow(!modalShow);
    setTheBeast(beast);
    console.log(beast);
  }

  return (
    <div className="App">
      <Header hornsFilter={hornsFilter} setHornsFilter={setHornsFilter} />
      <Main data={data} handleModal={handleModal} hornsFilter={hornsFilter} />
      {/*conditional rendering...if true show if false dont*/}
      {modalShow && <SelectedBeast theBeast={theBeast} handleModal={handleModal} />}
      <Footer />
    </div>
  );
}

export default App;

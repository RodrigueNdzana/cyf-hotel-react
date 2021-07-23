import React from "react";
import TouristInfoCards from "./Components/TouristInfoCards";
import Footer from "./Components/Footer";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Components/Heading";
//import SearchResults from './SearchResults';
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
      {/* <SearchResults booking="Read"/> */}
    </div>
  );
};

export default App;

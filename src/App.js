import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
//import SearchResults from './SearchResults';
const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer />
      {/* <SearchResults booking="Read"/> */}
    </div>
  );
};

export default App;

import React from "react";
import { useState } from "react";

// First install moment library npm i moment-- read this docs for better understanding https://momentjs.com/
var moment = require("moment");

const SearchResults = props => {
  //Calculate and show the number of nights for each booking
  const CalculateDifferenceInTime = (CheckIn, CheckOut) => {
    const CheckInDates = moment(CheckIn);
    const CheckOutDates = moment(CheckOut);

    return CheckOutDates.diff(CheckInDates, "days");
  };

  const [rowThatIsSelected, setRowThatIsSelected] = useState([]);
  //const [valueSelected,setValueSelected] = useState(false);

  const changeColor = index => {
    rowThatIsSelected.includes(index)
      ? setRowThatIsSelected(rowThatIsSelected.filter(row => row !== index))
      : setRowThatIsSelected(rowThatIsSelected.concat(index));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In date</th>
          <th scope="col">Check out Date</th>
          <th>Number(s) of nights</th>
        </tr>
      </thead>
      {/* Here I am iterating through the data found in the fakeBooking.json file. in which i am calling the results properties that I have declare in the Booking.js  */}
      {props.results.map(data => (
        <tbody>
          <tr
            key={data.id}
            style={
              rowThatIsSelected.includes(data.id)
                ? { backgroundColor: "black", color: "white" }
                : { backgroundColor: "white" }
            }
            onClick={() => changeColor(data.id)}
          >
            <th scope="row">{data.id}</th>
            <td>{data.title}</td>
            <td>{data.firstName}</td>
            <td>{data.surname}</td>
            <td>{data.email}</td>
            <td>{data.roomId}</td>
            <td>{data.checkInDate}</td>
            <td>{data.checkOutDate}</td>
            <td>
              {CalculateDifferenceInTime(data.checkInDate, data.checkOutDate)}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default SearchResults;

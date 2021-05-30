import React from "react";

const SearchResults = props => {
  console.log(props.booking);
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
        </tr>
      </thead>
      {/* Here I am iterating through the data found in the fakeBooking.json file. in which i am calling the results properties that I have declare in the Booking.js  */}
      {props.results.map(element => (
        <tbody>
          <tr>
            <th scope="row">{element.id}</th>
            <td>{element.title}</td>
            <td>{element.firstName}</td>
            <td>{element.surname}</td>
            <td>{element.email}</td>
            <td>{element.roomId}</td>
            <td>{element.checkInDate}</td>
            <td>{element.checkOutDate}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default SearchResults;

import React from "react";

const Footer = props => {
  const data = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="FooterOfThePage">
      <ul>
        {data.map((address, index) => (
          <li className="listItem" key={index}>
            {address}
          </li>
        ))}
      </ul>
    </div>
  );
};
//export default Footer(["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"])
export default Footer;

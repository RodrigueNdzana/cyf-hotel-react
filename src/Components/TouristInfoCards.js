import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="MainContainer">
      <div className="card MainContent">
        <img
          src="https://peoplemakeglasgow.com/images/Top_Reasons_To_Visit/Riverside_Museum.jpg"
          alt="GlasgowImage"
          className="MainContentImage"
        />
        <h1>Glasgow</h1>
        <p>
          he city is home to more than 20 world-class museums and art galleries;
          and is proud to have Europe’s largest civic arts collection with works
          by Van Gogh, Degas and Monet all available to view free-of-charge in
          venues around the city. With such a diverse offering, it is no
          surprise that the city was named the UK’s top cultural and creative
          city (European Commission 2019).
        </p>
        <button className="MainContentButton">
          <a
            className="MainContentLink"
            href="https://peoplemakeglasgow.com"
            target="_blank"
          >
            More Information
          </a>
        </button>
      </div>
      <div className="card MainContent">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FSelfridges_1220px_x_619px_292611928.jpg&action=FeaturedItems1x1"
          className="MainContentImage"
          alt="MainContentImage"
        />
        <h1>Manchester</h1>
        <p>
          Selfridges Exchange Square is located in the heart of the city and a
          luxury shopping experience, home to the most sought-after and
          exclusive designer brands in the world. From fashion, Accessories and
          Jewellery to a brand-new Kids department and expert Personal Shopping
          team. Plus, a whole floor dedicated to beauty.
        </p>
        <button className="MainContentButton">
          <a
            className="MainContentLink"
            href="https://visitmanchester.com"
            target="_blank"
          >
            More Information
          </a>
        </button>
      </div>
      //third car
      <div className="card MainContent">
        <img
          src="https://cdn.londonandpartners.com/-/media/Images/London/Visit/Ecommerce-and-Advertising/Ecommerce/london-eye-by-night-200"
          alt="LondonImage"
          className="MainContentImage"
        />
        <h1>London</h1>
        <p>
          Guarantee your flight by choosing a 15-minute arrival slot. Your
          standard ticket includes a 30-minute flight on the London Eye and an
          immersive 4D cinema experience
        </p>
        <button className="MainContentButton">
          <a
            className="MainContentLink"
            href="https://visitlondon.com"
            target="_blank"
          >
            More Information
          </a>
        </button>
      </div>
    </div>
  );
};
export default TouristInfoCards;

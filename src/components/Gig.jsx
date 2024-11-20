import "../Gig.css";
import React, { useState } from "react";
import FavouriteButton from "../components/FavouriteButton"

const Gig = ({band_name, image, alt, description, date, location, is_favourited, toggleFavourite}) => {  

  return (
    <div>
      <h3>{band_name}</h3>
      <div className="photo">
        <img src={image} alt={alt} />
      </div>
      <p id="description" className="description">{description}</p>
      <p id="event-time-and-date" className="date">{date}</p>
      <p id="event-location" className="location">{location}</p>
      <FavouriteButton favourite={is_favourited} toggleFavourite={toggleFavourite} band_name={band_name}/>
      <br></br>
    </div>
  )
}

export default Gig;
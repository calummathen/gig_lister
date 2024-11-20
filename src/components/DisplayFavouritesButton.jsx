import { useState } from "react";

const DisplayFavouritesButton = ({displayFavourites, toggleDisplayFavourites}) => {
  return (
    <div>
      <button onClick={toggleDisplayFavourites}>{displayFavourites ? "Display All Gigs" : "Display Favourites"}</button>
    </div>

  )
}

export default DisplayFavouritesButton;

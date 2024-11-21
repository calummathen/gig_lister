import { useState } from "react"
import gigs from "./gigs"
import DisplayFavouritesButton from "./DisplayFavouritesButton"
import Gig from "./Gig"

const UsingLocalData = () => {
  
  const [favouritedGigs, setFavouritedGigs] = useState([])
  const [displayFavourites, setDisplayFavourites] = useState(false)
  
  const toggleDisplayFavourites = () => {
    setDisplayFavourites((displayFavourites) => !displayFavourites)
  }
  
  const toggleFavourite = (gigName) => {
    setFavouritedGigs((prevFavouritedGigs) => {
      if (prevFavouritedGigs.includes(gigName)) {
        return prevFavouritedGigs.filter(name => name !== gigName)
      } else {
        return [...prevFavouritedGigs, gigName];
      }
    })
  }
  
  const gigList = displayFavourites ? gigs.filter(gig => favouritedGigs.includes(gig.band_name)): gigs
  
  return (
    <>
      <DisplayFavouritesButton toggleDisplayFavourites={toggleDisplayFavourites} displayFavourites={displayFavourites}/>
      {gigList.map((gig, index) => (
        <Gig 
        key={index}
        band_name={gig.band_name} 
        image={gig.image} 
        alt={gig.alt} 
        description={gig.description} 
        date={gig.date} 
        location={gig.location}
        is_favourited={favouritedGigs.includes(gig.band_name)}
        toggleFavourite={toggleFavourite}
        />
      ))}
      {console.log(favouritedGigs)}
    </>
  );

}

export default UsingLocalData;
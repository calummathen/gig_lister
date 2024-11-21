import { useState, useEffect } from "react";
import getGigData from "./getGigData";
import DisplayFavouritesButton from "./DisplayFavouritesButton";
import Gig from "./Gig";

const UsingAPI = () => {


  const [favouritedGigs, setFavouritedGigs] = useState([])
  const [displayFavourites, setDisplayFavourites] = useState(false)
  const [gigData, setGigData] = useState([]);
  const [loading, setLoading] = useState(true);
  
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
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGigData();
        setGigData(data);
      } catch (error) {
        console.error("Error fetching gig data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); 
  
  const gigList = displayFavourites ? gigData.filter(gig => favouritedGigs.includes(gig.band_name)): gigData

  return (
    <div className="App">
      {loading ? (
        <p>Loading gigs...</p>
      ) : (
        <>
          <DisplayFavouritesButton 
            toggleDisplayFavourites={toggleDisplayFavourites} 
            displayFavourites={displayFavourites} 
          />
          {gigList.length > 0 ? (
            gigList.map((gig, index) => (
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
            ))
          ) : (
            <p>No gigs available.</p>
          )}
          {console.log(favouritedGigs)}
        </>
      )}
    </div>
  );
  
}  

export default UsingAPI;
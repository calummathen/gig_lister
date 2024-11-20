import React, { useState, useEffect } from "react";
import gigs from "./components/gigs"
import Gig from "./components/Gig";
import "./App.css";
import DisplayFavouritesButton from "./components/DisplayFavouritesButton";

function App() {

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



// const getGigData = async () => {
//   const response = await fetch("https://makers-gig-backend.onrender.com/events");
//   const data = await response.json();
//   return data.map((gig) => ({
//     name: gig["band_name"],
//     image: gig["image_url"],
//     alt: "no image",
//     description: gig["description"],
//     date: gig["time"],
//     location: gig["location"],
//   }));
// };

// function App() {
//   const [gigData, setGigData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getGigData();
//         setGigData(data);
//       } catch (error) {
//         console.error("Error fetching gig data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []); // The empty array ensures this runs only once when the component mounts.

//   return (
//     <div className="App">
//       {/* <img src={makersLogo} alt="Makers Logo" /> */}
//       {loading ? (
//         <p>Loading gigs...</p>
//       ) : (
//         gigData.length > 0 ? (
//           gigData.map((gig, index) => (
//             <Gig
//               key={index}
//               name={gig.name}
//               // image={gig.image}
//               alt={gig.alt}
//               description={gig.description}
//               date={gig.date}
//               location={gig.location}
//             />
//           ))
//         ) : (
//           <p>No gigs available.</p>
//         )
//       )}
//     </div>
//   );
// }


  
  export default App;
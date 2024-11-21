


const getGigData = async () => {
  const response = await fetch("https://makers-gig-backend.onrender.com/events");
  const data = await response.json();
  return data.map((gig) => ({
    band_name: gig["band_name"],
    image: gig["image_url"],
    alt: "no image",
    description: gig["description"],
    date: gig["time"],
    location: gig["location"],
  }));
};

export default getGigData;
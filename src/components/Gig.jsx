import "../Gig.css";

const Gig = ({name, image, alt, description, date, location}) => {
  return (
    <div>
      <h3>{name}</h3>
      <div className="photo">
        <img src={image} alt={alt} />
      </div>
      <p id="description" className="description">{description}</p>
      <p id="event-time-and-date" className="date">{date}</p>
      <p id="event-location" className="location">{location}</p>
    </div>

  )
}

export default Gig;
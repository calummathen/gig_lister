import "../Gig.css";

const Gig = () => {
  return (
    <div>
      <h3>Foo Fighters</h3>
      <img className="photo" src="https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2017/06/00c04d57e42c56f9116eef3f1df14d53-800x800.jpg" alt="Black and white picture of foo fighters"></img>
      <p id="description" className="description">Second stop of the UK Tour</p>
      <p id="event-time-and-date" className="date">21:00 21/12/2024</p>
      <p id="event-location" className="location">London 02 Academy</p>
    </div>

  )
}

export default Gig;
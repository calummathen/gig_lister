import Gig from "./components/Gig"
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";



function App() {
  return (
    <>
      <Gig 
      name="Foo Fighters"
      image="https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2017/06/00c04d57e42c56f9116eef3f1df14d53-800x800.jpg" 
      alt = "Foo fighters black and white image"
      description="Second stop of the UK Tour" 
      date="21:00 21/12/2024" 
      location="London 02 Academy"
      />
      <Gig 
      name="Burna Boy"
      image="https://www.bellanaijastyle.com/wp-content/uploads/2024/08/BurnaBoy.jpg" 
      alt = "Burna boy sitting with sunglasses on"
      description="Exclusive performance" 
      date="19:00 28/12/2024" 
      location="Brixton Academy"
      />
    </>
  );
}

export default App;

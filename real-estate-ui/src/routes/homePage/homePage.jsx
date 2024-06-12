import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)
  
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">
          Your Leading Real Estate Agency</h1>
          <p>
          Whether you are looking for a cozy apartment in the city center, a spacious family house in a quiet neighborhood, or a luxurious villa in a prestigious location, our team of experts is here to help you every step of the way. We understand that purchasing a property is one of the most important steps in your life, which is why we are here to provide you with personalized support and expert advice to help you make the best decision.          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years</h2>
            </div>
            <div className="box">
              <h1>20</h1>
              <h2>Experienced agents</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Satisfied clients</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/realestate.jpg" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
import { Link } from "react-router-dom";
import { savePost } from '../../lib/savePost'; // Adjust the import path as needed
import "./card.scss";

function Card({ item }) {

  const userId = JSON.parse(localStorage.getItem("user")).id;
  const handleSaveClick = async () => {
    const result = await savePost(userId, item.id);

    if (result.success) {
      alert("Objava sačuvana!");
    } else {
      alert("Greška prilikom čuvanja! Objava već sačuvana!");
    }
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        {item.img?.length > 0 && (
          <img src={item.img[0]} alt="Item image" />
        )}
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
          <div className="icon" onClick={handleSaveClick}>
              <img src="/save.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import { useLoaderData } from "react-router-dom";
import { savePost } from '../../lib/savePost';


function SinglePage() {
  
  const post = useLoaderData();
  const singlePostData = post.post
  const userData = post.user

  const userId = JSON.parse(localStorage.getItem("user")).id;
  const handleSaveClick = async () => {
    const result = await savePost(userId, singlePostData.id);

    if (result.success) {
      alert("Post saved!");
    } else {
      alert("Error while saving post");
    }
  };
  
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
        <Slider images={singlePostData.img} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.avatar} alt="" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>{singlePostData.utilities}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pets</span>
                <p>{singlePostData.pet}</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income required</span>
                <p>{singlePostData.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Size</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{singlePostData.size}m2</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{singlePostData.bedroom}bedroom</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{singlePostData.bathroom}bathroom</span>
            </div>
          </div>
          <p className="title">Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{singlePostData.school}m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus station</span>
                <p>{singlePostData.bus}m</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{singlePostData.restaurant}m</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="listVertical">
            <div className="feature">
              <div className="featureText">
              <p>{singlePostData.location}</p>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button onClick={handleSaveClick}>
              <img src="/save.png" alt="" />
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
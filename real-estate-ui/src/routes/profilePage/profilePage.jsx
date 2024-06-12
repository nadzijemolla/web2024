import "./profilePage.scss";
import apiRequest from "../../lib/apiRequest";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { Suspense, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Card from "../../components/card/Card"



function ProfilePage() {

  const data = useLoaderData();

  console.log(data)


  const { updateUser, currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Infomacije</h1>
            <Link to="/profile/update">
            <button>Update profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Image:
              <img src={currentUser.avatar || "profile.jpg"} alt="" />
            </span>
            <span>
              Username: <b>{currentUser.username}</b>
            </span>
            <span>
              E-mail: <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My list</h1>
            <Link to="/add">
            <button>New post</button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
        <Await
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(postResponse) => {
                             
                                if (postResponse && postResponse.data && Array.isArray(postResponse.data)) {
                                    return postResponse.data.map((post) => (
                                        <Card key={post.id} item={post} />
                                    ));
                                }
                            }}
                        </Await>
          </Suspense>
          <div className="title">
            <h1>Saved list</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
        <Await
                            resolve={data.savedPostResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(savedPostResponse) => {
                             
                                if (savedPostResponse && savedPostResponse.data && Array.isArray(savedPostResponse.data)) {
                                    return savedPostResponse.data.map((post) => (
                                        <Card key={post.id} item={post} />
                                    ));
                                }
                            }}
                        </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
import "./listPage.scss";
import Filter from "../../components/filter/Filter"
import Card from "../../components/card/Card"
import { Await, useLoaderData } from "react-router-dom";
import { Suspense,useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function ListPage() {
    const { currentUser } = useContext(AuthContext);
    const data = useLoaderData();


  return <div className="listPage">
    <div className="listContainer">
      <div className="wrapper">
        <Filter/>
        <Suspense fallback={<p>Loading...</p>}>
        <Await
                            resolve={data.postResponse}
                            errorElement={<p>Error loading posts!</p>}
                        >
                            {(postResponse) => {
                                if (postResponse && postResponse.data && Array.isArray(postResponse.data)) {
                                    return postResponse.data.map((post) => (
                                        <Card key={post.id} item={post}/>
                                    ));
                                } else {
                                    throw new Error('postResponse.posts is not an array');
                                }
                            }}
                        </Await>
          </Suspense>

      </div>
    </div>
    <div className="imgContainer">
      </div>
  </div>;
}

export default ListPage;
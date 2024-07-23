import React, { useEffect, useState } from "react";
import PlaceCard from "../card/PlaceCard";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import { usePosts } from "../../context/PostProvider";

const PlaceList = () => {
  const { posts } = usePosts();
  const [place, setPlace] = useState([]);
  useEffect(() => {
    const place = posts.filter((post) => post.category === "place");
    setPlace(place);
  }, [posts]);
  return (
    <div>
      <Header />
      <div className="container my-5">
        <p className="fs-2 text-center my-5">
          <span className="brown  noto-serif-display-subtitle">
            STREET FOOD MENU
          </span>
        </p>

        {/* card area start */}

        <div className="row">
          {place &&
            place.map((post) => {
              return (
                <div key={post._id} className="col-6 col-md-4 col-lg-3">
                  <PlaceCard
                    image={post.image}
                    title={post.title}
                    rating={post.total_rating}
                  />
                </div>
              );
            })}
        </div>

        {/* card area end */}
      </div>
      <Footer />
    </div>
  );
};

export default PlaceList;

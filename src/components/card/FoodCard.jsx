import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { useUser } from "../../context/UserProvider";

const StreetFoodCard = ({ pid, image, title, rating }) => {
  let [fav, setFav] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    (async () => {
      if (user) {
        const a = await user.bookmark.find((bookmark) => bookmark === pid);
        if (a) setFav(false);
      }
    })();
  }, [user, pid]);

  let favorite = async (id) => {
    const token = localStorage.getItem("token");
    setFav(!fav);
    console.log(user);

    if (fav) {
      user.bookmark.push(pid);
      await fetch(`${process.env.REACT_APP_API_URL}/users/${id}/add-bookmark`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      const filterBookmark = user.bookmark.filter(
        (bookmark) => bookmark !== pid
      );
      user.bookmark = filterBookmark;
      await fetch(
        `${process.env.REACT_APP_API_URL}/users/${id}/remove-bookmark`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.reload();
    }
  };
  return (
    <div className="mb-4">
      <div>
        <div class="position-relative">
          <Link
            to={`/street_food/food_detail/${pid}`}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <LazyLoad
              width={`auto`}
              offset={300}
              height={`auto`}
              threshold={0.95}
            >
              <img
                src={image}
                className="card-img-top rounded shadow-lg"
                alt="img"
              />
            </LazyLoad>
          </Link>

          <Link
            onClick={() => favorite(pid)}
            className={`fa-solid fa-heart fs-3  position-absolute top-0 end-0 mt-2 me-2 ${
              fav ? "text-light" : "text-warning"
            }`}
            style={{ textDecoration: "none" }}
          ></Link>
        </div>

        <div className="card-body">
          <p className="card-title mt-2 brown">
            <div className="">
              <i class="fa-solid fa-star fs-5 text-warning "></i>
              <span className="fs-5 fw-semibold  roboto-regular ms-2">
                {rating}
              </span>
            </div>
            <Link
              to={`/street_food/food_detail/${pid}`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span className=" fs-5 roboto-regular text-decoration-none">
                {title}
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StreetFoodCard;

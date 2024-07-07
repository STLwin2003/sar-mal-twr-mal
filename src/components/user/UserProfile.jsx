import React from "react";
import StreetFoodCard from "../card/StreetFoodCard";
import CoffeeShopCard from "../card/CoffeeShopCard";
import PlaceCard from "../card/PlaceCard";

const UserProfile = () => {
  return (
    <div>
      <section>
        <div className="container">
          {/* profile start */}

          <div className="bg-light-gray">
            <div className="row py-2">
              <div className="col-lg-2 col-sm-4 mx-auto">
                <div className="">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAACUCAMAAAAnDwKZAAAAMFBMVEXk5ueutLenrrHn6eqrsbWxt7rZ3N3e4eLJzc+/xMbS1dfGysy2u765vsHO0dPq7O2qiZVgAAADy0lEQVR4nO2cWa7dIAxACQYSIMP+d1vITe88YDsxeRLn46mtKvXI2MQQp0o1Go1Go9FoNBqNRqPRaLwHIP9Q/3+cjaTXhzn6TByC6+FkmgAuTrYzV+w4DWo5jWWK39Dp7hmjx3CSFYfed+ZFcEVP8ykk4yfBHEljXW1HcPaz4CWSvq8qCfG73xrJsWog/WuVvJMM1QT76cciXxd7rhVHWyaY4zhUcezHYsMUxyqOE8Iw56O4I5RVyh3SdQ2hsFJuYbSyhqovL5WrYxQNI5RuNw+OkukIDpuIK5OcoVKY/eaGlgsjzIRlzli5laZkYkYsG4mZmJHKxoUaxIQTcqQbmigiSC6WjEzBgGco6l5CEdWEPSPTODqGYarp5XhDfI/zgEi/E1mKEtsOq1o6kc4WONWSkDgM4pvZe0RKmhdEkd6bl4pN8c8osgxlFHmbjkRFk86nd0icDc7/dFEDr40QaBi5nY5Iv8h6AnqBfhF7sfiIzEkaPENR5uzCSsZJ5joC6IZmEDFUC2NnlLqN6MmKXuxqjBpGI3YlD4EYRMH7ReIp0EhlYqan3DAaL2iogHLel+gg7iDcPUm/TgX05ZMRerDcOc7IdByFBRW6qkWr+QrKsc58BCaO8m+jN0oddb0ZEyg6apmx5qQOhF+TROssUT3B7AgfB8a2ENpqaXiTDNPnHdJ0se441uaogn0vabSvshu+ARbnR2MeFjz9bhxOMRm4AdCHYeq0XkdAtdbWz+5MgiurjwvzMM/hLMv7DCSWC/mXtXUeyGLQpwDGy0ByHkme80xy/vPqcqCS2uBtTj9zK5gtIbWd8vi0qhZSABfiWsnfZmm1sVOcK0x5p3/QxXHdWgpIf8lGJxnMvMP4TuMOWEZ3PjgZy7xP27LovQTT+nB8AcHbQfhydDcf2/dAH383X79imdLysEh+mdTHSXYHdZDgIrJCvkgav38kAQb2Ej9I2r3fBULYZYkfJHedmU9Vwqnij5L7fSDx+2sMquNO5xpQh4Rwk/Q79L1AHvksc5zYi33YIl8duVf05It3jCQrISUMkyPj+pY174mAfsXMfDmOgBpHmVXeHEn5iL9wZzlS6hoO3m2eoLyUOXTHfsWgB+fL7l93dcR2Z/RXznRw6cidRqWAW2qY5Q2RuyPh46890IggitfKBUTFwHE97HeKN8daQcSM8VQo543CN8KS7cMzpZ/hMb9z4GAKvzWpt87JsciQNOCym2LJSkudBj5QsjUunAlKPiUP6qWqYTeW7N5V17noAePqKhYMYULQdan3P3U0Go3GH+EfReUvYx8xj5gAAAAASUVORK5CYII="
                    className="card-image rounded-circle w-75 my-3 ms-3 "
                    alt=""
                  />
                  <i class="fa-solid fa-pen-to-square fs-3"></i>
                </div>
              </div>

              <div className="col-lg-8 col-sm-8 my-auto">
                <div className="text start ms-3 ">
                  <p className="fs-3 fw-semibold ">
                    <span>User Name Here</span>
                    <i class="fa-solid fa-pen-to-square ms-2"></i>
                  </p>
                  <p className="fs-4 fw-medium roboto-regular">
                    <span>sample@gmail.com</span>
                    <i class="fa-solid fa-pen-to-square ms-2"></i>
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-2 col-sm-12">
                <div className=" mt-2 mx-3">
                  <button
                    className="btn px-4"
                    type="button"
                    style={{ background: "#b46c14", color: "white" }}
                  >
                    Edit Profile
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/*  profile end */}

          <hr />
          {/* rating list start*/}

          <div className="">
            <p className="fs-3 fw-semibold brown hind-siliguri-semibold mt-5">
              Your Rating Lists
            </p>
            <div className="row my-3 ">
              <div className="col-sm-6 col-md-4 col-lg-3 ">
                <StreetFoodCard />
              </div>
              <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                <div className="">
                  <div className="mb-3">
                    <span className="fs-5 roboto-regular">Your Rating</span>
                    <i class="fa-solid fa-star fs-4 text-warning ms-3"></i>
                    <sppan className="fs-4 fw-semibold  roboto-regular ms-2">
                      9.4
                    </sppan>
                  </div>

                  <p>
                    <i class="fa-solid fa-location-dot me-4 fs-4"></i>
                    <span className="fs-5">Pathein, 10011</span>
                  </p>
                  <p>
                    <i className="fas fa-phone me-4 fs-4"></i>
                    <span className="fs-5">+ 959 765 514 319</span>
                  </p>
                  <div className="fs-6 roboto-regular">
                    <span>29th June, 2024</span> <span>09:23 pm</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row my-3 ">
              <div className="col-sm-6 col-md-4 col-lg-3 ">
                <PlaceCard />
              </div>
              <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                <div className="">
                  <div className="mb-3">
                    {" "}
                    <span className="fs-5 roboto-regular">Your Rating</span>
                    <i class="fa-solid fa-star fs-4 text-warning ms-3"></i>
                    <sppan className="fs-4 fw-semibold  roboto-regular ms-2">
                      9.4
                    </sppan>
                  </div>
                  <p>
                    <i class="fa-solid fa-location-dot me-4 fs-4"></i>
                    <span className="fs-5">Pathein, 10011</span>
                  </p>
                  <p>
                    <i className="fas fa-phone me-4 fs-4"></i>
                    <span className="fs-5">+ 959 765 514 319</span>
                  </p>
                  <div className="fs-6 roboto-regular">
                    <span>29th June, 2024</span> <span>09:23 pm</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row my-3 ">
              <div className="col-sm-6 col-md-4 col-lg-3 ">
                <CoffeeShopCard />
              </div>
              <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                <div className="">
                  <div className="mb-3">
                    <span className="fs-5 roboto-regular">Your Rating</span>

                    <i class="fa-solid fa-star fs-4 text-warning ms-3"></i>
                    <sppan className="fs-4 fw-semibold  roboto-regular ms-2">
                      9.4
                    </sppan>
                  </div>
                  <p>
                    <i class="fa-solid fa-location-dot me-4 fs-4"></i>
                    <span className="fs-5">Pathein, 10011</span>
                  </p>
                  <p>
                    <i className="fas fa-phone me-4 fs-4"></i>
                    <span className="fs-5">+ 959 765 514 319</span>
                  </p>
                  <div className="fs-6 roboto-regular">
                    <span>29th June, 2024</span> <span>09:23 pm</span>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row my-3">
              <div className="col-sm-6 col-md-4 col-lg-3 ">
                <StreetFoodCard />
              </div>
              <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                <div className="">
                  <div className="mb-3">
                    <span className="fs-5 roboto-regular">Your Rating</span>

                    <i class="fa-solid fa-star fs-4 text-warning ms-3"></i>
                    <sppan className="fs-4 fw-semibold  roboto-regular ms-2">
                      9.4
                    </sppan>
                  </div>
                  <p>
                    <i class="fa-solid fa-location-dot me-4 fs-4"></i>
                    <span className="fs-5">Pathein, 10011</span>
                  </p>
                  <p>
                    <i className="fas fa-phone me-4 fs-4"></i>
                    <span className="fs-5">+ 959 765 514 319</span>
                  </p>
                  <div className="fs-6 roboto-regular">
                    <span>29th June, 2024</span> <span>09:23 pm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
              <button
                className="btn px-4"
                type="button"
                style={{ background: "#b46c14", color: "white" }}
              >
                See More
              </button>
            </div>
          </div>

          {/* rating list end */}

          <hr />

          {/* comment list start */}

          <div>
            <div className="row">
              <p className="fs-3 fw-semibold brown hind-siliguri-semibold mt-5">
                Your Comment Lists
              </p>

              <div className="row my-3">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <PlaceCard />
                </div>
                <div className="col-sm-6 col-md-8 col-lg-9 my-auto">
                  <div className="mb-3">
                    {" "}
                    <span className="fs-5 roboto-regular">Your Rating</span>
                    <i class="fa-solid fa-star fs-4 text-warning ms-3"></i>
                    <sppan className="fs-4 fw-semibold  roboto-regular ms-2">
                      9.4
                    </sppan>
                  </div>
                  <div className="bg-light-gray rounded-5">
                    <p className="fs-4 roboto-regular p-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere temporibus quia, exercitationem alias omnis ad
                      nobis
                    </p>
                  </div>
                  <div className="fs-6 roboto-regular">
                    <p>29th June, 2024</p> <p>09:23 pm</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-3">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <CoffeeShopCard />
                </div>
                <div className="col-sm-6 col-md-8 col-lg-9 my-auto">
                  <div className="mb-3">
                    {" "}
                    <span className="fs-5 roboto-regular">Your Rating</span>
                    <i class="fa-solid fa-star fs-4 text-warning ms-3"></i>
                    <sppan className="fs-4 fw-semibold  roboto-regular ms-2">
                      9.4
                    </sppan>
                  </div>
                  <div className="bg-light-gray rounded-5">
                    <p className="fs-4 roboto-regular p-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere temporibus quia, exercitationem alias omnis ad
                      nobis
                    </p>
                  </div>

                  <div className="fs-6 roboto-regular">
                    <p>29th June, 2024</p> <p>09:23 pm</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-3">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <StreetFoodCard />
                </div>
                <div className="col-sm-6 col-md-8 col-lg-9 my-auto">
                  <div className="mb-3">
                    {" "}
                    <span className="fs-5 roboto-regular">Your Rating</span>
                    <i class="fa-solid fa-star fs-4 text-warning ms-3"></i>
                    <sppan className="fs-4 fw-semibold  roboto-regular ms-2">
                      9.4
                    </sppan>
                  </div>
                  <div className="bg-light-gray rounded-5">
                    <p className="fs-4 roboto-regular p-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facere temporibus quia, exercitationem alias omnis ad
                      nobis
                    </p>
                  </div>
                  <div className="fs-6 roboto-regular">
                    <p>29th June, 2024</p> <p>09:23 pm</p>
                  </div>
                </div>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
                <button
                  className="btn px-4"
                  type="button"
                  style={{ background: "#b46c14", color: "white" }}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* comment list end */}
          <hr />

          {/* bookmark list start */}
          <div>
            <div className="">
              <p className="fs-3 fw-semibold brown hind-siliguri-semibold mt-5">
                Your Favorite
              </p>
              <div className="row">
                <div className="row my-3 ">
                  <div className="col-sm-6 col-md-4 col-lg-3 ">
                    <StreetFoodCard />
                  </div>
                  <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                    <div className="">
                      <p>
                        <i class="fa-solid fa-location-dot me-4 fs-5"></i>
                        <span className="fs-6">Pathein, 10011</span>
                      </p>
                      <p>
                        <i className="fas fa-phone me-4 fs-5"></i>
                        <span className="fs-6">+ 959 765 514 319</span>
                      </p>
                      <p>
                        <i class="fa-solid fa-clock fs-5 me-4"></i>
                        <span className="fs-6"> Opening Hours:</span>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row my-3 ">
                  <div className="col-sm-6 col-md-4 col-lg-3 ">
                    <StreetFoodCard />
                  </div>
                  <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                    <div className="">
                      <p>
                        <i class="fa-solid fa-location-dot me-4 fs-5"></i>
                        <span className="fs-6">Pathein, 10011</span>
                      </p>
                      <p>
                        <i className="fas fa-phone me-4 fs-5"></i>
                        <span className="fs-6">+ 959 765 514 319</span>
                      </p>
                      <p>
                        <i class="fa-solid fa-clock fs-5 me-4"></i>
                        <span className="fs-6"> Opening Hours:</span>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row my-3 ">
                  <div className="col-sm-6 col-md-4 col-lg-3 ">
                    <StreetFoodCard />
                  </div>
                  <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                    <div className="">
                      <p>
                        <i class="fa-solid fa-location-dot me-4 fs-5"></i>
                        <span className="fs-6">Pathein, 10011</span>
                      </p>
                      <p>
                        <i className="fas fa-phone me-4 fs-5"></i>
                        <span className="fs-6">+ 959 765 514 319</span>
                      </p>
                      <p>
                        <i class="fa-solid fa-clock fs-5 me-4"></i>
                        <span className="fs-6"> Opening Hours:</span>
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row my-3 ">
                  <div className="col-sm-6 col-md-4 col-lg-3 ">
                    <StreetFoodCard />
                  </div>
                  <div className="col-sm-6  col-md-8 col-lg-9 my-auto">
                    <div className="">
                      <p>
                        <i class="fa-solid fa-location-dot me-4 fs-5"></i>
                        <span className="fs-6">Pathein, 10011</span>
                      </p>
                      <p>
                        <i className="fas fa-phone me-4 fs-5"></i>
                        <span className="fs-6">+ 959 765 514 319</span>
                      </p>
                      <p>
                        <i class="fa-solid fa-clock fs-5 me-4"></i>
                        <span className="fs-6"> Opening Hours:</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-5">
                  <button
                    className="btn px-4"
                    type="button"
                    style={{ background: "#b46c14", color: "white" }}
                  >
                    See More
                  </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
          {/* bookmark list end */}
          <hr />
        </div>
      </section>
    </div>
  );
};

export default UserProfile;

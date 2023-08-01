import React, { useContext, useRef } from "react";
import { MyContext } from "../provider/ContextProvider";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ErrorHandle from "./ErrorHandle";

const ListofPlaylist = () => {
  const { playlistSong, loading, isToggleOff } = useContext(MyContext);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 3,

    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (playlistSong.length > 0) {
    return (
      <>
        <section
          className={isToggleOff ? "bg-zinc-800 text-white " : "bg-white "}
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="container p-0 my-10">
                <div
                  className={
                    isToggleOff
                      ? "text-white text-start font-semibold text-3xl ml-5 mb-5"
                      : "text-start font-semibold text-3xl text-slate-600 mb-5"
                  }
                >
                  List of Playlists
                </div>

                {loading ? (
                  <>
                    <div className="flex items-center justify-center my-20">
                      <ClipLoader
                        color={"#36d7b7"}
                        loading={loading}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    </div>
                  </>
                ) : (
                  <Slider {...settings} ref={sliderRef}>
                    {playlistSong?.map((product) => (
                      <div
                        key={product.id}
                        className="w-full rounded shadow-lg h-full mb-5 hover:border-lime-500 border-2"
                      >
                        <NavLink to={`/playlistdetails/${product.id}`}>
                          <img
                            src={product?.image[2]?.link}
                            className="w-full rounded object-contain"
                            alt="img"
                          />
                          <h3
                            className="text-base my-2 font-semibold text-center truncate px-3"
                            dangerouslySetInnerHTML={{ __html: product.title }}
                          />

                          <p
                            className={
                              isToggleOff
                                ? "text-sm font-light mb-2 text-white text-center"
                                : "text-sm font-light mb-2 text-slate-600 text-center"
                            }
                          >
                            {product?.subtitle}
                          </p>
                        </NavLink>
                      </div>
                    ))}
                  </Slider>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <ErrorHandle />;
  }
};

export default ListofPlaylist;

import React, { useContext, useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import { MyContext } from "../provider/ContextProvider";
import ClipLoader from "react-spinners/ClipLoader";

import ErrorHandle from "./ErrorHandle";

function ProductDetails() {
  const [albumSong, setAlbumSong] = useState([]);

  const { loading, setLoading, isToggleOff } = useContext(MyContext);

  let { song } = useParams();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const albumSong = async () => {
        const url = `https://saavn.me/albums?id=${song}`;
        const response = await fetch(url);
        const result = await response?.json();

        setAlbumSong(result?.data);
        setLoading(false);
        console.log(result);
      };
      albumSong();
    }, 1000);
  }, []);
  // console.log(product);

  //console.log(albumSong);

  if ( albumSong !== null ) {
    return (
      <>
        <section
          className={isToggleOff ? "bg-zinc-800 text-white" : "bg-white"}
        >
          <div className="container py-10">
            <div className="grid grid-cols-1 md:grid-cols-1">
              <div className="container p-0 my-10">
                <div
                  className={
                    isToggleOff
                      ? "text-start font-semibold text-3xl text-white mb-5"
                      : "text-start font-semibold text-3xl text-slate-600 mb-5"
                  }
                >
                  {albumSong.name}
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
                  <div className="products grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    {albumSong?.songs?.map((product) => (
                      <div
                        key={product.id}
                        className="  w-full rounded shadow-lg h-full hover:border-lime-500 border-2"
                      >
                        <NavLink to={`/albumsong/${product.id}`}>
                          <img
                            src={product?.image[2]?.link}
                            className="w-full rounded object-contain"
                            alt="img"
                          />
                          <h3 className="text-base my-2 font-semibold text-center truncate px-3"
                          dangerouslySetInnerHTML={{__html: product.name}}
                          />
                            
                          <p
                            className={
                              isToggleOff
                                ? "text-base mb-1 px-1 font-light text-white text-center"
                                : " text-base mb-1 px-1 font-light text-slate-600 text-center"
                            }
                          >
                            {product?.primaryArtists}{" "}
                          </p>
                        </NavLink>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  } else {
    return <ErrorHandle />;
  }
}

export default ProductDetails;

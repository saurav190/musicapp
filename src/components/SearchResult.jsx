import React, { useContext } from "react";
import { MyContext } from "../provider/ContextProvider";
import { NavLink } from "react-router-dom";

const SearchResult = () => {
  const {
    searchSong,
    showSearch,
    artists,
    albums,
    playListResult,
    isToggleOff,
    query,
  } = useContext(MyContext);

  return (
    <>
      <section className={isToggleOff ? "bg-zinc-800 text-white" : "bg-white"}>
        <div className="container p-4 ">
          {showSearch && (
            <>
              <div
                className={
                  isToggleOff
                    ? "text-start font-semibold text-5xl text-white my-16"
                    : "text-start font-semibold text-5xl text-slate-600 my-16"
                }
              >
                Search Result for {query}
              </div>

              <div
                className={
                  isToggleOff
                    ? "text-start font-semibold text-3xl text-white my-5"
                    : "text-start font-semibold text-3xl text-slate-600 my-5"
                }
              >
                By Song
              </div>
              <div className="products grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {searchSong?.map((product) => (
                  <div
                    key={product.id}
                    className="  w-full rounded shadow-lg h-full hover:border-lime-500 border-2"
                  >
                    <NavLink to={`/playlistsong/${product.id}`}>
                      <img
                        src={product?.image[2]?.link}
                        className="w-full rounded object-contain"
                        alt="img"
                      />
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.title}
                      </h3>
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.singers}
                      </h3>
                    </NavLink>
                  </div>
                ))}
              </div>

              <div
                className={
                  isToggleOff
                    ? "text-start font-semibold text-3xl text-white my-5"
                    : "text-start font-semibold text-3xl text-slate-600 my-5"
                }
              >
                By Playlist
              </div>
              <div className="products grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {playListResult?.map((product) => (
                  <div
                    key={product.id}
                    className="  w-full rounded shadow-lg h-full hover:border-lime-500 border-2"
                  >
                    <NavLink to={`/playlistdetails/${product.id}`}>
                      <img
                        src={product?.image[2]?.link}
                        className="w-full rounded object-contain"
                        alt="img"
                      />
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.title}
                      </h3>
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.singers}
                      </h3>
                    </NavLink>
                  </div>
                ))}
              </div>

              <div
                className={
                  isToggleOff
                    ? "text-start font-semibold text-3xl text-white my-5"
                    : "text-start font-semibold text-3xl text-slate-600 my-5"
                }
              >
                By Albums
              </div>
              <div className="products grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {albums?.map((product) => (
                  <div
                    key={product.id}
                    className="  w-full rounded shadow-lg h-full hover:border-lime-500 border-2"
                  >
                    <NavLink to={`/albumdetails/${product.id}`}>
                      <img
                        src={product?.image[2]?.link}
                        className="w-full rounded object-contain"
                        alt="img"
                      />
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.title}
                      </h3>
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.singers}
                      </h3>
                    </NavLink>
                  </div>
                ))}
              </div>

              <div
                className={
                  isToggleOff
                    ? "text-start font-semibold text-3xl text-white my-5"
                    : "text-start font-semibold text-3xl text-slate-600 my-5"
                }
              >
                By Artist
              </div>
              <div className="products grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {artists?.map((product) => (
                  <div
                    key={product.id}
                    className="  w-full rounded shadow-lg h-full hover:border-lime-500 border-2"
                  >
                    <NavLink to={`/playlistdetails/${product.id}`}>
                      <img
                        src={product?.image[0]?.link}
                        className="w-full rounded object-contain"
                        alt="img"
                      />
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.title}
                      </h3>
                      <h3 className="text-base my-2 font-semibold text-center truncate px-3">
                        {product?.singers}
                      </h3>
                    </NavLink>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResult;

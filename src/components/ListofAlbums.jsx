import React, { useContext } from "react";
import { MyContext } from "../provider/ContextProvider";
import { NavLink } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import ErrorHandle from "./ErrorHandle";

const ListofAlbums = () => {
  const { albumSong, loading, isToggleOff } = useContext(MyContext);
  if (albumSong.length > 0) {
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
                      ? "text-white text-start font-semibold text-3xl mb-5"
                      : "text-start font-semibold text-3xl text-slate-600 mb-5"
                  }
                >
                  List of Albums
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
                    {albumSong?.map((product) => (
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
                          <h3
                            className="text-base my-2 font-semibold text-center truncate px-3"
                            dangerouslySetInnerHTML={{ __html: product.name }}
                          />

                          <p
                            className={
                              isToggleOff
                                ? "text-base mb-1 px-1 font-light text-white text-center"
                                : " text-base mb-1 px-1 font-light text-slate-600 text-center"
                            }
                          >
                            {product?.artists[0]?.name}{" "}
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
    );
  } else {
    return <ErrorHandle />;
    // return(

    //   <>

    //   <section
    //   className={isToggleOff ? "bg-zinc-800 text-white " : "bg-white "}
    // >
    //   <div className="container">
    //     <div className="grid grid-cols-1 md:grid-cols-1">
    //       <div className="container p-0 my-10">
    //         <div
    //           className={
    //             isToggleOff
    //               ? "text-white text-start font-semibold text-3xl mb-5"
    //               : "text-start font-semibold text-3xl text-slate-600 mb-5"
    //           }
    //         >
    //           List of Albums
    //         </div>

    //         {loading ?

    //           <>
    //           <div className="flex items-center justify-center my-20">
    //             <ClipLoader
    //               color={"#36d7b7"}
    //               loading={loading}
    //               size={50}
    //               aria-label="Loading Spinner"
    //               data-testid="loader"
    //             />
    //           </div>
    //         </>

    //           : <div
    //           className={
    //             isToggleOff
    //               ? "text-white text-start font-semibold text-3xl mb-5"
    //               : "text-center font-semibold text-2xl text-slate-600 mb-5"
    //           }
    //         >
    //           No Data Found.
    //         </div> }

    //       </div>

    //     </div>
    //     </div>
    //     </section>
    //   </>
    // )
  }
};

export default ListofAlbums;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "../provider/ContextProvider";

import ErrorHandle from "./ErrorHandle";

function PlaylistSong() {
  const [playlistSong, setPlaylistSong] = useState([]);

  const { isToggleOff, loading } = useContext(MyContext);

  let { song } = useParams();

  useEffect(() => {
    const albumSong = async () => {
      const url = `https://saavn.me/songs?id=${song}`;
      const response = await fetch(url);
      const result = await response?.json();

      setPlaylistSong(result?.data);
      console.log(result);
    };
    albumSong();
  }, []);

  if (playlistSong.length > 0) {
    return (
      <>
        <section
          className={isToggleOff ? "bg-zinc-800 text-white" : "bg-white"}
        >
          <div className="container py-20 flex items-center justify-center ">
            <div className="grid grid-cols-1">
              {playlistSong?.map((product) => (
                <div
                  key={product.id}
                  className=" p-5 w-full rounded shadow-md h-full hover:border-lime-500 border-2"
                >
                  <img
                    src={product?.image[2]?.link}
                    className="w-full h-80 object-contain"
                    alt="img"
                  />
                  <h3
                    className="text-xl font-semibold my-3 text-center"
                    dangerouslySetInnerHTML={{ __html: product.name }}
                  />

                  <p className="text-muted font-extralight text-center font">
                    {product?.primaryArtists}
                  </p>

                  <div className="my-5 flex items-center justify-center">
                    <audio className="rounded-full border-2 " controls loop>
                      <source
                        src={product?.downloadUrl[4].link}
                        type="audio/mpeg"
                      />
                    </audio>
                  </div>

                  <h5
                    className={
                      isToggleOff
                        ? "text-white font-light my-3 text-center py-1 text-xs"
                        : "text-black font-light my-3 text-center py-1 text-xs"
                    }
                  >
                    by {product.label}
                  </h5>
                  <h5
                    className={
                      isToggleOff
                        ? "text-white font-light my-3 text-center py-1 text-xs"
                        : "text-black font-light my-3 text-center py-1 text-xs"
                    }
                  >
                    {product.copyright}
                  </h5>

                  <h5
                    className={
                      isToggleOff
                        ? "text-white font-light my-3 text-center py-1 text-xs"
                        : "text-black font-light my-3 text-center py-1 text-xs"
                    }
                  >
                    Release Date: {product.releaseDate}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <ErrorHandle />;
  }
}

export default PlaylistSong;

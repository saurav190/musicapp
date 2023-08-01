import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";

export const MyContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [searchSong, setSearchSong] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [playlistSong, setPlaylistSong] = useState([]);
  const [albumSong, setAlbumSong] = useState([]);
  const [showSong, setShowSong] = useState(false);
  //const [topCharts, setTopCharts] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  let [loading, setLoading] = useState(true);
  const [showSideBar, setSideBar] = useState(false);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [playListResult, setPlayListResult] = useState([]);

  const [isToggleOff, setIsToggle] = useState(false);

  const inputRef = useRef("");

  //handling search
  const handleClick = async (e) => {
    const url = `https://saavn.me/search/all?query=${search}`;
    const response = await fetch(url);
    const result = await response.json();
    e.preventDefault();
    setSearchSong(result?.data?.songs?.results);
    setArtists(result?.data?.artists?.results);
    setAlbums(result?.data?.albums?.results);
    setPlayListResult(result?.data?.playlists?.results);
    setShowSearch(true);
    setSearch("");

    console.log(result);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearch(query);
    setQuery(query);

    console.log(search);
  };

  //getting the data of docs.saavn
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      const songAlbums = async () => {
        const url =
          "https://saavn.me/modules?trending=true&language=english,hindi";
        //const response = await fetch(url);
        const result = await axios.get(url);
        //const result = await response?.json();
        setAlbumSong(result?.data?.data?.albums);
        // console.log(playlistSong);
        // console.log(albumSong);
        setPlaylistSong(result?.data?.data?.playlists);

        console.log(result);
      };
      songAlbums();
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <MyContext.Provider
      value={{
        handleChange,
        handleClick,
        searchSong,
        setSearchSong,
        inputRef,
        playlistSong,
        albumSong,
        showSong,
        setShowSong,
        search,
        setSearch,
        showSearch,
        loading,
        setLoading,
        showSideBar,
        setSideBar,
        artists,
        albums,
        playListResult,
        isToggleOff,
        setIsToggle,
        query,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default ContextProvider;

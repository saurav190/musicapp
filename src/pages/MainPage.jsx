import ListofPlaylist from "../components/ListofPlaylist";
import ListofAlbums from "../components/ListofAlbums";
import { useContext } from "react";
import { MyContext } from "../provider/ContextProvider";

const MainPage = () => {
  const { isToggleOff } = useContext(MyContext);

  return (
    <>
      <section className={isToggleOff ? "bg-zinc-800 text-white" : "bg-white"}>
        <ListofPlaylist />
        <ListofAlbums />
        <h3 className="text-center text-2xl font-semibold ">
          Yay! You Have Seen it All! &#128525;
        </h3>
      </section>
    </>
  );
};

export default MainPage;

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MyContext } from "../provider/ContextProvider";

const SideBarMenu = ({ sidebarState, setSideBar }) => {
  const { isToggleOff } = useContext(MyContext);

  // console.log("sidebarState", sidebarState);
  return (
    <section
      className={
        isToggleOff ? "bg-zinc-800 text-white" : "sidebar_menu_component"
      }
    >
      <div className="text-right">
        <button
          onClick={() => setSideBar(!sidebarState)}
          className="close_button text-white"
        >
          <FontAwesomeIcon icon={faClose} className="text-2xl" />
        </button>
      </div>
      <div className="p-4">
        <h1 className="text-2xl text-white font-bold mb-4">BROWSE</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/playlist" className="text-gray-400 hover:text-white">
                Playlist
              </Link>
            </li>
            <li>
              <Link to="/albums" className="text-gray-400 hover:text-white">
                Albums
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Songs
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Artist
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};
export default SideBarMenu;

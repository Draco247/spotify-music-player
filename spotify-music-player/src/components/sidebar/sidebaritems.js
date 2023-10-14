// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse, faBook, faHippo, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { AiFillHome } from "react-icons/ai"
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoLibrary } from "react-icons/io5";
import { TbPlayerPlayFilled } from "react-icons/tb";

export const Sidebaritems = [
    {
        title: "Home",
        icon: <AiFillHome />,
        path: "/"
    },
    {
        title: "Library",
        icon: <IoLibrary />,
        path: "/library"
    },
    {
        title: "Feed",
        icon: <BsFillGrid1X2Fill />,
        path: "/feed"
    },
    {
        title: "Player",
        icon: <TbPlayerPlayFilled />,
        path: "/player"
    },
    // {
    //     title: "Home",
    //     icon: <FontAwesomeIcon icon="fa-solid fa-house" />
    // },

]
import { Sidebaritems } from "./sidebaritems";
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { apiClient } from "../../spotify";

export default function Sidebar() {
    const location = useLocation();
    // console.log(process.env)
    const [image, setImage] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
    );
    useEffect(() => {
        apiClient.get("me").then((response) => {
            setImage(response.data.images[0].url);
        });
    }, []);

    return (
        <div className="fixed left-0 top-0 h-full w-24 bg-gray-800 text-white p-4 flex flex-col items-center space-y-4">
           <img className="mb-5 rounded-full border-2 border-slate-50" src={image}/>
           <ul className="flex flex-col items-center space-y-4">
                {Sidebaritems.map((item, index) => (
                    <Link to={item.path} key={index}>
                        <li className={`flex items-center rounded-md p-2 hover:bg-blue-400 ease-in-out duration-300 ${location.pathname === item.path ? 'bg-blue-700' : ''}`}>
                            {item.icon}
                            {item.title}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}
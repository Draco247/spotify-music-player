import { apiClient } from "../spotify";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import placeholder from "../assets/placeholder-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

export default function Library(){
    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
       apiClient.get("me/playlists").then(function(response) {
        setPlaylists(response.data.items);
        }) 
    }, [])

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate("/player", { state: { id: id } });
    };
    
    return(
        <div className="ml-32 p-10 grid grid-cols-4 gap-10">
            {playlists?.map(playlist => (
                <div className="bg-slate-700 rounded-3xl p-5 text-left font-bold group hover:bg-slate-600 relative">
                <img className="rounded-xl" src={playlist.images[0] ? playlist.images[0].url : placeholder} alt="Playlist" />
                <div className="mt-3 flex flex-row">
                    <div>
                        <p className="text-slate-50 text-2xl">{playlist.name}</p>
                        <p className="text-gray-500">{playlist.tracks.total} Songs</p>
                    </div>
                    <div className="m-2 text-blue-500 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out absolute right-0">
                        <BsFillPlayCircleFill size={48} /> {/* Set the size to 32 or your desired value */}
                    </div>
                </div>
                </div>
            ))}
            </div>



      
    );
}
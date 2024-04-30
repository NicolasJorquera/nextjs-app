'use client' // para permitir funcionalidades para el ususario (este componente no se compila como un html estatico y mantiene el javascript para el onclic k)

import { useState } from "react";



export default function LikeButton ()  {

    const [liked, setLiked] = useState(false);

    return (
    <button className="bg-red-600 rounded-md p-1 my-1" onClick={() => setLiked(!liked)}> 
        {liked ? '<3' : '</3'}
    </button>
    )
}
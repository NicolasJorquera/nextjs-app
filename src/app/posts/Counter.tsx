'use client' // para permitir funcionalidades para el ususario (este componente no se compila como un html estatico y mantiene el javascript para el onclick)

import { useState } from "react";

export function Counter(){
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <p>Count: {count}</p>
            <button className="bg-blue-600 p-2 rounded-md my-1" onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    )
}
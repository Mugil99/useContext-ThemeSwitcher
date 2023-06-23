import { useState } from "react";
import colorContext from "./colorContext";
const Provider=(props)=>{
    let [style,setStyle]=useState({color:"black",backgroundColor:"white",border:"2px solid black",btntxt:"Twilight"});
    return(
        <colorContext.Provider value={{
            style:style,
            morning:()=>(setStyle({color:"black",backgroundColor:"white",border:"2px solid black",btntxt:"Twilight", align:"left"})),
            twilight:()=>(setStyle({color:"red",backgroundColor:"yellow",border:"2px solid orange",btntxt:"Night", align:"center"})),
            night:()=>(setStyle({color:"white",backgroundColor:"black",border:"2px solid grey",btntxt:"Morning", align:"right"}))
        }}>
           {props.children}
        </colorContext.Provider>
    )
}
export default Provider;
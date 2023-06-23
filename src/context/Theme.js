import { useContext } from "react";
import colorContext from "./colorContext";

const Theme=()=>{
    var {style,morning,twilight,night}=useContext(colorContext);
    
    function changeTheme(){
        if(style.btntxt==="Twilight"){
            twilight();
        }
        else if(style.btntxt==="Night"){
            night();
        }
        else{
            morning();
        }
    }
    
    return(
        <div>
        <h1>Theme Switcher</h1>
        <div style={{color:style.color,textAlign:style.align,backgroundColor:style.backgroundColor,border:style.border}}>
          <div>
            <h2>Mugil Yalini</h2>
            <p>I am an upcoming SDE</p>
            <button>know more</button>
          </div>
          <button onClick={changeTheme}>{style.btntxt}</button>
        </div>
        </div>
    )
}
export default Theme;
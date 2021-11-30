import React from "react";
import preloader from "../../../assets/Spinner.svg";
import s from "../../Users/Users.module.css";

let Preloader = (props) =>{
    return <img src={preloader} className={s.preloader}/>
}
export default Preloader;
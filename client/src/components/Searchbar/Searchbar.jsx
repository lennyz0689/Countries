import React from "react";
import Style from "./Searchbar.module.css"
// import { BsSearch } from "react-icons/bs";

const Searchbar = () => {
    return (
        <React.Fragment>
            <input type="search" className={Style.input} placeholder="Buscar Pais" />
        </React.Fragment>
    )
}

export default Searchbar
import React from "react";


const d = new Date();
var this_year = d.getFullYear();

function Footer(){
    return (<footer><p>copyright © {this_year}</p></footer>)
}


export default Footer;
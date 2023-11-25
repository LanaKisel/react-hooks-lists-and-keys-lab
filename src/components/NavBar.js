import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const specialLink = links.map((link) => { 
    return <a key={link} href={"#"+link}>{link}</a>
  })

  return <nav>{specialLink}</nav>;
}

export default NavBar;

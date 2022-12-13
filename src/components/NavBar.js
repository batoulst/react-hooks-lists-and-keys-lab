import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const atag= links.map(e=>{
  return <a key={e} href={`#${e}`}>{e}</a>;
})

  return <nav>
    {atag}
  </nav>;
}

export default NavBar;

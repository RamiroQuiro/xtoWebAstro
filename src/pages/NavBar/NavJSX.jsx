import Links from "../../components/Links";
import ButtonNav from "./ButtonNav";
import { useState } from "react";

export default function NavJSX() {
    const [toogle, setToogle] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();
      setToogle(!toogle);
    };
  return (
    <>
    <ButtonNav
    handleClick={handleClick}
    />
  {
  toogle&&
  <nav
    className={`${toogle?'':''} animate-[aparecer_.2s] w-full h-full md:h-auto py-5 fixed top-0 text-gray-700 z-50 md:flex items-center justify-center mx-auto md:justify-between px-5 bg-white/60 border-b border-cyan-300/80`}
  >
    <div className="md:w-3/12 mx-auto flex bg-red-<500>">logo</div>
    <div className="md:w-6/12 w-full h-full">
      <ul className="flex flex-col md:flex-row items-center justify-evenly">
        {
          Links?.map((link) => (
            <li className="cursor-pointer">
              <a href={link.href}>{link.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>
}
  </>
  )
}

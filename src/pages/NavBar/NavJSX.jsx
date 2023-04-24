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
    toogle={toogle}
    />
  {

  <nav
    className={`${!toogle?'translate-y-full md:translate-y-0 duration-300':'-translate-y-0 duration-300'} animate-[aparecer_.2s] w-full h-[35%]  md:h-min  py-5 fixed bottom-0 md:top-0 text-gray-700 z-50 md:flex items-center justify-center mx-auto md:justify-between px-5 bg-white/60 md:border-b border-t border-cyan-300/80`}
  >
    <div className="md:w-6/12 hidden md:flex mx-auto  >">logo</div>
      <ul className="flex flex-wrap flex-grow md:flex-row items-center   md:justify-evenly gap-1">
        {
          Links?.map((link) => (
            <a href={link.href} className="cursor-pointer md:w-auto w-[48%] text-center shadow md:shadow-none py-4 md:py-0 border rounded-lg md:bg-transparent md:border-none font-medium hover:scale-105 hover:text-yellow-500 duration-150 animate-[aparecer_1s]   border-cyan-300/80 bg-white">
              <li >{link.name}</li>
            </a>
          ))
        }
      </ul>
  </nav>
}
  </>
  )
}

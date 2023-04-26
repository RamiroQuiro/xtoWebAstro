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
    <div className="flex-grow items-center justify-center hidden md:flex mx-auto">

    <svg height="40px" width="50px" version="1.1" id="_x32_" className="" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path class="st0" d="M390.305,235.134H237.759v-12.689l-93.676-107.348V72.594h35.682V33.46h-35.682V0h-39.142v33.46H69.26v39.134 h35.681v42.518L11.265,222.444V512h93.782v-88.388c0.03-10.748,8.732-19.45,19.473-19.465c10.741,0.015,19.442,8.717,19.457,19.465 V512h71.575h16.028h6.178h149.737h113.239V361.667L390.305,235.134z M225.387,287.939v211.682h-9.835h-59.203v-76.009 c0-17.584-14.246-31.837-31.829-31.837c-17.584,0-31.845,14.253-31.845,31.837v76.009H23.637V227.09l93.676-107.34V60.214H81.632 V45.833l35.681,0.008V12.372h14.397V45.84h35.682v14.374h-35.682v59.528l93.676,107.348v20.417h159.299L480.93,357.8H237.759 v-69.86H225.387z M488.362,499.621H387.495H237.759V370.18h250.604V499.621z"></path> <path class="st0" d="M349.351,460.676v-52.601h-51.045v58.787h51.045V460.676z M336.979,454.482h-26.3v-34.035h26.3V454.482z"></path> <path class="st0" d="M430.564,460.676v-52.601h-51.045v58.787h51.045V460.676z M418.192,454.482h-26.301v-34.035h26.301V454.482z"></path> <path class="st0" d="M97.493,305.274h54.913v-6.186v-48.726H97.493V305.274z M109.867,262.734h30.167v30.168h-30.167V262.734z"></path> </g> </g></svg>

    </div>
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

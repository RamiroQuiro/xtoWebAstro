
export default function ButtonNav({handleClick,toogle}) {


  return (
    <>
      <button
        onClick={handleClick}
        className={` fixed md:hidden bottom-4  mx-auto z-[60] inset-x-0`}
      >
        <p class="bg-neutral-100/80  w-14  mx-auto backdrop-blur-sm p-3 border-2 border-blue-400/50 shadow-sm rounded-lg">
          <svg
            className={`${toogle&& 'scale-110'} duration-150 h-6 w-6 mx-auto`}
            fill="#404040"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
                fill-rule="evenodd"
              ></path>
            </g>
          </svg>
        </p>
      </button>

  
    </>
  );
}

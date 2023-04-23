import { useState } from "react";


export default function ButtonNav() {
    const [toogle, setToogle] = useState(false)

const handleClick=(e)=>{
    e.preventDefault()
    alert('ol')
    setToogle(!toogle)
}

  return (
    <>
    <button 
  onClick={handleClick}
    class="fixed bottom-1  mx-auto z-50 inset-x-0">
      <p
        class="bg-neutral-100/80  w-16  mx-auto backdrop-blur-sm p-3 border-2 border-blue-400/50 shadow-sm rounded-lg"
      >
        <svg class="h-6 w-6 mx-auto" fill="#000000" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
          ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
            <path
              d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
              fill-rule="evenodd"></path>
          </g></svg>
      </p>
    </button>

    {

        toogle?
        <nav
        class="hidden w-full py-5 fixed top-0 text-gray-700 z-50 md:flex items-center justify-between px-5 bg-white/60 border-b border-cyan-300/80"
        >
    <div class="w-3/12 mx-auto flex bg-red-<500>">logo</div>
    <div class="w-6/12">
      <ul class="flex items-center justify-evenly">
        {
          Links?.map((link) => (
              <li class="cursor-pointer">
              <a href={link.href}>{link.name}</a>
            </li>
          ))
        }
      </ul>
    </div>
    <div class="w-3/12 mx-auto flex bg-red-<500>">otra cosa</div>
  </nav>:
}
    </>
  )

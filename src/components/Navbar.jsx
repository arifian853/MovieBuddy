import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export const Navbar = () => {

  const Links = [
    { name: "Home", link: "#" },
    { name: "GitHub", link: "https://github.com/arifian853" }
  ];

  const [toggle, setToggle] = useState(false)
  return (
    <nav className='nav-main shadow-md w-full top-0 left-0' id='light'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='flex items-center text-xl gap-2'>
          <p>MovieBuddy </p> 
          <br />
        </div>
        <div onClick={() => setToggle(!toggle)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden transition-all duration-500 ease-in'>
          {
            toggle === false ? (
              <IoIosArrowDown />
            ) : (
              <IoIosArrowUp />
            )

          }
        </div>
        <ul className={`nav-item md:flex items-center md:pb-0 pb-1 md:pt-0 pt-1 md:mt-0 -mt-5 absolute md:static md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${toggle ? 'top-20 opacity-100' : 'top-[-450px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='p-2'>
                <a className='nav-link p-2 text-base' href={link.link}>{link.name}</a>
              </li>
            ))
          }

        </ul>
      </div>
    </nav>
  )
}

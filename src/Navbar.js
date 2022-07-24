import React from 'react'
import {faHome,faUser,faCode,faFileDownload, faBlog,faCodeBranch,faBars,faClose} from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    const ref= React.useRef("")
    const[open,setOpen]=React.useState(false)
  return (
    <nav className='w-screen h-14 bg-sea-200 fixed flex items-center justify-evenly' >
        <div>
           <h1 className='text-pink-500 text-2xl font-heading mx-20 '>Amschel</h1> 
        </div>


        <div ref={ref} className="sm:hidden md:hidden lg:block xlg:block hidden">
            <ul className='flex '>
                <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faHome} className="mx-1 text-lg"/>
                    <h1 className='mx-1'>Home</h1>
                </li>
                <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faUser} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>About</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faCode} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Projects</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faFileDownload} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Resume</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faBlog} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Blog</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faCodeBranch} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Github</h1>
                </li>
            </ul>

        </div>




        <div className='lg:hidden xlg:hidden md:block sm:block block text-crimson-500'>

            <FontAwesomeIcon icon={faBars}
           onClick={
            ()=>setOpen(true)
           }
            />
        </div>



        {/*SIDE BAR */}

        <div ref={ref} className={` smblock md:block lg:hidden xlg:hidden w-screen block bg-sea-200 absolute top-12  `}>
            <ul className={` flex flex-col justify-evenly h-[300px] items-center`}>
                <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faHome} className="mx-1 text-lg"/>
                    <h1 className='mx-1'>Home</h1>
                </li>
                <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faUser} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>About</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faCode} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Projects</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faFileDownload} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Resume</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faBlog} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Blog</h1>
                </li>
                 <li className='flex text-crimson-500  font-lato mx-4'>
                    <FontAwesomeIcon icon={faCodeBranch} className=" text-lg mx-1 "/>
                    <h1 className='mx-1'>Github</h1>
                </li>
            </ul>

        </div>



    </nav>
  )
}

export default Navbar
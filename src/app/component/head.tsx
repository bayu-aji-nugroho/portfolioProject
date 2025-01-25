import { FC, useEffect, useState } from "react";

interface state{
    nav:boolean;
    click: () => void;
    isDark:(status:boolean) => void;
}

interface isDarkType{
    isDark:(status:boolean) => void;
}


const Nav: FC <isDarkType> = ({isDark}) => {
    const [nav,setNav] = useState(false);
    const click = () => {
        setNav(!nav);
    }
    return (
        <>
            <Navbar  click={click} nav={nav} isDark={isDark}/>
            <nav className=" z-30 h-16 flex items-center bg-sky-600 dark:bg-darkMode border-b border-b-white  md:h-28 sticky top-0">
                <img src="hamburgerMenuWhite.svg" className="h-10 w-10 mx-1 md:m-4 md:ml-11" onClick={click} />
                <h1 className="ml-auto p-3 text-white md:text-3xl font-extrabold md:m-4 md:ml-auto md:mr-10 ">BAYU A<span className="dark:text-sky-800">JI NU</span>GROHO</h1>
            </nav>
        </>
    )
}

export default Nav;

const Navbar: FC <state> =  ({nav,click,isDark})  => {
    const [darkMode,setdarkMode] = useState(true)
    useEffect( () =>{
        isDark(darkMode);
        if (darkMode) {document.documentElement.classList.add('dark');} 
        else {document.documentElement.classList.remove('dark');}
    }
        ,[darkMode]
    )

    return (
        <div className={`z-40 flex flex-col bg-sky-600 dark:bg-darkMode border-r border-white dark:text-white h-full w-1/2 sm:w-1/4 fixed transform duration-500
         ${nav? "translate-x-0": "-translate-x-full"} 
         `}>
            <div className="flex mt-4" >
                <div className={`relative flex items-center text-center m-1 my-2 w-auto ring ring-white rounded-full flex-1 cursor-pointer`} 
                onClick={() => {setdarkMode(!darkMode)}} >
                    <div className="px-2 flex-1">Light</div>
                    <div className="px-2 flex-1">Dark</div>
                    <div className={`absolute transform duration-500 w-1/2 rounded-full p-1 text-center ${darkMode? "translate-x-0 bg-slate-800 text-white" : "translate-x-full bg-slate-200 text-black"} `}>Mode</div>
                </div>
                <img src="hamburgerMenuWhite.svg" className="h-10 w-10 m-1 mx-3" onClick={click}/>
            </div>
            <a className="p-3 hover:bg-sky-700 hover:text-white" href="#top">top</a>
            <a className="p-3 hover:bg-sky-700 hover:text-white" href="#experience">about me</a>
            <a className="p-3 hover:bg-sky-700 hover:text-white" href="#pro">project</a>
            <a className="p-3 hover:bg-sky-700 hover:text-white" href="#follow">follow me</a>
        </div>
    )
}
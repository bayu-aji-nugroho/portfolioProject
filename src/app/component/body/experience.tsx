import { useState, useEffect} from "react";



const Experience = () => {
    const [y,setY] = useState(false);
    useEffect(
        () =>{
            const handleScroll = () => window.scrollY > 300 && window.scrollY < 550? setY(true):setY(false)
            window.addEventListener("scroll",handleScroll)
            return () => window.removeEventListener("scroll",handleScroll)
            },[])
    return (
        <div className="md:flex" >
            <div id="experience" className={`flex-1 dark:text-white md:mx-10 md:p-10 my-10 shadow-xl shadow-blue-900 p-2 m-2 dark:outline dark:outline-1 dark:outline-blue-900 rounded-xl
            ${y?"opacity-100 translate-x-0" :"opacity-0 -translate-x-full"} transform duration-1000 `}>
                <h1 className="text-xl font-extrabold text-center my-3 " >Experience</h1>
                    <ul className="list-disc pl-6">
                        <li>devisi pemrograman (robotika uns)</li>
                    </ul>
            </div>
            <div className={`flex-1 dark:text-white md:mx-10 md:p-10 my-10 shadow-lg shadow-blue-900 p-2 m-2 dark:outline dark:outline-1 dark:outline-blue-900 rounded-xl
                ${y?"opacity-100" :"opacity-0 "} transform duration-1000`}>
                <h1 className="text-xl font-extrabold text-center my-3 " id="education">Education</h1>
                    <ul className="list-disc pl-6">
                        <li>Universitas Sebelas Maret</li>
                    </ul>
            </div>
        </div>
        
    )
}

export default Experience;
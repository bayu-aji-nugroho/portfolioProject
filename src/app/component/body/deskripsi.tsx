import { useState, useEffect} from "react";





const Deskripsi = () =>{
    const [y,setY] = useState(false);
        useEffect(
            () =>{
                const handleScroll = () => window.scrollY > 100 && window.scrollY < 350? setY(true):setY(false)
                window.addEventListener("scroll",handleScroll)
                return () => window.removeEventListener("scroll",handleScroll)
                },[])
    return (
        <div className={`hover:scale-110 dark:text-white my-14 md:mx-10 m-3 shadow-xl dark:shadow-blue-900 shadow-black animate-fadein
            ${y? "opacity-100 translate-x-0" :"opacity-0 -translate-x-full"} transform duration-1000 ` 
        }>
            <div className="md:p-10 p-3  text-sm md:text-base rounded-xl ">
                I am a student of Elementary School Teacher Education (PGSD) at Universitas Sebelas Maret Surakarta with a strong interest in technology and education. 
            </div>
        </div>
    )
}

export default Deskripsi
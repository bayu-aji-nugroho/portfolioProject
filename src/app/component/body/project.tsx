import { useEffect, useState } from "react";

const Project = () => {

    const [y,setY] = useState(false);
        useEffect(
            () =>{
                const handleScroll = () => window.scrollY > 750? setY(true):setY(false)
                window.addEventListener("scroll",handleScroll)
                return () => window.removeEventListener("scroll",handleScroll)
                },[])


    const data = [
        {
            judul:"ntah kuberi nama apa",
            tampilan: (<iframe width="300" height="160" src="https://www.youtube.com/embed/ow-zpZCQLkA?si=yqX_-5vPePRx_eoo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>),
            deskripsi:" Actually for her😔, tapi yaudahh lahhh ):     (sengaja tak taruh paling atas)",
            bahasa:"python",
            linkGithub:"https://github.com/bayu-aji-nugroho/sebuah-bentuk-geometri-didunialain",

        },{
            judul:"bukti aturan cosinus",
            deskripsi:"Sebuah program manim yang dibuat dengan bahasa python dan menghasilkan video pembuktian aturan cosinus.",
            tampilan:(
                <iframe width="300" height="160" src="https://www.youtube.com/embed/CZm33k0ZxnY?si=PriHGKywP9W3LPzj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
                
            ),
            bahasa:"python/manim",
            linkGithub:"https://github.com/bayu-aji-nugroho/Manim/blob/main/main1.py",
        },{
            judul:"Bermatematika.id",
            tampilan: (<img src="bermatematika.svg" />),
            deskripsi:"project belom jadi",
            bahasa:"typescript javascript next.js tailwind",
            linkGithub:"https://github.com/bayu-aji-nugroho/bermatematika.id",
        },
        {
            judul:"kalkulator",
            deskripsi:"sebuah program kalkulator sederhana dengan UI menggunakan PyQt5",
            tampilan:(<img src="Screenshot 2025-01-25 180322.png"/>),
            bahasa:"python",
            linkGithub:"https://github.com/bayu-aji-nugroho/kalkulator",
        }
    ]

    return (
        <div id="pro" className={`md:my-10 mx-3 ${y?"opacity-100 translate-x-0":"opacity-0 -translate-x-full"} transform duration-1000`}>
            <h1 className="text-center dark:text-white font-bold text-xl">My project</h1>
            <div className="md:grid-cols-2 md:grid">
            { data.map(({bahasa,deskripsi,judul,linkGithub,tampilan},i) =>{
                return (
                    <div key={i} className="dark:text-white md:m-10 shadow-2xl my-10 dark:shadow-blue-900 md:p-10 p-4 rounded-2xl hover:scale-110 md:hover:scale-110 transform duration-700">
                        <h1 className="font-bold text-xl text-center md:text-left py-4">{judul}</h1>
                        <div className=" my-4 ">
                            <div className="h-40 w-40">{tampilan}</div>
                            <div className="flex-1 mt-3">{deskripsi}</div>
                        </div>
                        <div className="flex">
                            <div className="p-1 font-bold">{bahasa}</div>
                            <div className="p-1"> <a href={linkGithub} className="text-sky-700">check on github</a> </div>

                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Project
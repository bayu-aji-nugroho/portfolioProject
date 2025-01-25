import { FC } from "react";

interface typeDarkMode{
    isDark:boolean;
}


const Footer: FC <typeDarkMode> =({isDark}) => {



    const data = [{
        black:"github-mark-white.svg",
        white: "github-mark.svg",
        link: "https://github.com/bayu-aji-nugroho"
    }, {
        black:"https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png",
        white: "https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png",
        link: "https://www.linkedin.com/in/bayu-aji-nugroho-43b63b267/"
    }, {
        black:"https://static.xx.fbcdn.net/rsrc.php/v4/yx/r/tBxa1IFcTQH.png",
        white:"https://static.xx.fbcdn.net/rsrc.php/v4/yx/r/tBxa1IFcTQH.png",
        link: "https://www.instagram.com/ba_ngr_/"
    }, {
        black:"https://cdn-icons-png.flaticon.com/128/733/733547.png",
        white:"https://cdn-icons-png.flaticon.com/128/733/733547.png",
        link:"https://www.facebook.com/share/15LALhsWws/"
    }]
    return (
        <div className="w-full h-1/4 dark:bg-darkMode dark:text-white p-4 pt-5 ">
            <h1 className="text-center font-bold md:text-xl" id="follow">follow me</h1>
            
            <div className="flex justify-center shadow-lg dark:shadow-blue-900 md:p-3">
                {data.map(({black,white,link},i)=> {
                        return (
                            <div className="flex" key={i}> 
                                <a href={link} className="md:h-14 md:w-14 h-10 w-10 m-4">
                                    <img src={black} className={`${isDark?" ":"hidden"}`}/>
                                    <img src={white} className="dark:hidden" />
                                </a>
                            </div>
                        )
                    })}   
            </div>
        </div>
    )
}

export default Footer
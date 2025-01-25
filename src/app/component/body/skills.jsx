

const Programming = () =>{
    const data = [
        "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
        "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
        "https://cdn-icons-png.flaticon.com/128/760/760457.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968282.png",
        "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
        "https://cdn-icons-png.flaticon.com/128/6132/6132221.png",
        "https://cdn-icons-png.flaticon.com/128/143/143655.png",
        "https://cdn-icons-png.flaticon.com/128/732/732190.png",
        "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
        "https://cdn-icons-png.flaticon.com/128/4494/4494740.png",
        "https://cdn-icons-png.flaticon.com/128/270/270798.png",


    ]
    return (
        <div className=" my-10 ">
            <h1 className="text-center font-extrabold text-xl dark:text-white">My skills</h1>
            <div className="grid place-items-center grid-cols-3 md:grid-cols-6">
            { data.map((i) => (
                <div className=" h-20 w-20 m-3 shadow-xl shadow-blue-800 hover:scale-125 duration-500 transform">
                    <img src={i} className="h-20 w-20 p-3" />
                </div>
            ))}
            </div>
        </div>
    )
}

export default Programming;
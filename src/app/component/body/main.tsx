import React, { useState, useEffect } from "react";


interface TypingEffectProps {
    text: string;
    speed?: number; // Milidetik antara setiap karakter
    cursorBlinkSpeed?: number; // Kecepatan kedip kursor
  }
  
  const TypingEffect: React.FC<TypingEffectProps> = ({ 
    text, 
    speed = 100, 
    cursorBlinkSpeed = 500 
  }) => {
    const [displayedText, setDisplayedText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [isCursorVisible, setIsCursorVisible] = useState<boolean>(true);
  
    // Efek mengetik
    useEffect(() => {
      if (index < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);
  
        return () => clearTimeout(timeout);
      }
    }, [index, text, speed]);
  
    // Efek kedip kursor
    useEffect(() => {
      const interval = setInterval(() => {
        setIsCursorVisible((prev) => !prev);
      }, cursorBlinkSpeed);
  
      return () => clearInterval(interval);
    }, [cursorBlinkSpeed]);
  
    return (
      <p>
        {displayedText}
        <span className={`cursor ${isCursorVisible ? "visible" : "invisible"}`}>
          |
        </span>
      </p>
    );
  };

const MainComponent = () =>{
    return (
        <div className="dark:text-white md:flex py-10 md:mx-10 justify-center items-center my-10 transform duration-500 mx-1 md:rounded-full rounded-xl shadow-xl dark:shadow-blue-950 shadow-sky-700 animate-fadein">
            <img src="fotoKedua.jpg"
            className="transform duration-500 h-28 w-28 md:h-44 md:w-44 md:mx-11 hover:shadow-2xl hover:scale-150 shadow-xl  shadow-black dark:shadow-white rounded-full m-2 mx-auto" />
            <div className=" text-xl md:text-2xl my-4 mt-6 mx-4">
                <p><span className="font-bold">Hello everyone👋, </span> my name is</p>
                <h1 className="text-3xl md:text-4xl font-extrabold my-1">
                    <TypingEffect text={`Bayu Aji Nugroho`}/>
                </h1>
                <p className="text-xl">full stack developer | android developer</p>
            </div>
            
        </div>
    )
}

export default MainComponent
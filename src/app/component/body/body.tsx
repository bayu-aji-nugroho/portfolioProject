import React, { useState, useEffect, FC } from "react";
import MainComponent from "./main";
import Deskripsi from "./deskripsi";
import Experience from "./experience";
import Skill from "./skill";





export default function Body(){
    




    return (
        <div className=" transform duration-500 dark:bg-darkMode flex-col justify-center">
            <MainComponent />
            <Deskripsi />
            <Experience />
            <Skill />
        </div>
    )

}
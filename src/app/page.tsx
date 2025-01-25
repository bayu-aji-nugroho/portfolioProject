 
'use client';
import { useState } from "react"
import Nav from "./component/head";
import Body from "./component/body/body";
import Footer from "./component/footer";



export default function Home() {
  const [status,setstatus] = useState(true)
  const dark = (status:boolean) =>setstatus(status);
  return (
    <>
      <Nav isDark={dark}/>
      <Body />
      <Footer isDark={status} />
    </>
  )
    
  
}

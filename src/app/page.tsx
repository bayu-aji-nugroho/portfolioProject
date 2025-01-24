 
'use client';
import { useState } from "react"
import Nav from "./component/head";
import Body from "./component/body/body";
import Footer from "./component/footer";



export default function Home() {
  const [bahasa, setBahasa] = useState(true);
  return (
    <>
      <Nav />
      <Body />
      <Footer />
    </>
  )
    
  
}

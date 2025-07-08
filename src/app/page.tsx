import React from "react";
import Image from "next/image";
import { Button } from "../components/button";
import { InstitutionalSection } from "../components/institutionalsection";
import { SwiperCarousel } from "@/components/swipercarousel";


//import styles from "./ui/page.module.css";

export default function Home() {

  /*function clique(){
    const mensagem = "U clicked";
    window.alert(mensagem);
    console.log(mensagem);
  }*/

  return (
    <div>
      {/*<SwiperCarousel />*/}  

      <p>This is a simple Next.js application.</p>
      <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
      />

      <SwiperCarousel />
      
      <Button label="Saiba Mais >" />
        <InstitutionalSection />
    </div>
  );
}

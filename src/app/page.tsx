import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React from "react";
import { Button } from "./components/Button";
import { Section } from "./components/Section";
import { Card } from "./components/Card";

//import styles from "./ui/page.module.css";

export default function Home() {

  /*function clique(){
    const mensagem = "U clicked";
    window.alert(mensagem);
    console.log(mensagem);
  }*/

  return (
    <div>
      <Header />
      <main>
        <p>This is a simple Next.js application.</p>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
        <p>Explore the features of Next.js and build amazing applications!</p>

        <Section title="Institucional">
          <Card 
            title="Nossa Missão"
            content={`Somos comprometidos com o ensino, pesquisa e extensão em **Ciência da Computação** e **Sistemas de Informação** na UFSM.`}
            />
        </Section>

        <Button label="Saiba Mais >" />
      </main>
    <Footer />
    </div>
  );
}

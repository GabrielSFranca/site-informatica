import React from "react";
import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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
            title="Sobre"
            content={`### Boas-vindas ao Portal da Informática UFSM
              Bem-vindo ao Portal do Departamento de Informática da UFSM! Somos um centro de excelência em ensino, pesquisa e extensão, dedicados a aprimorar a experiência do usuário por meio de uma interface moderna, intuitiva e acessível. Nossa missão é promover o desenvolvimento científico e tecnológico na área de Computação, formando profissionais éticos, criativos e comprometidos com a solução de problemas da sociedade através da tecnologia.
              Inspirados nas melhores práticas de sites universitários, como o da Informática da UFRGS, buscamos mesclar a seriedade institucional com a paixão pelo universo da tecnologia, garantindo que as informações principais estejam acessíveis de forma rápida e clara para estudantes, docentes e visitantes.`}
            />
        </Section>

        

        <Button label="Saiba Mais >" />
      </main>
    <Footer />
    </div>
  );
}

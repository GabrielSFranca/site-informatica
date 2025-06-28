import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React from "react";
import { Button } from "./components/Button";
//import styles from "./ui/page.module.css";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <p>This is a simple Next.js application.</p>
        <Image
          src="/nextjs-logo.png"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
        <p>Explore the features of Next.js and build amazing applications!</p>
        <Button texto="botao vey" />
      </main>
    <Footer />
    </div>
  );
}

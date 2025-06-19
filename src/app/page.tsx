import Image from "next/image";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import React from "react";
//import styles from "./ui/page.module.css";
import { Carousel } from "./components/Carousel";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Carousel />
        <p>This is a simple Next.js application.</p>
        <Image
          src="/nextjs-logo.png"
          alt="Next.js Logo"
          width={200}
          height={200}
        />
        <p>Explore the features of Next.js and build amazing applications!</p>
      </main>
    <Footer />
    </div>
  );
}

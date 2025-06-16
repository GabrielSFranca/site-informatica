import Image from "next/image";
import Link from "next/link";
import React from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'; // Certifique-se de instalar


//import { FaUniversalAccess } from 'react-icons/fa'; // Importando ícones do react-icons, se necessário

export function Header(){
  return (
    <>
    <div className="header-top">
        <div className="header-top-container">
            <div className="language-flags">
              <Link href="#" title="Acessibilidade">
                Acessibilidade
              </Link>
              <Link href="#" title="Português">
                <Image
                  src="/brasilflag.png"
                  alt="Bandeira Brasil"
                  width={15}
                  height={15}
                /> 
              </Link>
              <Link href="#" title="English">
                <Image
                  src= "/ukflag.png"
                  alt="Bandeira Reino Unido"
                  width={15}
                  height={15}
                /> 
              </Link>
            </div>
        </div>
    </div>

    <header className="header-main">
      <div className="header-container">
        <div className="logo-container">
          <Image
            src="/infufsm.png"
            alt="Logo Informática UFSM"
            className="logo-inf"
            width={50}
            height={50}
          />
          <h1 className="site-title">
            informática<strong>ufsm</strong>
          </h1>
        </div>

        <nav className="nav-main">
          <Link href="#home" className="nav-link">
            Home
          </Link>
          <Link href="#institucional" className="nav-link">
            Institucional
          </Link>
          <Link href="#cursos" className="nav-link">
            Graduação
          </Link>
          <Link href="#posgraduacao" className="nav-link">
            Pós-Graduação
          </Link>
          <Link href="#projetos" className="nav-link">
            Projetos
          </Link>
        </nav>
      </div>
    </header>
    
    </>);
}

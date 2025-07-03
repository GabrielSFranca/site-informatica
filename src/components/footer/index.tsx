import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer-site">
      <div className="footer-columns-wrapper">
        {/* 1. Brand */}
        <div className="brand">
          <div className="footer-img">
            <Image
              src="/brasao2ufsm.png"
              alt="brasão UFSM"
              width={80}
              height={80}
              className="brand-img"
            />
            <Image
              src="/monograma2.png"
              alt="monograma UFSM"
              width={80}
              height={80}
              className="brand-img"
            />
          </div>
          <p className="footer-label">
            Universidade Federal de Santa Maria
          </p>
        </div>

        {/* 2. Footer Links (coluna 1) */}
        <div className="footer-links">
          <p className="footer-title">Links de acesso rápido</p>
          <Link href="#" className="ft-link-title">
            Institucional
          </Link>
          <Link href="#" className="footer-link">
            Sobre
          </Link>
          <Link href="#" className="footer-link">
            História
          </Link>
          <Link href="#" className="footer-link">
            Estrutura
          </Link>
          <Link href="#" className="footer-link">
            Missão
          </Link>
          <Link href="#" className="footer-link">
            Visão
          </Link>
        </div>

        {/* 3. Footer Links (coluna 2) */}
        <div className="footer-links">
          <p className="footer-title">Notícias e eventos</p>
          <Link href="#" className="footer-link">
            Comunicados
          </Link>
          <Link href="#" className="footer-link">
            Divulgação de eventos
          </Link>

          <p className="footer-title" style={{ marginTop: '1rem' }}>
            Graduação
          </p>
          <Link href="#" className="footer-link">
            Ingresso
          </Link>
          <Link href="#" className="footer-link">
            Orientações a novos alunos
          </Link>
          <Link href="#" className="footer-link">
            Ciência da Computação
          </Link>
          <Link href="#" className="footer-link">
            Sistemas de Informação
          </Link>
        </div>

        {/* 4. Footer Links (coluna 3) */}
        <div className="footer-links">
          <p className="footer-title">Projetos</p>
          <Link href="#" className="footer-link">
            Grupos de pesquisa
          </Link>
          <Link href="#" className="footer-link">
            Projetos de extensão
          </Link>

          <p className="footer-title" style={{ marginTop: '1rem' }}>
            PPGs
          </p>
          <Link href="#" className="footer-link">
            Intercâmbio
          </Link>
        </div>

        {/* 5. Endereço e Copyright */}
        <div className="footer-address-copy">
          <p className="footer-title">
            Avenida Roraima, 1000, Cidade Universitária - Camobi - Santa Maria - Rio Grande do Sul - Brasil
          </p>
          <p className="footer-title">
            &copy; 2025 Informática UFSM. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
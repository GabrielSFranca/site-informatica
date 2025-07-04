import React from "react";
//import { Card } from "../card";
import { Button } from "../button";


import { MdLocationOn } from 'react-icons/md';

export function InstitutionalSection(){
    return (
        <section id="institutional" className="section">
            <h2 className="sec-title">Institucional</h2>
            
            <div className="institutional-sec-content">
                
           {/*     <Card 
                title="Sobre"
                content="Boas-vindas ao Portal da Informática UFSM
              Bem-vindo ao Portal do Departamento de Informática da UFSM! Somos um centro de excelência em ensino, pesquisa e extensão, dedicados a aprimorar a experiência do usuário por meio de uma interface moderna, intuitiva e acessível. Nossa missão é promover o desenvolvimento científico e tecnológico na área de Computação, formando profissionais éticos, criativos e comprometidos com a solução de problemas da sociedade através da tecnologia.
              Inspirados nas melhores práticas de sites universitários, como o da Informática da UFRGS, buscamos mesclar a seriedade institucional com a paixão pelo universo da tecnologia, garantindo que as informações principais estejam acessíveis de forma rápida e clara para estudantes, docentes e visitantes."
             />*/}


             <div className="texto-apres">
                <h3 className="card-title">Sobre</h3>
                <p>
                    Bem-vindo ao Portal do Departamento de Informática da UFSM! Somos um centro de excelência em ensino, pesquisa e extensão, dedicados a aprimorar a experiência do usuário por meio de uma interface moderna, intuitiva e acessível. Nossa missão é promover o desenvolvimento científico e tecnológico na área de Computação, formando profissionais éticos, criativos e comprometidos com a solução de problemas da sociedade através da tecnologia.
                </p>
             </div>

                <div className="map-container">
                    <div className="map-title">
                        <h3 className="card-title">Como chegar?</h3>
                    </div>
                    <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.218913992932!2d-53.71927132514328!3d-29.713417416003725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503b500436eec3f%3A0xbbe41fc195fa5331!2sCentro%20de%20Tecnologia%20(CT)!5e0!3m2!1spt-BR!2sbr!4v1751470358992!5m2!1spt-BR!2sbr"
                       className="map-frame"
                       loading="lazy"
                    ></iframe>
                    <div className="map-address">
                        <MdLocationOn className="location-icon"/>
                        <p>
                            Avenida Roraima, 1000, Cidade Universitária - Camobi - Santa Maria - Rio Grande do Sul - Brasil
                        </p>
                    </div>
                 </div>
        </div>
            <Button label="Saiba Mais >" />
        </section>
    );
}




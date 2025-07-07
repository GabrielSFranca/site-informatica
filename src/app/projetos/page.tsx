"use client";

import {useState, ChangeEvent } from "react";

import styles from "./page.module.css";

// 1. simul de dados d projs; adapte para buscar de API ou JSON real
const projsMock = [
    {
        id: 1,
        nome: "Sistema de Gerenciamento Academico",
        desc: "Aplicacao Web p/ controlar matriculas notas e frequencias."
    },
    {
        id: 2,
        nome: "Portal de Noticias do Departamento",
        desc: "Site p/ publicacao de comunicados, artigos e eventos do departamento"
    }
];

export default function PgProject(){
    // 2. state p o texto digitado no campo de busca
    const [busca, setBusca] = useState('');

    // 3. funcao q atualiza o estado ao digitar
    function aoDigitar(event: ChangeEvent<HTMLInputElement>) {
        setBusca(event.target.value);
    }

    //4. filtrar projs cujo nome/desc contenha o texto (case-insensitive)
    const projsfilter = projsMock.filter((projeto) => {
        const termo=busca.toLowerCase();
        return (
            projeto.nome.toLowerCase().includes(termo) || 
            projeto.desc.toLowerCase().includes(termo)
        );
    });

    return (
        <main className={styles.container}>
            <h1>Projetos</h1>
            {/* 5. campo de busca */}
            <input 
                type="text" 
                placeholder="Buscar projetos..."
                value={busca}
                onChange={aoDigitar}
                className={styles.searchInput}
            />

            {/* 6. lista filtrada */}
            
            <ul className={styles.projlist}>
                {projsfilter.map((projeto) => (
                    <li key={projeto.id} className={styles.projitem}>
                        <p className={styles.nomeproj}>{projeto.nome}</p>
                        <p className={styles.descproj}>
                            {projeto.desc}
                        </p>
                    </li>
                ))}


            {/*7. se nenhum proj for encontrado */}
            {projsfilter.length === 0 && (
                <li className={styles.projitem}>
                    Nenhum projeto encontrado para {busca}
                </li>
            )}
            </ul>
        </main>
    )
}
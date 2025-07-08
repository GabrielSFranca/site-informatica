// src/app/lib/placeholder-data.ts
import { Event } from './definitions';

export const eventos: Event[] = [
  {
    titulo: "SEMANA ACADÊMICA DA COMPUTAÇÃO 2025",
    desc: "Evento anual com palestras, workshops e competições de programação.",
    date: "2025-10-20T09:00:00",
    tipo: "event",
    loc: "Auditório do Departamento de Informática"
  },
  {
    titulo: "DEFESA DE TCC - TURMA 2025/1",
    desc: "Apresentação pública dos trabalhos de conclusão de curso.",
    date: "2025-07-15T14:00:00",
    tipo: "event",
    loc: "Sala 101 - Prédio 74",
  },
  {
    titulo: "Departamento conquista prêmio de inovação",
    desc: "Projeto de pesquisa foi premiado em conferência internacional.",
    date: "2025-05-10",
    tipo: "news",
    //imageUrl: "/images/news/premio-inovacao.jpg"
  },
  {
    titulo: "Processo seletivo para bolsas PIBIC",
    desc: "Inscrições abertas para o programa de iniciação científica.",
    date: "2025-03-01",
    tipo: "news"
  }
];

// Dados otimizados para o carrossel
export const carouselEvents = eventos.map(event => ({
  id: event.id,
  titulo: event.titulo,
  //imageUrl: event.imageUrl || '/images/default-event.jpg',
  tipo: event.tipo
}));
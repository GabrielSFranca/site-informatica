import { Inter, Oxanium } from "next/font/google"; // Importando o pacote de fontes do Next.js
// Configura as fontes

export const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-body'
});

export const oxanium = Oxanium({ 
  subsets: ['latin'], 
  variable: '--font-heading'
});

/*import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin']
});*/
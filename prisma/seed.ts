/*import { PrismaClient } from "@prisma/client";
import { eventos } from '../src/app/lib/placeholder-data';
// script de semeadura de dados
const prisma = new PrismaClient();

async function main() {    
    console.log('🌱 Iniciando seed manual de eventos e notícias...');

    await prisma.event.deleteMany();
    console.log('🧹 Dados antigos removidos');

    // converter strings de data para objetos date

    const eventosComData = eventos.map(evento => ({
        ...evento,
        date: new Date(evento.date)
    }));

    await prisma.event.createMany({
        data: eventosComData,
    });
    
    console.log(`✅ ${eventos.length} eventos/notícias criados`);
}

main()
    .catch((e) => {
        console.error('❌ Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });



    // npm run seed:dev


*/
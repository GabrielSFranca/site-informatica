
export type Event = {
    id?: number;
    titulo: string;
    desc: string;
    date: Date | string;
    tipo: "event" | "news";
    loc?: string;
    criadoEm?: Date | string;
}
import { Url } from "next/dist/shared/lib/router/router";

export type Event = {
    id: number;
    title: string;
    description: string;
    date: Date;
    location: string;
    image: Url | string;
    type: string;
}

export type Course = {
    id: number;
}

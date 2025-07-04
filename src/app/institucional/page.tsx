"use client";

import React from "react";
import { Card } from "@/components/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// Schema de validação
const schema = z.object({
  nome: z.string().min(1, 'Nome obrigatório'),
  email: z.string().email('E-mail inválido'),
  mensagem: z.string().min(1, 'Mensagem obrigatória'),
});

type FormData = z.infer<typeof schema>;

export default function InstitutionalPage() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Dados enviados", data);
        alert("Form enviado c sucess");
    };

    return (
        <div className="institutional-page">
            <form onSubmit={handleSubmit(onSubmit)} className="formulario">
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" type="text" {...register('nome')} /> {errors.nome && <p className="erro">{errors.nome.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input id="email" type="email" {...register('email')} />
                    {errors.email && <p className="erro">{errors.email.message}</p>}
                </div>
            
                <div>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" rows={4} {...register('mensagem')} />
                    {errors.mensagem && <p className="erro">{errors.mensagem.message}</p>}
                    </div>

                    <button type="submit">Enviar</button>
            </form>

            <Card
                title="Nossa História"
                content="O Departamento de Informática da UFSM foi criado em 1985, consolidando-se como um dos pioneiros no ensino de Computação no Rio Grande do Sul. Ao longo de mais de três décadas, formamos gerações de profissionais que hoje atuam nas principais empresas de tecnologia do país e do exterior."
            />
            <Card
                title="Missão"
                content="Promover o desenvolvimento científico e tecnológico na área de Computação, formando profissionais éticos, criativos e comprometidos com a solução de problemas da sociedade através da tecnologia."
            />
            <Card
                title="Visão"
                content="Ser referência nacional e internacional em ensino, pesquisa e extensão em Computação, impulsionando a inovação e o impacto social."
            />
            <Card
                title="Valores"
                content="Excelência, Inovação, Ética, Colaboração, Compromisso Social."
            />

        </div>
    );
}


/*

            <Card
                title="Nossa História"
                content="O Departamento de Informática da UFSM foi criado em 1985, consolidando-se como um dos pioneiros no ensino de Computação no Rio Grande do Sul. Ao longo de mais de três décadas, formamos gerações de profissionais que hoje atuam nas principais empresas de tecnologia do país e do exterior."
            />
            <Card
                title="Missão"
                content="Promover o desenvolvimento científico e tecnológico na área de Computação, formando profissionais éticos, criativos e comprometidos com a solução de problemas da sociedade através da tecnologia."
            />
            <Card
                title="Visão"
                content="Ser referência nacional e internacional em ensino, pesquisa e extensão em Computação, impulsionando a inovação e o impacto social."
            />
            <Card
                title="Valores"
                content="Excelência, Inovação, Ética, Colaboração, Compromisso Social."
            />

*/
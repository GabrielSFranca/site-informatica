import React from "react";
import ReactMarkdown from "react-markdown";


type CardProps = {
    title: string;
    content: string;
}

export function Card({ title, content }: CardProps ){
    return (
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <div className="card-text">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>

        </div>
    );
}
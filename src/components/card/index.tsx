import React from "react";

type CardProps = {
    title: string;
    content: string;
}

export function Card({ title, content }: CardProps ){
    return (
        
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <div className="card-text">
                {content}
            </div>
        </div>
    );
}
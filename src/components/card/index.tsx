import React from "react";
import Image from "next/image";

type CardProps = {
    title: string;
    content: string;
    imageUrl?: string;
    imageAlt?: string;
    btnLbl?: string;
}

export function Card({ 
        title, 
        content,
        imageUrl,
    }: CardProps ){
    return (
        
        <div className="card">
            {imageUrl && (
                <div>
                <Image 
                    src="{imageUrl}"
                    alt="{imageAlt || title }"
                    className="imagemm"
                    width={20}
                    height={30}
                />
                </div>
            )}
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{content}</p>
        </div>
    );
}
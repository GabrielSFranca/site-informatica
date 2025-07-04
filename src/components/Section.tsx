import React from "react";

type SectProps = {
    title: string;
    children: React.ReactNode;
};

export function Section({title, children} : SectProps) {
    return (
        <section className="section">
            <div className="secao-container">
                <h2 className="secao-title">{title}</h2>
                <div className="secao-children">{children}</div>
            </div>
        </section>
    );
}


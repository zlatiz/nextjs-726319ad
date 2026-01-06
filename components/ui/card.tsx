import React from "react";

type CardProps = { children: React.ReactNode };

export default function Card({ children }: CardProps): JSX.Element {
  return (
    <article className="p-4 bg-white border rounded-lg card-shadow h-full flex flex-col">
      <div className="card-content flex-1">{children}</div>
    </article>
  );
}

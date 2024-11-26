import { ReactNode } from "react";

interface ContenedorParaItemsProps {
  children: ReactNode; // Permite cualquier tipo de contenido como hijos, incluyendo funciones o componentes
}

export default function ContenedorParaItems({
  children,
}: ContenedorParaItemsProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {children} {/* Aquí se renderiza lo que sea pasado como hijos */}
    </div>
  );
}

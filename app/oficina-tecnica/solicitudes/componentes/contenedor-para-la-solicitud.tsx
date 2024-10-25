import { ReactNode } from "react";

export default function ContenedorParaLaSolicitud({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {children}
    </div>
  );
}

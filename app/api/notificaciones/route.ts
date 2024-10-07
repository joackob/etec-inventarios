import db from "@/db";

export async function GET() {
  try {
    const solicitudes = await db.solicitudes.findMany({
      select: {
        id: true,
        solicitante: { select: { nombre: true, apellido: true } },
      },
    });
    return Response.json(
      { notificaciones: solicitudes },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching solicitudes:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch solicitudes" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

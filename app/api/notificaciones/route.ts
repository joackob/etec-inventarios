import db from "@/db";

export async function GET() {
    try {
        const solicitudes = await db.solicitudes.findMany({
            select: {
                id: true,
                solicitante: { select: { name: true, lastname: true } },
            }
        });
        return new Response(JSON.stringify(solicitudes), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        console.error("Error fetching solicitudes:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch solicitudes" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}


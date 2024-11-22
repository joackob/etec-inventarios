import { PrismaClient } from "@prisma/client";
import path from "path";
import xlsx from "node-xlsx";
import fs from "fs";

async function main() {
  const db = new PrismaClient();

  try {
    await db.$connect();

    try {
      const archivoConItemsParaElInventario = fs.readFileSync(
        path.join(process.cwd(), "/data-raw/inventario.xlsx")
      );

      const archivoConItemsParaElInventarioParseado = xlsx.parse(
        archivoConItemsParaElInventario
      );

      const hojas = archivoConItemsParaElInventarioParseado.map((hoja) => {
        const hojaLimpia = hoja.data.filter(
          (fila, indiceDeLaFila) => fila.length !== 0 || indiceDeLaFila > 3
        );
        const hojaConLosDatosRelevantes = hojaLimpia.map((fila) => {
          const filaConDatosRelevantes = fila.filter(
            (celda) => celda !== undefined || celda !== ""
          );
          return filaConDatosRelevantes;
        });
        return hojaConLosDatosRelevantes.filter((fila) => fila.length > 3);
      });

      hojas.forEach((hoja, indiceDeLaHoja) => {
        console.log("esta es la hoja " + indiceDeLaHoja);

        hoja.forEach(async (fila, indiceDeLaFila) => {
          console.log("esta es la fila " + indiceDeLaFila);

          const nuevoItem = {
            descripcion: fila[1],

            marca: "",
            serie: "",
            ubicacionId: "",
            unidad: "",
            cantidadTotal: 0,
          };

          try {
            await db.items.create({
              data: nuevoItem,
            });
            console.log(
              `Fila ${indiceDeLaFila} insertada con éxito:`,
              nuevoItem
            );
          } catch (error) {
            console.error(`Error al insertar fila ${indiceDeLaFila}:`, error);
          }
        });
      });
    } catch (error) {
      console.log("No pude leer el archivo Excel", error);
    }
  } catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
  } finally {
    await db.$disconnect();
  }
}

main().catch((e) => console.error(e));

import { PrismaClient } from "@prisma/client";
import path from "path";
import xlsx from "node-xlsx";
import fs from "fs";

async function main() {
  const db = new PrismaClient();

  try {
    await db.$connect();

    // 1. Crear o encontrar la ubicación que se asignará a los items
    const ubicacionData = {
      tipo: "aula",      
      piso: "planta baja",   
      peine: "1",            
      nombre: "aula212",  
      estanteria: "estanteria 1", 
      almacen: "almacen 1",
    };

    let ubicacion;


    ubicacion = await db.ubicaciones.findUnique({
      where: { nombre: ubicacionData.nombre },
    });

    if (!ubicacion) {
      ubicacion = await db.ubicaciones.create({
        data: ubicacionData,
      });
      console.log("Ubicación creada:", ubicacion);
    } else {
      console.log("Ubicación ya existe:", ubicacion);
    }


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
      console.log("Procesando hoja " + indiceDeLaHoja);

      hoja.forEach(async (fila, indiceDeLaFila) => {
        console.log("Procesando fila " + indiceDeLaFila);

    
        const nuevoItem = {
          descripcion: fila[1],
          marca: "",
          serie: "",
          ubicacionId: ubicacion.id, 
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
    console.error("Error al procesar los datos:", error);
  } finally {
    await db.$disconnect();
  }
}

main().catch((e) => console.error(e));

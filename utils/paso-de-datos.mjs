import { PrismaClient } from "@prisma/client";
import path from "path";
import xlsx from "node-xlsx";
import fs from "fs";
async function main() {
  try {
    const db = new PrismaClient();
    await db.$connect();
    try {
      const file = fs.readFileSync(
        path.join(process.cwd(), "/data-raw/inventario.xlsx")
      );
      // const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(file));
      // Parse a file
      const workSheetsFromFile = xlsx.parse(file);

      console.log(workSheetsFromFile);
    } catch (error) {
      console.log("no pude leer el excel", error);
    }
  } catch (error) {
    console.log("no se pudo conectar a la base de datos");
  }

  // const workbook = xlsx.readFile("Inventario-EF-CPyA.xlsx");
  // const sheetName = workbook.SheetNames[0];
  // const sheet = workbook.Sheets[sheetName];

  // const data = xlsx.utils.sheet_to_json(sheet);

  // for (const row of data) {
  //   try {
  //     await prisma.items.create({
  //       data: row,
  //     });
  //     console.log("Fila insertada con éxito:", row);
  //   } catch (error) {
  //     console.error("Error al insertar datos:", error);
  //   }
  // }
}

main().catch((e) => console.error(e));

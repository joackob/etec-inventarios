/*
  Warnings:

  - You are about to drop the `ItemsEnSolcitud` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ItemsEnSolcitud";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ItemsEnSolicitud" (
    "solicitudId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    PRIMARY KEY ("solicitudId", "itemId"),
    CONSTRAINT "ItemsEnSolicitud_solicitudId_fkey" FOREIGN KEY ("solicitudId") REFERENCES "Solicitudes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemsEnSolicitud_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ubicaciones" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tipo" TEXT NOT NULL,
    "piso" TEXT NOT NULL,
    "peine" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "estanteria" TEXT,
    "almacen" TEXT
);
INSERT INTO "new_Ubicaciones" ("almacen", "createdAt", "estanteria", "id", "nombre", "peine", "piso", "tipo", "updatedAt") SELECT "almacen", "createdAt", "estanteria", "id", "nombre", "peine", "piso", "tipo", "updatedAt" FROM "Ubicaciones";
DROP TABLE "Ubicaciones";
ALTER TABLE "new_Ubicaciones" RENAME TO "Ubicaciones";
CREATE UNIQUE INDEX "Ubicaciones_nombre_key" ON "Ubicaciones"("nombre");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

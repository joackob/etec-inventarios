/*
  Warnings:

  - You are about to drop the `UnidadesDeMedida` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `estado` to the `Solicitudes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `almacen` to the `Ubicaciones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estanteria` to the `Ubicaciones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Ubicaciones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `peine` to the `Ubicaciones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `piso` to the `Ubicaciones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Ubicaciones` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UnidadesDeMedida_unidad_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UnidadesDeMedida";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Items" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "descripcion" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "ubicacionId" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,
    CONSTRAINT "Items_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "Ubicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Items" ("createdAt", "descripcion", "id", "marca", "serie", "ubicacionId", "unidad", "updatedAt") SELECT "createdAt", "descripcion", "id", "marca", "serie", "ubicacionId", "unidad", "updatedAt" FROM "Items";
DROP TABLE "Items";
ALTER TABLE "new_Items" RENAME TO "Items";
CREATE UNIQUE INDEX "Items_serie_key" ON "Items"("serie");
CREATE TABLE "new_Solicitudes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "solicitanteId" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    CONSTRAINT "Solicitudes_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Solicitudes" ("createdAt", "id", "solicitanteId", "updatedAt") SELECT "createdAt", "id", "solicitanteId", "updatedAt" FROM "Solicitudes";
DROP TABLE "Solicitudes";
ALTER TABLE "new_Solicitudes" RENAME TO "Solicitudes";
CREATE TABLE "new_Ubicaciones" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tipo" TEXT NOT NULL,
    "piso" TEXT NOT NULL,
    "peine" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "estanteria" TEXT NOT NULL,
    "almacen" TEXT NOT NULL
);
INSERT INTO "new_Ubicaciones" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Ubicaciones";
DROP TABLE "Ubicaciones";
ALTER TABLE "new_Ubicaciones" RENAME TO "Ubicaciones";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `nombre` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `solicitudId` on the `Items` table. All the data in the column will be lost.
  - Added the required column `descripcion` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidad` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Users_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Users";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "ItemsEnSolcitud" (
    "solicitudId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    PRIMARY KEY ("solicitudId", "itemId"),
    CONSTRAINT "ItemsEnSolcitud_solicitudId_fkey" FOREIGN KEY ("solicitudId") REFERENCES "Solicitudes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemsEnSolcitud_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UnidadesDeMedida" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "unidad" TEXT NOT NULL
);

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
    CONSTRAINT "Items_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "Ubicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Items_unidad_fkey" FOREIGN KEY ("unidad") REFERENCES "UnidadesDeMedida" ("unidad") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Items" ("createdAt", "id", "marca", "serie", "ubicacionId", "updatedAt") SELECT "createdAt", "id", "marca", "serie", "ubicacionId", "updatedAt" FROM "Items";
DROP TABLE "Items";
ALTER TABLE "new_Items" RENAME TO "Items";
CREATE UNIQUE INDEX "Items_serie_key" ON "Items"("serie");
CREATE TABLE "new_Solicitudes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "solicitanteId" TEXT NOT NULL,
    CONSTRAINT "Solicitudes_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Solicitudes" ("createdAt", "id", "solicitanteId", "updatedAt") SELECT "createdAt", "id", "solicitanteId", "updatedAt" FROM "Solicitudes";
DROP TABLE "Solicitudes";
ALTER TABLE "new_Solicitudes" RENAME TO "Solicitudes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UnidadesDeMedida_unidad_key" ON "UnidadesDeMedida"("unidad");

/*
  Warnings:

  - You are about to drop the `Items_en_ubicacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Notificaciones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `numero_serie` on the `Items` table. All the data in the column will be lost.
  - You are about to drop the column `sector` on the `Ubicaciones` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_ubicacion` on the `Ubicaciones` table. All the data in the column will be lost.
  - Added the required column `serie` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solicitudId` to the `Items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ubicacionId` to the `Items` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Items_en_ubicacion";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Notificaciones";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Solicitudes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "solicitanteId" TEXT NOT NULL,
    CONSTRAINT "Solicitudes_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Items" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "nombre" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "ubicacionId" TEXT NOT NULL,
    "solicitudId" TEXT NOT NULL,
    CONSTRAINT "Items_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "Ubicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Items_solicitudId_fkey" FOREIGN KEY ("solicitudId") REFERENCES "Solicitudes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Items" ("createdAt", "id", "marca", "nombre", "updatedAt") SELECT "createdAt", "id", "marca", "nombre", "updatedAt" FROM "Items";
DROP TABLE "Items";
ALTER TABLE "new_Items" RENAME TO "Items";
CREATE TABLE "new_Ubicaciones" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Ubicaciones" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Ubicaciones";
DROP TABLE "Ubicaciones";
ALTER TABLE "new_Ubicaciones" RENAME TO "Ubicaciones";
CREATE TABLE "new_Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Users" ("active", "createdAt", "email", "id", "lastname", "name", "password", "updatedAt") SELECT "active", "createdAt", "email", "id", "lastname", "name", "password", "updatedAt" FROM "Users";
DROP TABLE "Users";
ALTER TABLE "new_Users" RENAME TO "Users";
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

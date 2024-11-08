-- CreateTable
CREATE TABLE "ItemsAComprar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "solicitudId" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "nombreItem" TEXT NOT NULL,
    CONSTRAINT "ItemsAComprar_solicitudId_fkey" FOREIGN KEY ("solicitudId") REFERENCES "Solicitudes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

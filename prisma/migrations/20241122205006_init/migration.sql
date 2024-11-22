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
CREATE TABLE "Items" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "descripcion" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "serie" TEXT NOT NULL,
    "ubicacionId" TEXT NOT NULL,
    "unidad" TEXT NOT NULL,
    "cantidadTotal" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Items_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "Ubicaciones" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ubicaciones" (
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

-- CreateTable
CREATE TABLE "Solicitudes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "solicitanteId" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    CONSTRAINT "Solicitudes_solicitanteId_fkey" FOREIGN KEY ("solicitanteId") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemsEnSolicitud" (
    "solicitudId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    PRIMARY KEY ("solicitudId", "itemId"),
    CONSTRAINT "ItemsEnSolicitud_solicitudId_fkey" FOREIGN KEY ("solicitudId") REFERENCES "Solicitudes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemsEnSolicitud_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Items" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Ubicaciones_nombre_key" ON "Ubicaciones"("nombre");

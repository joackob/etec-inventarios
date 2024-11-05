import { test, describe, afterAll, beforeAll, expect } from "bun:test";
import { inicializarBaseDeDatos } from "@/tests/utils/global.setup";
import { limpiarBaseDeDatos } from "@/tests/utils/global.teardown";
import { obtenerNotificaciones } from "../repo";

describe("Obtener notificaciones sobre las solicitudes activas", async () => {
  beforeAll(async () => {
    await inicializarBaseDeDatos();
  });

  afterAll(async () => {
    await limpiarBaseDeDatos();
  });

  test("Deberia existir una notificacion", async () => {
    const notificaciones = await obtenerNotificaciones();
    expect(notificaciones.length).toBe(1);
  });
});

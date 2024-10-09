export const tratarExcepciones = (excepcion: unknown): string => {
  try {
    return (excepcion as Excepcion).brindarUnaRespuestaAdecuada();
  } catch {
    const excepcionDesconocida = new Excepcion({
      mensaje: "Algo inesperado ocurrio con el servicio",
    });
    return excepcionDesconocida.brindarUnaRespuestaAdecuada();
  }
};

type PropiedadesDeUnaExcepcion = {
  mensaje: string;
};

export class Excepcion {
  constructor(protected propiedades: PropiedadesDeUnaExcepcion) {}

  brindarUnaRespuestaAdecuada(): string {
    return this.propiedades.mensaje;
  }
}

export class SolicitudMalPlanteada extends Excepcion {
  constructor(mensaje: string) {
    super({
      mensaje: mensaje,
    });
  }
}

export class SolicitudSinCredencialesCorrespondientes extends Excepcion {
  constructor(mensaje: string) {
    super({
      mensaje: mensaje,
    });
  }
}

export class UsuarioNoRegistrado extends Excepcion {
  constructor(mensaje: string) {
    super({
      mensaje: mensaje,
    });
  }
}

export class ErrorDesconocidoDelServidor extends Excepcion {
  constructor(mensaje: string) {
    super({
      mensaje: mensaje,
    });
  }
}

export class ErrorDeEncriptacion extends Excepcion {
  constructor(mensaje: string) {
    super({
      mensaje: mensaje,
    });
  }
}

export class ServicioInhabilitado extends Excepcion {
  constructor(mensaje: string) {
    super({
      mensaje: mensaje,
    });
  }
}

export class BaseDeDatosNoCumplioConLaTareaSolicitada extends Excepcion {
  constructor(mensaje: string) {
    super({
      mensaje: mensaje,
    });
  }
}

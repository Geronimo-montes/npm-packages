/**
 * Base class for render exceptions.
 */
export class RenderExceptions extends Error {
  /**
   * @param {string} message - The error message.
   */
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name; // Para obtener el nombre de la clase de excepción
  }
}

/**
 * Thrown when the canvas element is not valid.
 */
export class InvalidCanvasElementError extends RenderExceptions {
  /**
   * Constructs a new InvalidCanvasElementError.
   */
  constructor() {
    super("Canvas element is not valid");
  }
}

/**
 * Thrown when the globalConfigRender object is not provided.
 */
export class GlobalConfigRenderNotProvidedError extends RenderExceptions {
  /**
   * Constructs a new GlobalConfigRenderNotProvidedError.
   */
  constructor() {
    super("globalConfigRender object is not provided");
  }
}

/**
 * Thrown when the Canvas Context 2D is not available.
 */
export class CanvasContextNotAvailableError extends RenderExceptions {
  /**
   * Constructs a new CanvasContextNotAvailableError.
   */
  constructor() {
    super("Object Canvas Context 2D is not available");
  }
}

/**
 * Thrown when the object render list is not available.
 */
export class ObjectRenderListNotAvailableError extends RenderExceptions {
  /**
   * Constructs a new ObjectRenderListNotAvailableError.
   */
  constructor() {
    super("Object render list is not available");
  }
}

/**
 * Exported object with all the render exceptions.
 */
export default {
  RenderExceptions,
  InvalidCanvasElementError,
  GlobalConfigRenderNotProvidedError,
  CanvasContextNotAvailableError,
  ObjectRenderListNotAvailableError,
}

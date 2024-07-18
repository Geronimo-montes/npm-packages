export class RenderExceptions extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class InvalidCanvasContext2DElementError extends RenderExceptions {
  constructor() {
    super("Canvas Context 2D element is not valid");
  }
}
export class InvalidCanvasElementError extends RenderExceptions {
  constructor() {
    super("Canvas element is not valid");
  }
}

export class GlobalConfigRenderNotProvidedError extends RenderExceptions {
  constructor() {
    super("globalConfigRender object is not provided");
  }
}
export class GameManagerHelperNotAvailableError extends RenderExceptions {
  constructor() {
    super("GameManagerHelper object is not provided");
  }
}

export class CanvasContextNotAvailableError extends RenderExceptions {
  constructor() {
    super("Object Canvas Context 2D is not available");
  }
}

export class ObjectRenderListNotAvailableError extends RenderExceptions {
  constructor() {
    super("Object render list is not available");
  }
}

export default {
  RenderExceptions,
  InvalidCanvasElementError,
  GlobalConfigRenderNotProvidedError,
  CanvasContextNotAvailableError,
  ObjectRenderListNotAvailableError,
};

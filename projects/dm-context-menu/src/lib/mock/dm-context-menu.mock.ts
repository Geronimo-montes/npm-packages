import { DMContextMenu } from "../models/context-menu";

export const contextMenu: DMContextMenu = {
  items: [
    {
      title: "Archivo",
      action: {},
      childs: [
        {
          title: "Nuevo",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Crear nuevo archivo", event }),
          },
        },
        {
          title: "Abrir",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Abrir archivo", event }),
          },
        },
        {
          title: "Guardar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Guardar archivo", event }),
          },
        },
        {
          title: "Cerrar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Cerrar archivo", event }),
          },
        },
      ],
    },
    {
      title: "Editar",
      action: {},
      childs: [
        {
          title: "Cortar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Cortar selección", event }),
          },
        },
        {
          title: "Copiar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Copiar selección", event }),
          },
        },
        {
          title: "Pegar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Pegar selección", event }),
          },
        },
        {
          title: "Eliminar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Eliminar selección", event }),
          },
        },
      ],
    },
    {
      title: "Vista",
      action: {},
      childs: [
        {
          title: "Ampliar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Ampliar vista", event }),
          },
        },
        {
          title: "Reducir",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Reducir vista", event }),
          },
        },
        {
          title: "Restablecer Zoom",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Restablecer zoom", event }),
          },
        },
      ],
    },
  ],
  styles: {
    backgroundColor: "#444",
    color: "#000",
    border: "1px solid #ccc",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
  },
};

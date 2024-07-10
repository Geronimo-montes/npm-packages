import { DMContextMenu } from "../models/context-menu";

export const contextMenu: DMContextMenu = {
  items: [
    {
      title: "Archivo",
      action: {},
      showChilds: false,
      childs: [
        {
          title: "Nuevo",
          action: {},
          showChilds: false,
          childs: [
            {
              title: "Documento",
              action: {
                onClick: (event: MouseEvent) =>
                  console.log({
                    acction: "Archivo > Nuevo > Documento",
                    event,
                  }),
              },
              childs: [],
              showChilds: false,
            },
            {
              title: "Folder",
              action: {
                onClick: (event: MouseEvent) =>
                  console.log({ acction: "Archivo > Nuevo > Folder", event }),
              },
              childs: [],
              showChilds: false,
            },
          ],
        },
        {
          title: "Abrir",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Abrir archivo", event }),
          },
          childs: [],
          showChilds: false,
        },
        {
          title: "Guardar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Guardar archivo", event }),
          },
          childs: [],
          showChilds: false,
        },
        {
          title: "Cerrar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Cerrar archivo", event }),
          },
          childs: [],
          showChilds: false,
        },
      ],
    },
    {
      title: "Editar",
      action: {},
      showChilds: false,
      childs: [
        {
          title: "Cortar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Cortar selección", event }),
          },
          childs: [],
          showChilds: false,
        },
        {
          title: "Copiar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Copiar selección", event }),
          },
          childs: [],
          showChilds: false,
        },
        {
          title: "Pegar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Pegar selección", event }),
          },
          childs: [],
          showChilds: false,
        },
        {
          title: "Eliminar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Eliminar selección", event }),
          },
          childs: [],
          showChilds: false,
        },
      ],
    },
    {
      title: "Vista",
      action: {},
      showChilds: false,
      childs: [
        {
          title: "Ampliar",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Ampliar vista", event }),
          },
          childs: [],
          showChilds: false,
        },
        {
          title: "Reducir",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Reducir vista", event }),
          },
              childs: [],
              showChilds: false,
        },
        {
          title: "Restablecer Zoom",
          action: {
            onClick: (event: MouseEvent) =>
              console.log({ acction: "Restablecer zoom", event }),
          },
              childs: [],
              showChilds: false,
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

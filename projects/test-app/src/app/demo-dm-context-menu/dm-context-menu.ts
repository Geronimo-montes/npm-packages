import { DMContextMenu } from "../../../../dm-context-menu/src/public-api";

/**
 * ContextMenu Simple
 */
export const contextmenu: DMContextMenu = {
  items: [
    {
      title: "Home",
      showChilds: false,
      childs: [],
      action: {},
    },
    {
      title: "Edit",
      showChilds: false,
      action: {},
      childs: [
        {
          title: "Copy",
          showChilds: false,
          childs: [],
          action: {},
        },
        {
          title: "Cut",
          showChilds: false,
          childs: [],
          action: {},
        },
        {
          title: "Paste",
          showChilds: false,
          childs: [],
          action: {},
        },
      ],
    },
    {
      title: "Show Alert Message",
      showChilds: false,
      childs: [],
      action: {
        onClick: (message: string) => {
          alert("Event of ContextMenu");
        },
      },
    },
  ],
  styles: {},
};

import { DMContextMenu } from "./context-menu";

/**
 *
 */
export const contextMenuDefault: DMContextMenu = {
  items: [
    {
      title: "Copy",
      action: {},
      childs: [
        {
          title: "Child 1",
          action: {
            onClick: (event: MouseEvent) => {
              console.log("asdfasdfsad");
            },
          },
        },
        {
          title: "child 2",
          action: {},
        },
      ],
    },
    {
      title: "Paste",
      action: {},
    },
    {
      title: "Delete",
      action: {},
      childs: [
        {
          title: "Child 1",
          action: {},
        },
        {
          title: "child 2",
          action: {},
        },
      ],
    },
    {
      title: "Cut",
      action: {},
    },
    {
      title: "Rename",
      action: {},
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

/**
 * FIXME: Theme module necesario....
 */
// export const ThemeItem: ContextMenuItem = {
//   title: "Theme",
//   action: {
//   },
//   childs: [
//     {
//       title: EThemes.dark,
//       action: {
//           console.log({$event}, "Switching to Dark Theme");
//           // ThemeService.setTheme(EThemes.dark);
//         },
//       },
//     },
//     {
//       title: EThemes.blueGray,
//       action: {
//           console.log({$event}, "Switching to Blue Gray Theme");
//           // ThemeService.setTheme(EThemes.blueGray);
//         },
//       },
//     },
//     {
//       title: EThemes.root,
//       action: {
//           console.log({$event}, "Switching to Light Theme");
//           // ThemeService.setTheme(EThemes.root);
//         },
//       },
//     },
//   ],
// };

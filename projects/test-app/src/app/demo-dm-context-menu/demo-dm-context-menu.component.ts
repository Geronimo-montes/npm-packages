import { Component, OnInit } from "@angular/core";
import { DMContextMenuItem } from "../../../../dm-context-menu/src/public-api";
import { DMContextMenuService } from "../../../../dm-context-menu/src/lib/services/dm-context-menu.service";

@Component({
  selector: "demo-context-menu",
  templateUrl: "demo-dm-context-menu.component.html",
  styleUrls: ["demo-dm-context-menu.component.css"],
})
export class DemoDMContextMenuComponent implements OnInit {
  constructor(protected readonly contextmenuService: DMContextMenuService) {}

  ngOnInit() {}

  /**
   * For binding events to items of contextmenu use funciton dispash
   * @param $event Se emite el item seleccionado en el menu contextual
   */
  contextmenuEventDispash($event: DMContextMenuItem) {
    console.log({ event: $event });

    if ($event.action.onClick) {
      const funct = $event.action.onClick;
      funct("Event onClick Calls");
    }




    
  }
}

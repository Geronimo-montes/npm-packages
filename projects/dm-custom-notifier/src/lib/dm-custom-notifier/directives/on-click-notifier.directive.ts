import { Directive, ElementRef, HostListener, Input } from "@angular/core";
import { DMNotification } from "../models/notification";
import { DMNotifierService } from "../services/notifier.service";

@Directive({
  selector: "[dmOnClickNotifier]",
})
export class DMOnClickNotifierDirective {
  constructor(private notifierService: DMNotifierService) {}

  @Input("dmOnClickNotifier") notifier!: DMNotification;

  @HostListener("click", ["$event"])
  onClick(event: MouseEvent) {
    console.log({ msg: "detroy desde directive", data: this.notifier });
    this.notifierService.destroyNotifier(this.notifier);
  }
}

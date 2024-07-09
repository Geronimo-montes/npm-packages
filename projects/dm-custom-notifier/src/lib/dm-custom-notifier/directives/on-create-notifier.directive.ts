import { Directive, HostListener, Input } from "@angular/core";
import { DMNotifierService } from "../services/notifier.service";
import { DMNotification } from "../models/notification";

@Directive({
  selector: "[dmOnCreateNotifier]",
})
export class DMOnCreateNotifierDirective {
  constructor(private notifierService: DMNotifierService) {}
  @Input("dmOnCreateNotifier") notifier?: DMNotification;

  @HostListener("click", ["$event"])
  onClick(evnet: MouseEvent) {
    if (this.notifier) {
      this.notifierService.createNotifier(this.notifier);
    }
  }
}

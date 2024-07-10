import { Directive, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[dmClick]",
})
export class ClickDirective {
  @Input("dmClickCallback") callback!: any;

  @HostListener("click", ["$event"])
  onClick(event: Event) {
    event.preventDefault();
    // Handle the click action, e.g., emit an event or call a service method
    console.log(`Action: ${this.callback}`);
  }
}

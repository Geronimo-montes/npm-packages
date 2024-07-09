import { Directive, HostListener, Input } from "@angular/core";

@Directive({
	selector: "[dmHover]",
})
export class HoverDirective {
	@Input("appHover") action!: string;

	@HostListener("mouseover", ["$event"])
	onHover(event: Event) {
		event.preventDefault();
		// Handle the hover action, e.g., emit an event or call a service method
		console.log(`Action: ${this.action}`);
	}
}

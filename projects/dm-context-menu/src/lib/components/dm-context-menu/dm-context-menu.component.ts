import {
	Component,
	EventEmitter,
	OnDestroy,
	OnInit,
	Output,
} from "@angular/core";
import { Observable, Subject, map, take, takeUntil } from "rxjs";
import {
	DMContextMenu,
	DMContextMenuItem,
	PositionTopLefth,
} from "../../models/context-menu";
import { DMContextMenuService } from "../../services/dm-context-menu.service";

@Component({
	selector: "dm-context-menu",
	templateUrl: "./dm-context-menu.component.html",
	styleUrls: ["./dm-context-menu.component.css"],
})
export class DMContextMenuComponent implements OnInit, OnDestroy {
	constructor(protected readonly contextmenuService: DMContextMenuService) {}

	ngOnDestroy(): void {
		this.destroy$.next(false);
		this.destroy$.complete();
	}

	ngOnInit(): void {
		this.contextmenuService.positionMenu$
			.pipe(takeUntil(this.destroy$))
			.subscribe((p) => {
				this.position = p;
				console.log(this.position);
			});
		this.contextmenuService.showMenu$
			.pipe(takeUntil(this.destroy$))
			.subscribe((s) => {
				this.showMenu = s;
				console.log(this.showMenu);
			});
		this.contextmenuService.selectedItem$
			.pipe(takeUntil(this.destroy$))
			.subscribe((v) => {
				this.onSelectAction.emit(v);
			});
	}

	get items$(): Observable<DMContextMenuItem[]> {
		return this.contextmenuService.contextMenu$.pipe(
			map((contextMenu: DMContextMenu) => contextMenu.items)
		);
	}
	get position$(): Observable<PositionTopLefth> {
		return this.contextmenuService.positionMenu$;
	}
	get showContextMenu$(): Observable<boolean> {
		return this.contextmenuService.showMenu$;
	}

	toggleContextMenu(show: boolean) {
		this.contextmenuService.showMenu(show);
	}

	selectAction(event: DMContextMenuItem) {
		this.onSelectAction.emit(event);
	}

	@Output("onSelectAction") onSelectAction =
		new EventEmitter<DMContextMenuItem>();

	public showMenu: boolean = false;
	public position: PositionTopLefth = { left: 0, top: 0 };
	public destroy$ = new Subject();
}

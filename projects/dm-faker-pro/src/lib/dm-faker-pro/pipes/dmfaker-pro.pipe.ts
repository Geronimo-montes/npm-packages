import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dMFakerPro",
})
export class DMFakerProPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

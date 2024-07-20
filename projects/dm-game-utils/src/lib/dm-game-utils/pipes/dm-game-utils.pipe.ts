import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dmGameUtils",
})
export class DmGameUtilsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}

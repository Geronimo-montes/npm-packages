import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "dmGameUtils",
})
export class DmGameUtilsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    console.log("DmGameUtilsPipe", { value, args });
    return null;
  }
}

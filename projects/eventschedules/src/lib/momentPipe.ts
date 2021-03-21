import { Pipe, PipeTransform } from "@angular/core";
import * as moment_ from "moment";

const moment = moment_

@Pipe({ name: "dateFormat" })
export class MomentPipe implements PipeTransform {
  transform(value: Date | moment.Moment, dateFormat: string): any {
    return moment(value).format(dateFormat);
  }
}

import {Pipe} from "@angular/core";
import {INews} from "./news";
@Pipe({
    name: 'reverse'
})
export class ReversePipe {
    transform(value: INews[]) {
        return value.slice().reverse();
    }
}
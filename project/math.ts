import { sum } from "./otherApp"
import { sum as g } from "./otherApp"
import { valodik as gugo} from "./someApp"
export var pi = 3.141593;
export class A {
    constructor() {
        console.log(sum(1, 2));
        console.log(g(1, 2));
    }
    method1() {
        var a = new gugo;
        console.log(a.gurgenchig())

    }
}
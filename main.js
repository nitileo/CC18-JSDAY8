// import { bye } from "./module1.js";
// import { sayWhat as wh } from "./module1.js";
import * as say from "./module1.js"
import helloJS from "./module2.js";


export function sayHi(){
    console.log('Hello Modules');
}

sayHi();
say.bye();
say.sayWhat();

helloJS();
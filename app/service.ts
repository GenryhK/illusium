import {Injectable}from "@angular/core";
import {Image} from "./moc-image";

@Injectable()



export class Service{
    getImage(){return Promise.resolve(Image)}
}
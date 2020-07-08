import { Category } from './category.model';

export class Product
{
    public _id? : string;
    public name : string;
    public description : string;
    public price : number;
    public category : [Category];
    public stock : number;
    public productImage : string;
    
}

 
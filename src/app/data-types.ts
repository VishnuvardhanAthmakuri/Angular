export interface signUp{
    nane:string,
    email:string,
    password:string
}
export interface Login{
    email:string,
    password:string 
}
export interface product{
    productId: any
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number,
    quantity:undefined | number,
    
}
export interface cart{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    id:number | undefined,
    quantity:undefined | number,
    productId : number,
    userId:number

}
export interface priceSummary{
    price:number,
    discount:number,
    tax:number,
    delivery:number,
    total:number,
}
export interface order{
    email:string,
    address:string,
    contact:string,
    totalPrice:number,
    userId:number,
    id:number|undefined
}
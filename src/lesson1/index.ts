// const asd = (name: string) =>
//     name.replace(/\s/g, '_').toLowerCase();
//
// const asd1 = (names:string[])=>
//     names[0].toLowerCase()
//
// const asd2 = (names: string[]): void => {
// console.log(names[0]);
// return
// }
// const asd3 = (names: string[]): number => {
// console.log(names[0]);
// return 1
// }
// const asd4 = (names: string[], house:number, flat:number): number[] => {
// console.log(names[0]);
// return
// }
//
// asd4(['Name', 'Max'], 25, 36);
//
// interface IUser{
//     name:string,
//     age?:number,
//     house:number
// }
// const user:IUser = {name: 'max', age:25, house:255}
// const user2:IUser = {name: 'max', house:255}
// asd4(['Name', 'Max'], 25, 36);
//
// interface IUser1<T>{
//     name:string,
//     age?:number,
//     house:number
//     data:T
// }
// const user1:IUser1<number[]> = {age:15, house:24, data:[1,2,3], name:'kokos'}
// const user3:IUser1<string> = {age:15, house:24, data:'some string', name:'kokos'}
//
// console.log(user3);

// class User{
//     // name:string;
    // age:number;
    // status:boolean;

//     constructor(private _name: string, protected age: number, public status: boolean) {
//         // this.name = name;
//         // this.age = age;
//         // this.status = status;
//     }
//     getName():void{
//         this._name
//     }
// }


//     constructor(private _name: string, private _age: number, private _status: boolean,) {
//     }
// //     getName():string{
// // return this._name
// //     }
// //     setName(name:string):void{
// //         this._name = name
//     }
//
//     const user = new User('max', 15, true);
// // console.log(user.getName());
// //
// // user.setName('Boris')
// // console.log(user.getName());
// // const users:User[] = [
// //     new User('kesha', 15, true),
// //     new User('kesha', 15, true),
// //     new User('kesha', 15, true),
// //     new User('kesha', 15, true),
// //     new User('kesha', 15, true),
// // ]
//
// abstract class Shape{
//     abstract perimeter():number
//     abstract area():number
// }
// // const shape = new Shape();
//
// class Rectangle extends Shape{
//     constructor(private a:number, private b:number) {
//         super();
//     }
//     perimeter(): number {
// return (this.a+this.b)*2
//     }
//     area(): number {
// return  this.a*this.b
//     }
// }
//
// interface ITools{
//     greeting:()=>void
// }
// interface ITools2{
//     count:()=>number
// }
// class Triangle extends Shape implements ITools, ITools2{
//     constructor(private a:number, private b:number, private c:number) {
//         super();
//     }
//
//     count:() => number;
//     greeting(){
//      console.log('Hello')
//     };
//     perimeter(): number {
// return  this.a+this.b+this.c
//     }
//     area(): number {
// return this.c*this.b/this.c*2
//     }
//
// }
//
// const shapes:Shape[] = [
//     new Rectangle(2,3),
//     new Rectangle(5,7),
//     new Triangle(1,2,3)
// ]
//
// for (let shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
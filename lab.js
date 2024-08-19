//////////////////////////CLASS//////////////////////////////
// class House{
//   constructor(_name,_color,_floor){
//     this.name = _name
//     this.color = _color
//     this.floor = _floor
//   }
//   openWindow() {
//     console.log(`${this.name} open window`)
//   }
//   openDoor(){
//     console.log(`${this.name} open window`)
//   }
// }

// let house1 = new House('Home1','White',2);
// console.log(house1);

// class User {
//   constructor(name){
//     this.name = name;
//   }
//   sayHi(){
//     console.log('Halo' +' '+this.name);
//   }
// }

// let user1 = new User('LEO')
// user1.sayHi()

// let user2 = new User('OLE')
// user2.sayHi()

// let user3 = new User('KAI')
// user3.sayHi()


// let user = new User('John');
// console.log(user)
// user.sayHi()

// class User {
//   name = 'John';
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// }
// new User().sayHi(); // Hello, John!

/////////////////Class inheritance///////////////////////////
// class User {
//   login(){
//     console.log('User login');
//   }
// }

// class Admin extends User{
//   updatePrice(){
//     console.log('Admin update Price');
//   }
// }

// let nuser1 = new User();

// let admin = new Admin();
// admin.login();
// admin.updatePrice();

//////////////////////Super///////////////////////////////
// class User {
//   login (){
//     console.log('user login');
//   }
// }
// class Admin extends User {
//   constructor() {super();}
// }

// const admin = new Admin();
// admin.login()

//-------------------LAB1-----------------------------
// class Calculator{
//   constructor(_init = 0) {
//     this.value = _init
//   }
//     add(num) {
//      this.value += num;
//      return this.value
//     } 
//     subtract(num){
//       this.value -= num
//       return this.value
//     } 
//     multiply(num) {
//       this.value *= num
//       return this.value
//     }
//     divide(num) {
//       this.value /= num
//       return this.value
//     }
//     show(){
//       console.log(`value = ${this.value}`);
//     }
// }

// let result = new Calculator(10)
// result.show()
// result.add(9)
// result.show()
// result.subtract(4)
// result.show()
// result.divide(5)
// result.show()

//----------------------LAB2-------------------------------
// class Sale{
//   constructor(name,amount,price){
//     this.name = name
//     this.amout = amount
//     this.price = price
//   }
//   calPlice(){
//     return this.price * this.amout
//   }
// }

// class Beverage extends Sale{
//   constructor(name,amount,price){
//     super(name,amount,price);
//   }
// }

// let a = new Beverage('Pepsi',3,19)
// console.log(a)
// console.log(a.calPlice())

////////////////////////////////isArray/////////////////////////////
// console.log(Array.isArray())
// console.log(Array.isArray({}))

// let arr = [1,2,3,4,5]
// let obj = {
//   name: 'Leo'
// }

// console.log(Array.isArray(arr))
// console.log(Array.isArray(obj))

//-----------------------LAB1-----------------------
// function isArray(input){
//   return Array.isArray(input)
// }

// let a = [1,2,3]
// let b = {name: 'Leo'}
// let c = 0;

// console.log(isArray(a))
// console.log(isArray(b))
// console.log(isArray(c))

/////////////////Object keys, values, entries////////////////////////
// let user = {
//   name: 'John',
//   age: 27
// };
// console.log(Object.keys(user)); // ["name", "age"]
// console.log(Object.values(user)); // ["John", 27]
// console.log(Object.entries(user)); // [["name", "John"], ["age", 27]]

// let user = {name: 'John' , age: 27};
// for (let key of Object.keys(user)){
//   console.log(key)
// }

// for (let value of Object.values(user)) {
//   console.log(value)
// }

// for (let pair of Object.entries(user)) {
//   console.log(pair)
// }

//-----------------------LAB1----------------------
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let keys = Object.keys(salaries);
// console.log(keys)
// let sumSalarie = keys.reduce((acc,curr)=>{
//   return acc += salaries[curr];
// },0)
// console.log(sumSalarie)

//----------------------LAB2------------------------
// function checkEmptyObj(obj){
//   let a = Object.entries(obj).length;
//   if(a == 0){
//     return 'Empty'
//   }
//   else{
//     return 'Not Empty object'
//   }
// } 

// x = [];
// y = {name: 2};

// console.log(checkEmptyObj(x))
// console.log(checkEmptyObj(y))

//-------------------Rest ans spread operator ใช้บ่อยแน่นอน 
// let func = (...rest)=>{
//   console.log(rest[0])
//   console.log(rest[1])
//   console.log(rest[2])
//   console.log(rest[3])
// }
// func(1,'hello','Codecamp',4,5,6,7,8,9)

// function sum(...args){
//   let result = 0;
//   for (let arg of args) result += arg;
//   return result;
// }

// console.log(sum(1))
// console.log(sum(1,2))
// console.log(sum(1,2,3,4))
// console.log(sum(1,1,'2'))

// function showName(firstName, lastName, ...titles){
//   console.log(firstName+' '+lastName);
//   console.log(titles[0]);
//   console.log(titles[1]);
//   console.log(titles.length);
// }

// showName('Nitipong', 'Laptansupapon','Consul', 'Imperator')

//------------------------LAB1
// function mul(...rest){
//   let result = 1;
//   for (let item of rest) result *= item;
//   return result
// }
// console.log(mul(1,2,3,4,5,6))
// console.log(mul(2,2,2,2,2,2,2,2,2,2))

//-------------------------LAB2
// function filterOutOdds(...rest){
//   a = [];
//   for(let item of rest){
//     if(item%2 == 0){
//       a.push(item)
//     }
//   }
//   return a
// }
// console.log(filterOutOdds(2,3,4,5,6,7,8,9,10,12,14))

//---------------------------LAB3
// function mergeObjects(...rest){
//   let a = {}
//   for (let i = 0; i<rest.length;i++){
//     Object.assign(a, rest[i])
//   }
//   return a
// }

// let obj1 = {name: 'Nitipong', surname:'Laptansupapon'};
// let obj2 = {nickname: 'Leo'};
// console.log(mergeObjects(obj1,obj2))

/////////////////////////Spread Syntax//////////////////////////
// let arr = [1,2,3];
// console.log(Math.max(arr)) // NaN

// console.log(Math.max(arr[0],arr[1],arr[2])) // 3

// console.log(Math.max(...arr)) // 3
// // ... (Spread Opertaor) == เจาะเข้าไปใน array 

// let str = 'Hello';
// console.log([...str]); // H, e, l, l, o
// a = [...str];
// b = a.reverse().join('')
// console.log(b)

// let arr = [1,2,3];
// let copyArr = [...arr];

// console.log(arr);
// console.log(copyArr);
// console.log(arr === copyArr); // not the same refference

// let obj = {a:1, b:2, c:3};
// let objCopy = {...obj}

// console.log(objCopy)
// console.log(objCopy === obj) // not the same different

//------------------------LAB4
// const num1 = [1,-2,3,4]
// const num2 = [8,3,-8,1]

// let num3 = [5,...num1,-6,-1,...num2]
// console.log(num3)
// let result = num3.reduce((acc,curr)=>{
//   return  acc += curr
// })
// console.log(result)

//-------------------------LAB5
// function thirdChange(arr){
//   let a = [...arr]
//   a[3] = a[3]**2
//   return a
// }
// arr1 = [1,2,3,8,5]
// console.log(arr1)
// console.log(thirdChange(arr1))

//-------------------------LAB6
// function show(name,surname,...hobby){
//   return `name:${name} ${surname} \nhobby : ${hobby}`
// }

// console.log(show('Nitipong','Laptansupapon','game','reading book','ride a bikecycle'))

//-------------------------LAB7
// function doubleAndReturnArgs(arr,...number){
//   let b = number.map((item)=>{
//     return item*2
//   })
//   let a = [...arr,...b]
//   return a
// }
// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4)); 
// console.log(doubleAndReturnArgs([2], 10, 4)); 
 
//------------------------LAB9
// function cloneArray(...arr){
//   let a =[]
//   for (let item of arr){
//     a.push(...item)
//   }
//   return a;
// }
// arr1 = [1,2,3]
// arr2 = [4,5,6]
// arr3 = [7,8,9]
// console.log(cloneArray(arr1,arr2,arr3))

//------------------------LAB10
// function cloneObject(obj){
//   let clone = {...obj};
//   return clone;
// }
// obj1 = {name: 'nitipong', lastname: 'Laptansupapon'}

// console.log(cloneObject(obj1));

////////////////////////Destructuring//////////////////////////////
//ดึงค่าใน array ออกมาเก็บเป็นตัวแปร

// let arr = ['John','Doe'];
// let [firstName,surName] = arr;
// console.log(firstName);
// console.log(surName);

// let [firstName,,age,,country] = ['John','Doe',27,'Male','Thailand']
// console.log(firstName);
// console.log(age);
// console.log(country);

// let [name1,name2,...rest] = ['John','Erik','Michael','Joshua'];
// console.log(rest[0]);
// console.log(rest[1]);
// console.log(rest.length);

//ใส่ค่า defualt ไว้ให้ตัวแปร กรณีที่ไม่มีตัวแปรนั้นจะใช้ค่า default แสดงผลออกมา
// let [name = 'Guest',surname = 'Anonymous'] = ['John'];
// console.log(name)
// console.log(surname)

//Object destructuring 
// let user ={
//   username: 'john',
//   email: 'John@gmail.com',
//   password: '123456'
// }
// let {username,email,password} = user;
// console.log(username);
// console.log(email);
// console.log(password);

//กำหนดชื่อใหม่ 
//ตำแหน่งใน object ไม่มีผลขอแค่ keys ตรงกัน 
// let user = {
//   username: 'john',
//   email: 'John@gmail.com',
//   password: '123456'
// }
// let { username:u, email:e, password:p } = user;
// console.log(u);
// console.log(e);
// console.log(p);

// let user = {
//   username: 'john',
//   password: '123456'}

// let {username, email = 'guest@gmail.com',password} = user;
// console.log(username);
// console.log(password);
// console.log(email);

// let user = {
//   username: 'john',
//   password: '123456'
// }

// let { username, email: e ='guest@gmail.com', password } = user;
// console.log(e);

// let user = {
//   username: 'john',
//   email: 'John@gmail.com',
//   password: '123456'
// }
// let { username:u,...rest } = user;
// console.log(u);
// console.log(rest);

//nested object
// let option = {
//   size:{
//     width: 100,
//     height: 200
//   },
//   items: ['cake','Donut'],
//   extra : true
// }

// let {
//   size:{
//     width,
//     height
//   },
//   items:[item1, item2],
//   extra
// } = option;

// console.log(width)

//สามารถ destructuring กรณีที่ฟังก์ชันมี parameter เป็น array หรือ object ได้
// function showName(user) {
//   console.log(`${user.firstName} ${user.lastName}`);
// }
// showName({firstName: 'John', lastName : 'Doe'});

// function showName({firstName:f,lastName:l = 'Anonymous'}){
//   console.log(`${f} ${l}`);
// }
// showName({ firstName: 'John', lastName: 'Doe' });
// showName({ firstName: 'LEO'});

//--------------------------LAB11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // --> Maya
// console.log(second); // --> Marisa
// console.log(third); // --> Chi

//---------------------------LAB12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // --> Raindrops on roses จะมีค่าเป็นค่าแรกของ array
// console.log(whiskers); //  --> whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // --> [ Bright copper kettles,warm woolen mittens ] มีสองค่าเนื่องจากเก็บไว้ใน rest 

//---------------------------LAB13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // ---> [10, 30, 20] เพราะมีการสลับค่าที่บรรทัดบนด้วยหลักการของ destructuring

//---------------------------LAB14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // --> 8 เป็นการ destructuring object ต้องใช้ key เดียวกัน เมื่อเรียกใช้จึงออกมามีค่า 8
// console.log(yearNeptuneDiscovered); // --> 1846

//---------------------------LAB15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // ---> {yearMarsDiscovered:1659 yearNeptuneDiscovered:1846}
// //เนื่องจาก กำหนดให้ ...discoveryYears เป็น rest สามารถเก็บค่าได้หลายค่า จากโจทย์จะเห็นว่าค่าหลัง numPlanet ทั้งหมดจะถูกนับเป็น ค่าของ discoveryYears

//--------------------------LAB16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })); // Your name is Alejandro and you like purple
// console.log(getUserData({ firstName: 'Melissa' })); // Your name is Melissa and you like green
// console.log(getUserData({})); // Your name is undefined and you like green
// // console log บรรทัดที่ 3 ออกค่า เป็น undifined เพราะไม่ได้กำหนดค่า default ของ firstname เอาไว้ ส่วน favorite color มีค่า default เป็น green หากไม่ได้มีการใส่ค่า favorite color จะให้ค่า default ออกมาเเทน

//---------------------------LAB17
// let guest = 'Jane';
// let admin = 'Pete';
// [admin,guest] = [guest,admin];
// console.log(admin);
// console.log(guest)

//----------------------------LAB18
// function checkUser({ firstName, lastName, age}){
//   if(age >18){
//     return `Hello ${firstName} ${lastName}`
//   }
//   else{
//     return 'Not allow'
//   }
// }

// console.log(checkUser({ firstName: 'Nitipong', lastName: 'Laptansupapon', age: 20 }))
// console.log(checkUser({ firstName: 'John', lastName: 'Doe', age: 17 }))

//----------------------------LAB19
// let user = {
//   name: 'John',
//   years: 27
// };

// let {
//   name,
//   years : ages,
//   isAdmin = false,
// } = user;

// console.log(name)
// console.log(ages) 
// console.log(isAdmin)

// //---------------------------LAB21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [a,[b,[[[c,d],e],f]]] = arr;
// console.log(a,b,c,d,e,f)

//-------------------------LAB22
// const obj = { prop: 5, prop2: 10 };
// let {prop:a,prop2:b} = obj;
// console.log(a,b)

//-------------------------LAB23
// let a, b;
// { a, b } = { a: 1, b: 2 };
// // Uncaught SyntaxError: Unexpected token '=' รันไม่ออกเนื่องจากผิดหลักการ destructuring 
// // a,b เป็นตัวแปร แต่โจทย์เขียนเป็น object หากต้องการ assign ค่าให้ถูกต้องเขียนเป็น [];

// //--------------------------LAB24
// const [, , , a, b] = [1, 2, 3];
// console.log(a, b) // a---> undefined , b---> undefined จาก index a = 3, b = 4 แต่ข้อมูลมีค่าถึง index ที่ 2
// //จึงออกค่า undefined (มีการใช้ ,,, เว้นตำแหน่งเอาไว้) 

//---------------------------LAB25
// const q = { prop: 5, prop2: [10, 100] };
// let {
//   prop:a,
//   prop2:[,b]
// } = q;
// console.log(a,b) // a = 5 / b = 100;

//---------------------------LAB26
// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };

// const {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y,]
//     }
//   }
// } = q;
// console.log(x,y)

//------------------------------LAB27
// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (let item of names){
//   const {firstName,lastName} = item
//   console.log(firstName,lastName)
// }

//----------------------------LAB28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let item of users){
//   const {user,age = 'unknown'} = item
//   console.log(user,age)
// }
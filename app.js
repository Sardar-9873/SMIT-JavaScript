// const userAge = prompt(`Enter Your Year of Birth!!!`);
// const updatedUserAge = 2026 - userAge;
// alert("Your Age is " + updatedUserAge);


// var firstName;
// firstName = "Abdullah";
// var firstName = '"Abdullah"';
// firstName = "Motiwala";
// console.log(firstName);

// firstName = "Motiwala";
// console.log(firstName);


// const myName = prompt("Enter your Name");

// const myFatherName = "Shehzad";

// if (myName === "Mustafa") alert("Hello")
// else if (myName === "Kamran") alert("Hi")
// else if (myName === "Arsalan") alert("Assalamualaikum")
// else if (myName === "Azan") alert("Bye")
// else {
//     const myState = prompt("How are you?")
// }


// const isPowerFull = true;
// const isIntelligent = true;
// const isYoung = true;
// const isHealthy = true;
// const isClever = true;


// if (isPowerFull && isIntelligent && isClever && isYoung && isHealthy) {
//     alert("You are selected in army")
// }

// alert("Battle Started")

// if (isPowerFull || isIntelligent || isClever || isYoung || isHealthy) {
//     alert("You are selected in army")
// }



// const userAge = + prompt("Enter your Age");
// alert("Check in Dev-Tool-Console. That your License is approved or not.")

// if (userAge < 18){
//     console.debug("License Rejected | Under Age");
//     console.log("Check in Verbose");
// }
// else if (userAge >= 45){
//     console.debug("License Rejected | Over Age");
//     console.log("Check in Verbose");
// }
// else{
//     console.log("License Approved");
//     console.debug("Check in Info");
// }


// const myAge = 13;

// if (myAge !== '13'){
//     alert("Hello World")
// }


// const students = ["Sahal", "Kamran", "Arsalan", "Mustafa"];
// console.log(students);

// console.log(students.push("Azan"));
// console.log(students.pop());

// console.log(students.unshift("Azan"));
// console.log(students.shift());

// console.log(students.splice(2 , 2));

// console.log(students.splice(1 , 1 , "Kami"));
// console.log(students.splice(1 , 0 , "Haseeb"))

// console.log(students.slice(0 , 3))

// console.log(students);


// alert(students[0]);


// const friendsNames = ['Sahal','Kamran','Arsalan','Mustafa','Azan','Haseeb','Anus'];
// const updatedFriendsNames = friendsNames.toSpliced(4,1);

// console.log(friendsNames);
// console.log(updatedFriendsNames);


// const myHome1 = ['Paayan', 'Abbotabad', 'Jhelum'];
// const myHome2 = JSON.parse(JSON.stringify(myHome1));

// myHome3.push('Karachi');

// console.log(myHome1);
// console.log(myHome2);


// for (let i = 0;i < 4;i++){
//     console.info("Fatih-Al-Quds Sultan Yousaf ibn-e-Ayyub Salahuddin Ayyubi");
// }


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let isNumberFound = false;

// const findingNumber = 5;

// for (let i = 0; i < myNumbers.length; i++) {
//     const item = myNumbers[i];

//     if (item === findingNumber) {
//         isNumberFound = true;
//         break;
//     }
//     console.log(item);
//     console.log(i);

// }

// console.log(isNumberFound, "====number");

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let isNumberFound = false;

// for (i = 0; i < myNumbers.length; i++) {
//     const element = myNumbers[i];
//     console.log(element);

//     if (element === 5) {
//         isNumberFound = true;
//         break;
//     }
//     console.log(element);
// }

// console.log(isNumberFound);


// const email = "abdullah@mailinator.com";
// const userEnteredEmail = prompt("Enter your email to login");
// const userEnteredLower = userEnteredEmail.toLowerCase();

// if (email === userEnteredLower) alert("Login Succesfully");
// else alert("Invalid Credentials");

// console.log(email[3],email.length);

// const userName = email.slice(0,8);
// console.log(userName);

// const country1 = "islaMic ";

// let firstLetter1 = country1[0];
// let otherLetters1 = country1.slice(1);

// firstLetter1 = firstLetter1.toUpperCase();
// otherLetters1 = otherLetters1.toLowerCase();

// const finalCountryName1 = firstLetter1 + otherLetters1;


// const country2 = "repUblic of ";

// let firstLetter2 = country2[0];
// let otherLetters2 = country2.slice(1);

// firstLetter2 = firstLetter2.toUpperCase();
// otherLetters2 = otherLetters2.toLowerCase();

// const finalCountryName2 = firstLetter2 + otherLetters2;


// const country = "pakisTan";

// const countryName = country.lastIndexOf("p");
// let firstLetter = country[countryName];

// const countryName1 = country.indexOf("a")
// let otherLetters = country.slice(countryName1);

// firstLetter = firstLetter.toUpperCase();
// otherLetters = otherLetters.toLowerCase();

// const finalCountryName = firstLetter + otherLetters;

// const completeCountryName = finalCountryName1 + finalCountryName2 + finalCountryName;

// console.log(finalCountryName1);
// console.log(finalCountryName2);
// console.log(finalCountryName);
// console.log(completeCountryName);


// const email = "abdullah@mailinator.com";
// const emailStartIndex = email.indexOf("@");
// const userName = email.slice(0,emailStartIndex);
// console.log(userName);

// const text = "the quick brown fox jump over a lazy queen dog";

// let totalWords = 0;
// for (let i = 0; i < text.length; i++) {
//   const item = text[i];
//   if (item === " ") totalWords++;
// }
// if (totalWords) totalWords = totalWords + 1;
// console.log(totalWords);

// console.log(text[2]);
// const indexOf = text.indexOf("this");
// const lastIndexOf = text.lastIndexOf("q");
// console.log(indexOf, lastIndexOf);

// const userWord = "brown";
// let indexNumber = -1;
// for (let i = 0; i < text.length; i++) {
//   const item = text.slice(i, i + userWord.length);
//   console.log(item);
//   if (item === userWord) {
//     indexNumber = i;
//     break;
//   }
// }

// console.log(indexNumber);
// debugger;

// const greeting = "Hello How're Hello you!";
// const newGreetings = greeting.replaceAll("Hello", "Hi");

// console.log(newGreetings);


// const firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// const lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// const fullNames = [];

// for (let i = 0; i < firstNames.length; i++) {
// for (let j = 0; j < lastNames.length; j++) {
// fullNames.push(firstNames[i] + lastNames[j]);
// }}

// console.log(firstNames);
// console.log(lastNames);
// console.log(fullNames);


// let totalScore = 0;
// const target = 50;

// while (totalScore < target) {
//     const userNumber = +prompt("Enter your Number");

//     const randomNumber = Math.random();
//     const computerNumber = Math.ceil(randomNumber * 6);
//     alert("Computer number is : " + computerNumber);

//     const isWicket = userNumber === computerNumber;
//     if (isWicket) {
//         alert("Ohho, Out by Computer (Dumb Machine)");
//         break;
//     } else {
//         totalScore += userNumber;
//         if (totalScore >= target) {
//             alert("Hurrrayy! You won");
//         } else {
//             alert("Your total is: " + totalScore);
//         }
//     }
// }

// const sellingItem = prompt("What do you want to sell us .");

// const sellingItemDetails = prompt("Enter all details of " + sellingItem);

// const itemPrice = +prompt("Enter price of " + sellingItem);

// const roundedItemPrice = Math.floor(itemPrice);

// const randomNumber = Math.ceil(Math.random() * 5);

// alert("I'll pay " + roundedItemPrice + " and I'll also give you bonus $" + randomNumber);

// const areYouAgreed = prompt("Are you agreed to sell your " + sellingItem + "? Answer in true/false .");

// if(areYouAgreed === "true" || "True"){
//     const userAddress = prompt("Give me your address My rider is coming to you for picking " + sellingItem);
//     const paymentMethod = prompt("Do you want COD or Online Payment.If you want COD enter COD | Else you want Online Payment then enter Online Payment.");
//     if(paymentMethod === "COD"){
//         alert("Ok,my rider is coming.");
//     }else if(paymentMethod === "Online Payment"){
//         const onlinePaymentMethod = prompt("From which you want payment: EasyPaisa , JazzCash , Bank Transfer .");
//         if(onlinePaymentMethod === "EasyPaisa"){
//            const userPhoneNumberEP = +prompt("Enter your EasyPaisa Account Number .");
//            alert("Wait 2 minutes");
//            alert("Your payment is transfered to you .");
//         }else if(onlinePaymentMethod === "JazzCash"){
//            const userPhoneNumberJC = +prompt("Enter your JazzCash Account Number .");
//            alert("Wait 2 minutes");
//            alert("Your payment is transfered to you .");
//         }else if(onlinePaymentMethod === "Bank Transfer"){
//             const userBankName = prompt("Enter your bank name in which you want that I'll pay you .");
//             const userBankAccount = +prompt("Enter your bank account .");
//             const userIBAN = prompt("Enter your IBAN");
//             alert("Wait 2 minutes");
//             alert("Your payment is transfered to you .");
//         }}
//     }else if(areYouAgreed === "false" || "False"){
//       alert("Ok , Thank You for visiting us .")
//     }

// const myNos = 10000.252;
// const myNos2 = myNos.toFixed(2);

// console.log(myNos);
// console.log(myNos2);

// const myNumber = 55;
// const myNewNumber = myNumber.toExponential(1);

// console.log(myNewNumber,myNumber);

// const date = new Date();
// const saveAbleDate = date.toString();

// console.log(date , saveAbleDate);

// const myDate = new Date();

// console.log(
//     myDate.getDate(),
//     myDate.getDay(),
//     myDate.getFullYear(),
//     myDate.getHours(),
//     myDate.getMinutes(),
//     myDate.getSeconds(),
//     myDate.getMilliseconds(),
//     myDate.getTime(),
// );

// const dayNames = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ھفتہ"];

// const now = new Date();
// const theDay = now.getDay();
// const nameOfToday = dayNames[theDay];

// console.log(nameOfToday);

// let text =  "The New Yorker magazine doesn't allow the phrase World War II.  They say it shouldbe the Second World War. So lets search the following sentence for the banned charactersand replace them with the phrase that the New Yorker prefers.It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien waswriting the trilogy, which contains, with the weird applicability available only to poetry andmyth, the essential notion that the good gray wizard can understand the evil magi preciselybecause he is just enough like them to grasp their minds and motives in ways that they cannotgrasp his." ;

// for (let i = 0; i < text.length; i++) {
// if (text.slice(i, i + 12) === "World War II") {
// text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
// }
// }


// const firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//      text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }

// debugger;

// console.debug(text);

// console.info(
//      rightNow,
//      rightNow.toString(),
//      rightNow.toDateString(),
//      rightNow.toLocaleDateString(),
//      rightNow.toTimeString(),
//      rightNow.toISOString(),
//      rightNow.toUTCString()
// );


// console.log(
//      rightNow.getDate(),
//      rightNow.getDay(),
//      rightNow.getFullYear(),
//      rightNow.getHours(),
//      rightNow.getMonth(),
//      rightNow.getMinutes(),
//      rightNow.getSeconds(),
//      rightNow.getMilliseconds(),
//      rightNow.getTime(),
//      rightNow.getUTCDate(),
//      rightNow.getUTCDay()
// );


// const word = "algebra";

// let guessWord = word.split("");
// guessWord[1] = "_";
// guessWord[3] = "_";
// guessWord[5] = "_";
// guessWord = guessWord.join("");

// alert(guessWord);
// const date = new Date();
// const startingTime = date.getTime();
// console.log(startingTime);

// const userAnswers = [];

// for (let i = 0; i < 3; i++) {
//   const answer = prompt("Enter the first letter");
//   userAnswers.push(answer);
// }

// const finishingDate = new Date();
// const finishingTime = finishingDate.getTime();

// const timeConsumedInMS = finishingTime - startingTime;

// const timeConsumedInSecs = timeConsumedInMS / 1000;

// let userWord = guessWord;
// for (let i = 0; i < 3; i++) {
//   userWord = userWord.replace("_", userAnswers[i]);
// }

// if (userWord.toLowerCase() !== word) alert(" Ohho, Wrong word");
// else if (timeConsumedInSecs > 5) alert(" Ohho, too slow");
// else alert("You won, don't think you're genuis");

// const date101 = new Date();
// console.log(date101);




// function greetUser(firstName , userName , lastName) {
//      const greeting = "Assalamualaikum " + firstName + " " + userName + " " + lastName;
//      alert(greeting);
// }

// greetUser("M." , "Sahal" , "Shehzad");

// function f() {
//      const userName1 = prompt("Enter Your Name!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
//      const greet = "Assalamualaikum " + userName1;
//      alert(greet);
// }

// f();

// const mn = "Sahal";

// function fo(welcome) {
//     console.log(welcome);
// }

// fo("Welcome to Javascript");

// function fro(fullname) {
//     console.log(`Hello `  + fullname)
// }

// fro("Sahal");

// function sahal(firstName){
//     const greetings11 = `Hi ${firstName}`;
//     console.log(greetings11);
//     return greetings11;
// }

// sahal("Sahal");

// const response = sahal("Shehzad");

// console.log(response); 


// function sum(value1 , value2){
//     const result = value1 + value2;
//     console.log(result);
//     return result;
// }

// sum(20,90);

// console.log(sum(20,20));

// const dayOfWk = prompt("Enter current day!!!");

// if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
// alert("Whoopee!");
// }
// else if (dayOfWk === "Fri") {
// alert("TGIF!");
// }
// else {
// alert("Shoot me now!");
// }


// switch(dayOfWk) {
// case "Sat" :
// alert("Whoopee");
// break;
// case "Sun" :
// alert("Whoopee");
// break;
// case "Fri" :
// alert("TGIF!");
// break;
// default :
// alert("Shoot me now!");
// }

// function currencyConverterV1() {

//     const rate = 0.0036;
//     const pkr = +prompt("Enter PKR");

//     if (isNaN(pkr)) {
//         alert("Jani number enter kr ya phir dafaa ho ja!");
//     }else if (pkr !== isNaN(pkr)){
//         const usd = pkr * rate;
//         alert(`PKR: ${pkr} = USD: ${usd}`);
//     }
// }

// currencyConverterV1();



// function date() {
//      const now = new Date();

//      const dayNames = ["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "];
//      const theDay = now.getDay();
//      const day = dayNames[theDay];

//      const monthNames = [" Jan ", " Feb ", " Mar ", " Apr ", " May ", " Jun ", " Jul ", " Aug ", " Sep ", " Oct ", " Nov ", " Dec "];
//      const theMonth = now.getMonth();
//      const month = monthNames[theMonth];

//      const date = now.getDate();

//      const year = now.getFullYear();

//      const hours = now.getHours();

//      let minutes = now.getMinutes();
//      if(minutes < 10){
//      minutes = "0" + minutes;
//      }else if (minutes >= 10){
//      minutes = minutes;
//      }

//      let seconds = now.getSeconds();
//      if(seconds < 10){
//      seconds = "0" + seconds;
//      }else if (seconds >= 10){
//      seconds = seconds;
//      }

//      let UTC = now.toTimeString();
//      UTC = UTC.slice(9);

//      const finalDate = day + month + date + " " + year + " " + hours + ":" + minutes + ":" + seconds + " " + UTC;
//      return finalDate;
// }

// const Date125 = date();
// console.log(Date125);

// let remainigSehriTimeInMins = 30;

// while(remainigSehriTimeInMins !== 0){
//     remainigSehriTimeInMins -= 30;
//     console.log("Eat and drink");
//     if(remainigSehriTimeInMins === 0){
//         console.log("Rozedaroon, Allah Nabi ke pyaroon, Jannat ke haqdaroon sehri ka time khatam ho gaya hai khana pina band kr do.")
//     }
// }

// do{
//     remainigSehriTimeInMins -= 30;
//     console.log("Eat and drink");
// }while(remainigSehriTimeInMins === 0)

// const students = ["Sahal", "Anus", "Zohaib"];

// const student0 = {
//     name: "Sahal",
//     age: 14,
//     qualification: null,
//     isMarried: false,
//     friends: ["Anus", "Zohaib"],
//     contact: {
//         phoneNumber: 1020,
//         email: "sahal@mailinator.com",
//     }
// }

// const student1 = {
//     name: "Anus",
//     age: 19,
//     qualification: null,
//     isMarried: false,
//     friends: ["Sahal", "Zohaib"],
//     contact: {
//         phoneNumber: 1122,
//         email: "anus@mailinator.com",
//     }
// }

// const student2 = {
//     name: "Zohaib",
//     age: 21,
//     qualification: null,
//     isMarried: false,
//     friends: ["Anus", "Sahal"],
//     contact: {
//         phoneNumber: 1234,
//         email: "zohaib@mailinator.com",
//     }
// }

// male = true;
// female = false;
// others = undefined;

// const stdDetails = {
//     name: "Sahal",
//     age: 14,
//     gender: true,
// }

// stdDetails.fullName = "M. Sahal Shehzad";
// console.log(stdDetails , 1);

// delete stdDetails.name;
// console.log(stdDetails , 2);

// const isNameExists = "name" in stdDetails;
// console.log(isNameExists , 3);




// const myObj = {
//   a: 1,
//   b: 2,
//   d: function () {
//     console.log(this, "how're you");
//   },
// };

// function abc() {
//   console.log(this, "how're you");
// }

// abc();


// upsert
// myObj.a = 3; //update
// myObj.c = 3; //insert

// delete myObj.a;
// myObj.d();

// console.log(myObj);

// const myNumber =12
// function User(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
// }

// User.prototype.updateName = function (newName) {
//   this.firstName = newName;
// };

// const firstUser = new User("Abdullah", "Motiwala", 30);
// console.log(firstUser);
// firstUser.updateName("Mohd.");
// console.log(firstUser);

// const secondUser = new User("Abdullah", "Motiwala", 30);
// console.log(secondUser);
// secondUser.updateName("Mohd.");
// console.log(secondUser);

// const myAr = [1, 2, 3];
// console.log(myAr);

// function myFoo5() {
//   try {
//     // your code here
//     throw new Error("Sample Error");
//   } catch (error) {
//     alert("Error Appeared");
//     console.log(error);
//   }
// }



// class Product {
//   constructor(name, price, stock, ...otherDetails) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.otherDetails = otherDetails;
//   }

//   buy(quantity) {
//     quantity = 1;
//     if (quantity <= this.stock) {
//       this.stock -= quantity;
//       alert(`${quantity} ${this.name} bought.`);
//     } else alert(`${this.name} is not available right now.`);
//   }
//   info() {
//     alert(`Product Name: ${this.name} , Price: ${this.price} , Stock: ${this.stock} , Otherdetails: ${this.otherDetails}`);
//   }
// }



// const p1 = new Product("Qurta", 5000, 3, "black", "Eminent");
// const p2 = new Product("Shalwar", 3000, 1, "white", "Eminent");
// const p3 = new Product("Shoes", 4000, 1, "black", "Eminent");
// const p4 = new Product("Watch", 40000, 1, "golden", "Rado");
// const p5 = new Product("Sunglasses", 2000, 1, "black", "Eminent");

// p1.buy();
// p1.info();

// p2.buy();
// p2.info();

// p3.buy();
// p3.info();

// p4.buy();
// p4.info();

// p5.buy();
// p5.info();


// function orderFood(food, cb) {
//     setTimeout(() => {
//         console.log(food + " is ready.");
//         cb(food);
//     }, 3000)
// }

// orderFood("Biryani", delivery);

// function delivery() {
//     console.log("Food Delivered. 😋")
// }

// const sum  = (a, b) => {
//     console.log(a + b)
// };

// function execute(a, b , fn){
//     fn(a, b);
// }

// execute(2, 3, sum);





// function login(user, cb){
//     setTimeout(() => {
//         console.log(`User Logged in!!!`);
//         cb({user});
//     }, 3000);
// }

// function getProfile(user, cb){
//     setTimeout(() => {
//         console.log(`Profile Fetched!!!`);
//         cb({name: user})
//     }, 3000);
// }

// function getOrders(profile, cb){
//     setTimeout(() => {
//         console.log(`Order Fetched`);
//         cb(["Order1", "Order2"]);
//     }, 3000);
// }

// function checkPayment(orders, cb){
//     setTimeout(() => {
//         console.log(`Payment Checked`);
//         cb(true); 
//     }, 3000);
// }



// login("Ali", function(user) {
//   getProfile(user, function(profile) {
//     getOrders(profile, function(orders) {
//       checkPayment(orders, function(status) {
//         setTimeout(() => {
//             console.log("All done ✅");
//         }, 3000);
//       });
//     });
//   });
// });



// const myPromise = new Promise((resolve, reject) => {
//     const isBusAvailable = false;
//     setTimeout(() => {
//         if(isBusAvailable) resolve({name: `Sahal`});
//         else reject(Error, `Something is not working.`);
//     }, 2000);
// });


// myPromise
// .then((msg) => {
//     console.log("msg");
// })
// .catch((err) => {
//     console.log(err);
// });


// function biryaniBanao() {
//     return new Promise((resolve, reject) => {
//         const isGasAvailableInCylinder = false;

//         setTimeout(() => {
//             if (isGasAvailableInCylinder) {
//                 resolve(`Biryani ready.😋`);
//             } else {
//                 reject(new Error(`Cannot cook biryani: gas not available.`));
//             }
//         }, 2000);
//     });
// }

// biryaniBanao()
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(`Promise rejected:`, error.message);
//     });




// function userLogin(username, password) {
//     return new Promise((resolve, reject) => {
//         () => {
//             if (username === "Admin" && password === "112233") {
//                 resolve({ username: "Admin", role: "Administrator" });
//             } else {
//                 reject(new Error("Invalid credentials"));
//             }
//         }
//     });
// }



// function fetchData() {
//     return new Promise((resolve, reject) => {
//         () => {
//             const data = "Sample Data";
//             if(data === "Sample Data"){
//                 resolve(data);
//             }else{
//                 reject(new Error("Data is not available.")); 
//             }
//         }
//     });
// }    



// userLogin("Admin", "112233")
// .then((msg) => {
//     console.log(msg);    
//     return fetchData();
// })
// .then((msg) => {
//     console.log(msg);    
// })
// .catch((err) => {
//     console.log(err);    
// })



// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let el of array){
//     console.log(el)
// }

// for(let i in array){
//     console.log(i)
// }

// class Car{
//     constructor(driver, brand, carName, model, acceleration){
//         this.driver = driver;
//         this.brand = brand;
//         this.carName = carName;
//         this.model = model;
//         this.acceleration = acceleration;
//     }

//     startEngine(){
//         setTimeout(() => {
//             console.log("Engine Started🚗");
//             setTimeout(() => {
//                 console.log(this.driver, this.brand, this.carName, this.model, this.acceleration);
//             }, 500);
//         }, 2000);
//     }

//     stopEngine(){
//         setTimeout(() => {
//             console.log("Engine stopped🛑");
//         }, 3000);
//     }
// }

// const myCar = new Car("Sahal", "Toyota", "Land Cruiser", "ZX LC 300", 120);
// myCar.startEngine();
// myCar.stopEngine();




// const myArr = [10, 20, 30, 40, 50];
// const i = myArr[Symbol.iterator]();
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());
// console.log(i.next());




// function chaiBanay() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Chai ready ☕");
//     }, 2000);
//   });
// }

// async function serveChai() {
//   let result = await chaiBanay();
//   console.log(result);
// }

// serveChai();




// function getMessage() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello Student 👋");
//     }, 2000);
//   });
// }

// async function showMessage() {
//     const message = await getMessage();
//     console.log(message);
// }

// showMessage();


// function step1() {
//   return new Promise((res) => {
//     setTimeout(() => res("Step 1 done"), 1000);
//   });
// }

// function step2() {
//   return new Promise((res) => {
//     setTimeout(() => res("Step 2 done"), 2000);
//   });
// }


// async function asyncChain() {
//     try{
//         const res1 = await step1();
//         console.log(res1);

//         const res2 = await step2();
//         console.log(res2);

//         console.log(`All done`);
//     }catch(error){
//         console.error(new Error("Something not working"));
//     }
// }

// asyncChain();




// function login(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (user === "guest") {
//         resolve("Login successful ✅");
//       } else {
//         reject("Invalid user ❌");
//       }
//     }, 1500);
//   });
// }

// async function doLogin() {
//   try {
//     const result = await login("guest");
//     console.log(result);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }

// doLogin();




// function fetchData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ name: "Sahal", age: 20 });
//         }, 2000);
//     });
// }


// async function completeDataFetching() {
//     try {
//         const result = await fetchData();
//         console.log(result.name);
//     } catch (error) {
//         console.log("Error:", error)
//     }
// }

// completeDataFetching();



// function createBankAccount() {
//   let balance = 1000;

//   return {
//     deposit: function(amount) {
//         balance += amount;
//         return balance;
//     },
//     withdraw: function(amount) {
//         balance -= amount;
//         return balance;
//     }
//   };
// }

// const account = createBankAccount();

// console.log(account.deposit(500));   
// console.log(account.withdraw(200));   
// console.log(account.withdraw(1000));  


// function createATM(pin){
//     let balance = 1000;
//     const correctPin = 1234;
    
//     if(pin === correctPin){
//         alert(`Balance: ${balance}`);
//     }else{
//         alert(`Invalid pin`);
//     }
 
//     return {
//         checkBalance: function(enterPin){
//             if(enterPin === correctPin){
//                 return `Your balance is: ${balance}`;
//             } else {
//                 return `Invalid pin`;
//             }
//         },    

//         deposit: function(inputPin, amount){
//             if(inputPin === correctPin){
//                 balance += amount;
//                 return `Deposited: ${amount}, New Balance: ${balance}`;
//             } else {
//                 return `Invalid pin`;
//             }
//         },

//         withdraw: function(inputPin, amount){
//             if(inputPin === correctPin){
//                 if(amount <= balance){
//                     balance -= amount;
//                     return `Withdrawn: ${amount}, New Balance: ${balance}`;
//                 } else {
//                     return `Insufficient funds`;
//                 }
//             } else {
//                 return `Invalid pin`;
//             }
// }
// }
// }


// const atm = createATM(1234);

// console.log(atm.checkBalance(1234));
// console.log(atm.deposit(1234, 500));
// console.log(atm.withdraw(1234, 200));
// console.log(atm.withdraw(1234, 2000)); // error case
// console.log(atm.checkBalance(9999));   // wrong PIN



// const user = { name: "Ali" };

// function greet(age) {
//     console.log(this.name, age);
// }

// greet.call(user, 20);



// const user = { name: "Ahmed" };

// function greet(age, city) {
//     console.log(this.name, age, city);
// }

// greet.apply(user, [22, "Karachi"]);


// const user = { name: "Sara" };

// function greet() {
//     console.log(this.name);
// }

// const newFunc = greet.bind(user);

// newFunc();



// const fruits = ["apple", "banana", "mango"];
// const [firstFruit, secondFruit, thirdFruit] = fruits;

// console.log(firstFruit);  
// console.log(secondFruit); 
// console.log(thirdFruit);



// const user = {
//     name: "Ali",
//     age: 22,
//     city: "Karachi"
// };

// const { name, age, city } = user;

// console.log(name); 
// console.log(age);  
// console.log(city);


// const student = {
//     name: "Sahal"
// };

// const { name: studentName, age: studentAge = 14 } = student;

// console.log(studentName);
// console.log(studentAge);




// function showNumbers(...nums) {
//     console.log(...nums);
// }

// showNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100);



// const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];
// const uniqueNumbers = [...new Set(numbers)];
// console.log(uniqueNumbers);

// const marks = new Map();
// marks.set("Ali", 80);
// marks.set("Sara", 90);
// marks.set("Ahmed", 70);


// console.log(marks.get("Ali"));
// console.log(marks.has("Sara"));
// console.log(marks.size);
// marks.delete("Ahmed");
// console.log(marks.size);
// console.log(marks);



// const students = new Set();
// students.add("Sahal");
// students.add("Anus");
// students.add("Zohaib");
// students.add("Sahal");

// console.log(students);
// students.delete("Zohaib");
// console.log(students.has("Zohaib"));
// console.log(students.size);



// const nums = [1, 2, 3, 4];
// const numsMap = nums.map(num => num * num);
// console.log(numsMap);


// const ages = [12, 18, 25, 10, 30];
// const adults = ages.filter(age => age >= 18);
// console.log(adults);


// const fruits = ["apple", "banana", "mango"];
// const isBananaPresent = fruits.includes("banana");
// console.log(isBananaPresent); 


// const users = [
//   {name: "Ali", age: 17},
//   {name: "Sara", age: 22},
//   {name: "Ahmed", age: 19}
// ];
// const isAdultPresent = users.find(user => user.age >= 18);
// console.log(isAdultPresent);


// const marks = [40, 55, 70, 25, 80];
// const failure = marks.some(mark => mark < 33);
// console.log(failure);


// const nums1 = [2, 4, 6, 8];
// const areAllEven = nums1.every(num => num % 2 === 0);
// console.log(areAllEven);



// const prices = [100, 200, 300];
// const totalBill = prices.reduce((total, price) => total + price, 0);
// console.log(totalBill);


// const marks1 = [80, 90, 100];
// const average = marks1.reduce((total, mark) => total + mark, 0) / marks1.length;
// console.log(average);


// const items = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const frequency = items.forEach(item => {
//     console.log(item + " is present " + items.filter(i => i === item).length + " times.");
// })


// const numbers = [5, 10, 15, 20];
// const upto10 = numbers.filter(num => num > 10);
// console.log(upto10);
// const doubledUpto10 = upto10.map(num => num + num);
// console.log(doubledUpto10);


// const arr = [1, [2, 3], [4, [5]]];
// const flatArr = arr.flat(3);
// console.log(flatArr);


// const nums2 = [100, 25, 5, 70];
// const sortedNums2 = nums2.sort((x, y) => x - y);
// console.log(sortedNums2);


// const users1 = [
//   {name: "Ali", age: 17},
//   {name: "Sara", age: 22},
//   {name: "Ahmed", age: 19},
//   {name: "Zain", age: 15}
// ];
// const adultUsersNames = users1.filter(user => user.age >= 18).map(user => user.name);
// console.log(adultUsersNames);



// const nums20 = [10, 50, 30, 90, 40];
// const maxNum20 = nums20.reduce((max, num) => num > max ? num : max, nums20[0]);
// console.log(maxNum20);


// const nums30 = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNums30 = nums30.reduce((unique, num) => {
//     if (!unique.includes(num)) {
//         unique.push(num);
//     }
//     return unique;
// }, []);
// console.log(uniqueNums30);


// const words = ["hello", "world"];
// const upperCaseWords = words.map(word => word.toUpperCase());
// console.log(upperCaseWords);



// const nums40 = [1, 2, 3, 4];
// const nums40WithDuplicates = nums40.flatMap(num => [num, num]);
// console.log(nums40WithDuplicates);



// const students = [
//   {name: "Ali", marks: [80, 90, 70]},
//   {name: "Sara", marks: [60, 75, 85]},
//   {name: "Ahmed", marks: [90, 95, 92]}
// ];
// const studentsWithAverageMarks = students.map(student => {
//     const averageMarks = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
//     return {...student, marks: averageMarks};
// });
// console.log(studentsWithAverageMarks);


//JavaScript and ECMAScript completed.
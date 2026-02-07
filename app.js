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
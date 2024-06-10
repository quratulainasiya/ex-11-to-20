// Q11:
// // defining an array.
// let friendsNames:string[]=["Amna","Hafsa","Hania","Hoorain"];

// // for loop:

// // for (let index = 0; index < friendsNames.length; index++) {
// //     console.log(friendsNames[index]);

// // for each:
// // friendsNames.forEach(name => {
// //    console.log(name) 
// // });

// //  for loop:
// // for (const names of friendsNames) {
// //     console.log(names);
// // }

// // Q12:
// // for loop:

// for (let index = 0; index < friendsNames.length; index++) {
//     console.log(`Hello! ${friendsNames[index]} how are you today?`)
//     };

//     // for each:
// friendsNames.forEach(name => {
//    console.log(`Assalam o alaikum! ${name} how are you today?`) 
// });

// //  for loop:
// for (const names of friendsNames) {
//     console.log(`Hi ${names} how are you today?`);
// }

// // Q13:

// let cars:string[]=["Honda","Toyota","Sabaru"];

// // /forEach loop:

// cars.forEach(car => {
//     console.log(`I like to drive a ${car}.`);
// });

// Q14:

// let guests:string[]=["Maryam","Annee","Romi"];

// for loop:
// guests.forEach(guest=> {
    // console.log(` Assalam o alaikum! ${guest} you are invited to dinner today.`);
// });

//  Map 
//  invite each guest

// let invitation:string[]=guests.map(guest=> ` Assalam o alaikum! ${guest} you are invited to dinner today.`)
// console.log(invitation);

// // foreach
// invitation.forEach(invitations => {
    // console.log(invitations);
// });

// Q15:

// let unableAttend=guests.splice(1,1)[0];
// console.log(`${unableAttend} can't make dinner.`);

// adding guest in place of the guest who is unable to attend

// guests.push("Aisha");
// console.log(guests);

//  print the message

// guests.forEach(guest=> {
    // console.log(`Assalam o alaikum! ${guest} you are still invited to dinner today.`);
// });

// Q16:

//  print the message

// guests.forEach(guest=> {
    // console.log(`Assalam o alaikum! ${guest} I found a bigger dinner table today.`);
// });
//  adding a guest at the beginning of array

// guests.unshift("Umama");

// adding a new guest in the middle of the array

// guests.splice(Math.floor(guests.length/2),0,"Urooj");


// adding a new guest at the end of array

// guests.push("Sara");

// print a message

// guests.forEach(guest=> {
    // console.log(`Assalam o alaikum! ${guest} you are invited to dinner today.`);
// });

// Q17:

// let guests:string[]=["Maryam","Annee","Romi"];

// //  Printing a message

//     console.log(`Assalam o alaikum! dinner table wont arrive so I can invite only two guests.`);
// guests.unshift("Ali","Asad");

// // print message updated list
// console.log("Updated list of guests:", guests);

// // // remove guests from the list
// // while (guests.length >2) {
// //     let removeGuest:string|undefined = guests.pop();
// //     if (removeGuest !== undefined){
// //         console.log(`Sorry! ${removeGuest} you can't be invited`);
// //     }}
// // console.log(guests);

// // // print message to two guests invited for dinner
// //     guests.forEach(guest => {
// //         console.log(`Dear ${guest} you both are invited for the dinner.`);
// // //     });

// // //     //  removing two guests from the list

// // //     guests.splice(0, guests.length);

// // //     //  print updated empty list

// // //     console.log("Updated list of guests:", guests);

// // // Q18:

// // Define the array of places

// let famousPlaces:string[]=["Italy","Canada","Germany","Dubai"];

// // print original order
// console.log("Original Order:", famousPlaces);

// // Print alphabetical order without modifying the original list
// console.log("Alphabetical Order:", famousPlaces.sort());

// // // Print in alphabetical order

// console.log("Alphabetical Order:", famousPlaces.slice().sort());

// // Show that the array is still in its original order
// console.log("Original Order after Sorting:", famousPlaces);

// // Print reverse alphabetical order without modifying the original list
// console.log("Reverse Alphabetical Order:", famousPlaces.sort().reverse());

// // Reverse the order of the list
// famousPlaces.reverse();
// console.log("Reversed Order:", famousPlaces);

// // Reverse the order of the list again
// famousPlaces.reverse();
// console.log("Original Order after Reversing:", famousPlaces);

// // Sort the array in alphabetical order
// famousPlaces.sort();
// console.log("Sorted in Alphabetical Order:", famousPlaces);

// // Sort the array in reverse alphabetical order
// famousPlaces.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in Reverse Alphabetical Order:", famousPlaces);

// Q19

// let guests:string[]=["Maryam","Annee","Romi"];

// //  Printing a message

//     console.log(`Assalam o alaikum! dinner table wont arrive so I can invite only two guests.`);
// guests.unshift("Ali","Asad");

// // print message updated list
// console.log("Updated list of guests:", guests);

// // // remove guests from the list
// // while (guests.length >2) {
// //     let removeGuest:string|undefined = guests.pop();
// //     if (removeGuest !== undefined){
// //         console.log(`Sorry! ${removeGuest} you can't be invited`);
// //     }}
// // console.log(guests);

// // // print message to two guests invited for dinner
// //     guests.forEach(guest => {
// //         console.log(`Dear ${guest} you both are invited for the dinner.`);
// // //     });

// // //     //  removing two guests from the list

// // //     guests.splice(0, guests.length);

// // //     //  print updated empty list

// // //     console.log("Updated list of guests:", guests);


// Q20:
// List of countries
let countries: string[] = ["United States", "Canada", "Mexico", "Brazil"];

// Print the list of countries
console.log("List of countries:");
countries.forEach(country => {
console.log(country);
});

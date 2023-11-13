//Declare an empty array;
const myArray1 = []

//Declare an array with more than 5 number of elements
const myArray2 = ["DIF", "AIK", "VIK", "IFK Göteborg", "KFF", "GIF Sundsvall"]

//Find the length of your array
const len2 = myArray2.length
console.log(len2)

// Get the first item, the middle item and the last item of the array
const myArray2First = myArray2[0]
const myArray2Last = myArray2[myArray2.length-1]
const myArray2Mid = myArray2[Math.floor(myArray2.length/2)]
console.log(myArray2First)
console.log(myArray2Last)
console.log(myArray2Mid)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const myArray3 = ["DIF", 12, "VIK", 1, "KFF", 5.0]
const len3 = myArray3.length
console.log(len3)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle",  "Amazon"]
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length-1])
// Print out each company
for(let i = 0; i < itCompanies.length;i++){
    console.log(itCompanies[i])
}
// Change each company name to uppercase one by one and print them out
for(let i = 0; i < itCompanies.length;i++){
   console.log(itCompanies[i].toUpperCase())
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", "))

//alt 2
sentence = ""
for(let i = 0; i < itCompanies.length;i++){
    if (i > 0){
        sentence = sentence + ", "
    }
    sentence += itCompanies[i]
 }
 console.log(sentence)
 

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
exists = "a company is not found"
searchFor = "Microsoft"
for(let i = 0; i < itCompanies.length;i++){
    if(itCompanies[i] === searchFor){
        exists = itCompanies[i]
    }
 }
 console.log(exists)
 
// Filter out companies which have more than one 'o' without the filter method
let result = []
for(let i = 0; i < itCompanies.length;i++){
    let numberOs = 0
    for(let j = 0;j < itCompanies[i].length; j++){
        if(itCompanies[i][j].toUpperCase() == 'O'){
            numberOs++;
        }

    }
    if(numberOs >= 2){
        result.push(itCompanies[i])
    }
 }

 console.log(result)
// Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)
// Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

// Slice out the first 3 companies from the array
const slice1 = itCompanies.slice(0,3)
console.log(slice1)

// Slice out the last 3 companies from the array
const slice2a = itCompanies.slice(itCompanies.length-3)
console.log(slice2a)


// Slice out the middle IT company or companies from the array
let start =Math.floor(itCompanies.length/2)
let end = Math.ceil(itCompanies.length/2)
const slice3a = itCompanies.slice(start,end)
console.log(slice3a)


// Remove the first IT company from the array
itCompanies.splice(0,1)
console.log(itCompanies)

// Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length/2,1)
console.log(itCompanies)

// Remove the last IT company from the array
itCompanies.splice(itCompanies.length-1,1)
console.log(itCompanies)

// Remove all IT companies
itCompanies.splice(0,itCompanies.length)
console.log(itCompanies)






// let reverseNumber = function(num){
//     if(Number.parseInt(num) === NaN){
//         return NaN
//     }

//     let n = num.toString()

//     let reverse = ""
//     for(let i = n.length-1;i >= 0; i-- ){
//         reverse += n[i].toString()
//     }
//     return reverse
// }

// console.log(reverseNumber(12240))


// let  niceCase = function(text){
//     let beforeWasSpace = true;
//     let result = ""
//     for(let i = 0; i < text.length;i++){
//         if(beforeWasSpace){
//             result = result + text[i].toUpperCase()
//         }else{
//             result = result + text[i]
//         }
//         if(text[i] === ' '){
//             beforeWasSpace = true;
//         } else{
//             beforeWasSpace = false;
//         }
//     }
//     return result
// }


// let canIBuyBeer = function(age,loc,promilleHalt){
//     if(promilleHalt > 1){
//         return false;
//     }
//     if(loc == 'S' && age >= 20){
//         return true;
//     }
//     if(loc == 'K' && age >= 20){
//         return true;
//     }
//     return false
// }



// let age = 0
// let loc = ''
// let promille = 0
// while(true){
//     age = parseFloat(prompt("Ange ålder"))
//     if(age <0 || age > 150){
//         alert("Mellan 0 och 150 tack")
//     }else{
//         break
//     }
// }


// while(true){
//     promille = parseFloat(prompt("Ange promille"))
//     if(promille <0 || promille > 2.5){
//         alert("Mellan 0 och 2.5 tack")
//     }else{
//         break
//     }
// }

// while(true){
//     loc = prompt("Ange plats S eller L")
//     if(loc == "S" || loc == "L"){
//         break;
//     }
//     alert('S eller L tack')
// }

// console.log(canIBuyBeer(age,loc,promille))




// console.log(niceCase('hej jag Heter stefan'))
// console.log(reverseNumber(12240))





// let allButtons = document.getElementsByTagName("button")
// console.log(allButtons)
// allButtons[0].innerText = "Nu ta vi rast"
// allButtons[0].addEventListener('click',()=>{
//     alert('ses 15:30');
// });


// // let ourCustomers9 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]

// // //testFunc(12+12)

// // ourCustomers9.forEach(function(value,index,array){
// //     console.log(value)
// // });

// // // console.log(ourCustomers)
// // // ourCustomers[1] = "Stark Industries Inc"
// // // console.log(ourCustomers[4])
// // // console.log(ourCustomers[1114])
// // // console.log(ourCustomers[1])
// // // console.log(ourCustomers)
// // // if(Array.isArray(ourCustomers)){

// // // }
// // //ourCustomers[0]
// // for(let boxIndex=0;boxIndex < ourCustomers9.length; boxIndex++){
// //     console.log(ourCustomers9[boxIndex])
// // }






// // let ourCustomers3 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]
// // let goodCustomers = ourCustomers3.slice(1,4) // start är inklusive, slut är exklusive
// // console.log(goodCustomers) // "Stark Industries", "Oscorp", "Pym Technologies"
// // goodCustomers[0] = "Start 123"
// // console.log(goodCustomers) // "Start 123", "Oscorp", "Pym Technologies"
// // console.log(ourCustomers3) //["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]

// // // SPLICE
// // //ta bort var som helst och även lägga in var som helst
// // let ourCustomers4 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]
// // ourCustomers4.splice(1,2) // start och HUR MÅNGA!
// // // delete


// // let ourCustomers6 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies"]

// // ourCustomers6 = ourCustomers6.splice(1,0, "The Daily Bugle") // start och HUR MÅNGA!



// // let ourCustomers2 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp"]




// // // let removed2 = ourCustomers2.shift() // ta bort den första
// // // console.log(ourCustomers2)
// // // console.log(removed2)

// // // lägg till först
// // ourCustomers2.unshift("Kalle") // ta bort den första
// // console.log(ourCustomers2)





// // // customer1 = "Test AB"
// // // customer2 = "Bla AB"
// // // customer3 = "Bla AB"
// // // // array i Javascript -> "list" "ArrayList" -> DYNAMISK


// // // let age = 12
// // // if(age===12){
// // //     let test111 = 1 // lever den bara inom sitt scope sitt block {}
// // //     console.log("asd")
// // // }
// // // console.log(test111)




// // // var e = 12

// // // let i = 12
// // // let calculateVat2 =  function (price, category="bil"){
// // //     price = price * 2
// // //     //price *= 2
// // //     console.log(category)
// // //     if( category === "bil") {
// // //         return price + 2
// // //     }
// // //     if( category === "mat") {
// // //         return price * 0.12
// // //     }
// // //     else if( category === "book") {
// // //         return price * 0.06
// // //     }
// // //     return price * 0.25
// // // }
// // // //var e = 12
// // // let ee = 12 



// // // const calculateVat3 = function (price, category="bil"){
// // //     price = price * 2
// // //     console.log(category)
// // //     if( category === "bil") {
// // //         return price + 2
// // //     }
// // //     if( category === "mat") {
// // //         return price * 0.12
// // //     }
// // //     else if( category === "book") {
// // //         return price * 0.06
// // //     }
// // //     return price * 0.25
// // // }


// // // let x = calculateVat3(12,"test")





// // // function calculateVat(price, category="bil"){
// // //     price = price * 2
// // //     console.log(category)
// // //     if( category === "bil") {
// // //         return price + 2
// // //     }
// // //     if( category === "mat") {
// // //         return price * 0.12
// // //     }
// // //     else if( category === "book") {
// // //         return price * 0.06
// // //     }
// // //     return price * 0.25
// // // }


// // // function test(){
// // //     console.log(123)
// // // }
// // //  calculateVat(200)


// // // function summera2(x,y){ // function declaration
// // //     return x + y
// // // }

// // // let summera = function(x,y){ // function expression
// // //     return x + y
// // // }

// // // let summera4 = (x,y) => { // arrow function
// // //     console.log("43r5w234423")
// // //     return x + y
// // // }


// // // let summera3 = (x,y) => { // arrow function
// // //      return x + y
// // // }
// // // //let summera3 = (x,y) => x + y



// // // let result = summera(12,19)
// // // let result2 = summera2(12,19)
// // // let result3 = summera3(12,19)



// // // let price = 100
// // // let mm = calculateVat(price, "mat")
// // // console.log('titta här', price)

// // // // beräkna oh skriv ut moms VAT
// // // let cat = "dator"
// // // let vat = calculateVat(price, cat)

// // // console.log(vat)

// // // vat = calculateVat(200, "mat")
// // // test()


// // // let a = 12

// // // if(a === 12){
// // //     console.log(a)
// // // }

// // // let allButtons = document.getElementsByTagName("button")
// // // console.log(allButtons)


// // let ourCustomers = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp"]
// // //let newCustomer = prompt("Ange den nya kunden")
// // //let newCustomer ="Whatever"

// // //ourCustomers.push(newCustomer) // LÄGGA IN EN NY push LÄNGST BAK
// // let removed = ourCustomers.pop() // Ta bort den sista
// // console.log(removed)
// // console.log(ourCustomers)



// // //console.log(typeof ourCustomers)

// // // let goodCustomers = ourCustomers.slice(1,3) 
// // // // What will be the result???



// // // let removed = ourCustomers.shift()
// // // console.log(ourCustomers)
// // // console.log(removed)


// // // // let ourCustomers = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp"]

// // // // ourCustomers.shift("Pym Tehnologies")
// // // // console.log(ourCustomers)


// // // // let numbers = [10, 5, 7, 2, 1]
// // // // numbers[1] = 3
// // // // console.log(numbers[0])
// // // // console.log(numbers[1])
// // // // console.log(numbers[2])
// // // // console.log(numbers[3])
// // // // console.log(numbers[4])
// // // // console.log(numbers[5])
// // // // console.log(numbers)


// // // // let myChildren = ["Fanny", "Josefine", "Oliver"]

// // // // let players = Array.of("Foppa", "Lidas", "Zäta")


// // // // console.log(typeof players)

// // // // if(Array.isArray(players)){
// // // //    console.log("Array")
// // // // }



// // // // for(let i = 0; i < players.length; i++){
// // // // 	console.log(players[i])
// // // // }

// // // // players.forEach(function(value,index,array){
// // // //     console.log(value)
// // // // });




// // // // let year11 = 123; // ALLTID LET


// // // // // alert("hej") -> 
// // // // // console.log("hej")
// // // // // input
// // // // // let age = prompt("Hur gammal är du?")
// // // // // age = parseInt(age)
// // // // // alert("Kul att du är " + age + " år")
// // // // // console.log(typeof age ) // age <> 51   - age "51"
// // // // // let newAge = age + 1
// // // // // alert("Om ett år är du " + newAge + " år")
 
// // // // // = tilldelning
// // // // // == jämförelse  kommer javascript att göra om till samma datatyp och sen JÄMFÖRA
// // // // // === jämförelse  kommer javascript INTE datatyp och sen JÄMFÖRA - MÅSTE VARA SAMMA DATATYP

// // // // // ALLTID ===
// // // // // ALLTID  !==   
// // // // // 

// // // // let age = "51" // age är sträng
// // // // // if (age == 51){
// // // // //     console.log("Ingen fara du är evigt ung 1")
// // // // // }
// // // // if (age === 51){
// // // //     console.log("Ingen fara du är evigt ung 2")
// // // // }else if(age === 50){
// // // //     console.log("Ingen fara du är evigt ung 3")
// // // // }else{
// // // //     console.log("Ingen fara du är evigt ung 3")
// // // // }

// // // // let yea22 = 1972
// // // // while(yea22  < 1980){
// // // //     console.log(yea22)
// // // //     yea22 = yea22+1
// // // // }

// // // // for(let year = 1972; year < 1980; year=year+1){
// // // //     console.log(year)
// // // // }






// // // // console.log('YEAR')
// // // // console.log(year11)
// // // // console.log('YEAR2')



// // // // // AVOID var
// // // // // var y = 13;

// // // // // variabel är ju nåt som  kan variera
// // // // // const
// // // // //vat = 0.25;
// // // // const vat = 0.25 // float/decimal/double

// // // // let year = 2023; // let kom 2015   // int    // Number

// // // // let yearsToAdd = 12; // INPUT

// // // // year = year + yearsToAdd; // enkelt '=' betyder TILLDELNING
// // // // year = year + 1;
// // // // //year++;


// // // // let namn = "Stefan";
// // // // let efternamn = 'Holmberg';
// // // // //let fullname = namn + " "+ efternamn;
// // // // let fullname = ` hejsan  du heter ${namn}  ${efternamn}  vad kul ` ;
// // // // let fullname2 ="  hejsan  du heter " + namn+ " " +   efternamn+  " vad kul " ;





// // // // //alert("frdewsd");
// // // // console.log(typeof year);
// // // // year = "Hemligt";
// // // // console.log(typeof year);

// // // // let a = 12345;


// // // // //alert(namn + " " + year)

// // // // console.log(year)
// // // // console.log("Hej hej nu tar vi rast på riktigt! Ses 14:15. Japp")


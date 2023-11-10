let allButtons = document.getElementsByTagName("button")
console.log(allButtons)
allButtons[0].innerText = "Nu ta vi rast"
allButtons[0].addEventListener('click',()=>{
    alert('ses 15:30');
});


// let ourCustomers9 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]

// //testFunc(12+12)

// ourCustomers9.forEach(function(value,index,array){
//     console.log(value)
// });

// // console.log(ourCustomers)
// // ourCustomers[1] = "Stark Industries Inc"
// // console.log(ourCustomers[4])
// // console.log(ourCustomers[1114])
// // console.log(ourCustomers[1])
// // console.log(ourCustomers)
// // if(Array.isArray(ourCustomers)){

// // }
// //ourCustomers[0]
// for(let boxIndex=0;boxIndex < ourCustomers9.length; boxIndex++){
//     console.log(ourCustomers9[boxIndex])
// }






// let ourCustomers3 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]
// let goodCustomers = ourCustomers3.slice(1,4) // start är inklusive, slut är exklusive
// console.log(goodCustomers) // "Stark Industries", "Oscorp", "Pym Technologies"
// goodCustomers[0] = "Start 123"
// console.log(goodCustomers) // "Start 123", "Oscorp", "Pym Technologies"
// console.log(ourCustomers3) //["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]

// // SPLICE
// //ta bort var som helst och även lägga in var som helst
// let ourCustomers4 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies", "The Daily Bugle"]
// ourCustomers4.splice(1,2) // start och HUR MÅNGA!
// // delete


// let ourCustomers6 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp", "Pym Technologies"]

// ourCustomers6 = ourCustomers6.splice(1,0, "The Daily Bugle") // start och HUR MÅNGA!



// let ourCustomers2 = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp"]




// // let removed2 = ourCustomers2.shift() // ta bort den första
// // console.log(ourCustomers2)
// // console.log(removed2)

// // lägg till först
// ourCustomers2.unshift("Kalle") // ta bort den första
// console.log(ourCustomers2)





// // customer1 = "Test AB"
// // customer2 = "Bla AB"
// // customer3 = "Bla AB"
// // // array i Javascript -> "list" "ArrayList" -> DYNAMISK


// // let age = 12
// // if(age===12){
// //     let test111 = 1 // lever den bara inom sitt scope sitt block {}
// //     console.log("asd")
// // }
// // console.log(test111)




// // var e = 12

// // let i = 12
// // let calculateVat2 =  function (price, category="bil"){
// //     price = price * 2
// //     //price *= 2
// //     console.log(category)
// //     if( category === "bil") {
// //         return price + 2
// //     }
// //     if( category === "mat") {
// //         return price * 0.12
// //     }
// //     else if( category === "book") {
// //         return price * 0.06
// //     }
// //     return price * 0.25
// // }
// // //var e = 12
// // let ee = 12 



// // const calculateVat3 = function (price, category="bil"){
// //     price = price * 2
// //     console.log(category)
// //     if( category === "bil") {
// //         return price + 2
// //     }
// //     if( category === "mat") {
// //         return price * 0.12
// //     }
// //     else if( category === "book") {
// //         return price * 0.06
// //     }
// //     return price * 0.25
// // }


// // let x = calculateVat3(12,"test")





// // function calculateVat(price, category="bil"){
// //     price = price * 2
// //     console.log(category)
// //     if( category === "bil") {
// //         return price + 2
// //     }
// //     if( category === "mat") {
// //         return price * 0.12
// //     }
// //     else if( category === "book") {
// //         return price * 0.06
// //     }
// //     return price * 0.25
// // }


// // function test(){
// //     console.log(123)
// // }
// //  calculateVat(200)


// // function summera2(x,y){ // function declaration
// //     return x + y
// // }

// // let summera = function(x,y){ // function expression
// //     return x + y
// // }

// // let summera4 = (x,y) => { // arrow function
// //     console.log("43r5w234423")
// //     return x + y
// // }


// // let summera3 = (x,y) => { // arrow function
// //      return x + y
// // }
// // //let summera3 = (x,y) => x + y



// // let result = summera(12,19)
// // let result2 = summera2(12,19)
// // let result3 = summera3(12,19)



// // let price = 100
// // let mm = calculateVat(price, "mat")
// // console.log('titta här', price)

// // // beräkna oh skriv ut moms VAT
// // let cat = "dator"
// // let vat = calculateVat(price, cat)

// // console.log(vat)

// // vat = calculateVat(200, "mat")
// // test()


// // let a = 12

// // if(a === 12){
// //     console.log(a)
// // }

// // let allButtons = document.getElementsByTagName("button")
// // console.log(allButtons)


// let ourCustomers = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp"]
// //let newCustomer = prompt("Ange den nya kunden")
// //let newCustomer ="Whatever"

// //ourCustomers.push(newCustomer) // LÄGGA IN EN NY push LÄNGST BAK
// let removed = ourCustomers.pop() // Ta bort den sista
// console.log(removed)
// console.log(ourCustomers)



// //console.log(typeof ourCustomers)

// // let goodCustomers = ourCustomers.slice(1,3) 
// // // What will be the result???



// // let removed = ourCustomers.shift()
// // console.log(ourCustomers)
// // console.log(removed)


// // // let ourCustomers = ["Hederlige Harrys Bilar AB", "Stark Industries", "Oscorp"]

// // // ourCustomers.shift("Pym Tehnologies")
// // // console.log(ourCustomers)


// // // let numbers = [10, 5, 7, 2, 1]
// // // numbers[1] = 3
// // // console.log(numbers[0])
// // // console.log(numbers[1])
// // // console.log(numbers[2])
// // // console.log(numbers[3])
// // // console.log(numbers[4])
// // // console.log(numbers[5])
// // // console.log(numbers)


// // // let myChildren = ["Fanny", "Josefine", "Oliver"]

// // // let players = Array.of("Foppa", "Lidas", "Zäta")


// // // console.log(typeof players)

// // // if(Array.isArray(players)){
// // //    console.log("Array")
// // // }



// // // for(let i = 0; i < players.length; i++){
// // // 	console.log(players[i])
// // // }

// // // players.forEach(function(value,index,array){
// // //     console.log(value)
// // // });




// // // let year11 = 123; // ALLTID LET


// // // // alert("hej") -> 
// // // // console.log("hej")
// // // // input
// // // // let age = prompt("Hur gammal är du?")
// // // // age = parseInt(age)
// // // // alert("Kul att du är " + age + " år")
// // // // console.log(typeof age ) // age <> 51   - age "51"
// // // // let newAge = age + 1
// // // // alert("Om ett år är du " + newAge + " år")
 
// // // // = tilldelning
// // // // == jämförelse  kommer javascript att göra om till samma datatyp och sen JÄMFÖRA
// // // // === jämförelse  kommer javascript INTE datatyp och sen JÄMFÖRA - MÅSTE VARA SAMMA DATATYP

// // // // ALLTID ===
// // // // ALLTID  !==   
// // // // 

// // // let age = "51" // age är sträng
// // // // if (age == 51){
// // // //     console.log("Ingen fara du är evigt ung 1")
// // // // }
// // // if (age === 51){
// // //     console.log("Ingen fara du är evigt ung 2")
// // // }else if(age === 50){
// // //     console.log("Ingen fara du är evigt ung 3")
// // // }else{
// // //     console.log("Ingen fara du är evigt ung 3")
// // // }

// // // let yea22 = 1972
// // // while(yea22  < 1980){
// // //     console.log(yea22)
// // //     yea22 = yea22+1
// // // }

// // // for(let year = 1972; year < 1980; year=year+1){
// // //     console.log(year)
// // // }






// // // console.log('YEAR')
// // // console.log(year11)
// // // console.log('YEAR2')



// // // // AVOID var
// // // // var y = 13;

// // // // variabel är ju nåt som  kan variera
// // // // const
// // // //vat = 0.25;
// // // const vat = 0.25 // float/decimal/double

// // // let year = 2023; // let kom 2015   // int    // Number

// // // let yearsToAdd = 12; // INPUT

// // // year = year + yearsToAdd; // enkelt '=' betyder TILLDELNING
// // // year = year + 1;
// // // //year++;


// // // let namn = "Stefan";
// // // let efternamn = 'Holmberg';
// // // //let fullname = namn + " "+ efternamn;
// // // let fullname = ` hejsan  du heter ${namn}  ${efternamn}  vad kul ` ;
// // // let fullname2 ="  hejsan  du heter " + namn+ " " +   efternamn+  " vad kul " ;





// // // //alert("frdewsd");
// // // console.log(typeof year);
// // // year = "Hemligt";
// // // console.log(typeof year);

// // // let a = 12345;


// // // //alert(namn + " " + year)

// // // console.log(year)
// // // console.log("Hej hej nu tar vi rast på riktigt! Ses 14:15. Japp")


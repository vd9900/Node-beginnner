//output : 1,2,fizz,,5,6,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,buzz
//---------- My code
// function fizzBuzz(n){
//     for(let i=1;i<=n;i++){
//         if(i%3==0 || i%5==0 ||i%15==0){
//             (i%3===0)?console.log("fizz"):null;
//             (i%5===0)?console.log("buzz"):null;
//             (i%15===0)?console.log("fizzbuzz"):null;
//         }else{
//             console.log(i)
//         }

//     }
// }
// fizzBuzz(20)

// --------good code
// function goodCode(n) {
//     let c3 = 0;
//     let c5 = 0;
//     for (i = 1; i < n; i++) {
//         let text = "";
//         c3++;
//         c5++;
//         if (c3 === 3) {
//             text += "fizz";
//             c3 = 0;
//         }
//         if (c5 === 5) {
//             text += "buzz";
//             c5 = 0;
//         }
//         if (text == "") {
//             console.log(i);
//         } else {
//             console.log(text);
//         }
//     }
// }
// goodCode(21);
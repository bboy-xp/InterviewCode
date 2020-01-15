// for (var index = 0; index <= 5; index++) {
//     (
//         function(i){setTimeout(() => {
//         console.log(i);
//     }, 1000)})(index)
    
// }
// for (let index = 0; index < 6; index++) {
//     setTimeout(() => {
//         console.log(index);
//     }, 1000);
    
// }
for (var index = 0; index < 6; index++) {
    setTimeout((index) => {
        console.log(index);
    }, 1000, index);
    
}
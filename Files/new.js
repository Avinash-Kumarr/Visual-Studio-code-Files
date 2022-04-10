// function avi(){
//     return 5*6;
// }
// console.log(avi());

// var a= function(){
//     return 7*8;
// }
// console.log(a());

// console.log((function(a){
//  return a*a;
// })(9));

// var y= new Function("a","b","return a+b;");
// console.log(y(6,7));
// var x= {};
// x['name']="Avi";
// x.class="11";
// x.Designation="Software Engineer";
// console.log(x);
// var y= {name:'Avi',roll:50}
// console.log(y.roll);

// function sum(a,b){
//     return(a+b);
// }

// console.log(sum(5,6));

// let avi= function(){
//    let a=4
//    return a*2;
// }
// p=avi
// console.log(p())
function uid() {
   return 'xxxxxyxxxxxx4xxx'.replace(/[xy]/g, function(c) {
     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
     return v.toString(16);
   });
 }
 function collisionTest(iterations = 1) {
   let track = new Set();
   let count = -1;
 
   void console.time('Collision test');
   
   while (++count < iterations) {
     a=uid();console.log(`${count}:-${a}`);void track.add(a);
   }
   
   void console.timeEnd('Collision test');
   void console.log('Total iterations:', iterations);
   void console.log('Total collisions:', iterations - track.size);
   void console.log('Total unique ids:', track.size);
 }
 collisionTest();


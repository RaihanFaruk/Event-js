 //1
 function makeRed() {
     document.body.style.backgroundColor = 'red';
 }
 // handle blue button click by setting function name
 // 2
 const bluebtn = document.getElementById('blueButton');
 // just set the name of the function
 bluebtn.onclick = makeBlue;

 function makeBlue() {
     document.body.style.backgroundColor = 'blue';
 }
 // handle event anonymous function

 const greenbttn = document.getElementById('greenbtn');
 // anonymous function
 greenbttn.onclick = function () {
     document.body.style.backgroundColor = 'green'

 }
 //haqndle by using add EventListner 
 const goldenrod = document.getElementById('makerod');
 goldenrod.addEventListener('click', makeGoldenRod)

 function makeGoldenRod() {
     document.body.style.backgroundColor = 'goldenrod'
 }
 // 4
 // add eventListener 
 const hotpinkbtn = document.getElementById('hotpink');
 hotpinkbtn.addEventListener('click', function () {
     document.body.style.backgroundColor = 'hotpink';
 })
 // 5
 // direct shortcut
 document.getElementById('lightBlue').addEventListener('click', function () {
     document.body.style.backgroundColor = 'lightblue'
 })
/*var a=5;
var test = ["text",5,true,null]
console.log(test);
console.log(test[0]);
console.log(test.length);
console.log(test[test.length-1])
test.push(500);
var items = ["sword", "gun"];
console.log(items);
var money = 5000;
var shield =4500;
if(money>shield){
    items.push("sheild");
    money=money-shield;
    console.log(items)
}else{
    console.log("not enough money")
}
//.pop
items.pop();
var numbers = [2, 5, 8, 9,11];
for(var i=0; i<=numbers.length-1; i++){
    console.log(numbers[i]);
}
var a = numbers[0] * numbers[numbers.length-1];
console.log(a)
var b = [1,2,3,4,5,6,7,8,9,10];
var d=0;
var e=1;
for(var c=0; c<b.length; c++){
    d=d+b[c];
    e=e*b[c];
    console.log(d,e);
}
for(var f=0; f<b.length; f++){
    if(b[f]%2==0){
        console.log("even: " + b[f])
    }else{
        console.log("odd" + b[f])
    }
}*/
var colors = ["red", "blue", "yellow", "purple"]
var body = document.getElementsByTagName('body')[0];
var i=0
var time;
var randomNumber;
console.log(randomNumber);
function ChangeColor(){
    i++;
    body.style.backgroundColor = colors[i-1];
    if(i==colors.length){
        i=0
        
    }
}
function auto(){
    time = setTimeout(ChangeColor,3000);
    document.querySelector(".auto").disabled = true;
    document.querySelector(".stop").disabled = false;
    i++;
    body.style.backgroundColor = colors[i-1];
    if(i==colors.length){
        i=0;
    }
}
function stop(){
    clearTimeout(time);
    document.querySelector(".stop").disabled = true;
    document.querySelector(".auto").disabled = false;
}
function reverse(){
    i--;
    if(i<0){
        i=colors.length-1;
    }
    body.style.backgroundColor=colors[i];
}
function random(){
    randomNumber = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor=colors[randomNumber];
}

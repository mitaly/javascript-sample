// alert("Hello");
// var msg = "my message";
/* JS is dynamically-typed language */
// msg = 90;
// alert("my message is: "+msg);

// datatypes
// number - int, float, infinity, NaN
// boolean - true/false
// String
// null - unknown value, empty
// undefined - var declared , not assigned a value
// object

// var a = "nsdo"/3;
// console.log(a);

/* modals */
// alert("learning JS");
// prompt("name?","default")
// confirm("is that ok")

//check if num is integer or not
/*function is_integer(num){
  //Number.isInteger(num)
  if(num == parseInt(num, 10)){
    console.log(num+" is integer")
  }else{
    console.log(num+" is not integer")
  }
}
is_integer(9089) */

// Array - forEach
/* function add_all_items_array(arr){
  var sum = 0;
  //forEach takes a function that takes 3 arguments
  //--- element, index, array
  arr.forEach(function(item, index, arr){
    console.log("index:"+index)
    sum += item;
  })
  console.log("sum is:"+sum);
}
add_all_items_array([10,20,30,40]) */

//factorial
/*function factorial(num){
  if(num == 0)
    return 1;
  else
    return num * factorial(num-1)
}
console.log("factorial of "+5+" is:"+factorial(5))*/


//denominations - 1,2,5,10,25
/*function get_denominations(price, coins){
  if(price == 0){
    return [];
  }else if(price >= coins[0]){
    price -= coins[0]
    return [coins[0]].concat(get_denominations(price, coins))
  }else{
    coins.shift()
    return get_denominations(price, coins)
  }
}
console.log("Used denominations for Amnt "+87+" is: "+get_denominations(87, [25,10, 5, 2, 1]))*/


//Function expressions
/*  console.log(name+" is calling....")
}
//prints entire function declaration
console.log(callMe)
//type of callMe is function
console.log(typeof(callMe))
callMe("mitaly"); */



//Arrow functions
/*var arFunc = () => console.log("Arrow func executed");
arFunc()
console.log(arFunc())
var arFunc = (val=() => 89) => val
console.log("returned from arror func:"+arFunc()) */


//Objects
/*var fruit = prompt("which is your fav fruit?", "none")
var obj = {[fruit] : 34}
console.log(obj[fruit])*/

/*var ob = {name:"mit", "class section":"B", 1:"1"}
console.log(ob["1"])
//cloning
var cloned_obj = new Object();
for(key in ob){
  cloned_obj[key] = ob[key];
}
console.log(cloned_obj)
console.log("class" in ob)*/

//objects are copied by reference
/*var ref_copied_obj = ob;
ref_copied_obj["city"] = "blr"
console.log(ob)*/

//object comparison using == and === is same
//checks the referred obj is same or not
/*console.log(ob == ref_copied_obj)*/



//JSON.parse
/*var str_json = '{"user_name":"mitaly", "password":"root"}'
var json_obj = JSON.parse(str_json)
console.log(json_obj)
console.log(json_obj.user_name)*/


//arrays - underline implementation of Obect
/*var my_arr = [];
my_arr[0] = "first";
my_arr[1] = true
my_arr[20] = 9;
console.log(my_arr)
//object
console.log(typeof(my_arr))
//true
console.log(my_arr["1"])*/



//Array operations
/*var a = [1,2,3]
var b = [4,5,6]
var c = [7,8,9]
console.log(a.concat(b,c))
console.log(a.pop())
console.log(a)
//returns length of array after inserting element at end of array
console.log(a.push(10,34))
console.log(a)
//removes front element
console.log(a.shift())
console.log(a)*/



//Array sort
/*var a = [24,46567,2,89,33]
//sorts in lexicographic order
console.log(a.sort())
//asc
console.log(a.sort(function(x, y){
  // x > y : positive value returned
  return x-y
}))
//desc
console.log(a.sort(function(x, y){
  // x < y : positive value returned
  return y-x
}))*/



//reverse string
/*function reverse_string(str){
  var rev_str = "";
  for(var i = str.length - 1; i>=0; i--)
    rev_str += str[i];
  return rev_str;
}
console.log(reverse_string("some string"))*/
//OR
/*var s = "abcd"
console.log(s.split("").reverse().join(''))*/



//sort custom Objects
/*var radius_arr = [{radius:5}, {radius:9}, {radius:2}]
console.log(radius_arr.sort(function(x, y){
    return x.radius - y.radius
}))*/


/*var ar = [1, undefined, 34, undefined, undefined]
ar[90] = undefined
//foreach will iterate over the elements which
//are explicitly set by us
function count_elements(arr){
  var counter = 0;
  arr.forEach(function(){
    counter++
  })
  return counter
}
console.log(count_elements(ar))*/


//closures
/*function my_outer_func(){
  var a = 20;
  function my_inner_func(){
    var b = 10;
    console.log((a++) +", " + (b++))
  }
  return my_inner_func;
}
var my_inner_func_a = my_outer_func()
my_inner_func_a();
my_inner_func_a();
my_inner_func_a();*/


//filter
/*var arr = [3,34,55,35,7,9,444,444,45,67,8]
console.log(arr.filter(function(element, index, arr){
  return element % 2 == 0
}));*/


//map
/*var arr = [2,12,4,5,6]
console.log(arr.map(function(element){
  return element * element
}));*/



//reduce - get range of numbers and sum them using reduce
/*function get_array_for_range(start, end, step){
  var arr = [];
  while(start <= end){
    arr.push(start)
    start += step
  }
  return arr;
}
function sum_natural_numbers(n){
  return get_array_for_range(1, n, 1).reduce(function(prev, curr){
      return prev+curr
  }, 20)
console.log(sum_natural_numbers(10))*/



//arguments object inside function
//An object having all the arguments passed to the function
/*function sum(){
  var ar = Array.prototype.slice.call(arguments)
  return ar.reduce((p, c) => {
    console.log(p, c)
    return p+c
  }, 0)
}
console.log(sum())
console.log(sum(34,4,56))*/



//find largest String using reduce
/*console.log(["abc", "assdsd", "dr", "vd", "fkjhsdfusdf", "jfdj"].reduce(
(p, c) => p.length > c.length ? p : c, ""
))*/


//sum of squares of numbers
/*console.log([3,2,4,2,5].map(elem => Math.pow(elem, 2)).reduce((p, c) => p+c, 0))*/


/*function filter_arr(arr, criteria){
  return arr.filter(function(i){
    return !criteria(i)}
  )
}
console.log(filter_arr( [23,58,0,45,8], elem => elem % 2 == 0))*/



//constructor functions
/*function Circle(r){
  this.radius = r
  this.area = () => Math.pow(this.radius, 2) * Math.PI
}
var circle1 = new Circle(3);
console.log(circle1.area())
//adding new function to constructor function, that could be accessible to all Objects
Circle.prototype.perimeter = function(){
  return 2 * Math.PI * this.radius
}
console.log(circle1.perimeter())*/


//calculate distance between points
/*function Point(x, y){
  this.x = x;
  this.y = y;
  this.calculate_distance = function(p1){
    return Math.sqrt(Math.pow(this.x - p1.x, 2) + Math.pow(this.y - p1.y, 2))
  }
}
var p = new Point(10, 20)
var p1 = new Point(34, 45)
console.log(p.calculate_distance(p1))*/



//check for palindrome
/*function reverse(s){
  return s.split("").reverse().join("")
}
function is_palindrome(){
  if(this == reverse(this)){
    return true
  }
  return false
}
String.prototype.is_palindrome = is_palindrome
console.log("aban".is_palindrome())*/

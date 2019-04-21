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
var my_arr = [];
my_arr[0] = "first";
my_arr[1] = true
my_arr[20] = 9;
console.log(my_arr)
//object
console.log(typeof(my_arr))
//true
console.log(my_arr["1"])

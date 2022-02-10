//for loop json iteration
var arr = [{
    "id":"10",
    "class":"child-of-9"
},
{
    "id":"11",
    "class":"child-of-10"
}]
for(var i=0;i<arr.length;i++){
    var obj = arr[i];
    for(var key in obj){
        var value = obj[key];
        console.log(key+":"+value);
    }
}

//for in loop json iteration
var person = {
    fname : "Nick",
    lname : "Jonas",
    age : 26
};
for (let x in person) {
    console.log(x + ":" + person[x]);
}

//for each loop json iteration
person.forEach(element => {
    console.log(element.age);
});

//forof loop json iteration
for(var obj of arr){
    console.log(obj.class);
}
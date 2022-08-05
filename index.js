//how to declare a object

const userInfo = {
    name: "Bashar ahmed ",
    villege:"katlamari"
}

// how to access the object property
console.log(userInfo.name);
console.log(userInfo["name"]);
// how to insert a object value in js
userInfo.Age = 23;
userInfo['Country'] = "Bangladesh";
console.log(userInfo);
// how to delete an property in a object

delete userInfo.Country;
console.log(userInfo);

// how to find any value in a object
console.log("name" in userInfo);
// how to itterate the obejct value 
for(var i in userInfo){
    console.log(userInfo[i]);
}
// how to find obejct keys and values 
console.log(Object.keys(userInfo));
console.log(Object.values(userInfo));
console.log(Object.entries(userInfo));




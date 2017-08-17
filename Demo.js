
var person ={
    "Firstname":"Sai",
    "Lastname":"Prasanna",
     "getfullname": function () {

    return this.Firstname + this.Lastname;
},

    "address" : "47,Royal Dr",
    "state" :"NJ",
    "City" : "Piscataway",

"isState" : function (st) {

    if (this.address.state === st) {
    return true;
}
else {
    return false;
}

}


};


console.log(person.isState("piscataway"));

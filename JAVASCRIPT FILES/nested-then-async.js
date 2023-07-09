let countValue = new Promise(function (resolve, reject) {
    resolve("promise resolved, got data sucessfully");
});
countValue
    .then(function sucessValue(result) {
        console.log(result);
    },)
    //nested .then
    .then(
        function message2() { console.log("running second function");},

    )
    //if there is no value-->use .catch 
    .catch(
        function errorValue(result) {
            console.log("value rejected");
            //console.log(result);
        }
    );
const count= true;

let countValue = new Promise(funcitoin(resolve , reject ){
    
    if (count) {
        resolve( "There is count value");

    }
    else {
        reject( "There is not count value");
    }
});
console.log(countValue);
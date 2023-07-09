let countValue = new Promise (function ( resolbe , reject ){
    resolve ( " promisesd resolbed , got data succesfully");

});
countValue.then ( function successValue ( result){
    console.log( result);
},)
// if there is no value --> use catch 

.catch (  function errorValue ( result){
    console.log(( result);)
})    
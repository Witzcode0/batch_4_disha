// pending,    - success
            // - reject


const childPromise = new Promise((resolve, reject) => {

    const parentDecision = false;

    if (parentDecision){
        resolve('I got Ice-Cream');
    }else{
        reject("I didn't get Ice-Cream");
    }

})


childPromise
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
})
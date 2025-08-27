// function first(){
//     console.log("First")
// }

// function second(){
//     console.log("second")
//     first()
// }

// second()

function displayName(func){
    let fullname = func();
    console.log("My fullname is: ", fullname)
}


function fullname(){
    let fname = "brijesh";
    let lname = "gondaliya";
    return `${fname} ${lname}`;

}

displayName(fullname);
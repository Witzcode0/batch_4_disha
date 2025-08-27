function step1(cb){
    setTimeout(() => {
        console.log("This is a step-1");
        cb();
    }, 2000);
}

function step2(cb){
    setTimeout(() => {
        console.log("This is a step-2");
        cb();
    }, 2000);
}

function step3(cb){
    setTimeout(() => {
        console.log("This is a step-3");
        cb();
    }, 2000);
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Finished all staps.")
        })
    })
})
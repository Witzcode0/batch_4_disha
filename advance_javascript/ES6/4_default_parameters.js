function bill(items, discount=5){
    // console.log(items, discount);
    var total = 0;
    for (key in items){
        console.log(key, ":", items[key]);
        total = total + items[key]
    }
    console.log("Total amount is: ", total);
    let dis = (total*discount) / 100;
    console.log("Total discount is: ", dis)
    console.log("Paid amount is: ", total - dis)
}

products = {
    tomato:60,
    potato:60,
    milk:80
}

bill(products, discount=20)
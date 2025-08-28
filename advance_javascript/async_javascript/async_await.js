// 1. What is async?

// The async keyword is used before a function to make it return a Promise automatically.

// Inside an async function, you can use await.

// async function greeting(){
//     return `Hello, `  + `Brijesh`
// }

// // console.log(greeting())

// greeting().then(result => {
//     console.log(result);
// })


// 2. What is await?

// The await keyword can only be used inside an async function.

// It makes JavaScript wait until the Promise is resolved before moving to the next line.

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve("Data loaded");
//         }, 2000)
//     })
// }

// async function getData() {
//     console.log("Fetching...");
//     let res = await fetchData();
//     console.log(res);
//     console.log("Done");
// }

// getData();

// fetchData()
// .then(res => {
//     console.log(res);
// })
// .catch(err=>{
//     console.log("ERROR: ", err);
// })

// Featch data from API using async await

// async function fetchData(apiUrl){
//     const res = await fetch(apiUrl)
//     const data = res.json();
//     return data
// }

// apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=india&appid=0sfddfsd7803b3vdgfdsfdee5c59dhjgfjhgjuvgfhg4995a3khgfky3f2b96c9f306'

// fetchData(apiUrl).then(res=>{
//     console.log(res)
// })


async function runTasks() {
  let [user, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then(r => r.json())
  ]);

  console.log(user);
  console.log(posts);
}

runTasks();

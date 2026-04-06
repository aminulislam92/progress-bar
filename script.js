const counter =document.querySelectorAll("span");
// console.log(counter);

let Arr=Array.from(counter)
// console.log(Arr);

Arr.map((item)=>{
    let count = 0;
    let increament = ()=>{
    count++;
    item.innerText=count
    if (count==item.dataset.number) {
        clearInterval(stop)
    }
}
let stop = setInterval(increament,item.dataset.number/100)
})




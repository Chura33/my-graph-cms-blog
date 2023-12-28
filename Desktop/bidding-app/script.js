let bids = [];
let bid_para = document.querySelector(".bids");

let calculator =  document.getElementById("calculator");

calculator.addEventListener('click', ()=>{
    let bidsArray = getBids(bids);
    console.log(bidsArray)
    let uniqueBids = getUniqueBids(bidsArray)
    let max = getMax(uniqueBids);
    let winner = bids.filter(obj =>{
        return Number(obj.currentBid) === max
    })
    
    winner = winner[0].name;

    const result = document.querySelector(".result");
    result.innerHTML = `<h1>The winning bid is ${max} by ${winner}</h1>`
    
})

class Person{
    constructor(name, currentBid){
        this.name = name;
        this.currentBid = currentBid;
    }
}


let forms = document.querySelectorAll('form');

forms.forEach((form)=>{
    form.addEventListener('submit', handleSubmit)
})


function handleSubmit(event){
    event.preventDefault()
    let name = event.target.querySelector('input').name;
    let value = event.target.querySelector('input').value;

    let person = new Person(name, value)
    bid_para.innerHTML = `${name} made a bid of ${value}`
    bids.push(person)
    console.log(bids)
}

function getBids(array){
    return array.map(obj=>{
         return Number(obj.currentBid);
    })
}


function getUniqueBids(array){
    let check;
    let uniqueArr = [];
    for (let i = 0; i < array.length; i++){
        check = true;
        for (let j = 0; j < array.length; j++){
                if (array[i] === array[j] && i != j){
                    check = false;
                }
        }
        if (check){
            uniqueArr.push(array[i])
        }
    }
    return uniqueArr;
}

function getMax(arr){
    let max = arr[0];

    for (let i = 0; i < arr.length; i++){
        // it would be better to store stuff in the array in increasing or decreasing order
        if (arr[i]> max){
            max = arr[i]
        }
    }
    return max;
}
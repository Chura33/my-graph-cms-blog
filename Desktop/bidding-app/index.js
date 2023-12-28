// // an app that simulates bidding from different users;
// let bids = []

// class Person{
//     constructor(name, currentBid){
//         this.name = name;
//         this.currentBid = currentBid;
//         this.placeBid = function(num){
//             // console.log(`hello ${num}`);
//             this.currentBid = num;
//             bids.push(this.currentBid)
//         }
//     }
// }


// let person1 = new Person("chura", 0);
// let person2 = new Person("Hilkiah", 0);
// let person3 = new Person("Joseph", 0);
// let person4 = new Person("Michael", 0);
// let person5 = new Person("Kristian", 0);

// person1.placeBid(5)
// person2.placeBid(4)
// person3.placeBid(12)
// person4.placeBid(12);
// person5.placeBid(5);

// console.log(bids)

// console.log(person1, person2, bids);

// to check the unique value in bids array;



// let uniqueBids  =  new Set(bids);

// let uniqueBids = bids.filter((bid, index, self)=> self.indexOf(bid)===index)

// console.log(uniqueBids)


let array = [1,2,3,3,2,5,6,5,7,8];
let uniqueArr = [];
let check;
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

console.log(uniqueArr)
const names = ['John', 'Sam', 'Peter'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length - 1]);

// methods in an array
names.push('Suresh');
console.log('After push: ' + names);
// push will add the item at the end

// ... is called as the spread operator
// it represents the entire items in the array

const names2 = [...names,'Raj'];
console.log('names2: ' + names2);

names.unshift('Poppy');
console.log('unshift:' + names)
// it adds data to the beginning
// so the index no of the res of the value will cahnge now

const names3 = ['raj', ...names];
console.log(names3);
// this will add data at the beginning
// now next slice()
// new Array 
const bikes = ['Royal Enfield','Pulsar','KTM','Benellie','RX100'];
const b1 = [...bikes.slice(0,2)];
console.log(b1);

// slice takes 2 parameters from and to
// it has copied 2 values from index 0 and assigned to b1
 const b2 = [...bikes.slice(2)];
 console.log(b2); // last 2
 const newBikes = [
     ...bikes.slice(0,2),
     'MT15',
     ...bikes.slice(2)
 ];
 console.log('newBikes: ' + newBikes);
 // new array called newBikes is created.
 // Then in index 0 and 1 values from bikes is copied using the slice(0,2) method
 // the first 2 values are copied, in the 2nd index value 'MT15' is pushed
 // then from the third index again values from bikes is copied using slice(2) - the last 2 values are added.

 const newBikes2 = [
    ...newBikes.slice(0,2),
    ...newBikes.slice(4)
];
console.log ('newBikes2: ' + newBikes2);

// now next method slice()
const indexOfSam = names.findIndex(x => x === 'Sam');
console.log('IndexOfSAM: ' + indexOfSam);

// function to delete an item from the list
 function deleteItem(nameTodelete,findNames) {
      const indexOfname = names.findIndex(x => x === nameTodelete);
      console.log('indexOfname to delete:' + indexOfname);
      const newArray =[
          ...names.slice(0, indexOfname),
          ...names.slice(indexOfname + 1)
      ];
      return newArray;
 }
 const deletedNames =  deleteItem("Poppy",names);
 console.log("Names before deleting : ",names);
 console.log("Names after deleting : ",deletedNames);

 const numbers = [1,2,3,4,5,6,7,8,9];
 console.log(numbers);
//  numbers.splice(3,2); // from the 3rd index delete the next 2 values
//  console.log(numbers);
//  (method) Array<number>.splice(start: number,deleteCount?: number)
//  mutataion method = modifies / deletes the value in the source array
//  from the 3rd index delete the next 2 values
//  the value in nnumbers are modified / deleted

const pizzaSlice = numbers.slice(2,4); // start and end index
//  (method) Array<number>.slice(start?: number, end?: numbers):
//  immutable method - does not changes the source array.
console.log('pizzaSlices: ' + pizzaSlice);
console.log('Original Numbers: ' + numbers);
// both are numbers.splice(x,y); 

const numberrs = [1,2,3,4,5,6,7,8,9];
// anytime you want to use a mutation method and NOT mutate the original array
// we need to take a copy of the array
const numberreversed = [...numberrs.reverse()]
console.log(numberreversed);
numberrs.reverse();
console.log(numberrs);




 

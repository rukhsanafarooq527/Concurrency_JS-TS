console.log('Start');

let username = 'Rukhsana';

console.log(username); 

let age = 18;

if (age < 18) {
  console.log('you are not an adult');
} else {
  console.log('you are an adult');
}

const bestFriends: string[] = ["Shaheen","Rukhsana","Zainab","Umar",];

for (let i = 0; i < bestFriends.length; i++) {
  console.log(`${bestFriends[i]} is my best friend!`);
}

type TCar = {
  model: string;
  year: number;
  isUsed: boolean;
  brand: string;
};

const car: TCar = {
  brand: 'Toyota',
  model: 'Corolla',
  isUsed: false,
  year: 2012,
};

console.log(car['brand']);
console.log(car.model);

console.log('The End');
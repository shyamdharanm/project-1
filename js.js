const array = [1, 2, 3, 4, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5];

// Create an object to keep track of the frequency of each item
const frequency = {};

// Iterate over the array and update the frequency of each item
array.forEach(item => {
  if (frequency[item]) {
    frequency[item]++;
  } else {
    frequency[item] = 1;
  }
});

// Find the item with the highest frequency
let most_frequent_item;
let highest_frequency = 0;

for (const item in frequency) {
  if (frequency[item] > highest_frequency) {
    highest_frequency = frequency[item];
    most_frequent_item = item;
  }
}

console.log("The most frequent item in the array is:", most_frequent_item);

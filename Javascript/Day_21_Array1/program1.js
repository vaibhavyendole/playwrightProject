let urls = ['www.facebook.com', 'www.google.com', 'www.instagram.com']; // Homogeneous
console.log(urls);
console.log(urls[0]);
console.log(urls[1]);
console.log(urls[2]);
console.log(urls[3]);   // undefined :  because index 3 does not exist yet
urls[3] = 'makeMyTrip.com';
console.log(urls[3]);   // makeMyTrip.com

// Array length property
console.log(urls.length); // 4 :  Indexing Start from 0

// Common array methods
urls.push('www.linkedin.com');  // .push : add element to end
console.log(urls);  //[ 'www.facebook.com', 'www.google.com', 'www.instagram.com', 'makeMyTrip.com', 'www.linkedin.com']

let popped = urls.pop();        // .pop : remove from end
console.log('popped element =', popped);    // www.linkedin.com
console.log('after pop =', urls); // [ 'www.facebook.com', 'www.google.com' 'www.instagram.com', 'makeMyTrip.com']

console.log(urls.pop());    // makeMyTrip.com
console.log(urls.push({ Name : "Vaibhav", age : 33 }))
console.log(urls)



urls.unshift('www.yahoo.com'); // add element to start
console.log('after unshift =', urls);

let shifted = urls.shift(); // remove from start
console.log('shifted element =', shifted);
console.log('after shift =', urls);

// Search methods
console.log('urls.indexOf("www.google.com") =', urls.indexOf('www.google.com'));
console.log('urls.includes("www.instagram.com") =', urls.includes('www.instagram.com'));

// Slice and splice
let part = urls.slice(0, 2); // returns new array from index 0 up to, but not including, 2
console.log('slice(0, 2) =', part);

let removed = urls.splice(1, 1, 'www.example.com'); // remove 1 item at index 1 and insert a new item
console.log('removed by splice =', removed);
console.log('urls after splice =', urls);

// Join and concat
console.log('urls.join(" | ") =', urls.join(' | '));
let moreUrls = urls.concat(['www.twitter.com', 'www.github.com']);
console.log('concat result =', moreUrls);

// Higher-order array methods
let uppercaseUrls = moreUrls.map(url => url.toUpperCase());
console.log('map to uppercase =', uppercaseUrls);

let filtered = moreUrls.filter(url => url.includes('google'));
console.log('filter includes "google" =', filtered);

let joined = moreUrls.reduce((acc, url) => acc + ';' + url, '');
console.log('reduce to string =', joined);

moreUrls.forEach((url, index) => {
  console.log(`forEach index ${index}: ${url}`);
});

// Heterogeneous array with different types
let studentInfo = ['Vaibhav Y', 22.5, 33, { key: 'A' }, true, undefined, null, ''];
console.log('studentInfo =', studentInfo);
console.log('studentInfo.length =', studentInfo.length);

// Arrays can also contain other arrays and objects
let nested = [1, [2, 3], { name: 'Alice' }];
console.log('nested array =', nested);
console.log('nested[1][0] =', nested[1][0]);
console.log('nested[2].name =', nested[2].name);

// Array prototype methods summary (most common):
// push, pop, unshift, shift, splice, slice,
// indexOf, lastIndexOf, includes,
// join, concat, toString,
// map, filter, reduce, forEach, find, findIndex,
// sort, reverse, fill, copyWithin, flat, flatMap


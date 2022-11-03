//First example of promises


//const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');


//the promise was obtained by using an API 
//obtained utilizing the fetch method

//this will log promise details******************************************************************************
//console.log("this is fetchPromise:",fetchPromise);
//console.time('name');



//the response occurred after this started request was logged to the console*********************************
//the promise allowed a function to be called out of sync ***************************************************
//we can see that the promise function occurred 16 ms after everything else *********************************
/*
fetchPromise.then((response) => {
  console.log("this is the response:",`Received response: ${response.status}`);

console.timeEnd("name");
 
});


console.log("time lap");
console.timeLog("name");
console.log("Started request…");
*/


/* Log will show this:****************************************************************************************
Promise { <state>: "pending" }
Started request…
Received response: 200 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Second example of promises - chaining promises

//const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

//response.json shows state of a promise
/* 
to obtain data, use 'then' method/handler function on the original promise(fetch) 
that a 'then' method is being used on
'then' method will return a promise****************************************************************************************
*/

/*
fetchPromise.then((response) => {
  const jsonPromise = response.json();

  jsonPromise.then((data) => {
    console.log(data[0].name);
  });

  console.log("this is response.json",jsonPromise);
  console.log("this is response",response);
  console.log("this is fetch promise", fetchPromise);
});
*/

//can rewrite code to this:
//this is promise chaining************************************************************************************************

/*
fetchPromise
  .then((response) => {

    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
  */
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Third Lesson - Catching Errors
// use catch method/handler function
//Add it to the end of the chain

/*In this example, the console will show the error message that is called 
in the catch method
*/

/*
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
fetchPromise
  .then((response) => {    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);      
    }
    console.log(response.ok);
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
  */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //Lesson 4 - Chaining multiple promises

  /*
  Promise.all() method gets an array of promises and returns a single promise
  only if after all the promises are fulfilled
  otherwise the only message in the console will be the catch message

  Here we have three fetch requests >> three promises
  status 404 means error and 200 means success
  */
/*
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`this is the response: ${response.url}: yes it worked ${response.status}`);
      console.log(response);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });
*/

 // use for of loop to iterate through array indices
 //'response' returns each promise's requested fetch info
 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 //Lesson  5 - async and await
 /* 
 This is the skeleton of an async function:

 async function myFunction (){
  const code = await function () {
    insert code here
      }
  }
 */


//Example of an async function

  async function fetchProducts() {
    try {
      const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    }
    catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  
  const promise = fetchProducts();

  //console.log(promise[0].name);   
  // "promise" is a Promise object, so this will not work, you need to use then method

  promise.then((data) => console.log(`success let's go!! ${data[0].name}`));

  // async await can replace promise syntax for the same function
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
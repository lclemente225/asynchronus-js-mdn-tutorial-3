//Example 1 utilize setTimeout();

/*
const output = document.querySelector('#output');kai
const button = document.querySelector('#set-alarm');

function setAlarm() {
  setTimeout(() => {
    output.textContent = 'Wake up!';
  }, 1000);
}

button.addEventListener('click', setAlarm);
*/

/*
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error('Alarm delay must not be negative');
      }
      setTimeout(() => {
        resolve(console.log(`Wake up, ${person}!`));
      }, delay);    
    });
  }
alarm("Bob", 2);
*/

  //put a condition to fulfill inside a promise function
  // if it succeeds, then resolve happens
  // if it fails, then reject happens
  //in this case, if the condition succeeds, then reject happens

  ////////////////////////////////////////////////////////////////////////////

//Example 2 - Using Alarm API

const name = document.querySelector('#name');
const delay = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', () => {
  alarm(name.value, delay.value)
    .then((message) => output.textContent = message)
    .catch((error) => output.textContent = `Couldn't set alarm: ${error}`);
});     
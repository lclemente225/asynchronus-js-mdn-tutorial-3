//First Example of Asynchronous JS
//not a promise or await, it is an event handler aka event listener

const log = document.querySelector('.event-log');

document.querySelector('#xhr').addEventListener('click', () => {
  log.textContent = '';

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;});

document.querySelector('#reload').addEventListener('click', () => {
  log.textContent = '';
  document.location.reload();
});


/*event listeners call a function whenever the event occurs 
ie. click a button then function will occur*/

/*Event handlers are examples of callback functions 
event listener is a function and you input a function to execute inside its parentheses*/


//Second Example shows callback functions nested in each other.
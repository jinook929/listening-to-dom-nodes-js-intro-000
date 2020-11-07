// using this file is optional
// you can also load the code snippets in using your browser's console

const main = document.getElementById('main');

main.addEventListener('click', event => { alert('I was clicked!'); });

const input = document.querySelector('input');

input.addEventListener('keydown', e => { 
  if(e.key ==='g') {
    return e.preventDefault();
  } else {
    console.log(e.key);
  }
});


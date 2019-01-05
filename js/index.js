divs = document.querySelectorAll('div');
let black;
console.log('test');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
  for (let i = 0; i < divs.length; i++) {
    if (black) {
      divs[i].style.backgroundColor = '#fff';
      black = false
    } else {
      divs[i].style.backgroundColor = '#000';
      black = true
    }
  }
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

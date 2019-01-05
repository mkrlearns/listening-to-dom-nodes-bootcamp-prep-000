divs = document.querySelectorAll('div');
let black;
console.log('test');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
  if (black) black = false
  else black = true
  for (let i = 0; i < divs.length; i++) {
    if (black) {
      divs[i].style.backgroundColor = '#fff';
    } else {
      divs[i].style.backgroundColor = '#000';
    }
  }
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

function bw() {
  
}
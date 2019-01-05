divs = document.querySelectorAll('div');
black;

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
  for (let i = 0; i < divs.length; i++) {
    if (black) {
      divs[i].style.backgroundColor = '#fff';
    } else {
      divs[i].style.backgroundColor = '#000';
      black = true
    }
  }
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

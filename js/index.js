divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
  if (this.firstChild.style.backgroundColor != '#fff') {
    this.firstChild.style.backgroundColor = '#fff';
  } else {
    this.firstChild.style.backgroundColor = '#000'
  }
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

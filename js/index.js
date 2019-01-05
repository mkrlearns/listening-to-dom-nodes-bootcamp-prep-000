divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
  for (let i = 0; i < divs.length; i++) {
    if (divs[i].style.backgroundColor != '#fff') {
      divs[i].style.backgroundColor = '#fff';
    } else {
      divs[i].style.backgroundColor = '#000'
    }
  }
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}

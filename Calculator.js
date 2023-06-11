let calculate = "";
const parentElement = document.querySelector('.container');

parentElement.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (clickedElement.innerHTML === '=') {
    calculate = eval(calculate);
    document.querySelector('#input').value = calculate;
  } else if (clickedElement.innerHTML === '%') {
    const percentage = eval(calculate) / 100;
    calculate = calculate + '*' + percentage;
    document.querySelector('#input').value = eval(calculate);
  } else if(clickedElement.innerHTML == 'AC'){
    calculate = "";
    document.querySelector('#input').value = calculate;
  }
  
  else if (clickedElement.innerHTML) {
    console.log(clickedElement);
    calculate = calculate + clickedElement.innerHTML;
    document.querySelector('#input').value = calculate;
  }
});

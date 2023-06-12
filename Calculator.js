let calculate = "";
const parentElement = document.querySelector('.container');

parentElement.addEventListener('click', (e) => {
  const clickedElement = e.target;

  if (clickedElement.innerHTML === '=') {
    try {
      calculate = eval(calculate);
      if (isNaN(calculate)) {
        calculate = "Error";
      }
      document.querySelector('#input').value = calculate;
    } catch (error) {
      calculate = "Error";
      document.querySelector('#input').value = calculate;
    }
  } else if (clickedElement.innerHTML === 'C') {
    calculate = "";
    document.querySelector('#input').value = calculate;
  } else if (clickedElement.innerHTML === 'D') {
    calculate = calculate.slice(0, -1);
    document.querySelector('#input').value = calculate;
  } else if (clickedElement.innerHTML === '%') {
    calculate = eval(calculate) / 100;
    document.querySelector('#input').value = calculate;
  } else if (clickedElement.innerHTML) {
    calculate = calculate + clickedElement.innerHTML;
    document.querySelector('#input').value = calculate;
  }
});

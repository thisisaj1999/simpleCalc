'use-strict';

// Addition
document.querySelector('.add').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);
  const ans = num1 + num2;
  console.log(ans);
  document.querySelector('.ans').textContent = ans;
});

// Subtraction
document.querySelector('.sub').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);

  let ans;
  num1 > num2 ? (ans = num1 - num2) : (ans = num2 - num1);

  document.querySelector('.ans').textContent = ans;
});

// Multiply
document.querySelector('.multiply').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);

  const ans = num1 * num2;

  document.querySelector('.ans').textContent = ans;
});

// Divide
document.querySelector('.divide').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);

  const ans = num1 > num2 ? num1 / num2 : num2 / num1;
  document.querySelector('.ans').textContent = ans;
});

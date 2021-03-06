'use-strict';

// Addition
document.querySelector('.add').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);
  const ans = num1 + num2;
  document.querySelector('.ans').textContent = ans;
});

// Subtraction
document.querySelector('.sub').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);

  const ans = num1 > num2 ? num1 - num2 : num2 - num1;

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
  //you can add "Math.trunc(ans)" to remove digits after decimals
});

// Exponential
document.querySelector('.exponential').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);
  const ans = num1 ** num2;
  document.querySelector('.ans').textContent = ans;
});

// modulus
document.querySelector('.modulus').addEventListener('click', function () {
  const num1 = Number(document.querySelector('.val1').value);
  const num2 = Number(document.querySelector('.val2').value);

  const ans = num1 % num2;
  document.querySelector('.ans').textContent = ans;
});

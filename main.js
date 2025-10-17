const availableCars = [
  '현대 아반떼',
  '기아 K5',
  '삼성 SM6',
  '쉐보레 말리부',
  'BMW 320i',
  '벤츠 E-class',
  '베뉴',
];

function checkCompatibility() {
  const userInput = document.getElementById('carModelInput').value.trim();
  const result = document.getElementById('result');

  if (availableCars.includes(userInput)) {
    result.textContent = `호환이 가능한 차량 기종입니다`;
    result.style.color = 'green';
  } else {
    result.textContent = `호환이 불가능한 차량 기종입니다.`;
    result.style.color = 'red';
  }
}

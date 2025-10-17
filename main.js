const compatibilityData = {
  현대: {
    아반떼: {
      와이퍼: true,
      에어컨필터: false,
      네비게이션필름: true,
      브레이크패달커버: true,
    },
    쏘나타: {
      와이퍼: true,
      에어컨필터: true,
      네비게이션필름: true,
      브레이크패달커버: true,
    },
  },
  기아: {
    K5: {
      와이퍼: true,
      에어컨필터: true,
      네비게이션필름: true,
      브레이크패달커버: true,
    },
    모하비: {
      와이퍼: true,
      에어컨필터: false,
      네비게이션필름: true,
      브레이크패달커버: true,
    },
  },
  삼성: {
    SM6: {
      와이퍼: true,
      에어컨필터: true,
      네비게이션필름: false,
      브레이크패달커버: false,
    },
  },
  쉐보레: {
    말리부: {
      와이퍼: true,
      에어컨필터: true,
      네비게이션필름: true,
      브레이크패달커버: true,
    },
  },
  BMW: {
    '320i': {
      와이퍼: true,
      에어컨필터: true,
      네비게이션필름: true,
      브레이크패달커버: true,
    },
  },
  벤츠: {
    'E-class': {
      와이퍼: true,
      에어컨필터: true,
      네비게이션필름: true,
      브레이크패달커버: true,
    },
  },
};

function checkCompatibility() {
  const carBrand = document.getElementById('carBrand').value;
  const carModel = document.getElementById('carModelInput').value.trim();
  const productCategory = document.getElementById('productCategory').value;
  const result = document.getElementById('result');

  // 입력값 검증
  if (!carBrand || !carModel || !productCategory) {
    result.textContent = '모든 필드를 입력해주세요.';
    result.style.color = 'red';
    return;
  }

  // 차량 브랜드와 기종, 제품 카테고리 호환성 확인
  if (
    compatibilityData[carBrand] &&
    compatibilityData[carBrand][carModel] &&
    compatibilityData[carBrand][carModel][productCategory] !== undefined
  ) {
    if (compatibilityData[carBrand][carModel][productCategory]) {
      result.textContent = `${carBrand} ${carModel}와(과) ${productCategory}는 호환됩니다`;
      result.style.color = 'green';
    } else {
      result.textContent = `${carBrand} ${carModel}와(과) ${productCategory}는 호환되지 않습니다.`;
      result.style.color = 'red';
    }
  } else {
    result.textContent = `입력한 브랜드, 기종, 또는 카테고리 정보가 잘못되었습니다.`;
    result.style.color = 'red';
  }
}

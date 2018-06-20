//Общий большой массив
var bigMass = [
  'avocado',
  'ball',
  'banana',
  'baseballСap',
  'basketball',
  'bat',
  'bear',
  'bee',
  'beer',
  'bomb',
  'boot',
  'bowling',
  'brain',
  'bug',
  'camera',
  'cancer',
  'cheese',
  'chiken',
  'coconut',
  'cookie',
  'crocodile',
  'djTool',
  'dog',
  'drums',
  'egg',
  'eightBall',
  'explosionBrainFace',
  'eye',
  'fox',
  'ghost',
  'girlFace',
  'glass',
  'guitar',
  'hammer',
  'hedgehog',
  'keyTool',
  'kiss',
  'kiwi',
  'knuckle',
  'lemon',
  'lolFace',
  'loveFace',
  'monkey',
  'monkeyFace',
  'moonFace',
  'orange',
  'owl',
  'pencil',
  'pig',
  'pigFace',
  'pingpong',
  'powerHand',
  'projector',
  'redDevilMask',
  'redFaceIndecent',
  'redMask',
  'rockHand',
  'scissors',
  'shell',
  'shoeBeige',
  'shoeRed',
  'skull',
  'socks',
  'spider',
  'sunflower',
  'surpriseFace',
  'sword',
  'teethFace',
  'tennis',
  'toungeFace',
  'turdFace',
  'turtle',
  'violin',
  'xxFace',
  'yoHand',
];

//Объявляем пустой массив
var smallMass = [];

// Сохраняем копию большого массива
var bigMassSave = bigMass.slice(0);

// Сохраняем копию маленького массива
var smallMassSave = smallMass.slice(0);

//Вытаскиваем рандомный элемент из общего массива
function getRandom(arr) {
  //Выбирает из массива случайную картинку
  return Math.floor(Math.random() * arr.length);
}

//Добавляем по две одинаковых картинки
function addTwo() {
  for (var i = 0; i < 2; i++) {
    smallMass[smallMass.length] = randImgFromBase;
  }
}

//Проверяем большой массив, если меньше чем 8 элементов — перезаписываем
function checkBigMass() {
  if (bigMass.length <= 8) {
    bigMass = bigMassSave.slice(0);
  }
}

//Получаем картинки из большого массива, вставляем в маленький, удаляем их из него
var randImgFromBase;

function getImgFromBig() {
  for (var i = 0; i < 8; i++) {
    var randNum = getRandom(bigMass);
    randImgFromBase = bigMass[randNum];
    console.log(randImgFromBase);
    addTwo();
    bigMass.splice(randNum, 1);
  }
  console.log(smallMass);
  console.log(bigMass);
}

getImgFromBig();



//flip
// https://3dtransforms.desandro.com/card-flip

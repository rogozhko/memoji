// engine stable.01

var field;
var firstELemSrc;
var secondELemSrc;
var count = 0;
var cards = document.getElementsByClassName('card');
var cardFaceBack = document.getElementsByClassName('cardFaceBack');

var menu;
var button;
var scoreP;
var score = 0;
var alert;
var title;

function addMenu() {
  menu = document.createElement('div');
  menu.className = 'menu';
  document.body.appendChild(menu);

  scoreP = document.createElement('p');
  scoreP.className = 'score';
  menu.appendChild(scoreP);
  scoreP.innerHTML = score;

  alert = document.createElement('p');
  alert.className = 'alert';
  menu.appendChild(alert);
  alert.innerHTML = '';

}
function addField() {
  field = document.createElement('div');
  field.className = 'field';
  document.body.appendChild(field);
};
function addCards() {
  for (var i = 0; i < 16; i++) {
    var wrapperCard = document.createElement('div');
    wrapperCard.className = 'wrapperCard';
    document.querySelector('.field').appendChild(wrapperCard);

    var card = document.createElement('div');
    card.className = 'card';
    wrapperCard.appendChild(card);

    var cardFace = document.createElement('div');
    cardFace.className = 'cardFace';
    cardFace.classList.add('cardFaceFront');
    card.appendChild(cardFace);

    var cardFace = document.createElement('div');
    cardFace.className = 'cardFace';
    cardFace.classList.add('cardFaceBack');
    card.appendChild(cardFace);

  }
}
function addImgs() {
  for (var i = 0; i < 16; i++) {
    var img = document.createElement('img');
    img.className = 'emoji';

    var randNum = getRandom(smallMass);
    var randImgFromSmall = 'design/emoji/' + smallMass[randNum] + '.png';
    // img.classList.add('num' + i);

    img.setAttribute("src", randImgFromSmall);

    cardFaceBack[i].appendChild(img);
    smallMass.splice(randNum, 1);
  }
  smallMass = smallMassSave.slice(0);
}

//Стартовый и конечный экраны
function addScreen(titleTxt, butName) {
  title = document.createElement('p');
  title.className = 'title';
  document.body.appendChild(title);
  title.innerHTML = titleTxt;
  button = document.createElement('button');
  button.className = 'button';
  button.addEventListener("click", start);
  button.innerHTML = butName;
  document.body.appendChild(button);
}

//Три функции устанавливают первое нажатие, второе и удаляют события
function setFirstTap() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', firstTap);
  };
}
function setSecondTap() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', secondTap);
  };
}
function removeTap() {
  for (var i = 0; i < cards.length; i++) {
    cards[i].removeEventListener('click', firstTap);
    cards[i].removeEventListener('click', secondTap);
  };
}

//Переворачивает все карточки
function showAllCards() {
  var i = 0;
  var load = setInterval(function() {
    cards[i].classList.toggle('is-flipped');
    i++;
    if (i===16) {
      clearInterval(load);
    }
  }, 20);
}

//Работа с карточками
function firstTap() {
  removeTap();

  var thisElem = event.currentTarget;

  thisElem.classList.add('is-flipped');

  //Назвать эту карточку первым элементом
  thisElem.setAttribute("name", "firstELem");

  //Записываем путь картинки первой карточки
  firstELemSrc = thisElem.childNodes[1].childNodes[0].getAttribute('src');
  console.log(firstELemSrc);

  setSecondTap();
  //Убираем event с элемента
  thisElem.removeEventListener('click', firstTap);
  thisElem.removeEventListener('click', secondTap);
}
function secondTap() {
  removeTap();
  var thisElem = event.currentTarget;
  thisElem.classList.add('is-flipped');

  //Назвать эту карточку вторым элементом
  thisElem.setAttribute("name", "secondELem");

  //Записываем путь картинки второй карточки
  secondELemSrc = thisElem.childNodes[1].childNodes[0].getAttribute('src');
  console.log(secondELemSrc);

  compare(thisElem);

}
function compare(thisElem) {
  if (firstELemSrc === secondELemSrc) {
    setTimeout(matchCards, 600);
    count++;
    console.log('count: ' + count);
    console.log('match');

  } else {
    setTimeout(noMatch, 1000);
  }
}
function matchCards() {

  //Скрываем первую
  var firstCard = document.getElementsByName("firstELem");
  firstCard[0].className = 'cardClosed';
  firstCard[0].removeAttribute("name");

  //Скрываем вторую
  var secondCard = document.getElementsByName("secondELem");
  secondCard[0].className = 'cardClosed';
  secondCard[0].removeAttribute("name");

  score += 100;
  scoreP.innerHTML = score;
  console.log(score);

  //Всем оставшимся картам ставим первый клик
  setFirstTap();
  checkCount();
}
function noMatch() {
  console.log('else');

  //Удаляем имена карточек
  var firstCard = document.getElementsByName("firstELem");
  firstCard[0].classList.remove("is-flipped");
  firstCard[0].removeAttribute("name");

  var secondCard = document.getElementsByName("secondELem");
  secondCard[0].classList.remove("is-flipped");
  secondCard[0].removeAttribute("name");

  //Назначаем всем карточкам первое поведение онклик
  setFirstTap();
}
function reset() {

  field.remove();
  menu.remove();

  checkBigMass();
  getImgFromBig();

  addScreen("Ура! Все карточки собраны!", "Новая игра");

  count = 0;
}
function checkCount() {
  if (count === 8) {
    setTimeout(reset, 1000);
  } else {

  }
}

function start() {
  document.body.removeChild(title);
  document.body.removeChild(button);
  addMenu();
  addField();
  addCards();
  addImgs();
  showAllCards();
  //Закрываем карточки через 3с
  // setTimeout(showAllCards, 3000);
  function addTap() {
    setFirstTap();
  }
  setTimeout(addTap, 1000)
}




addScreen("Собирайте по две одинаковых карточки", "Начать игру");

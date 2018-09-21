function getFirstSelector(selector) {
  const selected = document.querySelector(selector);
  return selected;
}

function nestedTarget() {
  const nestedTarget = document.querySelector('div#nested div.target');
  return nestedTarget;
}

function deepestChild() {
 let deepChild = document.querySelectorAll('div#grand-note');
    for (let i = 0; i < deepChild.length; i++) {
      deepChild = deepChild[deepchild.length - 1];
      return deepChild;
    }
}

function increaseRankBy(n) {
  const newList = document.getElementById('app').querySelectorAll('ul.ranked-list');
  for (let i = 0; i < newList.length; i++) {
    newList[i].innerHTML = (i + 1).toString();
  }
}
const myBooks = [
  "anna-Karenina",
  "madame-Bovary",
  "war-and-peace",
  "the-great-gatsby",
  "lolita",
  "middle-march",
  "the-adventures-of-huckleberry-finn",
  "The-stories-of-anton-chekhov",
  "in-search-of-lost-time",
  "hamlet",
];

(function(){
  var ul = document.createElement('ul');
  ul.setAttribute('id','proList');
  
  document.querySelector('body').appendChild(ul);
  myBooks.forEach(renderProductList);

  function renderProductList(element, index, arr) {
      var li = document.createElement('li');
      li.setAttribute('class','item');

      ul.appendChild(li);

      li.innerHTML=li.innerHTML + element;
  }
})();

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogs) {
  const dogLinksArr = [];

  Object.keys(dogs).forEach(dog => {
    const a = document.createElement("a");
    a.innerHTML = dog;
    a.href = dogs[dog];

    const li = document.createElement("li");
    li.classList.add('dog-link');
    li.appendChild(a);
    // console.log(li);

    dogLinksArr.push(li);
  })

  return dogLinksArr;
}

function attachDogLinks() {
  const dogLinks = dogLinkCreator(dogs);
  const ul = document.getElementsByClassName('drop-down-dog-list');

  dogLinks.forEach(link => {
    // console.log(ul);
    // console.log(link);
    ul[0].appendChild(link);
  })
}

function handleEnter() {
  const dogLinks = document.getElementsByClassName('dog-link');

  Array.from(dogLinks).forEach(link => {
    // console.log(link);
    link.classList.add('show');
  })
}

function handleLeave() {
  const dogLinks = document.getElementsByClassName('dog-link');

  Array.from(dogLinks).forEach(link => {
    link.classList.remove('show');
  })
}



attachDogLinks();
const nav = document.getElementsByClassName('drop-down-dog-nav');
nav[0].addEventListener('mouseenter', handleEnter);
nav[0].addEventListener('mouseleave', handleLeave);
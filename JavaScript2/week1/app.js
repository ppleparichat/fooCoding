"use strict";

const myBooks = [
  "seeds_for_the_swarm",
  "sir_callie_and_the_champions_of_heston",
  "hell_followed_with_us",
  "moon_flower",
  "at_the_end_of_everything",
  "dreadnought",
  "night_shine",
  "i_wish_you_all_the_best",
  "out_of_the_blue",
  "a_comic_about_gender",
];

const myBooksDetails = {
  seeds_for_the_swarm: {
    title: "Seeds for the Swarm",
    language: "English",
    author: "Sim Kern",
  },
  sir_callie_and_the_champions_of_heston: {
    title: "Champions of Helston",
    language: "English",
    author: "Esme Symes-Smith",
  },
  hell_followed_with_us: {
    title: "Hell Followed with Us",
    language: "English",
    author: "Andrew Joseph White",
  },
  moon_flower: {
    title: "Moonflower",
    author: "Kacen Callender",
    language: "English",
  },
  at_the_end_of_everything: {
    title: "At the End of Everything",
    language: "English",
    author: "Marieke Nijkamp",
  },
  dreadnought: {
    title: "Dreadnought",
    language: "English",
    author: "April Daniels",
  },
  night_shine: {
    title: "Night Shine",
    language: "English",
    author: "Tessa Gratton",
  },
  i_wish_you_all_the_best: {
    title: "I Wish You All the Best",
    language: "English",
    author: "Mason Deaver",
  },
  out_of_the_blue: {
    title: "Out of the Blue",
    language: "English",
    author: "Jason June",
  },
  a_comic_about_gender: {
    title: "A Comic about Gender",
    language: "English",
    author: "Rhea Ewing",
  },
};

const coverBooks = {
  seeds_for_the_swarm: "./images/seeds_for_the_swarm.jpeg",
  sir_callie_and_the_champions_of_heston:
    "./images/sir_callie_and_the_champions_of_heston.jpeg",
  hell_followed_with_us: "./images/hell_followed_with_us.jpeg",
  moon_flower: "./images/moon_flower.jpeg",
  at_the_end_of_everything: "./images/at_the_end_of_everything.jpeg",
  dreadnought: "./images/dreadnought.jpeg",
  night_shine: "./images/night_shine.jpeg",
  i_wish_you_all_the_best: "./images/i_wish_you_all_the_best.jpeg",
  out_of_the_blue: "./images/out_of_the_blue.jpeg",
  a_comic_about_gender: "./images/a_comic_about_gender.jpeg",
};

let headBody = document.body;
let title = document.createElement("h1");
title.innerHTML = "My Favorite Books";
headBody.appendChild(title);

const listContainer = document.body;
const list = document.createElement("ul");

function createListsId() {
  for (const key in myBooksDetails) {
    if (myBooksDetails.hasOwnProperty(key)) {
      const listItem = document.createElement("li");
      const img = document.createElement("img");

      listItem.innerHTML = `Title: ${myBooksDetails[key].title} <br> 
      Language: ${myBooksDetails[key].language} <br> 
      Author: ${myBooksDetails[key].author} <br>`;

      img.src = coverBooks[key];
      listItem.appendChild(img);

      list.appendChild(listItem);
    }
  }
  return listContainer.appendChild(list);
}

createListsId();

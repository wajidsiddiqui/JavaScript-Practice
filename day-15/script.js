let places = [
  {
    name: "Hagia Sophia",
    image: "https://images.unsplash.com/photo-1623621534850-d325a1980c7e?w=1000&auto=format&fit=crop&q=60"
  },
  {
    name: "Blue Mosque",
    image: "https://plus.unsplash.com/premium_photo-1678316899460-42c35917db10?w=1000&auto=format&fit=crop&q=60"
  },
  {
    name: "Galata Tower",
    image: "https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?w=1000&auto=format&fit=crop&q=60"
  },
  {
    name: "Rumeli Fortress",
    image: "https://images.unsplash.com/photo-1730471752957-3bf3506caa82?w=1000&auto=format&fit=crop&q=60"
  },
  {
    name: "Topkapi Palace",
    image: "https://plus.unsplash.com/premium_photo-1678580415107-85c783c39cc4?w=1000&auto=format&fit=crop&q=60"
  }
];

let slider = document.querySelector("#slider");
let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let count = document.querySelector("#count");
let nameLabel = document.querySelector("#name"); // optional, naam dikhane ke liye

let current = 0;

function showImage() {
    slider.src = places[current].image;          // places use karo, images nahi
    count.textContent = `${current + 1} / ${places.length}`;
    if (nameLabel) nameLabel.textContent = places[current].name;  // naam bhi dikhega
}

next.addEventListener("click", function () {
    current++;
    if (current >= places.length) {
        current = 0;
    }
    showImage();
});

prev.addEventListener("click", function () {
    current--;
    if (current < 0) {
        current = places.length - 1;
    }
    showImage();
});

showImage(); // page load pe pehli image dikhane ke liye - YE ZAROORI HAI
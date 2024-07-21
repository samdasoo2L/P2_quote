function backgroundImg() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const bgImage = document.createElement("img");
  bgImage.src = `img/${randomImage}`;
  bgImage.classList.add("bgImage");
  document.body.appendChild(bgImage);
}

backgroundImg();

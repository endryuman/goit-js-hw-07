import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionPosition: "bottom",
  captionType: "attr",
  captionsData: description,
});
gallery.on("show.simplelightbox", function () {
  // do something…
});
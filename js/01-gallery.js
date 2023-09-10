import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
  )
  .join("");
list.insertAdjacentHTML("beforeend", markup);
list.addEventListener("click", handleClick);
let instance = "";
function handleClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    console.log("exit");
    return;
  }
  let source = evt.target.dataset.source;
  instance = basicLightbox.create(
    `
    <img src="${source}" width="800" height="600">
`,
    {
      onShow: () => document.addEventListener("keydown", handleKey),
      onClose: () => document.removeEventListener("keydown", handleKey),
    }
  );

  instance.show();
}

function handleKey(evt) {
  if (basicLightbox.visible() && evt.code === "Escape") {
    instance.close();
    console.log("work");
  }
}

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

const imgGallary = document.querySelector(".gallery");
const  imgMarkup = creatGallary(galleryItems);
imgGallary.insertAdjacentHTML('beforeend', imgMarkup);

function creatGallary(galleryItems) {
    return  galleryItems.map(({preview, original, description}) => {
        return ` 
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div> 
      `;
    })
  .join('');
};

let gallery = new SimpleLightbox('.gallery a', {
    captionData: 'alt',
    captionType: 'attr',
	  captionDelay: 250,
});

gallery.on('show.simplelightbox');
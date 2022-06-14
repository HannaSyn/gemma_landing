import 'lightgallery.js';

export function initCover() {
    return {
        gallery: lightGallery(document.getElementById('lightgallery'), {
            selector: 'a' 
        })
    }
}
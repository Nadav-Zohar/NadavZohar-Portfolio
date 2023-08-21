class Gallery {
    imagesUrl = [];
    imgElem;
    currentImage = -1;
    interval;

    constructor(elemID, ...imagesUrl) {
        this.imagesUrl = imagesUrl;

        // Find the element with the given elemID and add the 'gallery' class to it.
        const galleryElem = document.getElementById(elemID);
        galleryElem.classList.add("gallery");

        // Create left and right arrow div elements and add them to the gallery element.
        const right = document.createElement('div');
        right.classList.add('arrow', 'right');
        right.innerHTML = "<<";
        galleryElem.appendChild(right);
        right.addEventListener("click", () => this.nextImage());

        const left = document.createElement('div');
        left.classList.add('arrow', 'left');
        left.innerHTML = ">>";
        galleryElem.appendChild(left);
        left.addEventListener("click", () => this.prevImage());

        // Create an image element and add it to the gallery element.
        this.imgElem = document.createElement("img");
        galleryElem.appendChild(this.imgElem);

        // Add event listeners to the gallery element to stop and start auto-sliding.
        galleryElem.addEventListener('mouseover', () => {
            this.stopAuto();
        });
        galleryElem.addEventListener('mouseout', () => {
            const myEvent = new CustomEvent("startAllGallery");
            dispatchEvent(myEvent);
        });

        // Add a global event listener to start auto-sliding for all galleries.
        addEventListener('startAllGallery', () => this.startAuto());

        // Start the gallery by showing the first image and initiating auto-sliding.
        this.nextImage();
        this.startAuto();
    }

    nextImage() {
        this.currentImage++;

        // If we have reached the end of the images, loop back to the first image.
        if (this.currentImage >= this.imagesUrl.length) {
            this.currentImage = 0;
        }

        // Set the 'src' attribute of the image element to the next image's URL.
        this.imgElem.src = this.imagesUrl[this.currentImage];
    }

    prevImage() {
        this.currentImage--;

        // If we have reached the beginning of the images, loop back to the last image.
        if (this.currentImage < 0) {
            this.currentImage = this.imagesUrl.length - 1;
        }

        // Set the 'src' attribute of the image element to the previous image's URL.
        this.imgElem.src = this.imagesUrl[this.currentImage];
    }

    startAuto() {
        // Clear any existing interval to avoid multiple auto-sliding instances.
        clearInterval(this.interval);

        // Start auto-sliding by setting an interval to call 'nextImage' every 3000ms (3 seconds).
        this.interval = setInterval(() => {
            this.nextImage();
        }, 3000);
    }

    stopAuto() {
        // Clear the interval to stop auto-sliding.
        clearInterval(this.interval);
    }
}
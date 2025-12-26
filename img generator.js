const submiticon = document.querySelector('#submit-icon');
const inputElement = document.querySelector('input');
const imageSection = document.querySelector('.image-section');

const getImages = async () => {
    const prompt = encodeURIComponent(inputElement.value); // encode prompt for URL
    const n = 2; // number of images
    imageSection.innerHTML = ''; // clear previous images

    try {
        for (let i = 0; i < n; i++) {
            // Pollinations API URL
            const url = `https://image.pollinations.ai/prompt/${prompt}`;
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');

            const img = document.createElement('img');
            img.src = url; // Pollinations generates the image directly via URL
            imageContainer.appendChild(img);

            imageSection.appendChild(imageContainer);
        }
    } catch (error) {
        console.error(error);
    }
};

submiticon.addEventListener('click', getImages);

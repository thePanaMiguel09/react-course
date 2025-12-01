import type { GiphyRandomResponse } from "../data/gipgy.response";

const api_key = import.meta.env.VITE_GIF_API_KEY;

const createImageInsideDOM = (imageUrl: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.append(imageElement);
}

const fetchGif = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`, {
    method: 'GET',
});

fetchGif.then((res) => res.json()).then(({ data: { images } }: GiphyRandomResponse) => {
    const imageURL = images.original.url;
    console.log(imageURL);
    createImageInsideDOM(imageURL);
}).catch((err) => {
    console.error(err);
});
import type { GiphyRandomResponse } from "../data/gipgy.response";

const api_key = import.meta.env.VITE_GIF_API_KEY;

const createImageInsideDOM = (imageUrl: string) => {
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    document.body.append(imageElement);
}

const getGifUrl = async () => {
    const fetchGif = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`, {
        method: 'GET',
    });

    const { data }: GiphyRandomResponse = await fetchGif.json();

    return data.images.original.url;

};

getGifUrl().then((url) => createImageInsideDOM(url));
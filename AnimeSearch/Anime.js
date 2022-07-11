const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.jikan.moe/v3/search/anime?`, config);
    console.log(res)
    makeImages(res.data.results)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.image_url) {
            const img = document.createElement('IMG');
            img.src = result.image_url;
            document.body.append(img)
        }
    }
}

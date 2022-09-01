const dataOfJson = async () => {
    const red = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await red.json();
    displayJust3data(data);
}
const displayJust3data = photos => {
    const galaryJson = document.getElementById('galary-json');
    photos = photos.slice(0, 3);
    photos.forEach(photo => {
        const { title, url, thumbnailUrl } = photo;
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML = `
                    <div class="card">
                        <img src="${url}" class="card-img-top h-50" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${title.slice(0, 30)}</h5>
                            <button id="galary-json" onclick="dataOfJsoninGalarys ()" type="button" class="btn w-100 btn-secondary btn-sm">Vew All</button>
                        </div>
                    </div>
        `;
        galaryJson.appendChild(div);

    });
}
dataOfJson();
document.getElementById('galary-json').addEventListener("click", function () {
    window.location.href = "json.html";
})

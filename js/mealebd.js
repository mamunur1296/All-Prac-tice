const dataOfTheMeleBD = async () => {
    const red = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b');
    const data = await red.json();
    displayTheMeleBD(data.meals);
}
const displayTheMeleBD = meles => {
    meles = meles.slice(0, 12);
    const galaryMeleBD = document.getElementById('galary-meleBD');
    meles.forEach(meel => {
        const { strMealThumb, strTags } = meel
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
                    <div class="card">
                        <img src="${strMealThumb}" class="card-img-top h-50" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${strTags}</h5>
                            <button id="galary-json" onclick="dataOfJsoninGalarys ()" type="button" class="btn w-100 btn-secondary btn-sm">Vew All</button>
                        </div>
                    </div>
        `;
        galaryMeleBD.appendChild(div);
    });
}
dataOfTheMeleBD();
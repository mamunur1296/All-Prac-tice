const dataOFthecocktaildb = async () => {
    const red = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m');
    const data = await red.json();
    displayThecocktsilbd(data.drinks);
}
const displayThecocktsilbd = drinkd => {
    drinkd = drinkd.slice(0, 12);
    const galaryTheCocktail = document.getElementById('galary-TheCocktail');
    drinkd.forEach(drink => {
        const { strDrinkThumb, strCategory } = drink;
        const divOfcocktel = document.createElement("div");
        divOfcocktel.classList.add('col');
        divOfcocktel.innerHTML = `
                    <div class="card">
                        <img src="${strDrinkThumb}" class="card-img-top h-50" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${strCategory}</h5>
                            <button id="galary-json" type="button" class="btn w-100 btn-secondary btn-sm">Vew All</button>
                        </div>
                    </div>
        `;
        galaryTheCocktail.appendChild(divOfcocktel);
    });
}
dataOFthecocktaildb();
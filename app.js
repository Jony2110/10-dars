let input = document.querySelector("#input");

let coctailCenter = document.querySelector("#coctailCenter");

function createTodos(data) {
  data.forEach(() => {
    let li = document.createElement("li");
    li.classList.add("list-item");

    li.innerHTML = `
    <article class="cocktail">
    <div class="img-container">
    <img src="${strDrinkThumb}" alt="A1">
    </div>
    <div class="cocktail-footer">
    <h3>${data.strDrink}</h3>
    <h4>${data.strGlass}</h4>
    <p>${data.strAlcoholic}</p>
    <a class="btn btn-primary btn-details" href="/cocktail/17222">details</a></div></article>
    `;

    coctailCenter.appendChild("li");
  });
}
fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  .then((response) => response.json())
  .then((data) => console.log(data));

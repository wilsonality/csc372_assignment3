const pageBody = document.querySelector('body');
const favBox = document.querySelector('#favorites')
// pageBody.addEventListener("click", addButtons);

let dishes = document.querySelectorAll('.dish_card_light button, .dish_card_green button, .dish_card_blue button');

for (let index = 0; index < dishes.length; index++){
    dishes[index].addEventListener("click", favoriteDish);
}

let cart = 0;
const cartTotal = document.querySelector('#cart_total');
cartTotal.textContent = "TOTAL: " + cart;

pageBody.addEventListener("DOMContentLoaded", loadButtons())

function loadButtons(event){
    let allBtns = document.querySelectorAll('button');
    for (const btn of allBtns){
        btn.classList.remove('hidden')
    }
    return; 
}

// function toggleFavorites(event){
//     // switch hide to on or off
// }

function favoriteDish(event){
    // add a dish to the fav list
    let card = event.currentTarget.parentElement;
    let price = parseInt(card.querySelector("#price span").textContent);
    card.classList.add('highlight');

    let favCard = document.createElement("div.fav_card");
    favBox.appendChild(favCard);
    
    let dishTitle = card.querySelector("h3").textContent;

    let dt = document.createElement("p");
    dt.classList.add('dt');
    let dp = document.createElement("p");
    let d_title = document.createTextNode(dishTitle);
    let d_price = document.createTextNode(price);

    dt.appendChild(d_title);
    dp.appendChild(d_price);
    favCard.appendChild(dt);
    favCard.appendChild(dp);
    
    cart += price;
    // set new cart total
    cartTotal.textContent = "TOTAL: " + (cart);
    event.currentTarget.addEventListener("click", unFav);
    event.currentTarget.removeEventListener("click", favoriteDish);
    return;
}

function unFav(event){
    let card = event.currentTarget.parentElement;
    let dishTitle = card.querySelector("h3").textContent;
    card.classList.remove('highlight');
    
    for (const child of favBox.childNodes) {
        for (const grandchild of child.childNodes){
            if (grandchild == dishTitle){
                favBox.removeChild(child);
            };
        }
    }
    event.currentTarget.removeEventListener("click", unFav);
    event.currentTarget.addEventListener("click", favoriteDish);
}
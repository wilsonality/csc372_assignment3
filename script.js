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

console.log(dishes);

function addButtons(event){
    console.log("on body click");
    return; 
}

// function toggleFavorites(event){
//     // switch hide to on or off
// }

function favoriteDish(event){
    // add a dish to the fav list
    let card = event.currentTarget.parentElement;
    let price = parseInt(card.querySelector("#price span").textContent);

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
    
    for (const child of favBox.childNodes) {
        for (const grandchild of child.childNodes){
            // console.log("grandchild",grandchild.textContent);
            // console.log("dishtitle",dishTitle);
            if (grandchild == dishTitle){
                // console.log("match");
                favBox.remove(child);
            };
        }
    }
    event.currentTarget.removeEventListener("click", unFav);
    event.currentTarget.addEventListener("click", favoriteDish);
}
/*onLoad();
function onLoad() {
    DisplayItemOnHomepage();
    displaybagitem();
}
let BagItem =[];
console.log(BagItem.length);
function addToBag(itemId) {
    BagItem.push(itemId);
    console.log(BagItem.length);

    displaybagitem();

}
function DisplayItemOnHomepage() {
    let itemsContainerElement = document.querySelector('.items-container');
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += ` <div class="item-container">
    <img class="item-image" src="${item.image}" alt="item-Image">
    <div class="rating">
       ${item.rating.stars} ⭐|${item.rating.count} </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to bag</button>
    </div>`
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    itemsContainerElement.innerHTML = innerHTML;
};
function displaybagitem() {
    let displaybagitm = document.querySelector('.bag-item-count');
    if (BagItem.length > 0) {
        displaybagitm.style.visibility = 'visible';
        displaybagitm.innerText = BagItem.length;
        console.log(BagItem.length);
    }
    else {
        displaybagitm.style.visibility = 'hidden';
    }
    

}
itemsContainerElement.innerHTML = innerHtml;*/


let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function ViewProduct(itemId) {
 
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" ><a class="btn-add-bag" href="${item.id}">View Product </a></button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}
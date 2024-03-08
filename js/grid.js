let stretch = 'stretch';


let gridExamplePlaceContent = document.querySelector(".grid-example_place-content");
let gridExampleInner = document.querySelectorAll(".grid-example__inner");

let selectAlignContent = gridExamplePlaceContent.querySelector('.grid-example__select-align-content');
let selectJustifyContent = gridExamplePlaceContent.querySelector('.grid-example__select-justify-content');

let defaultAlignContent = stretch;
let defaultJustifyContent = stretch;


selectAlignContent.addEventListener('change', function () {
  defaultAlignContent = this.value;
  gridExampleInner[0].style = 'place-content:' + defaultAlignContent + ' ' + defaultJustifyContent + ';'
});

selectJustifyContent.addEventListener('change', function () {
  defaultJustifyContent = this.value;
  gridExampleInner[0].style = 'place-content:' + defaultAlignContent + ' ' + defaultJustifyContent + ';'
});






let gridExamplePlaceSelf = document.querySelector('.grid-example_place-self');
let gridExamplePlaceSelfItem = document.querySelector('.grid-example_place-self .item');

let selectAlignSelf = gridExamplePlaceSelf.querySelector('.grid-example__select-align-self');
let selectJustifySelf = gridExamplePlaceSelf.querySelector('.grid-example__select-justify-self');

let defaultAlignSelf = stretch;
let defaultJustifySelf = stretch;


selectAlignSelf.addEventListener('change', function () {
  defaultAlignSelf = this.value;
  gridExamplePlaceSelfItem.style = 'place-self:' + defaultAlignSelf + ' ' + defaultJustifySelf + ';'
});

selectJustifySelf.addEventListener('change', function () {
  defaultJustifySelf = this.value;
  gridExamplePlaceSelfItem.style = 'place-self:' + defaultAlignSelf + ' ' + defaultJustifySelf + ';'
});





let gridExamplePlaceItems = document.querySelector(".grid-example_place-items");
let gridExamplePlaceItemsInner = gridExamplePlaceItems.querySelectorAll(".grid-example__inner");

let selectAlignItems = gridExamplePlaceItems.querySelector('.grid-example__select-align-items');
let selectJustifyItems = gridExamplePlaceItems.querySelector('.grid-example__select-justify-items');

let defaultAlignItems = stretch;
let defaultJustifyItems = stretch;

selectAlignItems.addEventListener('change', function () {
  selectAlignItems = this.value;
  gridExamplePlaceItemsInner[0].style = 'place-items:' + selectAlignItems + ' ' + defaultJustifyItems + ';'
});

selectJustifyItems.addEventListener('change', function () {
  defaultJustifyItems = this.value;
  gridExamplePlaceItemsInner[0].style = 'place-items:' + selectAlignItems + ' ' + defaultJustifyItems + ';'
});






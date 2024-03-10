

let menuOnPageBtn = document.querySelector('.menu-on-page__btn');
if (menuOnPageBtn) {
  menuOnPageBtn.onclick = function () {
  menuOnPageBtn.classList.toggle('active');
}
}
 




const tabItems = Array.from(document.querySelectorAll('.tab-item'));
const contentItems = Array.from(document.querySelectorAll('.content-item'));
//  Array.from что бы работал .find

const clearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${className}`))
}
const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${className}`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {

    if (item.classList.contains('is-active')) return

    clearActiveClass(tabItems)
    clearActiveClass(contentItems)

    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)

  })
}

tabItems.forEach(checkoutTabs);




// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 



const layoutTabItems = Array.from(document.querySelectorAll('.layout__tab-item'));
const layoutConTentItems = Array.from(document.querySelectorAll('.layout__content-item'));

const layoutClearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${className}`))
}
const layoutSetActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${className}`)
}

const layoutCheckoutTabs = (item, index) => {
  item.addEventListener('click', () => {

    if (item.classList.contains('is-active')) return

    layoutClearActiveClass(layoutTabItems)
    layoutClearActiveClass(layoutConTentItems)

    layoutSetActiveClass(layoutTabItems, index)
    layoutSetActiveClass(layoutConTentItems, index)

  })
}

layoutTabItems.forEach(layoutCheckoutTabs);




// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 



let svgBoxOne = document.querySelector(".svgBoxOne");

if (svgBoxOne) {
svgBoxOne.addEventListener('click', function () {
  svgBoxOne.classList.toggle('svgAnimOne');
});

}


let svgBoxTwo = document.querySelector(".svgBoxTwo");
if (svgBoxTwo) {
svgBoxTwo.addEventListener('click', function () {
  svgBoxTwo.classList.toggle('svgAnimTwo');
});  
}



let svgBoxThree = document.querySelector(".svgBoxThree");
if (svgBoxThree) {
svgBoxThree.addEventListener('click', function () {
  svgBoxThree.classList.toggle('svgAnimThree');
});
}




let svgBoxFour = document.querySelector(".svgBoxFour");
if (svgBoxFour) {
svgBoxFour.addEventListener('click', function () {
  svgBoxFour.classList.toggle('svgAnimFour');
});
}



// ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- 















// modal html


const openModal = document.querySelector('.openModal');
const closeModal = document.querySelector('.closeModal');
const modal = document.querySelector('.modal');


if (openModal) {
openModal.addEventListener('click', () => {
  modal.showModal();
})

closeModal.addEventListener('click', () => {
  modal.close();
})

modal.addEventListener('click', (e) => {
  // console.log(e.target);
  if (e.target === modal) modal.close();
})  
}





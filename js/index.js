const productBoxs = document.querySelector('.productBoxs');

const productsArray = [{
        id: 1,
        name: 'WATCH #1',
        discrb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit vero velit magni?',
        price: '$53',
        src: 'images/watch1.png'
    },
    {
        id: 2,
        name: 'BAG #1',
        discrb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit vero velit magni?',
        price: '$65',
        src: 'images/bag1.png'
    },
    {
        id: 3,
        name: 'SHOES #1',
        discrb: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit vero velit magni?',
        price: '$77',
        src: 'images/shoes1.png'
    }
];

productsArray.forEach((product) => {
    const newPro = document.createElement('div');
    newPro.classList.add('col-4');

    const proContent =
        `<div class="productBox shadow-lg p-4">
            <h3>${product.name}</h3>
            <p>${product.discrb}</p>
            <div class="imgBox d-flex justify-content-center">
                <img src="${product.src}" width="120px" height="150px">
            </div>
            <div class="priceBox mt-4 d-flex justify-content-evenly align-items-center">
                <span class="text-info">${product.price}</span>
                <a href="productPage.html?id=${product.id}" class="btn btn-outline-info" data-id="${product.id}" >See More</a>
            </div>
        </div>`;

    newPro.innerHTML = proContent;
    productBoxs.appendChild(newPro);
});

// *****************************************


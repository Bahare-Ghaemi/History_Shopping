const backBtn = document.querySelector('#backBtn');
const proTitle = document.querySelector('h1');
const proText = document.querySelector('p');
const proImg = document.querySelector('img');
const proPrice = document.querySelector('.proPrice');

const productsArray = [{
        id: 1,
        name: 'WATCH #1',
        discrb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum, illum provident ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatum, illum provident ipsum',
        price: '$53',
        src: 'images/watch1.png'
    },
    {
        id: 2,
        name: 'BAG #1',
        discrb: 'adipisci obcaecati molestias, natus tenetur eligendi, nulla ut excepturi voluptas delectusadipisci obcaecati molestias, natus tenetur eligendi, nulla ut excepturi voluptas delectus',
        price: '$65',
        src: 'images/bag1.png'
    },
    {
        id: 3,
        name: 'SHOES #1',
        discrb: 'molestiae quod hic ducimus itaque debitis.molestiae quod hic ducimus itaque debitis.',
        price: '$77',
        src: 'images/shoes1.png'
    }
];

const locationParams = new URLSearchParams(location.search);
const mainProductId = locationParams.get('id');

if (mainProductId === '1') {
    console.log('yess')
    proImg.style.height = '400px';
}

const sellectedProObj = productsArray.filter((pro) => {
    return pro.id === Number(mainProductId);
});

if (sellectedProObj) {
    proTitle.innerHTML = sellectedProObj[0].name;
    proText.innerHTML = sellectedProObj[0].discrb;
    proImg.src = sellectedProObj[0].src;
    proPrice.innerHTML = sellectedProObj[0].price;

}else{
    location.href = 'file:///E:/Programing/Java%20Script/saheb%20mohammadi/my%20codes/History%20Shopping/index.html';
}

backBtn.addEventListener('click', () => {
    history.back();
});
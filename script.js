console.log("this is kunal kishor");
const product = [
    {
        id: 0,
        image: 'image/img11.jpg',
        title: 'Realme Pad',
        price: 29,
    },
    {
        id: 1,
        image: 'image/img8.webp',
        title: 'Lenevo Ideapad 3',
        price: 4499,
    },
    {
        id: 2,
        image: 'image/img1.webp',
        title: 'Canon pixma',
        price:  3,
    },
    {
        id: 3,
        image: 'image/img10.webp',
        title: 'Lenevo Intel core3',
        price: 62899,
    },
    {
        id: 4,
        image: 'image/img2.webp',
        title: 'SanDisk Ultra 64',
        price: 1499,
    },
    {
        id: 5,
        image: 'image/img4.webp',
        title: 'SanDisk pendrive',
        price: 1899,
    },
    {
        id: 6,
        image: 'image/img3.webp',
        title: 'HP Ultra 64',
        price: 1899,
    },
    {
        id: 7,
        image: 'image/img5.webp',
        title: 'Dell mouse',
        price: 2200,
    },
    {
        id: 8,
        image: 'image/img6.webp',
        title: 'D-Link DIR-615',
        price: 1599,
    },
    {
        id: 9,
        image: 'image/img13.webp',
        title: 'Zook blade mouse',
        price: 3199,
    },
    {
        id: 10,
        image: 'image/img14.webp',
        title: 'TP link',
        price: 2399,
    },
    {
        id: 11,
        image: 'image/img12.webp',
        title: 'TR-Link DIR-615',
        price: 1399,
    },
    {
        id: 12,
        image: 'image/img15.webp',
        title: 'ASUS Vivobook',
        price: 40899,
    },
    {
        id: 13,
        image: 'image/img17.webp',
        title: 'Sandisc pendrive',
        price: 843,
    },
    {
        id: 14,
        image: 'image/img18.webp',
        title: 'Charging cabel',
        price: 2299,
    },
    {
        id: 15,
        image: 'image/img16.webp',
        title: 'Apple I Pad',
        price: 64899,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementsByClassName('row').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2> ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}
function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'> ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }  
}
const openCart = () =>{
    let cartOpen = document.querySelector('.sidebar');
    cartOpen.classList.toggle('sidebar_active');
    cartOpen.open(url, '_blank');
}
// ********************Javascript for searching the item***************
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputVal=search.value.toLowerCase();
    // console.log('input event fired!',inputVal);
    let noteCard = document.querySelectorAll('.col-4');
    Array.from(noteCard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("h4")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    })
})
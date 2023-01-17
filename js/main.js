let food=[
    {
        name:"Chilly Restaurant",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/suhiraasnlj1tacub76v",
        cuision:"Chinese, North Indian",
        rating:3.9,
        deliveryTime:"32 MINS",
        cost:"₹300 FOR TWO",
    },
    {
        name:"Madurai Famous Jigarthanda Llp",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nrzmqzscpmbubxlkphyi",
        cuision:"Beverages",
        rating:"--",
        deliveryTime:"29 MINS",
        cost:"₹100 FOR TWO",
    },{
        name:"Mom'S Homely Kitchen",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/c99a8184b9522bffdf43b4978a7a1878",
        cuision:"South Indian, Indian",
        rating:"--",
        deliveryTime:"28 MINS",
        cost:"₹200 FOR TWO",
    },
    {
        name:"Border Ubaith NSK Restaurant",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h7dq0naj748lyyxwma1f",
        cuision:"Chinese, North Indian",
        rating:3.3,
        deliveryTime:"42 MINS",
        cost:"₹300 FOR TWO",
    },
    {
        name:"Aasife Biriyani",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x5ejencwrp6qx9eyu9bh",
        cuision:"Desserts, Chinese",
        rating:3.6,
        deliveryTime:"36 MINS",
        cost:"₹350 FOR TWO",
    }
    ,{
        name:"Krishna Tourist Home (P) Ltd",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vygixmrxr5oferlex6sc",
        cuision:"North Indian, Chinese, Snacks, Biryani",
        rating:3.8,
        deliveryTime:"28 MINS",
        cost:"₹300 FOR TWO",
    }
    ,{
        name:"Anjuthoon The Nikkah Biryani",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/depu0rvb6xkiyrarjiyw",
        cuision:"Chinese, North Indian, Biryani",
        rating:3.5,
        deliveryTime:"46 MINS",
        cost:"₹300 FOR TWO",
    }
    ,{
        name:"Thopu Kadai",
        imageUrl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kkmeqgrsrjz9yle8ww3y",
        cuision:"South Indian, Chinese",
        rating:3.8,
        deliveryTime:"36 MINS",
        cost:"₹250 FOR TWO",
    }
]

let cont=document.querySelector(".container");

let cards=document.createElement("div");
cards.classList.add("row");
cont.appendChild(cards);

food.forEach(e=>{
    let div1=document.createElement("div");
    div1.classList.add("col");
    cards.appendChild(div1);

    let div2=document.createElement("div");
    div2.classList.add("col-card");
    div1.appendChild(div2);

    let img=document.createElement("img");
    img.src=e.imageUrl;
    div2.appendChild(img);

    let head=document.createElement("h3");
    head.innerHTML=e.name;
    div2.appendChild(head);

    let para=document.createElement("p");
    para.innerHTML=e.cuision;
    div2.appendChild(para);

    let div3=document.createElement("div");
    div3.classList.add("item-info");
    div2.appendChild(div3);

    let div3a=document.createElement("div");
    div3a.classList.add("rating");
    div3.appendChild(div3a);

    let ico=document.createElement("i");
    ico.classList.add("bi-star-fill");
    div3a.appendChild(ico);

    let span=document.createElement("span");
    span.innerHTML=e.rating;
    div3a.appendChild(span);


    let div3b=document.createElement("div");
    div3b.innerHTML="-";
    div3.appendChild(div3b);

    let div3c=document.createElement("div");
    div3c.classList.add("delTime");
    div3c.innerHTML=e.deliveryTime;
    div3.appendChild(div3c);

    let div3d=document.createElement("div");
    div3d.innerHTML="-";
    div3.appendChild(div3d);

    let div3e=document.createElement("div");
    div3e.classList.add("price");
    div3e.innerHTML=e.cost;
    div3.appendChild(div3e);

    if(e.rating<3){
        ico.style.color="#000";
    }
    else if(e.rating>=3 && e.rating<4){
        div3a.style.backgroundColor="#db7c38";
        div3a.style.color="#fff";
    }
    else if(e.rating>=4 && e.rating<=5){
        div3a.style.backgroundColor="green";
        div3a.style.color="#fff";
    }

    let offerDiv=document.createElement("div");
    offerDiv.classList.add("offer");
    div2.appendChild(offerDiv);

    let offIco=document.createElement("img");
    offIco.src="percent.png";
    offerDiv.appendChild(offIco);

    let offPara=document.createElement("span");
    offerDiv.appendChild(offPara);
    offPara.innerHTML=" 50% off | Use WELCOME50";

    let addCart=document.createElement("div");
    addCart.classList.add("addCart");
    div2.appendChild(addCart);

    let cartLabel=document.createElement("div");
    cartLabel.classList.add("cartLabel");
    addCart.appendChild(cartLabel);
    cartLabel.innerHTML="ADD TO CART"

    let cartInp=document.createElement("div");
    cartInp.classList.add("cartInp");
    addCart.appendChild(cartInp);

    let minus=document.createElement("button");
    minus.innerHTML="-";
    cartInp.appendChild(minus);

    let input1=document.createElement("input");
    input1.setAttribute("type","text");
    input1.value=0;
    cartInp.appendChild(input1);

    let plus=document.createElement("button");
    plus.innerHTML="+";
    cartInp.appendChild(plus);

    let para1=document.createElement("div");
    para1.classList.add("addOne");
    cont.appendChild(para1);

    let para2=document.createElement("p");
    para1.appendChild(para2);

    minus.addEventListener("click",function(){
        if(input1.value>0){
            input1.value--;
            para2.innerHTML="";
        }
    });
    
    plus.addEventListener("click",function(){
        input1.value++;
        para2.innerHTML=e.name;
    });

})
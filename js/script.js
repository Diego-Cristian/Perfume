var images = [ 
    "images/perfume1.jpg",
    "images/perfume2.jpg",
    "images/perfume3.jpg",
    "images/perfume4.jpg",
    "images/perfume5.jpg",
    "images/perfume 6.jpg",
    "images/perfume7.jpg",
    "images/perfume8.jpg",
    "images/perfume9.jpg"
];

var img;
var h3;
function pop1(){
    var img = document.createElement('img');
    img.src = images[0];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME1";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-1').textContent;
    document.getElementById('modal-body').prepend(h3, img);
    document.getElementById('modal-body').append(h4);
};
function pop2(){
    var img = document.createElement('img');
    img.src = images[1];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME2";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-2').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};
function pop3(){
    var img = document.createElement('img');
    img.src = images[2];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME3";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-3').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};
function pop4(){
    var img = document.createElement('img');
    img.src = images[3];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME4";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-4').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};
function pop5(){
    var img = document.createElement('img');
    img.src = images[4];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME5";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-5').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};
function pop6(){
    var img = document.createElement('img');
    img.src = images[5];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME5";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-6').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};
function pop7(){
    var img = document.createElement('img');
    img.src = images[6];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME7";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-7').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};
function pop8(){
    var img = document.createElement('img');
    img.src = images[7];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME8";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-8').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};
function pop9(){
    var img = document.createElement('img');
    img.src = images[8];
    var h3 = document.createElement('h3');
    h3.textContent = "PERFUME9";
    var h4 = document.createElement('h4');
    h4.textContent = document.getElementById('price-9').textContent;
    document.getElementById('modal-body').prepend(h3,img);
    document.getElementById('modal-body').append(h4);
};

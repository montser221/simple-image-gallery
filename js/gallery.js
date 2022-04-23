const images = ['./images/pic1.jpg','./images/pic2.jpg','./images/pic3.jpg','./images/pic4.jpg','./images/pic5.jpg'];
const imgCon = document.querySelector('.overlay');

for (let index = 0; index < images.length; index++) {
    let img = document.createElement('img');
    img.src = images[index];
    img.setAttribute('class','image');
    imgCon.appendChild(img);
}

const _img = document.querySelectorAll('img.image'),
        mainImg = document.querySelector('#main-img');
_img.forEach(function(e){
    e.addEventListener('click',function(t){
        const i = t.target;
        mainImg.src = i.src;
    });
});

const dark = document.querySelector('.btn'),
      fullimg =document.querySelector('.full-img');

dark.addEventListener('click',function(){
    if(this.classList.contains("dark"))
    {
        console.log(this.getAttribute('class'));
        this.innerText = "Lighten";
       this.classList.remove('dark');
       this.classList.add('light');
    }
    else if (this.classList.contains("light"))
    {
        this.innerText = "Darken";
        this.classList.remove('light');
        this.classList.add('dark');
        console.log(this.getAttribute('class') + "light");
    }
});
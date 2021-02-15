const num = document.getElementById('target');
const val = document.getElementById('element');

document.addEventListener("DOMContentLoaded", () => {
    fetcher();
});

//Natural Number Generator
function* number(range){
    let count = 1;
    while(count<range){
        yield count
        count+=1
    }
}

//Instantiated Generator
let sample = number(30);
function fetcher(){
    return fetch('https://picsum.photos/v2/list')
        .then((res) => {
            return res.json();
        })
        .then((images) =>{
            let carousel = `
                <li data-target="#MySlide" data-slide-to="0" class="active"></li>`;
            let element = `
                <div class="carousel-item active">
                    <img height="450" width="450" src="https://i.picsum.photos/id/1020/4288/2848.jpg?hmac=Jo3ofatg0fee3HGOliAIIkcg4KGXC8UOTO1dm5qIIPc" alt="">
                </div>
            `;
            images.forEach((image) => { 
                carousel += `
                <li data-target="#MySlide" data-slide-to="${sample.next().value}"></li>
                ` 
                element += `
                <div class="carousel-item">
                    <img height="450" width="450" src="${image.download_url}" alt="">
                </div>
                 </div>
                `
            });
            num.innerHTML = carousel;
            val.innerHTML = element;
        }).catch((err)=>{
            console.log(err);
        });
    }
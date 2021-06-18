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
                    <img height="450" width="450" src="https://images.unsplash.com/photo-1613402398192-8a354b291cf5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="">
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
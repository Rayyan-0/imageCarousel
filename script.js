const container = document.querySelector(".container")
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

const imageArr = [img1, img2, img3, img4];
const currentImg = document.createElement("img")

let index = 0;

const leftArrow = document.createElement("button");
const rightArrow = document.createElement("button");
leftArrow.textContent="Scroll Left"
rightArrow.textContent="Scroll Right"



leftArrow.addEventListener('click', () => {
    if (index > 0) {index -= 1; currentImg.src = imageArr[index].src;}
    else {index = 3; currentImg.src = imageArr[index].src}
    container.appendChild(currentImg)
    console.log(index)
    return index;
})

rightArrow.addEventListener('click', () => {
    if (index < 3) {index += 1; currentImg.src = imageArr[index].src;}
    else {index = 0; currentImg.src = imageArr[index].src}
    container.appendChild(currentImg)
    console.log(index)
    return index;
})


container.appendChild(leftArrow);
container.appendChild(rightArrow);

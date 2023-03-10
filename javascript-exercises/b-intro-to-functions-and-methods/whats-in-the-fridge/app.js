const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon' ]
const fridge = []

//Challenge: Please fill the fridge array with 5 items of your choice. 


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

upButton.disabled = true;
function moveUp(){
    const movingUp = fridge.splice(-1);
    buyList.push(movingUp[0])
    fridgeListDisplay.textContent = fridge
    buyListDisplay.textContent = buyList
    if (fridge.length === 0) {
        upButton.disabled = true;
    }else {
        downButton.disabled = false;
    }
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown(){
    const movingDown = buyList.splice(-1);
    fridge.push(movingDown[0])
    fridgeListDisplay.textContent = fridge
    buyListDisplay.textContent = buyList
    if (buyList.length === 0) {
        downButton.disabled = true;
    }else {
       upButton.disabled = false;
    }
}

downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge
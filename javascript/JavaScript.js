let rows = 10; //creating 2d array
let cols = 10;
let nothingImageSrc ='images/nothing.png'
let nothing1ImageSrc ='images/nothing1.png'
let nothing2ImageSrc ='images/nothing2.png'
let nothing3ImageSrc ='images/nothing3.png'
let house1ImageSrc ='images/house1.png'
let house2ImageSrc ='images/house2.png'
let house3ImageSrc ='images/house3.png'
let house4ImageSrc ='images/house4.png'
let house5ImageSrc ='images/house5.png'
let tree1ImageSrc ='images/tree1.png'
let tree2ImageSrc ='images/tree2.png'
let cityNameFirst = ["Віт","Порт","Лім","Гал","Кінгс","Бар","Люксін","Мюн","Ген","Сток",
"Крак","Мак","Рован","Газін","Варш","Тіміс","Заг","Ахар","Дербец","Юрм","Град","Трен","Карг","Осій","Монт"];
let cityNameLast = ["она","іра","орес","алін","ер","енс","дам","бург","ертур","гаген",
"ло","ск","анта","ая","град","ов","дів","онікі","піт","ін","овц","слава","єво","єка","віль"];

const infoBtn = document.getElementById('info-btn');
const infoText = document.getElementById('info-text');
const optionBtn = document.getElementById('options-btn');
const options = document.getElementById('options');

function createMatrix() {
	document.getElementById('matrix-container').innerHTML = '';
    let table = document.createElement('table'); // Creating a table

    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr'); // Creating a row
		let delay = 100;
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td'); // Creating a cell
			let img = document.createElement('img'); // Creating image element
            let randNum = Math.floor(Math.random() * 10); //Randomization
			if (randNum == 1){ // houses
				img.src = house1ImageSrc;
				img.alt = "house";
			}
			else if (randNum == 2){
				img.src = house2ImageSrc;
				img.alt = "house";
			}
			else if (randNum == 3){
				img.src = house3ImageSrc;
				img.alt = "house";
			}
			else if (randNum == 4){
				img.src = house4ImageSrc;
				img.alt = "house";
			}
			else if (randNum == 5){
				img.src = house5ImageSrc;
				img.alt = "house";
			}
			else if(randNum ==6){
				img.src = nothing1ImageSrc;
				img.alt = "empty";
			}
			else if(randNum == 7){
				img.src = nothing2ImageSrc;
				img.alt = "empty";
			}
						else if(randNum == 8){
				img.src = tree1ImageSrc;
				img.alt = "tree";
			}
						else if(randNum == 9){
				img.src = tree2ImageSrc;
				img.alt = "tree";
			}
			}
			}
			else {
				img.src = nothing3ImageSrc;
				img.alt = "empty";
			}
			setTimeout(() => {
			cell.appendChild(img); // Image to table cell
			}, delay);
            row.appendChild(cell); // Adding the cell to the row
			delay += 100;
        }
        table.appendChild(row);  // Adding the row to the table
    }
	document.getElementById('matrix-container').appendChild(table); // Adding the table to the page
} 

function createName() {
	let cityName = cityNameFirst[Math.floor(Math.random() * cityNameFirst.length)]+cityNameLast[Math.floor(Math.random() * cityNameLast.length)];
	document.getElementById('city-name').textContent = cityName;
}

function emptyMatrix(){
    let table = document.createElement('table'); // Creating a table
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr'); // Creating a row
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement('td'); // Creating a cell
            let img = document.createElement('img'); // Creating image element
            img.src = nothingImageSrc;
            img.alt = "empty";
            cell.appendChild(img); // Image to table cell
            row.appendChild(cell); // Adding the cell to the row
        }
        table.appendChild(row);  // Adding the row to the table
    }
    document.getElementById('matrix-container').appendChild(table); // Adding the table to the page
	document.getElementById('city-name').textContent = 'cityName';
}

emptyMatrix();
document.getElementById('generate-btn').addEventListener('click', function() { //the function to generate table on button press
    createMatrix();
	createName();
});

infoBtn.addEventListener('click', function() {
    if (!infoText.classList.contains('visible')) {
        infoText.style.visibility = 'visible'; // Making it visible first
        setTimeout(() => {
            infoText.classList.add('visible'); // Adding visible class
        }, 10);
    } else {
        infoText.classList.remove('visible'); // Removing visible class
        infoText.addEventListener('transitionend', () => {
            infoText.style.visibility = 'hidden'; // Hiding it
        }, { once: true }); // Only run this once per transition
    }
});

optionBtn.addEventListener('click', function() {
    if (!options.classList.contains('visible')) {
        options.style.visibility = 'visible'; // Making it visible first
        setTimeout(() => {
            options.classList.add('visible'); // Adding visible class
        }, 10);
    } else {
        options.classList.remove('visible'); // Removing visible class
        options.addEventListener('transitionend', () => {
            options.style.visibility = 'hidden'; // Hiding it
        }, { once: true }); // Only run this once per transition
    }
});

const audioElement = document.getElementById('backgroundMusic'); //audio documents
let isAudioPlaying = false;

document.body.addEventListener('click', function startAudio() { //activation on interaction
    if (!isAudioPlaying) {
        audioElement.play();
        isAudioPlaying = true;
    }
    document.body.removeEventListener('click', startAudio);
});

const toggleMusicBtn = document.getElementById('toggleMusicBtn');
toggleMusicBtn.addEventListener('click', function () {
    if (audioElement.paused) {
        audioElement.play();
        toggleMusicBtn.innerHTML = '<i class="fa fa-volume-up"></i>'; // Update button text
    } else {
        audioElement.pause();
        toggleMusicBtn.innerHTML = '<i class="fa fa-volume-off"></i>'; // Update button text
    }
});
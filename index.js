const favAn = "favorite animal is"
const feels = "usually feels"
const eat = "loves to eat"
const favCol = "favorite color is"

const animals = ["🐻", "🦁", "🐧", "🐵", "🐥", "🐶", "🐙"]
const emotion = ["😊", "😢", "😱", "😡", "😍"]
const food = ["🍕", "🌮", "🍔", "🍝", "🍙"]
const color = ["deepskyblue", "gold", "firebrick", "limegreen", "mediumpurple", "palevioletred"]
const girlPerson = ["👧🏻", "👩🏻", "👵🏻"]
const boyPerson = ["👦🏻", "👨🏻", "👨🏻‍🦳"]

let personChosen = " "
let animalChosen = " "
let emotionChosen = " "
let foodChosen = " "
let colorChosen = " "
let age = 0
let selectedGenre = " "
let possessive = " "
let prenom = " "
let canContinue = true

const genBtn = document.getElementById("generate-btn")
const card = document.getElementById("card-section")

const nameEl = document.getElementById("name-el")
let nameText = document.getElementById("name")
let ageEl = document.getElementById("age-el")
age = ageEl.value
const radioButtons = document.querySelectorAll('input[name="genre"]')
const textInfo = document.getElementById("text-info")
const selectedAnimal = document.querySelector('#animal-el')
const selectedEmotion = document.querySelector('#emotion-el')
const selectedFood = document.querySelector('#food-el')
const selectedColor = document.querySelector('#color-el')

genBtn.addEventListener("click", function() {
    if (nameEl.value === " " || ageEl.value === 0) {
        canContinue = false
    }

    if (canContinue) {
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                selectedGenre = radioButton.value
                break;
            }
        }

        if (selectedGenre === "boy") {
            if (ageEl.value > 60) {
                personChosen = boyPerson[2]
            } else if (ageEl.value < 18) {
                personChosen = boyPerson[0]
            } else {
                personChosen = boyPerson[1]
            }
            console.log(personChosen)
            possessive = "His"
            prenom = "He"
        }

        if (selectedGenre === "girl") {
            if (ageEl.value > 60) {
                personChosen = girlPerson[2]
            } else if (ageEl.value < 18) {
                personChosen = girlPerson[0]
            } else {
                personChosen = girlPerson[1]
            }
            console.log(personChosen)
            possessive = "Her"
            prenom = "She"
        }

        switch (selectedAnimal.selectedIndex) {
            case 0:
                animalChosen = animals[0];
                break;
            case 1:
                animalChosen = animals[1];
                break;
            case 2:
                animalChosen = animals[2];
                break;
            case 3:
                animalChosen = animals[3];
                break;
            case 4:
                animalChosen = animals[4];
                break;
            case 5:
                animalChosen = animals[5];
                break;
            case 6:
                animalChosen = animals[6];
                break;

        }

        switch (selectedEmotion.selectedIndex) {
            case 0:
                emotionChosen = emotion[0];
                break;
            case 1:
                emotionChosen = emotion[1];
                break;
            case 2:
                emotionChosen = emotion[2];
                break;
            case 3:
                emotionChosen = emotion[3];
                break;
            case 4:
                emotionChosen = emotion[4];
                break;
        }

        switch (selectedFood.selectedIndex) {
            case 0:
                foodChosen = food[0];
                break;
            case 1:
                foodChosen = food[1];
                break;
            case 2:
                foodChosen = food[2];
                break;
            case 3:
                foodChosen = food[3];
                break;
            case 4:
                foodChosen = food[4];
                break;
        }

        switch (selectedColor.selectedIndex) {
            case 0:
                colorChosen = color[0];
                break;
            case 1:
                colorChosen = color[1];
                break;
            case 2:
                colorChosen = color[2];
                break;
            case 3:
                colorChosen = color[3];
                break;
            case 4:
                colorChosen = color[4];
                break;
            case 5:
                colorChosen = color[5];
                break;
        }

        card.style.backgroundColor = colorChosen;


        person.textContent = personChosen
        nameText.textContent = nameEl.value

        textInfo.innerHTML = `<p> ${possessive} ${favAn} <span class="emojiSpan">${animalChosen}</span>. ${prenom} ${feels} ${emotionChosen}. ${prenom} ${eat} ${foodChosen}. ${possessive} ${favCol} ${selectedColor.value}. </p>`



        console.log("funciona")
    }

})
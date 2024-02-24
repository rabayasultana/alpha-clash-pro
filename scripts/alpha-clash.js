// function play(){
//     // step 1-hide the home screen.to hide the screen  add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function continueGame(){
 // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

function getARandomAlphabet(){
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    //get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber); 

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}
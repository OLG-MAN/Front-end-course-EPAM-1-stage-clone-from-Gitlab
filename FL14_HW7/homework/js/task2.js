let wordInput = prompt('Input your word..');

function wordMiddle() {

    let position;
    let length;

    if (wordInput === '  ') {
        alert('Invalid input data');
    } else if (wordInput === '') {
        alert('Invalid input data');
    } else if (wordInput.length % 2 === 1) {
        position = wordInput.length / 2;
        length = 1;
    } else {
        position = wordInput.length / 2 - 1;
        length = 2;
    }
    alert(wordInput.substring(position, position + length));
}

wordMiddle();
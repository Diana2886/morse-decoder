const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arrForDecoding = [];
    
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substr(i, 10));
    }
    for (let item of arr) {
      let arr1 = [];
      if (item === '**********') {
        arrForDecoding.push(' ');
        continue;
      } else {
        for (let i = 0; i < item.length; i += 2) {
          arr1.push(item.substr(i, 2));
        }
      }
      let arr2 = [];
      arr1.forEach(e => {
        if (e === '11') {
          arr2.push('-');
        } else if (e === '10') {
          arr2.push('.');
        }
      })
      arrForDecoding.push(arr2.join(''));
    }
    let resultArr = [];
    for (let i of arrForDecoding) {
      if (MORSE_TABLE[i]) {
        resultArr.push(MORSE_TABLE[i]);
      } else {
        resultArr.push(' ');
      }
    }
    return resultArr.join('');
}

module.exports = {
    decode
}
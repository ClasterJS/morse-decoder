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
    // write your solution here
    //start task
    // const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
    //const result = "hello world";
    let arr = [];
    let str = '';
    for (i = 1; i < expr.length + 1 ; i++ ) {
      str += expr[i-1];
      if (i % 10 === 0) {
        arr.push(str);
        str = '';
      }
    }

    str = arr.join(';');

    let out = str.replace(/10|11|0|\*{10}/g, function(c) {
      return {
        '10' : '.',
        '11' : '-',
        '0'  : '',
        '**********' : ' '
      } [c]
    }  )

    arr = out.split(';')

    for (let i = 0; i < arr.length; i++) {

      for (let key in MORSE_TABLE) {
        if (key === arr[i]) {
            arr[i] = MORSE_TABLE[key];
        }
      }
    }

    return arr.join('');
}

module.exports = {
    decode
}
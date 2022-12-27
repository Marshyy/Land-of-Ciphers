import React, { useState } from 'react';

const playfair = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [secretKey, setKey] = useState('Nirvana');

  function encryptor(txt, locations, key) {
    let i,
      j,
      a = {},
      b = {},
      encrypt = '';

    txt = txt.toLowerCase().match(/.{1,2}/g);
    if (txt[txt.length - 1].length == 1) txt[txt.length - 1] += 'x';

    for (i = 0; i < txt.length; i++) {
      a.l = txt[i][0];
      b.l = txt[i][1];

      if (a.l === b.l) b.l = 'x';
      a.loc = locations[a.l];
      b.loc = locations[b.l];

      if (a.loc[0] == b.loc[0] && a.loc[1] == b.loc[1]) {
        encrypt += 'xx';
      } else if (a.loc[0] == b.loc[0]) {
        if (a.loc[1] + 1 == 7) {
          j = 0;
        } else {
          j = a.loc[1] + 1;
        }
        encrypt += key[a.loc[0]][j];

        if (b.loc[1] + 1 == 7) {
          j = 0;
        } else {
          j = b.loc[1] + 1;
        }
        encrypt += key[b.loc[0]][j];
      } else if (a.loc[1] == b.loc[1]) {
        if (a.loc[0] + 1 == 7) {
          j = 0;
        } else {
          j = a.loc[0] + 1;
        }
        encrypt += key[j][a.loc[1]];

        if (b.loc[0] + 1 == 7) {
          j = 0;
        } else {
          j = b.loc[0] + 1;
        }
        encrypt += key[j][b.loc[1]];
      } else {
        encrypt += key[a.loc[0]][b.loc[1]];
        encrypt += key[b.loc[0]][a.loc[1]];
      }
    }

    return encrypt;
  }

  function decryptor(txt, locations, key) {
    let i,
      j,
      a = {},
      b = {},
      decrypt = '';

    txt = txt.toLowerCase().match(/.{1,2}/g);

    for (i = 0; i < txt.length; i++) {
      a.l = txt[i][0];
      b.l = txt[i][1];
      a.loc = locations[a.l];
      b.loc = locations[b.l];

      if (a.l == b.l) {
        decrypt += 'xx';
      } else if (a.loc[0] == b.loc[0]) {
        if (a.loc[1] - 1 == -1) {
          j = 6;
        } else {
          j = a.loc[1] - 1;
        }
        decrypt += key[a.loc[0]][j];

        if (b.loc[1] - 1 == -1) {
          j = 6;
        } else {
          j = b.loc[1] - 1;
        }
        decrypt += key[b.loc[0]][j];
      } else if (a.loc[1] == b.loc[1]) {
        if (a.loc[0] - 1 == -1) {
          j = 6;
        } else {
          j = a.loc[0] - 1;
        }
        decrypt += key[j][a.loc[1]];

        if (b.loc[0] - 1 == -1) {
          j = 6;
        } else {
          j = b.loc[0] - 1;
        }
        decrypt += key[j][b.loc[1]];
      } else {
        decrypt += key[a.loc[0]][b.loc[1]];
        decrypt += key[b.loc[0]][a.loc[1]];
      }
    }

    return decrypt;
  }

  function PlayfairCipher(message, key, Decrypt = false) {
    let temp = []; // Empty Array
    let i, j, k;

    key = key.toLowerCase();

    // Getting our Key
    key += 'abcdefghijklmnopqrstuvwxyz1234567890.,!?@$%()/`# ';
    key = key.split('');

    key.forEach(function (elem) {
      if (!temp.includes(elem)) {
        temp.push(elem);
      }
    });

    // Setting up our 2 Dimentional Array [Matrix]

    let Realkey = [];
    let location = {};
    for (i = 0; i < 7; i++) {
      Realkey[i] = [];
    } // Array Initialization, won't work otherwise

    for (i = 0, k = 0; i < 7; i++) {
      for (j = 0; j < 7; j++) {
        Realkey[i][j] = temp[k];
        location[temp[k++]] = [i, j];
      }
    }

    if (Decrypt) {
        return decryptor(message, location, Realkey);
    } else {
        return encryptor(message, location, Realkey);
    }
  }

  return (
    <div className="min-h-screen px-3 py-5 lg:px-20 lg:py-10">
      <div class="w-full text-center text-6xl font-bold text-brandPink">
        Playfair Cipher
      </div>
      <div className="my-3 w-full text-left text-sm text-gray-600">
      The Playfair cipher is a manual symmetric encryption technique and was the first practical digraph substitution cipher. 
      It was invented by Charles Wheatstone, but was popularized by Lord Playfair who promoted the use of the cipher.
      <br/><br/>
      The Playfair cipher uses a 5 by 5 grid of letters, which is filled in with a keyword or phrase. 
      The remaining letters of the alphabet are then filled in, skipping any duplicate letters. 
      For example, using the keyword "HELLO", the grid would be filled in as follows:
      <br/><br/>
      H E L O A<br/>
      B C D F G<br/>
      I K M N P<br/>
      Q R S T U<br/>
      V W X Y Z<br/>
      <br/><br/>
      To encrypt a message using the Playfair cipher, the message is first broken into digraphs (pairs of letters). 
      If the message has an odd number of letters, an "X" is added to the end to make it even. 
      For example, the message "HELLO WORLD" would be broken into the following digraphs: "HE", "LL", "OW", "RL", "DX".
      <br/><br/>
      To encrypt a digraph, the letters are first located in the grid. 
      If the two letters are in the same row, the letters in the corresponding columns are used. 
      If the letters are in the same column, the letters in the corresponding rows are used. 
      If the letters are in different rows and columns, the letters at the intersections of their rows and columns are used.
      <br/><br/>
      For example, to encrypt the digraph "HE", the letters "H" and "E" would be located in the grid. 
      Since they are in the same row, the letters in the corresponding columns would be used, resulting in the encrypted digraph "OF".
      <br/><br/>
      The Playfair cipher is more secure than simple substitution ciphers because it uses digraphs instead of single letters, 
      making it more resistant to frequency analysis attacks. 
      However, it can still be broken using statistical techniques such as the index of coincidence. 
      Despite its vulnerabilities, the Playfair cipher has a long history and was used extensively during World War II.
      <br/><br/>
      In the demonstration, The Cipher goes further and adds "1234567890.,!?@$%()/`# " as possible elements to encrypt.
      </div>
      <div class="flex w-full">
        <div class=" w-1/2 p-5">
          <div class="font-sourceCodepro text-xl text-gray-500">Plain Text</div>
          <textarea
            value={plainText}
            onChange={(e) => {
              setPlainText(e.target.value);
            }}
            placeholder="Enter text here"
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="10"
          ></textarea>
          <button
            className="mr-5 rounded-md bg-brandPink px-3 py-2 text-white "
            onClick={() => {
              setCipherText(PlayfairCipher(plainText, secretKey));
            }}
          >
            Encrypt
          </button>
          <button
            className="rounded-md bg-brandPink px-3 py-2 text-white"
            onClick={() => {
              setPlainText('');
            }}
          >
            Clear Encrypt
          </button>
        </div>

        <div class=" w-1/2 p-5">
          <div class="font-sourceCodepro text-xl text-gray-500">Key</div>
          <textarea
            // value={secretKey}
            id="textarea-id"
            onChange={(e) => {
              setKey(e.target.value);
            }}
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="1"
            placeholder="Key Value Here, Default Nirvana"
          ></textarea>
          <button
            className="rounded-md bg-brandPink px-3 py-2 text-white"
            onClick={() => {
              setPlainText('');
              setCipherText('');
              setKey('Nirvana');
              document.getElementById('textarea-id').value = '';
            }}
          >
            Clear All
          </button>
        </div>

        <div class=" w-1/2 p-5">
          <div class="font-sourceCodepro text-xl text-gray-500">
            Cipher Text
          </div>
          <textarea
            value={cipherText}
            onChange={(e) => {
              setCipherText(e.target.value);
            }}
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="10"
            placeholder="Encrypted text will appear here"
          ></textarea>
          <button
            className="mr-5 rounded-md bg-brandPink px-3 py-2 text-white"
            onClick={() => {
              setPlainText(PlayfairCipher(cipherText, secretKey, true));
            }}
          >
            Decrypt
          </button>
          <button
            className="rounded-md bg-brandPink px-3 py-2 text-white"
            onClick={() => {
              setCipherText('');
            }}
          >
            Clear Decrypt
          </button>
        </div>
      </div>
    </div>
  );
};

export default playfair;

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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
        praesentium aliquam illum consequatur vitae inventore distinctio hic
        nisi, sint molestias quam dignissimos et! Rem praesentium, soluta ipsum,
        explicabo temporibus officiis iste minima odio iusto, quidem
        necessitatibus quas. Quidem, ipsa nostrum!
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

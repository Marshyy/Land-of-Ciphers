import React, { useState } from 'react';

const vigenere = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [secretKey, setKey] = useState('key');

  function vigenereCipher(message, key, Decrypt = false) {
    message = message.trim().toLowerCase(); 
    key = key.trim().toLowerCase();
    key = key.replace(/[^a-zA-Z]/g, "");

    let result = "";

    if (Decrypt) {
      for (let i = 0; i < message.length; i++) {
        let m = message[i];
        let k = key[i % key.length];
  
        if (m == ".") { result += " "; continue; }
    
        let shifted = String.fromCharCode(((m.charCodeAt(0) - k.charCodeAt(0)) + 26) % 26 + 97);
    
        result += shifted;
      }
    } else {
      for (let i = 0; i < message.length; i++) {
        let m = message[i];
        let k = key[i % key.length];
  
        if (m == " ") { result += "."; continue; }
  
        let shifted = String.fromCharCode((m.charCodeAt(0) + k.charCodeAt(0) - 194) % 26 + 97);
  
        result += shifted;
      }
    }

    return result;
  }

  return (
    <div className="min-h-screen px-3 py-5 lg:px-20 lg:py-10">
      <div class="w-full text-center text-6xl font-bold text-brandPink">
        Vigenere Cipher
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
              setCipherText(vigenereCipher(plainText, secretKey));
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
            id = "textarea-id"
            onChange={(e) => {
              setKey(e.target.value);
            }}
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="1"
            placeholder="Key Value Here, Default key"
          ></textarea>
          <button
            className="rounded-md bg-brandPink px-3 py-2 text-white"
            onClick={() => {
              setPlainText('');
              setCipherText('');
              setKey('key');
              document.getElementById('textarea-id').value = "";
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
              setPlainText(vigenereCipher(cipherText, secretKey, true));
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

export default vigenere;

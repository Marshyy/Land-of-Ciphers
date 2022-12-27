import React, { useState } from 'react';
import Link from 'next/link';

const vigenere = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [secretKey, setKey] = useState('secret');

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
      The Vigenère cipher is a method of encrypting alphabetic text that was first described by Giovan Battista Bellaso in 1553. 
      It is a simple form of polyalphabetic substitution, which means it uses multiple substitution alphabets to encrypt the text.
      <br/><br/>
      In this example, let's assume the plaintext to be encrypted is "HELLO" and the key is "SECRET". 
      To encrypt the message, a table of alphabets, called a 
      <Link href="https://upload.wikimedia.org/wikipedia/commons/9/9a/Vigen%C3%A8re_square_shading.svg">
          <a className="text-[#4e8ff5]" target="_blank"> Tabula recta or Vigenère table. </a>
      </Link>
      The table consists of the alphabets written out 26 times, 
      with each alphabet shifted cyclically to the left compared to the previous alphabet. 
      The first letter of the plaintext, H, is paired with S, the first letter of the key. 
      The second letter of the plaintext, E, is paired with E, the second letter of the key, and so on. 
      The ciphertext is obtained by looking at the rows of the table that are determined by the key and finding the 
      column heading that matches the plaintext letter.
      <br/><br/>
      Using this method, the ciphertext for the message "HELLO" with the key "SECRET" would be "ZINCS". 
      The Vigenère cipher is more secure than a simple substitution cipher because it is less susceptible to frequency analysis attacks.
      However, it can still be broken using statistical techniques such as the
      <Link href="https://en.wikipedia.org/wiki/Kasiski_examination">
          <a className="text-[#4e8ff5]" target="_blank"> Kasiski examination </a>
      </Link>
       or 
       <Link href="https://en.wikipedia.org/wiki/Index_of_coincidence">
          <a className="text-[#4e8ff5]" target="_blank"> Index of coincidence. </a>
      </Link>  
      Despite its vulnerability to attack, 
      the Vigenère cipher was used extensively until the mid-19th century.
      <br/><br/>
      In the demonstration, It only supports lowercase letters and automatically converts your PlainText and Key from Uppercase to lowercase.
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
            placeholder="Key Value Here, Default secret"
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

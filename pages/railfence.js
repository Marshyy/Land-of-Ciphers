import React, { useState } from 'react';

const railfence = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [railValue, setRailValue] = useState(3);

  function RailFence(message) {
    if (typeof railValue != "number" || railValue < 2) setRailValue(3);
  
    let fence = []; 
    let direction = 0; // 0 is down, 1 is up
    let num = 0;
    
    for (let i=0; i < railValue; i++) fence.push([]);
    
    for (let i=0; i < message.length; i++) {
        let m = message[i];
        
        if (direction == 0) {
            fence[num].push(m); num++;
            if (num == railValue) {
                direction = 1;
                num = num-2;
            }
        } else {
            fence[num].push(m); num--;
            if (num == -1) {
                direction = 0;
                num = num+2;
            }
        }
    }
    
    let result = "";

    for (let i = 0; i < railValue; i++) {
        result += fence[i].join("");
    }
    
    return result;
  }

  function decryptor(message) {
    let parts = [];
    let k = Math.round(message.length/(2*(railValue-1)));

    parts[0] = message.slice(0, k);

    if (message.length%2 == 0) {
      parts[1] = message.slice(0+k, message.length-k+1);
      parts[2] = message.slice(-k+1);
    } else {
      parts[1] = message.slice(0+k, message.length-k);
      parts[2] = message.slice(-k);
    }

    let result = "";

    for (let i=0 ; i < parts[0].length; i++) {
      result += parts[0].charAt(i);
      result += parts[1].charAt(2*i);
      result += parts[2].charAt(i);
      result += parts[1].charAt(2*i+1);
    }

    return result.slice(0, message.length);
  }

  return (
    <div className="min-h-screen px-3 py-5 lg:px-20 lg:py-10">
      <div class="w-full text-center text-6xl font-bold text-brandPink">
        RailFence Cipher
      </div>
      <div className="my-3 w-full text-left text-sm text-gray-600">
      The Rail Fence cipher is a simple form of transposition cipher that was first described by Lewis Carroll, 
      the famous author of Alice's Adventures in Wonderland, in his book "The Dynasts."
      The cipher rearranges the order of the letters in a message. 
      It is called a "rail fence" because the letters in the ciphertext form a pattern that resembles a fence, 
      with the letters zigzagging back and forth across the message.
      <br/><br/>
      To encrypt a message using the rail fence cipher, the message is written out in a grid with a certain number of rows. 
      For example, if the message is "HELLO" and the grid has two rows, it would look like this:
      <br/>
      H&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O
      <br/>&nbsp;&nbsp;E&nbsp;&nbsp;&nbsp;L
      <br/>&nbsp;&nbsp;&nbsp;&nbsp;L
      <br/><br/>
      The ciphertext is then created by reading the letters in the grid from top to bottom, 
      starting with the top row. In this example, the ciphertext would be "HOELL".
      <br/><br/>
      To decrypt a message that has been encrypted using the rail fence cipher, 
      the same grid is used and the ciphertext is written out in the grid, 
      with the letters occupying the same positions as they did in the original message. 
      The plaintext is then obtained by reading the letters in the grid from top to bottom, starting with the top row.
      <br/><br/>
      The rail fence cipher is a very basic transposition cipher and is not very secure. 
      It can easily be broken by someone with even a basic knowledge of cryptanalysis. 
      However, it is still a popular cipher among amateur cryptographers because of its simplicity. 
      It can also be used as a stepping stone to learning more complex ciphers. 
      <br/><br/>
      In the demonstration below, The Fence value is 3. 
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
              setCipherText(RailFence(plainText));
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
              setPlainText(decryptor(cipherText));
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

export default railfence;

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

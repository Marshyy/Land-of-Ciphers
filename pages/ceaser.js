import React, { useState } from 'react';

const ceaser = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [shiftValue, setShiftValue] = useState(3);

  const ceaserShift = (message, shift) => {
    if (Object.is(shift, 0)) {
      return setCipherText(message);
    } else if (Object.is(shift, -0)) {
      return setPlainText(message);
    }

    let shiftedMessage = '';
    for (const character of message) {
      const asciiCode = character.charCodeAt();
      const shiftedAsciiCode = asciiCode + shift;
      const shiftedCharacter = String.fromCharCode(shiftedAsciiCode);
      shiftedMessage += shiftedCharacter;
    }

    if (shift > 0) {
      setCipherText(shiftedMessage);
    } else {
      setPlainText(shiftedMessage);
    }
  };

  return (
    <div className="min-h-screen px-3 py-5 lg:px-20 lg:py-10">
      <div class="w-full text-center text-6xl font-bold text-brandPink">
        Ceaser & Shift Cipher
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
              ceaserShift(plainText, shiftValue);
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
            Shift Value
          </div>
          <textarea
            value={shiftValue}
            onChange={(e) => {
              setShiftValue(parseInt(e.target.value));
            }}
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="1"
            placeholder="Shift Value Here, Default 3"
          ></textarea>
          <button
            className="rounded-md bg-brandPink px-3 py-2 text-white"
            onClick={() => {
              setPlainText('');
              setCipherText('');
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
              ceaserShift(cipherText, -shiftValue);
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

export default ceaser;

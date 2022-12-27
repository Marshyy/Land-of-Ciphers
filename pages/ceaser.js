import React, { useState } from 'react';

const ceaser = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const [shiftValue, setShiftValue] = useState(3);

  const ceaserShift = (message, shift) => {
    if (shift == NaN) setShiftValue(3);
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
      <div className="my-3 w-full text-left text-sm text-gray-600" style={{ whitespace: 'pre-wrap' }}>
        The shift cipher is a type of substitution cipher. 
        In a shift cipher, the letters of the alphabet are shifted a certain number of places to the left or right. 
        For example, with a shift of 3 to the left, A would become X, B would become Y, and C would become Z. 
        Shift cipher is not very secure because it is easy to break. 
        It is not very secure because there are only 26 possible shifts (one for each letter of the alphabet), 
        and it is relatively easy to break the cipher by trying all possible shifts.
        <br/><br/>
        The Caesar cipher is a type of substitution cipher that was used by the Roman leader Julius Caesar to encrypt messages. 
        In this cipher, each letter in the plaintext is replaced by a letter that is a three number of positions down the alphabet. 
        For example, A is replaced by D, B is replaced by E, and so on. 
        The Caesar cipher is easy to implement and use, but not very secure due to the same reason as shift cipher, There is only so many combinations. 
        <br/><br/>
        Both the Caesar and shift ciphers are considered to be relatively weak forms of encryption, 
        as they can be easily broken using simple techniques such as frequency analysis. 
        However, they can still be useful for simple messages or as a way to introduce the concept of encryption to beginners. 
        More secure forms of encryption are typically used for sensitive or important communications.
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
            type = "number"
            id = "textarea-id"
            
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
              setShiftValue(3);
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

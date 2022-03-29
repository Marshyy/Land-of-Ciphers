import React, { useState } from 'react';

const ceaser = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');
  const encrypt = () => {
    let cipher = '';
    const shiftValue = 5;
    // remove spaces in plaintext

    let plain = plainText.replace(/\s/g, '');
    plain = plain.replace(/[a-z]/gi, (char) => {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        code = ((code - 65 + shiftValue) % 26) + 65;
      } else if (code >= 97 && code <= 122) {
        code = ((code - 97 + shiftValue) % 26) + 97;
      }
      return String.fromCharCode(code);
    });
    setCipherText(plain);
  };
  return (
    <div className="min-h-screen px-3 py-5 lg:px-20 lg:py-10">
      <div class="w-full text-center text-6xl font-bold text-brandPink">
        Ceaser Cipher
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
          <div class="font-sourceCodepro text-xl text-gray-500">Input</div>
          <textarea
            value={plainText}
            onChange={(e) => {
              setPlainText(e.target.value);
              encrypt();
            }}
            placeholder="enter text here"
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="10"
          ></textarea>
        </div>
        <div class=" w-1/2 p-5">
          <div class="font-sourceCodepro text-xl text-gray-500">Input</div>
          <textarea
            readOnly
            value={cipherText}
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="10"
            placeholder="encrypted text will appear here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ceaser;

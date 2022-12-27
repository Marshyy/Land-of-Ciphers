import React, { useState } from 'react';

const rsa = () => {
  const [plainText, setPlainText] = useState('');
  const [cipherText, setCipherText] = useState('');

  return (
    <div className="min-h-screen px-3 py-5 lg:px-20 lg:py-10">
      <div class="w-full text-center text-6xl font-bold text-brandPink">
        RSA Cipher
      </div>
      <div className="my-3 w-full text-left text-sm text-gray-600" style={{ whitespace: 'pre-wrap' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas tincidunt fermentum magna, non fermentum nibh placerat at. 
        In hac habitasse platea dictumst. Nulla euismod orci a ultricies luctus. 
        Aenean porta dictum dictum. Etiam congue mi eget est faucibus, non vehicula quam ullamcorper. 
        Vivamus auctor, urna non posuere lobortis, erat massa finibus lectus, at ullamcorper eros ligula a quam.
      </div>
      <div class="flex w-full">
        <div class=" w-1/2 p-5">
          <div class="font-sourceCodepro text-xl text-gray-500 flex">Party A</div>
          <textarea
            value={plainText}
            onChange={(e) => {
              setPlainText(e.target.value);
            }}
            placeholder="Enter text here"
            className="my-3  w-full bg-brandDarkGray p-2 outline-none placeholder:text-gray-600"
            rows="10"
          />
          <div class="font-sourceCodepro text-xl text-gray-500">Public Key</div>
          <textarea
            value={plainText}
            onChange={(e) => {
              setPlainText(e.target.value);
            }}
            className="my-3  w-full bg-brandDarkGray p-2 outline-none placeholder:text-gray-600"
            rows="1"
            readOnly
          />
          <div class="font-sourceCodepro text-xl text-gray-500">Private Key</div>
          <textarea
            value={plainText}
            onChange={(e) => {
              setPlainText(e.target.value);
            }}
            className="my-3  w-full bg-brandDarkGray p-2 outline-none placeholder:text-gray-600"
            rows="1"
            readOnly
          />
        </div>

        {/* Top is one div and bottom is another div */}

        <div class=" w-1/2 p-5">
          <div class="font-sourceCodepro text-xl text-gray-500">
            Party B
          </div>
          <textarea
            onChange={(e) => {
              setCipherText(e.target.value);
            }}
            className="my-3  w-full bg-brandDarkGray p-2  outline-none placeholder:text-gray-600"
            rows="10"
            placeholder="Encrypted text will appear here"
          ></textarea>
          <div class="font-sourceCodepro text-xl text-gray-500">Public Key</div>
          <textarea
            value={plainText}
            onChange={(e) => {
              setPlainText(e.target.value);
            }}
            className="my-3  w-full bg-brandDarkGray p-2 outline-none placeholder:text-gray-600"
            rows="1"
            readOnly
          />
          <div className="flex min-w-max">
            <div class="font-sourceCodepro text-xl text-gray-500">Private Key</div>
            <textarea
              value={plainText}
            className="my-3  w-full bg-brandDarkGray p-2 outline-none placeholder:text-gray-600"
            rows="1"
            readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default rsa;

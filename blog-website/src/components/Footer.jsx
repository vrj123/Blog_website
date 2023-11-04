import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto flex">
        <div className="grid grid-cols-4 gap-5 flex-grow">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Category</p>
            <ul className="text-gray-400 flex flex-col gap-2">
              <li>
                <a href="/">News</a>
              </li>
              <li>
                <a href="/">Worlds</a>
              </li>
              <li>
                <a href="/">Games</a>
              </li>
              <li>
                <a href="/">Reference</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Apples</p>
            <ul className="text-gray-400 flex flex-col gap-2">
              <li>
                <a href="/">Web</a>
              </li>
              <li>
                <a href="/">eCommerce</a>
              </li>
              <li>
                <a href="/">Business</a>
              </li>
              <li>
                <a href="/">Entertainment</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Cherry</p>
            <ul className="text-gray-400 flex flex-col gap-2">
              <li>
                <a href="/">Media</a>
              </li>
              <li>
                <a href="/">Broucher</a>
              </li>
              <li>
                <a href="/">Nonprofit</a>
              </li>
              <li>
                <a href="/">Educational</a>
              </li>
              <li>
                <a href="/">Bussiness</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-lg">Bussiness</p>
            <ul className="text-gray-400 flex flex-col gap-2">
              <li>
                <a href="/">Infopreneur</a>
              </li>
              <li>
                <a href="/">Personal</a>
              </li>
              <li>
                <a href="/">Wiki</a>
              </li>
              <li>
                <a href="/">Forum</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[300px]">
            <h3 className="font-semibold text-lg">Subscribe for updates</h3>
            <div className="flex gap-2">
                <input type="email" placeholder="email"  className="p-2 rounded-sm outline-none"/>
                <button className="p-2 border-gray-400 border-2 rounded-sm">Subscribe</button>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from 'react'
import { useState } from 'react';

const Priceslider = () => {
    const [minValue, setMinValue] = useState(15);
  const [maxValue, setMaxValue] = useState(30);

  const minPrice = 8;
  const maxPrice = 70;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };
  return (
    <div className="w-64 m-auto py-10">
      <div className="relative h-2 bg-gray-200 rounded-full">
        {/* Track the active range */}
        <div
          className="absolute h-2 bg-teal-600 rounded-full"
          style={{
            left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%`,
            right: `${100 - ((maxValue - minPrice) / (maxPrice - minPrice)) * 100}%`,
          }}
        ></div>

        {/* Left Handle */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleMinChange}
          className="absolute -top-3 w-full h-2 opacity-0 cursor-pointer"
          style={{ left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%` }}
        />
        <div
          className="absolute top-0 h-4 w-4 bg-white border border-gray-300 rounded-full shadow -ml-2 cursor-pointer"
          style={{
            left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%`,
          }}
        >
          <div className="relative -mt-2 w-1">
            <div
              className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
              style={{ marginLeft: '-25px' }}
            >
              <div className="relative shadow-md">
                <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                  ${minValue}
                </div>
                <svg
                  className="absolute text-black w-full h-2 left-0 top-100"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                  xmlSpace="preserve"
                >
                  <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right Handle */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute -top-3 w-full h-2 opacity-0 cursor-pointer"
          style={{ left: `${((maxValue - minPrice) / (maxPrice - minPrice)) * 100}%` }}
        />
        <div
          className="absolute top-0 h-4 w-4 bg-white border border-gray-300 rounded-full shadow -ml-2 cursor-pointer"
          style={{
            left: `${((maxValue - minPrice) / (maxPrice - minPrice)) * 100}%`,
          }}
        >
          <div className="relative -mt-2 w-1">
            <div
              className="absolute z-40 opacity-100 bottom-100 mb-2 left-0 min-w-full"
              style={{ marginLeft: '-25px' }}
            >
              <div className="relative shadow-md">
                <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">
                  ${maxValue}
                </div>
                <svg
                  className="absolute text-black w-full h-2 left-0 top-100"
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                  xmlSpace="preserve"
                >
                  <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Min and Max Price Labels */}
        <div className="absolute text-gray-800 -ml-1 bottom-0 left-0 -mb-6">
          ${minPrice}
        </div>
        <div className="absolute text-gray-800 -mr-1 bottom-0 right-0 -mb-6">
          ${maxPrice}
        </div>
      </div>
    </div>
  )
}

export default Priceslider

import React from 'react';

export function Jumbo() {
  return (
    <div className="relative rounded-3xl w-full h-[650px] pt-16 overflow-hidden">
      <div className="relative z-20 flex items-start justify-center w-full">
        <div className="text-white text-center">
          <div className="mb-2 text-2xl font-light text-gray-300 text-shadow">
            All you need is Banos de Agua Santa
          </div>
          <h1 className="mb-10 text-6xl font-semibold text-shadow">
            Explore the most beautiful places
          </h1>
          <div className="text-4xl font-normal text-gray-gray-300 text-shadow">
            La Casa del Arbol
          </div>
        </div>
      </div>
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative top-0 left-0 w-full h-full z-0">
        <img
          src="https://images.squarespace-cdn.com/content/v1/56daf4c8d51cd4224e4154cb/1545680371690-HOTYSA32D4FW7HH2AHL3/GOPR0766.JPG"
          alt="cover"
          className="w-full absolute top-1/2 -translate-y-1/2"
        />
      </div>
    </div>
  );
}

import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <div className="flex flex-col items-center">
          <h1 className="max-w-fit bg-gradient-main text-transparent bg-clip-text text-4xl md:text-7xl font-bold animate-bounce">E-commerce </h1>
          <h1 className="max-w-fit bg-gradient-main text-transparent bg-clip-text text-4xl md:text-7xl font-bold animate-bounce">App </h1>
          <p className="text-center max-md:w-9/12 w-8/12 my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, ex laboriosam voluptatibus rerum neque natus odit expedita necessitatibus
            sint ducimus asperiores eius eaque cupiditate dolorum voluptas tenetur officiis dicta quibusdam quis eum, quas suscipit facilis earum.
            Placeat iusto voluptate voluptates dolor magnam ab tempore, cum, unde odio, consequatur corrupti laudantium.
          </p>
          <div className=" flex gap-2">
            <button
              className="bg-gradient-to-tr from-blue-600 to-green-500 
                   text-white text-sm font-medium 
                   px-6 py-2 rounded-lg 
                   shadow-sm hover:shadow-md 
                   transition duration-300 
                   hover:from-blue-700 hover:to-green-600 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Click Me
            </button>

            <button
              className="bg-gradient-to-tr from-blue-600 to-green-500 
                   text-white text-sm font-medium 
                   px-6 py-2 rounded-lg 
                   shadow-sm hover:shadow-md 
                   transition duration-300 
                   hover:from-blue-700 hover:to-green-600 
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              Click Me
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3 mt-3">
          <div className="card col-span-1 flex flex-col items-center gap-2 border-1  border-blue-500 shadow-blue-800/60 shadow-lg py-4 rounded-md group/parent">
            <div className="card-icon border-1 border-blue-500 shadow-blue-800 shadow-md bg-gradient-to-br from-blue-500 to-green-400 text-blue-950 p-2 rounded-md group-hover/parent:bg-gradient-to-tl duration-300 transition-discrete">
              <i className="fa-solid fa-user"></i>
            </div>
            <p className="w-2/3 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card col-span-1 flex flex-col items-center gap-2 border-1  border-blue-500 shadow-blue-800/60 shadow-lg py-4 rounded-md group/parent">
            <div className="card-icon border-1 border-blue-500 shadow-blue-800 shadow-md bg-gradient-to-br from-blue-500 to-green-400 text-blue-950 p-2 rounded-md group-hover/parent:bg-gradient-to-tl duration-300 transition-discrete">
              <i className="fa-solid fa-user"></i>
            </div>
            <p className="w-2/3 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam! Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="card col-span-1 flex flex-col items-center gap-2 border-1  border-blue-500 shadow-blue-800/60 shadow-lg py-4 rounded-md group/parent">
            <div className="card-icon border-1 border-blue-500 shadow-blue-800 shadow-md bg-gradient-to-br from-blue-500 to-green-400 text-blue-950 p-2 rounded-md group-hover/parent:bg-gradient-to-tl duration-300 transition-discrete">
              <i className="fa-solid fa-user"></i>
            </div>
            <p className="w-2/3 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aliquam! Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

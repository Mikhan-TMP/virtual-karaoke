import Image from "next/image";


export default function Home() {
  return (
  <>
  {/*  */}
  {/* The Main VideoOke */}
  <div className=" w-full h-screen flex flex-col items-center justify-center scale-70 border ">
        {/* Modern Television  */}
        <div className="select-none ">          
          {/* Screen */}
          <div className="">
            {/* outer lid */}
            <div className="border w-100 h-60 rounded-lg p-2 bg-black">
              {/* inner lid */}
              <div className="border w-fulls h-full rounded-sm bg-white">
                {/* Screen content */}
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="text-3xl font-bold text-gray-800 "></h1>
                  <span className="text-sm"></span>
                </div>
              </div>
              <p className="text-[5px] text-white font-bold text-center">Samsung</p>

            </div>
          </div>
          {/* TV Neck */}
          <div className="flex items-center justify-center">
            <div className="w-12 h-4 bg-gray-900 r" />
          </div>
          {/* TV Stand */}
          <div className="mx-auto gap-2 w-32 h-6 bg-gray-700 rounded-b-lg shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-gray-900 rounded-full" />
            <div className="w-12 h-2 bg-gray-900 rounded-full" />
            <div className="w-2 h-2 bg-gray-900 rounded-full" />
          </div>
        </div>
        {/* Rotator */}
        <div className="z-2 p-1 w-100 h-10 rounded-tl-4xl rounded-tr-4xl bg-yellow-400">
          <div className="h-8 rounded-tl-4xl rounded-tr-4xl texture">
          </div>
        </div>
        {/* Keys Plate */}
        <div>
          <div className="relative w-160 h-30  border-black justify-start items-center flex flex-col">
            {/* Neck hole */}
            <div className="absolute z-2 w- bg-black h-1" />
            <div className="z-1 absolute w-115 bg-black h-30 border-t-4 border-r-4 rounded-tr-full border-l-4 rounded-tl-full border-yellow-400" />
            <div className="z-0 absolute  w-150 texture h-30 border-t-4 border-r-4 rounded-tr-full border-l-4 rounded-tl-full border-yellow-400" />
            <div className="absolute z-1 trapezoid-neck texture h-20 w-80 flex items-center justify-center">
                <div className="w-50 border h-10 rounded-full bg-black " ></div>
            </div>
            {/* Keys */}
            <div className="absolute z-2 h-30  w-full flex justify-center items-end">
              <div className="z-2 texture h-10 w-100 trapezoid border-t-4 border-r-4 rounded-tr-full border-l-4 rounded-tl-full border-yellow-400 bg-gray-800 flex flex-col items-center ">
                {/* Container */}
                <div className="flex justify-center mt-1 gap-4">
                  {/* First Column */}
                  <div className="flex gap-1 flex-col  w-5 items-center ">
                    <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="mr-6 border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                  </div>
                  {/* Second Column */}
                  <div className="flex gap-[2px] flex-col w-5  items-center ">
                    <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="mr-4 border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="mr-8 border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                  </div>
                  {/* Third Column */}
                  <div className="flex gap-[2px] flex-col w-5  items-center ">
                    <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="mr-2 border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="mr-4 border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                  </div>
                  {/* Fourth Column */}
                  <div className="flex gap-[2px] flex-col  w-5 items-center ">
                    <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                    {/* keyhole */}
                    <div className="border border-gray-500 border-l-3 border-b-3 border-r-3 bg-gray-30 w-5 h-2 rounded-[100%] flex justify-center items-center">
                    </div>
                  </div>
                  {/* Fifth Column */}
                  <div className="flex gap-[2px] flex-col w-5  items-center ">
                    <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="ml-2 border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="ml-4 border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
                    </div>
                  </div>
                  {/* Sixth Column */}
                  <div className="flex gap-[2px] flex-col w-5  items-center ">
                    <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="ml-4 border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className="ml-8 border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                  </div>
                  {/* Seventh Column */}
                  <div className="flex gap-[2px] flex-col w-5  items-center ">
                    <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                    <div className=" ml-6 border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curves */}

        {/* Base Body */}
        <div className="w-150 h-100 relative flex flex-col items-center ">
          {/* Storage */}
          <div className="absolute texture z-3 h-10 border-4 bg-gray-600 border-yellow-400  w-150 rounded-bl-full rounded-br-full">
          </div>
          {/* Left Speakers */}
          <div className="absolute h-96 top-8 w-40 left-12 border-l-4 border-yellow-400  bg-gray-800 z-2 flex items-center justify-center"
            style={{
              clipPath: "polygon(0% 0%, 100% 25%, 100% 96%, 0% 85%)"
            }}
          >
          {/* Circles */}
          <div>
            <div className="w-25 h-25 bg-black/80 rounded-full "
              style={{
                // boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)",
                transform: "rotate3d(0,1,-1,60deg)"
              }}
            />
            <div className="w-25 h-25 bg-black/80 rounded-full "
              style={{
                // boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)",
                transform: "rotate3d(0,1,-1,60deg)"
              }}
            />
          </div>

          </div>
          {/* Right Speakers */}
          <div className="absolute h-96 top-8 w-40 right-12 border-r-4 border-yellow-400  bg-gray-800 z-2 flex items-center justify-center"
            style={{
              clipPath: "polygon(100% 0%, 0% 25%, 0% 96%, 100% 85%)"
            }}
            >
            {/* Circles */}
            <div>
              <div className="w-25 h-25 bg-black/80 rounded-full "
                style={{
                  // boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)",
                  transform: "rotate3d(0,1,1,60deg)"
                }}
              />
              <div className="w-25 h-25 bg-black/80 rounded-full "
                style={{
                  // boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.5)",
                  transform: "rotate3d(0,1,1,60deg)"
                }}
              />
            </div>
          </div>

          <div className="z-3 w-70 h-100 absolute">
            {/* Left Design */}
            {/* <div className="z-2 absolute bg-gray-800 bottom-0 left-0 h-65 rounded-tr-full w-15">
            </div> */}
            {/* Right Design */}
            {/* <div className="z-2 absolute bg-gray-800 bottom-0 right-0 h-65 rounded-tl-full w-15">
            </div> */}
          </div>

          {/* Casing */}
          <div className="bg-gray-900 w-123 h-85 absolute">
          </div>

          {/* Upper Box */}
          <div
            className="z-2 relative texture bg-gray-700 h-65 w-75 flex items-center justify-center gap-5"
            style={{  
              clipPath: "polygon(0 0, 100% 0, 100% 80%, 85% 100%, 15% 100%, 0 80%)",
            }}
          >
            {/* Left Speaker */}
            <div className="relative bg-gray-800 p-2 mt-10 flex"
              style={{
                transform: "rotate(45deg)"
              }}
            >
              {/* Screws */}
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute top-1 left-1"/>
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute top-1 right-1"/>
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute bottom-1 left-1"/>
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute bottom-1 right-1"/>
              {/* Speaker */}
              <div className="w-15 h-15 bg-black rounded-full "/>
            </div>

            {/* Middle Coin Slot */}
            <div className="w-10 h-20 mt-10 bg-gray-600 rounded-sm relative flex items-center justify-center">
              {/* screws */}
              <div className="w-1 h-1 bg-white/80 rounded-full border-1  absolute top-1 left-1"/>
              <div className="w-1 h-1 bg-white/80 rounded-full border-1  absolute top-1 right-1"/>
              <div className="w-1 h-1 bg-white/80 rounded-full border-1  absolute bottom-1 left-1"/>
              <div className="w-1 h-1 bg-white/80 rounded-full border-1  absolute bottom-1 right-1"/>
              {/* Coin Slot */}
              <div className="w-1 h-6 bg-black rounded-full"/>
            </div>


            {/* Right Speaker */}
            <div className="relative bg-gray-800 p-2 mt-10 flex"
              style={{
                transform: "rotate(45deg)"
                
              }}
            >
              {/* Screws */}
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute top-1 left-1"/>
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute top-1 right-1"/>
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute bottom-1 left-1"/>
              <div className="w-2 h-2 bg-white/80 rounded-full border-2  absolute bottom-1 right-1"/>
              {/* Speaker */}
              <div className="w-15 h-15 bg-black rounded-full "/>
            </div>
          </div>

          {/* Lower Box */}
          <div className="z-2 relative texture h-100 w-50 shadow-lg flex items-center justify-center p-5"
            style={{
            }}
            >
            <div>
              <div className="w-30 h-20 bg-gray-600 rounded-sm flex flex-col items-start justify-center">
                {/* keyhole */}
                <div className="w-3 h-3 ml-4 bg-black rounded-full"/>
              </div>
            </div>
          </div>

          {/* Bottom Design */}
          <div className="z-1 w-126 h-30 absolute -bottom-3 border-4 border-yellow-400 rounded-bl-full rounded-br-full rounded-tr-full bg-gray-900">
          </div>
          <div className="z-0 w-135 h-40 absolute -bottom-8 border-4 border-yellow-400 rounded-full texture"
          ></div>
        </div>
  </div>
  </>
  );
}


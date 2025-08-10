import Image from "next/image";


export default function Home() {
  return (
  <>
    <div className="w-full h-screen  flex flex-col items-center justify-center bg-gray-100">
      {/* Modern Television  */}
      <div className="select-none ">          
        {/* Screen */}
        <div className="">
          {/* outer lid */}
          <div className="border w-100 h-60 rounded-lg p-2 bg-black">
            {/* inner lid */}
            <div className="border w-fulls h-full rounded-sm bg-white">
              {/* Screen content */}
              <div className="flex items-center justify-center h-full">
                <h1 className="text-2xl font-bold text-gray-800">Television Screen</h1>
              </div>
            </div>
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
      <div className="border w-100 h-10 border-l-5">

      </div>
      {/* Keys */}
      <div className="border h-10 w-100 trapezoid flexs items-center justify-center">
        {/* Container */}
        <div className="flex justify-center mt-1 gap-4">
          {/* First Column */}
          <div className="flex gap-1 flex-col ">
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
          </div>
          {/* Second Column */}
          <div className="flex gap-[2px] flex-col">
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
          </div>
          {/* Third Column */}
          <div className="flex gap-[2px] flex-col">
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
          </div>
          {/* Fourth Column */}
          <div className="flex gap-1 flex-col ">
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
          </div>
          {/* Fifth Column */}
          <div className="flex gap-[2px] flex-col">
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 blueKeys w-5 h-2 rounded-[100%]">
            </div>
          </div>
          {/* Sixth Column */}
          <div className="flex gap-[2px] flex-col">
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
          </div>
          {/* Seventh Column */}
          <div className="flex gap-1 flex-col ">
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
            <div className="border border-white border-l-3 border-b-3 border-r-3 yellowKeys w-5 h-2 rounded-[100%]">
            </div>
          </div>

        </div>
      </div>

      {/* TV Remote */}
      {/* <div className="absolute bottom-10 right-10">
        <div className="w-12 h-24 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          <div className="w-8 h-2 bg-gray-600 rounded-t-lg mb-2" />
          </div>
      </div> */}
      {/* Footer */}        
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm">
        <p>Powered by Virtual Videooke</p>
      </div>
    </div>
  </>
  );
}


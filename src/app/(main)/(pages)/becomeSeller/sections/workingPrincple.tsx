import React from "react";
import "../../../../Style/anite/headerBgImage.css"
const Works = () => {
  return (
    <>
      {/* Mobile Layout (sm) */}
      <div className="block md:hidden mt-16 bg-[#EEEEEE]">
        <div className="p-6">
          <div>
            <h1 className="text-center text-lg font-light text-[#1A1A1A]">
              How It Works
            </h1>
          </div>
          <div>
            <h1 className="text-center text-xl font-bold text-[#1A1A1A]">
              Easy to Get Started
            </h1>
          </div>
          <div className="mt-4">
            <p className="text-center text-sm font-light text-[#1A1A1A] leading-relaxed">
              Tap into builders, homeowners, and contractors looking for ready-made plans. Tap into builders, homeowners, and contractors looking for ready-made plans.
            </p>
          </div>
        </div>
        
        {/* Mobile Steps */}
        <div className="flex flex-col gap-8 p-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#EFBB39] p-6 border rounded-full mb-4">
              <img
                src="/assets/kamathenu Images/BAS/workigLogo.png"
                alt="signInLogo"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-2">Sign Up</h1>
            </div>
            <div>
              <p className="text-sm text-center leading-relaxed">
                Create your seller profile with portfolio and experience.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#EFBB39] p-6 border rounded-full mb-4">
              <img
                src="/assets/kamathenu Images/BAS/workigLogo.png"
                alt="signInLogo"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-2">Upload Plans</h1>
            </div>
            <div>
              <p className="text-sm text-center leading-relaxed">
                Upload your floor plans, elevations, working drawings in PDF/DWG.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#EFBB39] p-6 border rounded-full mb-4">
              <img
                src="/assets/kamathenu Images/BAS/workigLogo.png"
                alt="signInLogo"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-2">Set Price & Details</h1>
            </div>
            <div>
              <p className="text-sm text-center leading-relaxed">
                Add title, description, tags, and choose your pricing.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#EFBB39] p-6 border rounded-full mb-4">
              <img
                src="/assets/kamathenu Images/BAS/workigLogo.png"
                alt="signInLogo"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-lg font-semibold mb-2">Earn on Every Sale</h1>
            </div>
            <div>
              <p className="text-sm text-center leading-relaxed">
                Track orders, earnings, and withdraw anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (md and lg) - Same as original */}
      <div className="hidden md:block mt-22 bg-[#EEEEEE]">
        <div className="p-15">
          <div>
            <h1 className="text-center text-[25px] font-light text-[#1A1A1A]">
              How It Works
            </h1>
          </div>
          <div>
            <h1 className="text-center text-[29px] font-bold text-[#1A1A1A]">
              Easy to Get Started
            </h1>
          </div>
          <div className="mt-7">
            <p className="text-center text-[18px] font-light text-[#1A1A1A]">
              Tap into builders, homeowners, and contractors looking for
              ready-made plans. Tap into builders, homeowners,
            </p>

            <p className="text-center text-[18px] font-light text-[#1A1A1A]">
              {" "}
              homeowners, and contractors looking for ready-made plans.
            </p>
          </div>
        </div>
        <div className="flex p-12 gap-19">
          {/* first logo */}
          <div className="flex">
            <div className="flex flex-col gap-5 items-center pr-9">
              <div className="bg-[#EFBB39] p-8 border rounded-[50%]">
                <img
                  src="/assets/kamathenu Images/BAS/workigLogo.png"
                  alt="signInLogo"
                  className="w-[100%]"
                />
              </div>
              <div>
                <h1 className="text-[22px] font-semibold">Sign Up</h1>
              </div>
              <div>
                <p className="text-[18px] text-center">
                  Create your seller profile with portfolio
                </p>
                <p className="text-[18px] text-center"> and experience.</p>
              </div>
            </div>
            <div className=" relative ml-12">
              <div className="border-r-2 border-[#B8B8B8] h-123"></div>
              <div className="absolute top-0 left-[-16] border-1 border-[#EFBB39] bg-[#D8A526] w-8 h-[4%] rounded-[50%] up-down-slider"></div>
            </div>
          </div>

          {/* second logo */}
          <div className="flex">
            <div className="relative top-33 flex flex-col gap-5 items-center pr-9">
              <div className="bg-[#EFBB39] p-8 border rounded-[50%]">
                <img
                  src="/assets/kamathenu Images/BAS/workigLogo.png"
                  alt="signInLogo"
                  className="w-[100%]"
                />
              </div>
              <div>
                <h1 className="text-[22px] font-semibold">Upload Plans</h1>
              </div>
              <div>
                <p className="text-[18px] text-center">Upload your floor plans, elevations, working 
                </p>
                <p className="text-[18px] text-center">drawings in PDF/DWG.</p>
              </div>
            </div>
            <div className=" relative ml-12">
              <div className="border-r-2 border-[#B8B8B8] h-123"></div>
              <div className="absolute top-0 left-[-15] border-1 border-[#EFBB39] bg-[#D8A526] w-8 h-[4%] rounded-[50%] down-up-slider"></div>
            </div>
          </div>

          {/* third logo */}
          <div className="flex">
            <div className="flex flex-col gap-5 items-center pr-9">
              <div className="bg-[#EFBB39] p-8 border rounded-[50%]">
                <img
                  src="/assets/kamathenu Images/BAS/workigLogo.png"
                  alt="signInLogo"
                  className="w-[100%]"
                />
              </div>
              <div>
                <h1 className="text-[22px] font-semibold">Set Price & Details</h1>
              </div>
              <div>
                <p className="text-[18px] text-center">Add title, description, tags, and choose
                </p>
                <p className="text-[18px] text-center">  your pricing.</p>
              </div>
            </div>
            <div className="relative ml-12">
              <div className="border-r-2 border-[#B8B8B8] h-[492px]"></div>
              <div className="absolute top-0 left-[-15] border border-[#EFBB39] bg-[#D8A526] w-8 h-[4%] rounded-[50%] up-down-slider"></div>
            </div>
          </div>

          {/* four logo */}
          <div className="flex">
            <div className="relative top-33 flex flex-col gap-5 items-center pr-9">
              <div className="bg-[#EFBB39] p-8 border rounded-[50%]">
                <img
                  src="/assets/kamathenu Images/BAS/workigLogo.png"
                  alt="signInLogo"
                  className="w-[100%]"
                />
              </div>
              <div>
                <h1 className="text-[22px] font-semibold">Earn on Every Sale</h1>
              </div>
              <div>
                <p className="text-[18px] text-center">Track orders, earnings, and withdraw 
                </p>
                <p className="text-[18px] text-center"> anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;

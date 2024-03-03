import React, { useState } from "react";

const Hero = ({ titleData, createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });
  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative">
      <div className="relative bg-opacity-75 backgroundMain">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 50
          C -104 40, -44 70, 76 70
          S 436 40, 556 60
          S 676 80, 796 40
          S 916 80, 1036 60
          S 1156 50, 1216 70
          L 1276 75
          V 162.5
          H 1216
          C 1156 162.5, 1036 162.5, 916 162.5
          C 796 162.5, 316 162.5, 676 162.5
          C 556 162.5, 436 162.5, 316 162.5
          C 196 162.5, 76 162.5, -44 162.5
          C -104 162.5, -164 162.5, -164 162.5
          V 50
          Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl
      md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                <br className="hidden md:block" />
                EtherCollab
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                EtherCollab is a decentralized cryptocurrency that is built on
                the Ethereum blockchain. It is a utility token that is used to
                power the innovative ideas ecosystem.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200
            text-teal-accent-400 hover:text-teal-accent-700 text-gray-200"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12 ">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Register your project
                </h3>
                <form>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="firstName"
                      className="inline-block mb-1 font-medium">
                      Project Title
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          title: e.target.value,
                        })}
                      placeholder="eg. Metamask"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 
                    mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none
                    focus:border-deep-purple-accent-400
                    focus:outline-none focus:shadow-outline"
                      id="firstName"
                      name="firstName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="lastName"
                      className="inline-block mb-1 font-medium">
                      Github Link to your Project
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          description: e.target.value,
                        })}
                      placeholder="eg. https://github.com/metamask/metamask"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 
                    mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none
                    focus:border-deep-purple-accent-400
                    focus:outline-none focus:shadow-outline"
                      id="lastName"
                      name="lastName"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium">
                      Target Amount
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          amount: e.target.value,
                        })}
                      placeholder="eg. 1000"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 
                      mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none
                      focus:border-deep-purple-accent-400
                      focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium">
                      Deadline
                    </label>
                    <input
                      onChange={(e) =>
                        setCampaign({
                          ...campaign,
                          deadline: e.target.value,
                        })}
                      placeholder="17-12-2023"
                      required
                      type="date"
                      className="flex-grow w-full h-12 px-4 
                        mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none
                        focus:border-deep-purple-accent-400
                        focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      onClick={createNewCampaign}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide
                          text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700
                          focus:shadow-outline focus:outline-none newColor"
                    >
                      Create Campaign
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    Register your Github Project for raising ETH funds
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
};

export default Hero;







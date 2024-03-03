import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title }) => {
  console.log(allcampaign);


  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };
  const calculateProgressBarStyle = (amountCollected, target) => {
    const progressPercentage = (amountCollected / target) * 100;
    const gradientColor = `linear-gradient(90deg, #34d399 ${progressPercentage}%, #f3f4f6 ${progressPercentage}%)`;

    return {
      backgroundImage: gradientColor,
    };
  };

  return (
    <div className="px-4 py-16 mx-auto sm-max-w-xl
    md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="py-16 text-2xl font-bold leading-5">
        {title}
      </p>
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
          allcampaign?.map((campaign, i) => (
            <div
              onClick={() => (setDonate(campaign), setOpenModel(true))}
              key={i + 1}
              className="cursor-pointer border overflow-hidden
        transition-shadow duration-300 bg-white rounded"
            >
              <img
                src="https://cdn.pixabay.com/photo/2021/12/30/13/46/ethereum-6903942_1280.png"
                className=" w-full h-64 rounded"
                alt=""
              />
              <div className="py-5 pl-2">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  Days Left : {daysLeft(campaign.deadline)}
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors
        duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">
                    {campaign.title}
                  </p>
                </a>
                <p className="mb-4 text-gray-700">
                  {campaign.description}
                </p>
                <div className="border-2 rounded-full overflow-hidden">
                  <div
                    style={calculateProgressBarStyle(
                      campaign.amountCollected,
                      campaign.target
                    )}
                    className="h-5"
                  />
                </div>
                <div className="flex space-x-4">
                  <p className="font-semibold">Target: {campaign.target} ETH</p>
                  <p className="font-semibold">Raised: {campaign.amountCollected} ETH</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Card;
import React, { useContext, useEffect, useState } from "react";

import { CrowdFundingContext } from "../Context/CroudFunding";
import { Hero, Card, PupUp } from "../Components";

const index = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonations
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaigns] = useState();

  const [usercampaign, setUsercampaign] = useState();

  useEffect(() => {
    const getCampaignsData = getCampaigns();
    const userCampaignData = getUserCampaigns();
    return async () => {
      const allData = await getCampaignsData;
      const userData = await userCampaignData;
      setAllcampaigns(allData);
      setUsercampaign(userData);
    };
  }, []);

  //donate popup model
  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();
  console.log(donateCampaign);
  return (
    <>
      <Hero
        titleData={titleData}
        createCampaign={createCampaign}
      />

      <Card
        title="All listed campaign"
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      <Card
        title="Your Campaign(s)"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      {
        openModel && (
          <PupUp
            setOpenModel={setOpenModel}
            donate={donateCampaign}
            getDonations={getDonations}
            donateFunction={donate}
          />
        )
      }
    </>
  );
};

export default index;






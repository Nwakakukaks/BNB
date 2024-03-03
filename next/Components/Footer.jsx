import React from "react";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactlist = [
    'support@ethercollab.co',
    'info@ethercollab.co',
    "Contact us"
  ];
  const usefulLink = ["Home", "About Us", "EtherCollabGPT"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex-items justify-center font-semibold uppercase md:justify-start">
              EtherCollab
            </h6>
            <p>
              EtherCollab is a decentralized cryptocurrency that is built on
              the Ethereum blockchain. It is a utility token that is used to
              power the EtherCollab ecosystem. It is a utility
              token that is used to power the Github Projects ecosystem.
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 font-semibold uppercase">Product</h6>
            {productList.map((product, index) => (
              <p key={index + 1}>
                <a
                  href="#!"
                >
                  {product}
                </a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start ">
              Useful Links
            </h6>
            {
              usefulLink.map((el, i) => {
                return (
                  <p key={i}>
                    <a
                      href="#!"
                    >
                      {el}
                    </a>
                  </p>
                )
              })
            }
          </div>
          <div className="">
            <h6 className="mb-4 font-semibold uppercase">Contact</h6>
            {contactlist.map((contact, index) => (
              <p key={index + 1}>
                <a
                  href="#!"
                >
                  {contact}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>© 2023 Copyright:</span>
        <a className="font-semibold" href="https://tailwind-elements.com">
          EtherCollab
        </a>
      </div>
    </footer>
  )
};

export default Footer;




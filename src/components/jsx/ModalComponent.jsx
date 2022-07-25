import React, { useState } from "react";
import Modal from "react-modal";

function ModalComponent(props) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 10,
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className={props.styles}>
        {props.buttonText}
      </button>
      <Modal
        className="relative w-full"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="container mx-auto lg:pr-96 lg:pl-96 pr-10 pl-10 pt-10 pb-28">
          <div className="grid grid-cols-2 bg-white rounded-lg">
            <div class="grid grid-cols-3 p-5 gap-4 col-span-2">
              <div class="col-span-2">
                <div className="flex flex-col flex-shrink-0 w-full h-full max-w-lg space-y-5 text-gray-800">
                  <div className="justify-start flex items-center">
                    <p className="font-bold block tracking-widest text-gray-800">
                      {props.name}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-span-1">
                <div className="flex flex-col flex-shrink-0 w-full h-full max-w-lg space-y-5 text-gray-800">
                  <div className="flex justify-end items-center">
                    <button onClick={closeModal}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512"
                        style={{ fill: "#000" }}
                      >
                        <path
                          fill="#E04F5F"
                          d="M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z"
                        ></path>
                        <path
                          fill="#FFF"
                          d="M285,256l72.5-84.2c7.9-9.2,6.9-23-2.3-31c-9.2-7.9-23-6.9-30.9,2.3L256,222.4l-68.2-79.2c-7.9-9.2-21.8-10.2-31-2.3c-9.2,7.9-10.2,21.8-2.3,31L227,256l-72.5,84.2c-7.9,9.2-6.9,23,2.3,31c4.1,3.6,9.2,5.3,14.3,5.3c6.2,0,12.3-2.6,16.6-7.6l68.2-79.2l68.2,79.2c4.3,5,10.5,7.6,16.6,7.6c5.1,0,10.2-1.7,14.3-5.3c9.2-7.9,10.2-21.8,2.3-31L285,256z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-2 w-full bg-gradient-to-r from-gray-300 to-gray-500 p-0.5"></div>
            <div className="grid grid-cols-1 rounded-lg p-5 col-span-2">
              <p class="lg:text-xl text-sm text-gray-700">
                {props.description}                
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default ModalComponent;

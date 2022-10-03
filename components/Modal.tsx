import { AnimatePresence } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { modalVariant, overlayVariant } from "../motionVariants/modal";

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
};
const Modal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  return (
    <AnimatePresence>
      {isModalOpen ? (
        <div className="relative z-10" key="modal">
          {/* background overlay */}
          <motion.div
            className="fixed inset-0 bg-black/30 overflow-hidden"
            variants={overlayVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {/* modal box container */}
          <div
            className="fixed inset-0 flex justify-center items-center"
            onClick={() => setIsModalOpen(false)}
          >
            {/* modal box */}
            <motion.div
              className="p-8 max-w-md text-center rounded-2xl bg-white transition-all"
              variants={modalVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h3 className="mb-4 text-lg font-medium leading-6 text-gray-900">
                Document your memories.
              </h3>
              <div className="my-6">
                <p className="text-sm text-gray-500">
                  Nothing is ever really lost to us as long as we remember it.
                </p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="block mx-auto rounded-md border border-gray-400 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-300/70 transition-all"
                  onClick={() => setIsModalOpen(false)}
                >
                  Back to home
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        <span className="hidden" />
      )}
    </AnimatePresence>
  );
};

export default Modal;

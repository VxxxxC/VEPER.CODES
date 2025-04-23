import React from "react";
import { IoArrowBack } from "react-icons/io5/index";

function ReturnButton() {
  return (
    <button onClick={() => history.back()}>
      <IoArrowBack
        size={46}
        className="p-2 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white bg-opacity-30 rounded-xl"
        aria-label="return button"
      />
    </button>
  );
}

export default ReturnButton;

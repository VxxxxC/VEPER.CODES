import React from "react";
import { IoArrowBack } from "react-icons/io5/index";

function ReturnButton() {
  return (
    <a href="/blog">
      <IoArrowBack
        size={46}
        className="p-2 dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white bg-opacity-30 rounded-xl"
        aria-label="return button"
      />
    </a>
  );
}

export default ReturnButton;

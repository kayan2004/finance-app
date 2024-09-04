import React from "react";

const DropDownColorMenu = ({ isVisible }) => {
  return (
    <dialog
      className={` absolute z-50 bg-white  top-[150%] w-full rounded-xl px-4 py-3 opacity overflow-visible box-shadow ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-green"></div>
          <span>Green</span>
        </div>
        <span>Already Used</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-green"></div>
          <span>Green</span>
        </div>
        <span>Already Used</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-green"></div>
          <span>Green</span>
        </div>
        <span>Already Used</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-green"></div>
          <span>Green</span>
        </div>
        <span>Already Used</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-green"></div>
          <span>Green</span>
        </div>
        <span>Already Used</span>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-green"></div>
          <span>Green</span>
        </div>
        <span>Already Used</span>
      </div>
    </dialog>
  );
};

export default DropDownColorMenu;

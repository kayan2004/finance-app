import React from "react";

const LatestSpending = () => {
  return (
    <div className="flex justify-between items-center">
      <h4 className="font-bold text-[12px] text-grey900">Papa Software</h4>
      <div className="grid">
        <strong className="font-bold text-[12px] text-grey900 text-end">
          -$10.00
        </strong>
        <span className=" text-[12px] text-grey500">16 Aug 2024</span>
      </div>
    </div>
  );
};

export default LatestSpending;

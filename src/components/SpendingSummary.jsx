import React from "react";

const SpendingSummary = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="h-[70%] w-1 rounded-full bg-blue"></div>
        <span className="text-[14px] text-grey500">Bills</span>
      </div>

      <div className="flex gap-4 ">
        <strong className="font-bold text-[16px] text-grey900">$250.00</strong>
        <span className="text-[12px] text-grey500">of $750.00</span>
      </div>
    </div>
  );
};

export default SpendingSummary;

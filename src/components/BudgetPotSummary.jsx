import React from "react";

const BudgetPotSummary = () => {
  return (
    <div className="flex gap-3">
      <div className="h-full w-1 bg-green rounded-full"></div>
      <div className="grid ">
        <span>Spent</span>
        <strong>$25.00</strong>
      </div>
    </div>
  );
};

export default BudgetPotSummary;

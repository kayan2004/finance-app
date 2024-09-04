const BillsSummary = () => {
  return (
    <div className="grid gap-6 bg-white rounded-xl p-6">
      <h3 className="font-bold text-[16px] text-grey900">Summary</h3>
      <div className="grid gap-4">
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-grey500">Paid Bills</span>
          <span className="text-grey900 font-bold">2 ($320.00)</span>
        </div>
        <hr></hr>
        <div className="flex items-center justify-between text-[12px]">
          <span className="text-grey500">Total Upcoming </span>
          <span className="text-grey900 font-bold">6 ($1,230.00)</span>
        </div>
        <hr></hr>
        <div className="flex items-center justify-between text-[12px] text-red">
          <span className="">Due Soon</span>
          <span className=" font-bold">2 ($40.00)</span>
        </div>
      </div>
    </div>
  );
};

export default BillsSummary;

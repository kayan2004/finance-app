import Summarycard from "../components/Summarycard";
const overview = () => {
  return (
    <div
      className="lg:col-start-2 lg:row-start-1 lg:row-end-3 flex flex-col gap-6 bg-beige100 p-4
            md:p-7 xl:p-12
                "
    >
      <h1 className="font-bold text-[32px] leading-[120%] ">Overview</h1>
      <div className="flex flex-col gap-3  md:flex-row">
        <Summarycard name={`Current Balance`} value={`$4,422.00`}></Summarycard>
        <Summarycard name={`Income`} value={`$3,814.00`}></Summarycard>
        <Summarycard name={`Expenses`} value={`$1,700.00`}></Summarycard>
      </div>
    </div>
  );
};

export default overview;

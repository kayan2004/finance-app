/* eslint-disable react/prop-types */

const Summarycard = ({ name, value }) => {
  return (
    <div
      className={`flex flex-col gap-2 rounded-xl p-5 w-full
                   ${
                     name === "Current Balance"
                       ? "bg-grey900 text-white"
                       : "bg-white text-grey900"
                   }`}
    >
      <h2
        className={`text-[14px] leading-[150%] ${
          name !== "Current Balance" && "text-grey500"
        } `}
      >
        {name}
      </h2>
      <span className="text-[32px] leading-[120%]  font-bold">{value}</span>
    </div>
  );
};

export default Summarycard;

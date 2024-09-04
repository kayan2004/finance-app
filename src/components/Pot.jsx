/* eslint-disable react/prop-types */

const Pot = ({ name, total, target }) => {
  return (
    <div className="bg-white p-6 rounded-xl flex flex-col gap-y-8">
      <div className="flex items-center gap-6">
        <div className="w-[16px] h-[16px] rounded-full bg-green"></div>
        <h2 className="text-grey900 font-bold text-[20px]">{name}</h2>
        <svg
          className="ml-auto"
          fill="none"
          height="4"
          viewBox="0 0 14 4"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m8.75 2c0 .34612-.10264.68446-.29493.97225-.19229.28778-.4656.51209-.78537.64454s-.67164.16711-1.01111.09958c-.33946-.06752-.65128-.23419-.89603-.47893-.24474-.24474-.41141-.55657-.47893-.89603-.06753-.33947-.03287-.69134.09958-1.01111.13246-.31977.35676-.593079.64454-.785372.28779-.192292.62613-.294928.97225-.294928.46413 0 .90925.184375 1.23744.512563.32819.328187.51256.773307.51256 1.237437zm-6.75-1.75c-.34612 0-.68446.102636-.97225.294928-.287783.192293-.512085.465602-.644538.785372-.132454.31977-.16711.67164-.099585 1.01111.067524.33946.234195.65129.478937.89603.244746.24474.556566.41141.896026.47893.33947.06753.69134.03287 1.01111-.09958s.59308-.35676.78537-.64454c.1923-.28779.29493-.62613.29493-.97225 0-.46413-.18437-.90925-.51256-1.237437-.32819-.328188-.77331-.512563-1.23744-.512563zm10 0c-.3461 0-.6845.102636-.9722.294928-.2878.192293-.5121.465602-.6446.785372-.1324.31977-.1671.67164-.0996 1.01111.0676.33946.2342.65129.479.89603.2447.24474.5565.41141.896.47893.3395.06753.6913.03287 1.0111-.09958s.5931-.35676.7854-.64454c.1923-.28779.2949-.62613.2949-.97225 0-.22981-.0453-.45738-.1332-.6697-.088-.21232-.2169-.405234-.3794-.567737-.1625-.162502-.3554-.291407-.5677-.379352-.2123-.087946-.4399-.133211-.6697-.133211z"
            fill="#b3b3b3"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-grey500 text-[14px]">Total Saved</span>
          <span className="text-grey900 text-[32px] font-bold">{`$${total.toFixed(
            2
          )}`}</span>
        </div>
        <div className="rounded-full w-full h-[8px] bg-beige100">
          <div className="rounded-full w-full h-[8px] bg-green"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-grey500 text-[12px] font-bold">7.95%</span>
          <span className="text-grey900 text-[12px] ">Target of {target}</span>
        </div>
      </div>
      <div className="flex gap-4 text-grey900 font-bold text-[14px] ">
        <button className=" bg-beige100 p-6 w-full rounded-lg">
          + Add Money
        </button>
        <button className=" bg-beige100 px-6 py-4 w-full rounded-lg">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Pot;

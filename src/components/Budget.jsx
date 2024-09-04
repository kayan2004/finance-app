import React from "react";
import LatestSpending from "./LatestSpending";

const Budget = () => {
  return (
    <div className="bg-white p-6 rounded-xl grid gap-6 ">
      <div className=" flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="bg-green w-[20px] aspect-square rounded-full"></div>
          <h3 className="font-bold text-grey900 text-[20px]">Entertainment</h3>
        </div>
        <svg
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
      <div className="text-[14px] text-grey500">Maximum of $50.00</div>
      <div className="h-8 p-1 bg-beige100 rounded-md">
        <div className="h-full w-[50%] bg-green rounded-md"></div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex gap-3">
          <div className="h-full w-1 bg-green rounded-full"></div>
          <div className="grid ">
            <span>Spent</span>
            <strong>$25.00</strong>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="h-full w-1 bg-beige100 rounded-full"></div>
          <div className="grid">
            <span>Spent</span>
            <strong>$50.00</strong>
          </div>
        </div>
      </div>
      <div className="grid gap-4 bg-beige100 p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-[16px] text-grey900">
            Latest Spending
          </h3>
          <div className="flex gap-4 items-center">
            <span>See All</span>
            <svg
              fill="none"
              height="11"
              viewBox="0 0 6 11"
              width="6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m.853506.146465 5.000004 5.000005c.04648.04643.08336.10158.10853.16228.02516.06069.03811.12576.03811.19147 0 .0657-.01295.13077-.03811.19147-.02517.06069-.06205.11584-.10853.16228l-5.000004 5.00003c-.069927.07-.159054.1177-.256097.137-.097042.0193-.197637.0094-.289048-.0285-.091412-.0378-.16953-.102-.2244652-.1843-.0549354-.0823-.08421767-.179-.08413981-.278l-.00000043-9.999984c-.00007788-.098949.02920444-.195695.08413984-.277992.0549356-.082297.1330536-.1464431.2244646-.1843193.091412-.03787611.192007-.04777907.289049-.02845381.097042.01932521.186169.06700801.256097.13701411z"
                fill="#696868"
              />
            </svg>
          </div>
        </div>
        <LatestSpending></LatestSpending>
        <hr></hr>
        <LatestSpending></LatestSpending>
        <hr></hr>
        <LatestSpending></LatestSpending>
      </div>
    </div>
  );
};

export default Budget;

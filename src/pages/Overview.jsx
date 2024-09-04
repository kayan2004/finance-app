import Summarycard from "../components/Summarycard";
import data from "/data.json";
import { formatDateString, formatCurrency } from "../utils";
import BudgetPotSummary from "../components/BudgetPotSummary";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import RecurringBillOverview from "../components/RecurringBillOverview";
const overview = () => {
  let transactions = data.transactions;
  const data2 = {
    datasets: [
      {
        label: "poll",
        data: [250, 67, 65, 25],
        backgroundColor: [
          " rgba(98, 96, 112, 1)",
          " rgba(130, 201, 215, 1)",
          "rgba(242, 205, 172, 1)",
          "rgba(39, 124, 120, 1)",
        ],
      },
    ],
  };
  const options = null;
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
      <div className="bg-white p-6 grid gap-6 rounded-xl">
        <div className=" flex justify-between rounded-lg">
          <h3 className="font-bold text-[20px]">Pots</h3>
          <div className="flex gap-4 items-center">
            <span className="text-[14px]">See Details</span>
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
        <div className="flex gap-4 p-4 bg-beige100 rounded-xl items-center">
          <svg
            fill="none"
            height="36"
            viewBox="0 0 28 36"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m22.4375 5.8875v-2.8875c0-.58016-.2305-1.13656-.6407-1.5468-.4102-.41023-.9666-.6407-1.5468-.6407h-12.5c-.58016 0-1.13656.23047-1.5468.6407-.41023.41024-.6407.96664-.6407 1.5468v2.8875c-1.39375.22446-2.66214.93755-3.57823 2.01165-.91608 1.07411-1.420065 2.43915-1.42177 3.85085v17.5c0 1.5747.62556 3.0849 1.73905 4.1984 1.1135 1.1135 2.62373 1.7391 4.19845 1.7391h15c1.5747 0 3.0849-.6256 4.1984-1.7391s1.7391-2.6237 1.7391-4.1984v-17.5c-.0017-1.4117-.5057-2.77674-1.4218-3.85085-.9161-1.0741-2.1845-1.78719-3.5782-2.01165zm-1.875-2.8875v2.8125h-3.125v-3.125h2.8125c.0829 0 .1624.03292.221.09153.0586.0586.0915.13809.0915.22097zm-8.125 2.8125v-3.125h3.125v3.125zm-4.6875-3.125h2.8125v3.125h-3.125v-2.8125c0-.08288.03292-.16237.09153-.22097.0586-.05861.13809-.09153.22097-.09153zm17.8125 26.5625c0 .5335-.1051 1.0618-.3092 1.5547-.2042.4928-.5034.9407-.8807 1.3179-.3772.3773-.8251.6765-1.3179.8807-.4929.2041-1.0212.3092-1.5547.3092h-15c-.53349 0-1.06177-.1051-1.55465-.3092-.49289-.2042-.94073-.5034-1.31797-.8807-.37724-.3772-.67648-.8251-.88064-1.3179-.20416-.4929-.30924-1.0212-.30924-1.5547v-17.5c0-1.0774.42801-2.11075 1.18988-2.87262s1.79518-1.18988 2.87262-1.18988h15c1.0774 0 2.1108.42801 2.8726 1.18988.7619.76187 1.1899 1.79522 1.1899 2.87262zm-6.875-6.25c0 .9117-.3622 1.786-1.0068 2.4307-.6447.6446-1.519 1.0068-2.4307 1.0068h-.3125v1.5625c0 .2486-.0988.4871-.2746.6629s-.4143.2746-.6629.2746-.4871-.0988-.6629-.2746-.2746-.4143-.2746-.6629v-1.5625h-1.5625c-.2486 0-.4871-.0988-.6629-.2746s-.2746-.4143-.2746-.6629.0988-.4871.2746-.6629.4143-.2746.6629-.2746h3.75c.4144 0 .8118-.1646 1.1049-.4576.293-.2931.4576-.6905.4576-1.1049s-.1646-.8118-.4576-1.1049c-.2931-.293-.6905-.4576-1.1049-.4576h-2.5c-.9117 0-1.786-.3622-2.4307-1.0068-.64464-.6447-1.0068-1.519-1.0068-2.4307s.36216-1.786 1.0068-2.4307c.6447-.6446 1.519-1.0068 2.4307-1.0068h.3125v-1.5625c0-.2486.0988-.4871.2746-.6629s.4143-.2746.6629-.2746.4871.0988.6629.2746.2746.4143.2746.6629v1.5625h1.5625c.2486 0 .4871.0988.6629.2746s.2746.4143.2746.6629-.0988.4871-.2746.6629-.4143.2746-.6629.2746h-3.75c-.4144 0-.8118.1646-1.1049.4576-.293.2931-.4576.6905-.4576 1.1049s.1646.8118.4576 1.1049c.2931.293.6905.4576 1.1049.4576h2.5c.9117 0 1.786.3622 2.4307 1.0068.6446.6447 1.0068 1.519 1.0068 2.4307z"
              fill="#277c78"
            />
          </svg>
          <div className="grid ">
            <span className="text-grey500 text-[14px]">Total Saved</span>
            <strong className="font-bold text-[32px] text-grey900">$850</strong>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <BudgetPotSummary></BudgetPotSummary>
          <BudgetPotSummary></BudgetPotSummary>
          <BudgetPotSummary></BudgetPotSummary>
          <BudgetPotSummary></BudgetPotSummary>
        </div>
      </div>
      <div className="bg-white p-6 grid gap-6 rounded-xl">
        <div className=" flex justify-between rounded-lg">
          <h3 className="font-bold text-[20px]">Transactions</h3>
          <div className="flex gap-4 items-center">
            <span className="text-[14px]">See All</span>
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
        <ul className="grid gap-6 ">
          {transactions.slice(0, 5).map((transaction, index) => {
            return (
              <>
                <hr></hr>
                <li
                  key={index}
                  className="grid   md:grid-cols-[3fr,1fr,1fr,1fr]  md:grid-rows-1 items-center"
                >
                  <div className="hidden items-center gap-3 md:flex">
                    <img
                      className="rounded-full w-[40px] aspect-square  "
                      src={transaction.avatar}
                    ></img>
                    <span className="font-bold text-[14px] text-grey900">
                      {transaction.name}
                    </span>
                  </div>
                  <img
                    className="rounded-full w-[40px] aspect-square row-span-2 md:hidden"
                    src={transaction.avatar}
                  ></img>
                  <span className="font-bold text-[14px] text-grey900 md:hidden">
                    {transaction.name}
                  </span>

                  <span className="text-[12px] text-grey500 row-start-2 col-start-2 md:col-start-2 md:row-start-1">
                    {transaction.category}
                  </span>
                  <span className="text-[12px] text-grey500 row-start-2 col-start-3 text-end md:text-start md:col-start-3 md:row-start-1">
                    {formatDateString(transaction.date)}
                  </span>
                  <span
                    className={`text-[14px] font-bold text-grey900 text-end row-start-1 col-start-3 md:col-start-4 md:row-start-1 ${
                      transaction.amount > 0 ? "text-green" : "text-grey900"
                    }
                    `}
                  >
                    {formatCurrency(transaction.amount)}
                  </span>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div className="grid bg-white p-6 rounded-xl ">
        <div className=" flex justify-between rounded-lg">
          <h3 className="font-bold text-[20px]">Budgets</h3>
          <div className="flex gap-4 items-center">
            <span className="text-[14px]">See Details</span>
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
        <div className="flex items-center justify-center relative mb-6">
          <div className="w-60 h-auto ">
            <Doughnut data={data2} options={options}></Doughnut>
          </div>
          <div className="absolute top-[50%] grid place-items-center translate-y-[-50%]">
            <strong className="font-bold text-[32px] text-grey900">$407</strong>
            <span className="text-[12px] text-grey500">of $975 limit</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <BudgetPotSummary></BudgetPotSummary>
          <BudgetPotSummary></BudgetPotSummary>
          <BudgetPotSummary></BudgetPotSummary>
          <BudgetPotSummary></BudgetPotSummary>
        </div>
      </div>
      <div className="grid bg-white p-6 rounded-xl gap-4 ">
        <div className=" flex justify-between rounded-lg">
          <h3 className="font-bold text-[20px]">Recurring Bills</h3>
          <div className="flex gap-4 items-center">
            <span className="text-[14px]">See Details</span>
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
        <div className="grid gap-4">
          <RecurringBillOverview></RecurringBillOverview>
          <RecurringBillOverview></RecurringBillOverview>
          <RecurringBillOverview></RecurringBillOverview>
        </div>
      </div>
    </div>
  );
};

export default overview;

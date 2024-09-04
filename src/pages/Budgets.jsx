import InputWithColorTag from "../components/InputWithColorTag";
import InputWithPrefix from "../components/InputWithPrefix";
import { useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const Budgets = () => {
  const data = {
    datasets: [
      {
        label: "poll",
        data: [250, 67, 65, 25],
        backgroundColor: ["rgba(98, 96, 112, 1)", "rgba(242, 205, 172, 1)"],
      },
    ],
  };
  const options = null;
  const dialogRef = useRef(null);

  const closeDialog = () => {
    dialogRef.current.close();
  };
  const showDialog = () => {
    dialogRef.current.showModal();
  };
  return (
    <div
      className="lg:col-start-2 lg:row-start-1 lg:row-end-3 flex flex-col gap-6 bg-beige100 p-4
            md:p-7 xl:p-12
                "
    >
      <div className="flex justify-between items-center ">
        <h1 className="font-bold text-[32px] leading-[120%]  ">Budgets</h1>
        <button
          onClick={showDialog}
          className="capitalize font-bold text-[14px] leading-[150%] rounded-lg bg-grey900 p-4 text-white"
        >
          + add new Budget
        </button>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 py-4 lg:grid-cols-2">
        <Pot name={`Savings`} total={1500} target={2000}></Pot>
        <Pot name={`Concert Ticket`} total={1500} target={2000}></Pot>
        <Pot name={`Gift`} total={1500} target={2000}></Pot>
        <Pot name={`New Laptop`} total={1500} target={2000}></Pot>
        <Pot name={`New Laptop`} total={1500} target={2000}></Pot>
      </div> */}
      <div className="w-36 h-auto">
        <Doughnut data={data} options={options}></Doughnut>
      </div>
      <dialog ref={dialogRef} className="w-[90%] h-[50%] p-6 rounded-xl gap-4 ">
        <div className="flex justify-between items-center">
          <h3 className="text-[20px] font-bold text-grey900">Add New Pot</h3>
          <button onClick={closeDialog}>
            <svg
              fill="none"
              height="26"
              viewBox="0 0 26 26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m17.53 9.53-3.47 3.47 3.47 3.47c.0737.0687.1328.1515.1738.2435s.063.1913.0648.292-.0168.2007-.0545.2941-.0938.1782-.1651.2494c-.0712.0713-.156.1274-.2494.1651s-.1934.0563-.2941.0545-.2-.0238-.292-.0648-.1748-.1001-.2435-.1738l-3.47-3.47-3.47 3.47c-.14217.1325-.33022.2046-.52452.2012-.1943-.0035-.37968-.0822-.5171-.2196-.13741-.1374-.21612-.3228-.21955-.5171s.0687-.3823.20118-.5245l3.46999-3.47-3.46999-3.47c-.13248-.14218-.20461-.33022-.20118-.52452s.08214-.37969.21955-.5171c.13742-.13741.3228-.21613.5171-.21956.1943-.00342.38235.0687.52452.20118l3.47 3.47 3.47-3.47c.1422-.13248.3302-.2046.5245-.20118.1943.00343.3797.08215.5171.21956s.2162.3228.2196.5171-.0687.38234-.2012.52452zm8.22 3.47c0 2.5217-.7478 4.9868-2.1488 7.0835-1.4009 2.0967-3.3922 3.7309-5.722 4.696-2.3297.965-4.8933 1.2175-7.3666.7255-2.47325-.4919-4.74509-1.7063-6.52821-3.4894s-2.997435-4.0549-3.489397-6.5282c-.49196108-2.4733-.239469-5.0369.725547-7.36661.96502-2.32976 2.59922-4.32104 4.69594-5.72203 2.09673-1.400986 4.56182-2.14876 7.08352-2.14876 3.3803.00397 6.621 1.34854 9.0112 3.73877 2.3903 2.39023 3.7348 5.63094 3.7388 9.01123zm-1.5 0c0-2.225-.6598-4.40011-1.896-6.25017-1.2361-1.85005-2.9931-3.29199-5.0488-4.14348-2.0557-.85148-4.3177-1.07427-6.5-.64018-2.18225.43408-4.18681 1.50554-5.76015 3.07888s-2.6448 3.5779-3.07888 5.76015c-.43408 2.1823-.2113 4.4443.64019 6.5s2.29343 3.8127 4.14348 5.0488c1.85005 1.2362 4.02516 1.896 6.25016 1.896 2.9827-.0033 5.8422-1.1896 7.9513-3.2987s3.2954-4.9686 3.2987-7.9513z"
                fill="#696868"
              />
            </svg>
          </button>
        </div>
        <p className="text-[14px] text-grey500">
          Create a pot to set savings targets. These can help keep you on track
          as you save for special purchases.
        </p>
        <InputWithPrefix></InputWithPrefix>
        <InputWithColorTag></InputWithColorTag>
      </dialog>
    </div>
  );
};

export default Budgets;

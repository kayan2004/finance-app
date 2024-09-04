import { useState } from "react";
import InputWithSearch from "../components/InputWithSearch";
import SortBy from "../components/SortBy";
import data from "/data.json";
import { formatDateToMonthly, formatCurrency } from "../utils";
import TotalBills from "../components/TotalBills";
import BillsSummary from "../components/BillsSummary";
const Bills = () => {
  let transactions = data.transactions.filter((transaction) => {
    return transaction.recurring;
  });

  const [sortBy, setSortBy] = useState("Latest");
  const [query, setQuery] = useState("");
  let sortedTransactions = null;
  let searchedTransactions = null;
  if (query !== "") {
    searchedTransactions = transactions.filter((transaction) => {
      return transaction.name.toLowerCase().includes(query.toLowerCase());
    });
  } else {
    searchedTransactions = transactions;
  }

  switch (sortBy) {
    case "Oldest":
      sortedTransactions = searchedTransactions.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      break;
    case "Latest":
      sortedTransactions = searchedTransactions.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      break;
    case "A to Z":
      sortedTransactions = searchedTransactions.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      break;
    case "Z to A":
      sortedTransactions = searchedTransactions.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      break;
    case "Highest":
      sortedTransactions = searchedTransactions.sort((a, b) => {
        if (a.amount < b.amount) return 1;
        if (a.amount > b.amount) return -1;
        return 0;
      });
      break;
    case "Lowest":
      sortedTransactions = searchedTransactions.sort((a, b) => {
        if (a.amount < b.amount) return -1;
        if (a.amount > b.amount) return 1;
        return 0;
      });
      break;
  }

  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div
      className="lg:col-start-2 lg:row-start-1 lg:row-end-3 flex flex-col gap-6 bg-beige100 p-4
            md:p-7 xl:p-12 
                "
    >
      <h1 className="font-bold text-[32px] leading-[120%]  ">
        Recurrent Bills
      </h1>
      <div className="w-full h-full  rounded-xl grid gap-8 lg:grid-cols-[1fr,2fr]">
        <div className="grid gap-4 md:grid-cols-2 lg:flex lg:flex-col">
          <TotalBills></TotalBills>
          <BillsSummary></BillsSummary>
        </div>
        <div className="w-full h-full  rounded-xl p-6 grid gap-10 bg-white">
          <div className="flex items-center justify-between  ">
            <InputWithSearch onClick={handleQuery}></InputWithSearch>
            <SortBy onClick={handleSortBy}></SortBy>
          </div>
          <ul className="grid gap-4 ">
            <li className="  grid-cols-[3fr,1fr,1fr] text-[12px] text-grey500 hidden md:grid">
              <h3>Bill Title</h3>
              <h3>Due Date</h3>
              <h3 className="text-end">Amount</h3>
            </li>
            {sortedTransactions.map((transaction, index) => {
              return (
                <>
                  <hr></hr>
                  <li
                    key={index}
                    className="grid grid-rows-[auto,auto] grid-cols-[auto,auto] gap-y-2 md:grid-cols-[3fr,1fr,1fr] md:grid-rows-1 items-center"
                  >
                    <div className=" gap-3 items-center flex md:col-start-1">
                      <img
                        className="rounded-full w-[40px] aspect-square"
                        src={transaction.avatar}
                      ></img>
                      <span className="font-bold text-[14px] text-grey900">
                        {transaction.name}
                      </span>
                    </div>
                    <span className="text-[12px] text-green row-start-2 md:row-start-1 md:col-start-2">
                      {formatDateToMonthly(transaction.date)}
                    </span>
                    <span className="text-[14px] font-bold text-grey900 text-end row-start-2 col-start-2 md:row-start-1 md:col-start-3">
                      {formatCurrency(transaction.amount)}
                    </span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bills;

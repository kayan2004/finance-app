import { useState } from "react";
import Category from "../components/Category";
import InputWithSearch from "../components/InputWithSearch";
import SortBy from "../components/SortBy";
import data from "/data.json";
import { formatDateString, formatCurrency } from "../utils";
const Transactions = () => {
  let transactions = data.transactions;

  const [sortBy, setSortBy] = useState("Latest");
  const [category, setCategory] = useState("All Transactions");
  const [query, setQuery] = useState("");
  let filteredTransactions = null;
  let sortedTransactions = null;
  let searchedTransactions = null;
  if (query !== "") {
    searchedTransactions = transactions.filter((transaction) => {
      return transaction.name.toLowerCase().includes(query.toLowerCase());
    });
  } else {
    searchedTransactions = transactions;
  }
  if (category === "All Transactions") {
    filteredTransactions = searchedTransactions;
  } else {
    filteredTransactions = searchedTransactions.filter((transaction) => {
      return transaction.category == category;
    });
  }
  switch (sortBy) {
    case "Oldest":
      sortedTransactions = filteredTransactions.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
      break;
    case "Latest":
      sortedTransactions = filteredTransactions.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      break;
    case "A to Z":
      sortedTransactions = filteredTransactions.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      break;
    case "Z to A":
      sortedTransactions = filteredTransactions.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      break;
    case "Highest":
      sortedTransactions = filteredTransactions.sort((a, b) => {
        if (a.amount < b.amount) return 1;
        if (a.amount > b.amount) return -1;
        return 0;
      });
      break;
    case "Lowest":
      sortedTransactions = filteredTransactions.sort((a, b) => {
        if (a.amount < b.amount) return -1;
        if (a.amount > b.amount) return 1;
        return 0;
      });
      break;
  }
  const handleCategory = (category) => {
    setCategory(category);
  };
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
      <h1 className="font-bold text-[32px] leading-[120%] ">Transactions</h1>
      <div className="w-full h-full bg-white rounded-xl p-6 grid gap-10">
        <div className="flex items-center justify-between ">
          <InputWithSearch onClick={handleQuery}></InputWithSearch>

          <SortBy onClick={handleSortBy}></SortBy>
          <Category onClick={handleCategory}></Category>
        </div>
        <ul className="grid gap-6 ">
          <li className=" grid-cols-[3fr,1fr,1fr,1fr] text-[12px] text-grey500 hidden md:grid">
            <h3>Recipient / Sender</h3>
            <h3>Category</h3>
            <h3>Transaction Date</h3>
            <h3 className="text-end">Amount</h3>
          </li>
          {sortedTransactions.map((transaction, index) => {
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
    </div>
  );
};

export default Transactions;

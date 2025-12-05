import React from "react";
import TransactionIcon from "../content/Transaction.svg";

export const Transaction = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img
        src={TransactionIcon}
        alt="Transactions Card"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Transaction;

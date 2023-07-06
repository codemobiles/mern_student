import { getTransactions, shopSelector } from "@/store/slices/shopSlice";
import { useAppDispatch } from "@/store/store";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function TransactionPage() {
  const shopReducer = useSelector(shopSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return <div>TransactionPage {JSON.stringify(shopReducer.transactionAllResult)}</div>;
}

import { getProducts, stockSelector } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function StockPage() {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  useEffect(() => {
    dispatch(getProducts(""));
  }, [dispatch]);

  return (
    <div>
      <h2>Stock</h2>
      <ul>
        {stockReducer.stockAllResult.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

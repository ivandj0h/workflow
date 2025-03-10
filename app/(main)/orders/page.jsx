import React from "react";
import SearchInput from "@/components/Form/SearchInput";
import OrderModal from "@/components/Modal/OrderModal";

const OrderPage = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <SearchInput placeholder={"Search Order..."} />
        <OrderModal />
      </div>
    </div>
  );
};

export default OrderPage;

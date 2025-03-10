"use client";

import React from "react";
import Modal from "@/components/Modal/Modal";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const OrderModal = ({ order = {}, type = "CREATE", trigger = null }) => {
  const TriggerButton = trigger ? (
    trigger
  ) : (
    <Button variant="primary">
      Create New Order <Plus size={18} />
    </Button>
  );
  return (
    <Modal
      title={type === "UPDATE" ? "Update Order" : "Create Order"}
      trigger={TriggerButton}
      classes={"max-w-[800px]"}
    >
      <div className="mt-6">
        <p>Order</p>
      </div>
    </Modal>
  );
};

export default OrderModal;

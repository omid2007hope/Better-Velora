import { useState } from "react";
import ShoppingCart from "../component/layout/orderPage/BasketPage";
import Checkout from "../component/layout/orderPage/CheckoutForm";
import WithMenuLayout from "../component/layout/index";
import { Seo } from "../../utils/SEO/SEO";

function OrderPage() {
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState([]);

  return (
    <>
      <Seo
        title="Your Cart | Velora"
        description="Review your Velora items, update quantities, and checkout securely. Built by Omid Teimory."
      />
      {step === 1 && (
        <ShoppingCart
          step={step}
          setStep={setStep}
          product={product}
          setProduct={setProduct}
        />
      )}

      {step === 2 && (
        <Checkout
          step={step}
          setStep={setStep}
          product={product}
          setProduct={setProduct}
        />
      )}
    </>
  );
}

export default WithMenuLayout(OrderPage);

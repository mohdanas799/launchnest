"use client";

export default function Pricing() {
const handleCheckout = async () => {
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
    });

    const data = await res.json();
    window.location.href = data.url;
  } catch (err) {
    console.error('Checkout error:', err);
  }
}


  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Pro Plan – ₹199/month</h1>
      <button
        onClick={handleCheckout}
        className="bg-green-600 text-white px-4 py-2"
      >
        Buy Now
      </button>
    </div>
  );
}

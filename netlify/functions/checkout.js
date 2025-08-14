// netlify/functions/checkout.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { product } = JSON.parse(event.body);

    let priceId;
    if (product === "web") {
      priceId = process.env.WEB_PRICE_ID;
    } else if (product === "mobile") {
      priceId = process.env.MOBILE_PRICE_ID;
    } else {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid product" }) };
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.SITE_URL}/success`,
      cancel_url: `${process.env.SITE_URL}/cancel`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}


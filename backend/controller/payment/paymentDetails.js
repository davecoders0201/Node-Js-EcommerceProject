const paymentModel = require("../../models/paymentModel");

const stripe = require("stripe")(
  "sk_test_51MnbtkSI6t5fguBr2gPC7eQIXMvFjqNJpHonAnkL68KoV7aVKSIkxoswfZo3335qHQJ8oVPmZfmjhFwqQcYPLFbF00xOVJMYW3"
); // Replace with your own secret key

const createPaymentIntent = async (req, res) => {
  try {
    // Get the payment details from the request body
    const { paymentId } = req.body;

    // Retrieve the payment from the database
    const payment = await paymentModel.findById(paymentId);

    // Create a new payment intent using the Stripe API
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: "INR",
      payment_method_types: ["card"],
    });

    // Send the payment intent client secret as a response
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const generateToken = async (req, res) => {
  try {
    // Get the card details from the request body
    const { cardNumber, expMonth, expYear, cvc } = req.body;

    // Create a new token using the Stripe API
    const token = await stripe.tokens.create({
      card: {
        number: cardNumber,
        exp_month: expMonth,
        exp_year: expYear,
        cvc: cvc,
      },
    });

    // Send the token as a response
    res.status(200).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// module.exports = generateToken;
module.exports = createPaymentIntent;

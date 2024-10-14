const express = require('express');
const axios = require('axios');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const sendEmail = require('../utils/sendEmail');

// Initialize payment request (request to pay)
router.post('/pay', protect, async (req, res) => {
    const { amount, phoneNumber, currency = 'UGX' } = req.body;

    try {
        const response = await axios.post('https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay', {
            amount,
            currency,
            externalId: `land_${req.user._id}`,
            payer: {
                partyIdType: 'MSISDN',
                partyId: phoneNumber,
            },
            payerMessage: 'Payment for land purchase',
            payeeNote: 'LandEase Transaction',
        }, {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.MTN_SUBSCRIPTION_KEY,
                'X-Reference-Id': req.user._id,
                'X-Target-Environment': 'sandbox', // Change to 'live' for production
                Authorization: `Bearer ${process.env.MTN_ACCESS_TOKEN}`,
            },
        });

        res.json({ message: 'Payment request sent', data: response.data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.response.data });
    }
});

// Payment status check
router.get('/status/:transactionId', protect, async (req, res) => {
    const { transactionId } = req.params;

    try {
        const response = await axios.get(`https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay/${transactionId}`, {
            headers: {
                'Ocp-Apim-Subscription-Key': process.env.MTN_SUBSCRIPTION_KEY,
                Authorization: `Bearer ${process.env.MTN_ACCESS_TOKEN}`,
            },
        });

        res.json({ status: response.data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error', error: error.response.data });
    }
});

	//on successful payment:
router.post('/pay', protect, async (req, res) => {
  const { amount, phoneNumber, currency = 'UGX' } = req.body;

  try {
    const response = await axios.post('https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay', {
      amount,
      currency,
      externalId: `land_${req.user._id}`,
      payer: {
        partyIdType: 'MSISDN',
        partyId: phoneNumber,
      },
      payerMessage: 'Payment for land purchase',
      payeeNote: 'Quick Land Transaction',
    }, {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.MTN_SUBSCRIPTION_KEY,
        'X-Reference-Id': req.user._id,
        'X-Target-Environment': 'sandbox',
        Authorization: `Bearer ${process.env.MTN_ACCESS_TOKEN}`,
      },
    });

    // Send email notification
    const message = `Your payment of UGX ${amount} was initiated successfully. We'll notify you once it's confirmed.`;
    await sendEmail({
      email: req.user.email, // user's email
      subject: 'Payment Initiated - Quick Land',
      message,
    });

    res.json({ message: 'Payment request sent, email notification sent.', data: response.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error', error: error.response.data });
  }
});

module.exports = router;


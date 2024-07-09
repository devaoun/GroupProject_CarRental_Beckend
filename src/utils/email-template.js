const dayjs = require("dayjs");

function getEmailTemplate(
  customerName,
  bookingId,
  carDetails,
  startDate,
  endDate,
  pickDropTime,
  pickupLocation,
  dropOffLocation,
  totalAmount
) {
  const formattedStartDate = dayjs(startDate).format("ddd MMM D, YYYY");
  const formattedEndDate = dayjs(endDate).format("ddd MMM D, YYYY");

  return `
   <!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: #f7fafc;
        font-family: "sans-serif";
        line-height: 1.6;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .container {
        max-width: 768px;
        margin: 0 auto;
        padding: 24px;
        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
      }
      .heading {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 24px;
        text-align: center;
        color: #000000;
      }
      .text {
        margin-bottom: 16px;
        font-size: 1.125rem;
      }
      .info-box {
        margin-bottom: 24px;
        padding: 16px;
        background-color: #f7fafc;
        border-radius: 8px;
      }
      .info-box h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .info-box p {
        margin-bottom: 8px;
        font-size: 1.125rem;
      }
      .info-box p span {
        font-weight: 600;
      }
      .contact a {
        color: #000000;
      }
      .signature {
        font-size: 1.125rem;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2 class="heading">Rental Payment Confirmation</h2>
      <p class="text">Dear ${customerName},</p>
      <p class="text">
        Thank you for choosing our car rental service! Your payment has been
        confirmed. Here are the details of your rental:
      </p>

      <div class="info-box">
        <h3>Booking ID: ${bookingId}</h3>
        <p><span>Car Details:</span> ${carDetails}</p>
        <p>
          <span>Rental Period:</span> From ${formattedStartDate} at
          ${pickDropTime} to ${formattedEndDate} at ${pickDropTime}
        </p>
        <p><span>Total Amount Paid:</span> &#3647; ${totalAmount}</p>
      </div>

      <div class="info-box">
        <p><span>Pickup Location:</span> ${pickupLocation}</p>
        <p><span>Dropoff Location:</span> ${dropOffLocation}</p>
      </div>

      <p class="text">
        Your car will be ready for pickup on the dates specified in your rental
        details. If you have any questions or concerns, please contact us at
        <a href="tel:(414) 687-5892">(414) 687-5892</a> or
        <a href="mailto:contact@company.com">contact@company.com</a>.
      </p>

      <p class="text">Best regards,</p>
      <p class="signature">Stella Car Rental</p>
    </div>
  </body>
</html>

  `;
}

module.exports = getEmailTemplate;

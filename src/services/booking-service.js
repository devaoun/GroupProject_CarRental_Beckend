const prisma = require("../model/prisma");

const bookingService = {};

bookingService.findBookingByCustomerId = (id) =>
  prisma.bookings.findMany({
    where: { customerId: id },
  });

bookingService.getAllBooking = () => prisma.bookings.findMany()

bookingService.updateBookingStatus = (bookingId,status) => prisma.bookings.update({
  where : {bookingId},
  data : {status}
})

module.exports = bookingService;

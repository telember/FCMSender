
// let payload = {
//   voucherRedemption: {
//     voucherId: "3402",
//     status: "valid",
//     voucherCode: "VC-Y7D6-JZ42",
//     savedDate: "2024-12-11T11:11:47.000Z",
//     usedDate: "2024-12-12T04:26:33.000Z",
//     rejectedDate: null,
//     expiredDate: "2024-12-31T16:59:59.000Z",
//     voucherTitle: "Eat",
//     createdAt: "1733977594"
//   }
// };

//  voucherPayload
let voucherPayload = {
      title: "นี่คือบัตรกำนัลภาษาอังกฤษ",
      body: "Enjoy! นี่คือบัตรกำนัลภาษาอังกฤษ voucher is redeemed successfully",
      place_id: "2305",
      place_name: "Universal Studios Japan",
      voucher_id: "3398",
      category_id: "126",
      category_label: "Amusement Park",
      id: "0",
      logo: "https://ik.imagekit.io/notifyme/dev/logos/edk2s13jdic3r70wp3sj8yoog3x6ta49he5feckk.jpeg",
      voucherRedemption: JSON.stringify({
        placeId: "2305",
        placeName: "Universal Studios Japan",
        firstName: "Poldet",
        lastName: "AB",
        voucherId: "3398",
        status: "valid",
        alertId: "0",
        voucherCode: "VC-MZ79-ZJ8D",
        savedDate: "2025-07-01T09:21:30.000Z",
        // usedDate: null,
        // rejectedDate: "2025-07-02T03:51:15.000Z",
        usedDate: "2025-07-02T03:51:15.000Z",
        rejectedDate: null,
        expiredDate: "2025-07-31T16:59:59.000Z",
        voucherTitle: "นี่คือบัตรกำนัลภาษาอังกฤษ",
        createdAt: "1751428276"
      })
    };

exports.payload = voucherPayload; 
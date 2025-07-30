
//  voucherPayload
let voucherPayload = {
      title: "title FCM",
      body: "body FCM",
      place_id: "0000",
      place_name: "GOGO Place name ",
      voucher_id: "0000",
      category_id: "1",
      category_label: "Amusement Park",
      id: "0",
      logo: "https://thumbs.dreamstime.com/b/best-quality-illustration-famous-superman-logo-isolated-transparent-background-high-detailed-original-version-104743115.jpg",
      voucherRedemption: JSON.stringify({
        placeId: "0000",
        placeName: "place_name",
        firstName: "User",
        lastName: "AB",
        voucherId: "0000",
        status: "valid",
        alertId: "0",
        voucherCode: "VC-MZ79-ZJ8DXXD",
        savedDate: "2025-07-01T09:21:30.000Z",
        usedDate: "2025-07-02T03:51:15.000Z",
        rejectedDate: null,
        expiredDate: "2025-07-31T16:59:59.000Z",
        voucherTitle: "นี่คือบัตรกำนัลภาษาอังกฤษ",
        createdAt: "1751428276"
      })
    };

exports.payload = voucherPayload; 
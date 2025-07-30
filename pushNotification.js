const path = require('path');
const admin = require('firebase-admin');
const { payload } = require('./pushNotificationData');
const serviceAccount = require('./credential.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

async function pushNotification() {
  const { tokens, title, body, time } = require(path.join(__dirname, 'input.json'));
  for (let i = 0; i < time; i++) {

    const messages = tokens.map(token => ({
      token,
      data: payload,

      // iOS-specific configuration for data-only messages
      // Android: Comment out this section
      notification: {
        title: `${title}+${i}`,
        body: body
      },
      apns: {
        payload: {
          aps: {
            "mutable-content": 1,
            "content-available": 1
          }
        }
      }
    }));
    console.log(`#FCM Send ${i + 1}/${time}`);
    const results = await admin.messaging().sendEach(messages);

    results.responses.forEach((response, i) => {
      if (response.success) {
        console.log(`✅ ${tokens} \n### Success: ${response.messageId}`);
      } else {
        console.log(`❌ ${tokens} \n### Error: ${response.error.code} - ${response.error.message}`);
      }
    });

    console.log(`\nTotal: ${results.successCount} sent, ${results.failureCount} failed`);


  }
}

module.exports = { pushNotification };
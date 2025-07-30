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
  const { tokens } = require(path.join(__dirname, 'input.json'));
  
  const messages = tokens.map(token => ({ 
    token, 
    data: payload,
    // iOS specific config for data messages

    // notification: {
    //   title: "test fcm data",
    //   body: "body www"
    // },
    // apns: {
    //   payload: {
    //     aps: {
    //       "mutable-content": 1,
    //       "content-available": 1
    //     }
    //   }
    // }
  }));
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

module.exports = { pushNotification };
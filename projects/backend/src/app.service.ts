import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FSA_PROJECT_ID,
    privateKey: process.env.FSA_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FSA_CLIENT_EMAIL,
  }),
});

@Injectable()
export class AppService {
  async getCreateCustomToken(request_token): Promise<string> {
    try {
      const token = await admin.auth().createCustomToken(request_token);
      return token;
    } catch (e) {
      return '';
    }
  }
}

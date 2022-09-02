import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';
import daserviceAccount from '../threebird-web3-firebase-adminsdk-f6ths-c009113b3f.json';
admin.initializeApp({
  credential: admin.credential.cert(daserviceAccount),
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

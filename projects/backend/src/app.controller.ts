import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/getToken')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getCreateCustomToken(
    @Body() request_token: { message: string; signature: string },
  ): Promise<string> {
    return await this.appService.getCreateCustomToken(request_token.token);
  }
}

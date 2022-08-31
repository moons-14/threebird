import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async getCreateCustomToken(@Body() request_token: unknown): Promise<string> {
    return await this.appService.getCreateCustomToken(request_token);
  }
}

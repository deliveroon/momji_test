import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { apiSuccess } from './shared/interfaces/apiSuccess';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApiSuccess(): apiSuccess {
    return this.appService.getApiSuccess();
  }
}

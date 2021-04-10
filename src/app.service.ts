import { Injectable, Res } from '@nestjs/common';
import { apiSuccess } from './shared/interfaces/apiSuccess';
import { ConfigService } from './shared/services/configService';

@Injectable()
export class AppService {
  private configService: ConfigService;

  constructor(){
    this.configService = new ConfigService();
  }

  getApiSuccess() : apiSuccess {
    return this.configService.getApiSuccess();
  }
}

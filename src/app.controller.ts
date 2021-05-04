import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { apiSuccess } from './shared/interfaces/apiSuccess';
const fetch = require('node-fetch');


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getApiSuccess(): apiSuccess {
    return this.appService.getApiSuccess();
  }

  @Get('/testPOST')
  getTest(): any {
    const body = {
      "login": "test@momji.fr",
      "password": "zS56fSiT9",
      "keepAlive": true,
      }
 
    fetch('http://tokyo.speaking-beta.com/api/v2/auth/login', {
            method: 'post',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
    })
    .then(res => {
      console.log(res.json)
      return res.json();
    })
  }
}

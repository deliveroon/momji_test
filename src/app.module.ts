import { Module, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLogger } from './middleware/logger.middleware'
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './shared/services/configService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './modules/team/team.module';
import { EmployeeModule } from './modules/employee/employee.module';


@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: '.env' // gestion du dotenv via le ConfigService
      }
    ),
    //TypeOrmModule.forRoot(ConfigService.getTypeOrmConfig()),
    TeamModule,
    EmployeeModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    ConfigService,
  ],
})
export class AppModule {
  // configuration du middleware pour le moment un Logger 
  configure(consumer: MiddlewareConsumer){
    consumer
      .apply(MyLogger)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}

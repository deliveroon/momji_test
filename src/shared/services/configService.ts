import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { apiSuccess } from "../interfaces/apiSuccess";

require('dotenv').config();

@Injectable()
export class ConfigService{

    public getApiSuccess (): apiSuccess{
        return {
            version: process.env.API_VERSION,
            statusCode: 200,
            message: "Welcom to Mômji test API! =)"
          } as apiSuccess;
    }

    public static getTypeOrmConfig(): TypeOrmModuleOptions{
        return {
            type: 'mariadb',
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [],
            synchronize: true,
          } as TypeOrmModuleOptions
    }
}
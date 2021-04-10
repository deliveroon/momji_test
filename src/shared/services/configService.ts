import { Injectable } from "@nestjs/common";
import { apiSuccess } from "../interfaces/apiSuccess";

require('dotenv').config();

@Injectable()
export class ConfigService{
    private API_VERSION = process.env.API_VERSION
    private DB_TYPE = process.env.DB_TYPE;
    private DB_HOST = process.env.DB_HOST;
    private DB_PORT = process.env.DB_PORT;
    private DB_USER = process.env.DB_USER;
    private DB_PASSWORD = process.env.DB_PASSWORD;

    public getApiSuccess (): apiSuccess{
        return {
            version: this.API_VERSION,
            statusCode: 200,
            message: "Welcom to Mômji test API! =)"
          } as apiSuccess;
    }
}
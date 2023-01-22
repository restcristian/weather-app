interface IError {
    statusCode: number;
    message: string;
}

class WeatherAppError extends Error implements IError {
    statusCode: number = 500;
    message: string = "";
  
    constructor(message: string, statusCode: number) {
      super(`${message}: ${statusCode}`);
      this.statusCode = statusCode;
      this.message = message;
    }
  
    toObject() {
      return {
        message: this.message,
        statusCode: this.statusCode,
      };
    }
}

export class OpenWeatherApiError extends WeatherAppError {}

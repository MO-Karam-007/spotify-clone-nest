import { Inject, Injectable } from '@nestjs/common';
import { DevServices } from './common/DevConfig/DevConfigService';

@Injectable()
export class AppService {
  constructor(@Inject("DevServices") private devconfig: DevServices) { }
  getHello(): string {
    return `Hello World! ${this.devconfig.pi}  `;
  }
}

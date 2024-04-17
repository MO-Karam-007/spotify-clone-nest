import { Injectable } from "@nestjs/common";


@Injectable()

export class DevServices {
    pi: number = 123456;
    chealName() {
        return `Kik`;
    }
}
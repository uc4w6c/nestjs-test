import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    getName(): String {
        return 'Cat!';
    }
}

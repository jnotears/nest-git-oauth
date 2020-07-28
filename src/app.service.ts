import { Injectable } from '@nestjs/common';
import { use } from 'passport';

@Injectable()
export class AppService {
  githubLogin(req){
    if(!req.user){
      return 'no user';
    }
    return {
      message: 'user info',
      user: req.user
    }
  }
}

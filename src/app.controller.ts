import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import {AuthGuard} from '@nestjs/passport';

@Controller('github')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() req){

  }
  
  @Get('redirect')
  @UseGuards(AuthGuard('github'))
  githubAuthRedirect(@Req() req){
    return this.appService.githubLogin(req);
  }
}

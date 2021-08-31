import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { EnvironmentVars } from '../../config/environment';

@Controller('github')
export class GithubController {
  constructor(
    private configService: ConfigService<EnvironmentVars>
  ) {}

  @Post('access_token')
  async getAccessToken(@Body() params: { code: string }): Promise<any> {
    const githubRequest =  await axios.post(`https://github.com/login/oauth/access_token?client_id=${this.configService.get('GITHUB_CLIENT_ID')}&client_secret=${this.configService.get('GITHUB_SECRET')}&code=${params.code}`)
    return Object.fromEntries(githubRequest.data.split('&').map(v => v.split('=')));
  }
}

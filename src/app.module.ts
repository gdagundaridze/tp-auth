import { Module } from '@nestjs/common';
import environment from './config/environment';
import { GithubController } from './features/github/github.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environment],
    }),
  ],
  controllers: [GithubController],
})
export class AppModule {}

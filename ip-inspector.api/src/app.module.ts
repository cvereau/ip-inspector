import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpInspectorModule } from './ip-inspector/ip-inspector.module';

@Module({
  imports: [IpInspectorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

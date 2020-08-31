import { Module } from '@nestjs/common';
import { IpInspectorController } from './ip-inspector.controller';
import { IpInspectorService } from './ip-inspector.service';

@Module({
  imports: [],
  controllers: [IpInspectorController],
  providers: [IpInspectorService],
})
export class IpInspectorModule {}

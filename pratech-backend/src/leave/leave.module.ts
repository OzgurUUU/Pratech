import { Module } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { LeaveController } from './leave.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leave } from './entities/leave.entity';
import { LeaveGateway } from './leave.gateway';

@Module({
  controllers: [LeaveController],
  providers: [LeaveService,LeaveGateway],
  imports: [TypeOrmModule.forFeature([Leave])], // Leave entity'sini burada tanımlayabilirsiniz
})
export class LeaveModule {}

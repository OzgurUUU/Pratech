import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Controller('leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  @Post('izin-talep')
  create(@Body() createLeaveDto: CreateLeaveDto) {
    return this.leaveService.create(createLeaveDto);
  }

  @Get('izinler')
  findAll() {
    return this.leaveService.findAll();
  }

  @Put('izinler/:id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.leaveService.updateStatus(+id, status);
  }
}

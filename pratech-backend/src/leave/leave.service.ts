import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Leave } from './entities/leave.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LeaveService {
  /**
   *
   */
  constructor(@InjectRepository(Leave) private leaveRepository: Repository<Leave>) {
  }
  async create(createLeaveDto: CreateLeaveDto) {
    const start = new Date(createLeaveDto.startDate);
    const end = new Date(createLeaveDto.endDate);


    if (start > end) {
      throw new BadRequestException('Başlangıç tarihi bitiş tarihinden sonra olamaz.');
    }

    const newLeave = this.leaveRepository.create(createLeaveDto);
    return this.leaveRepository.save(newLeave);
  }

  async findAll(): Promise<Leave[]> {
    return this.leaveRepository.find({ order: { id: 'DESC' } }); 
  }

  async findOne(id: number): Promise<Leave> {
    return this.leaveRepository.findOne({ where: { id } });
  }

  async updateStatus(id: number, status: string): Promise<Leave> {
    const leave = await this.leaveRepository.findOneBy({ id });
    if (!leave) {
      throw new NotFoundException('İzin talebi bulunamadı.');
    }

    if (status !== 'Approved' && status !== 'Rejected') {
      throw new BadRequestException('Durum sadece "Approved" veya "Rejected" olabilir.');
    }

    leave.status = status;
    return this.leaveRepository.save(leave);
  }
}

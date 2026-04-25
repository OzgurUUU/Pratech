import { CreateLeaveDto } from './dto/create-leave.dto';
import { Leave } from './entities/leave.entity';
import { Repository } from 'typeorm';
export declare class LeaveService {
    private leaveRepository;
    constructor(leaveRepository: Repository<Leave>);
    create(createLeaveDto: CreateLeaveDto): Promise<Leave>;
    findAll(): Promise<Leave[]>;
    findOne(id: number): Promise<Leave>;
    updateStatus(id: number, status: string): Promise<Leave>;
}

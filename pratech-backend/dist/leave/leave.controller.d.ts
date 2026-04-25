import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
export declare class LeaveController {
    private readonly leaveService;
    constructor(leaveService: LeaveService);
    create(createLeaveDto: CreateLeaveDto): Promise<import("./entities/leave.entity").Leave>;
    findAll(): Promise<import("./entities/leave.entity").Leave[]>;
    updateStatus(id: string, status: string): Promise<import("./entities/leave.entity").Leave>;
}

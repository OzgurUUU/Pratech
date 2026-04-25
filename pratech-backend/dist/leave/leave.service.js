"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const leave_entity_1 = require("./entities/leave.entity");
const typeorm_2 = require("typeorm");
let LeaveService = class LeaveService {
    constructor(leaveRepository) {
        this.leaveRepository = leaveRepository;
    }
    async create(createLeaveDto) {
        const start = new Date(createLeaveDto.startDate);
        const end = new Date(createLeaveDto.endDate);
        if (start > end) {
            throw new common_1.BadRequestException('Başlangıç tarihi bitiş tarihinden sonra olamaz.');
        }
        const newLeave = this.leaveRepository.create(createLeaveDto);
        return this.leaveRepository.save(newLeave);
    }
    async findAll() {
        return this.leaveRepository.find({ order: { id: 'DESC' } });
    }
    async findOne(id) {
        return this.leaveRepository.findOne({ where: { id } });
    }
    async updateStatus(id, status) {
        const leave = await this.leaveRepository.findOneBy({ id });
        if (!leave) {
            throw new common_1.NotFoundException('İzin talebi bulunamadı.');
        }
        if (status !== 'Approved' && status !== 'Rejected') {
            throw new common_1.BadRequestException('Durum sadece "Approved" veya "Rejected" olabilir.');
        }
        leave.status = status;
        return this.leaveRepository.save(leave);
    }
};
exports.LeaveService = LeaveService;
exports.LeaveService = LeaveService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(leave_entity_1.Leave)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LeaveService);
//# sourceMappingURL=leave.service.js.map
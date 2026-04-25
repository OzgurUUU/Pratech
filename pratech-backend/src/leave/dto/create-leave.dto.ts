import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLeaveDto {
    @IsString()
    @IsNotEmpty()
    fullName: string;

    @IsString()
    @IsNotEmpty()
    leaveType: string;

    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @IsNotEmpty()
    @IsDateString()
    endDate: Date;

    @IsString()
    @IsOptional()
    description?: string;

}

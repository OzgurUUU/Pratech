import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateLeaveDto {
    @IsString()
    @IsNotEmpty({message: 'Ad ve soyad alanı boş bırakılamaz.'})
    fullName: string;

    @IsString()
    @IsNotEmpty({message: 'İzin türü alanı boş bırakılamaz.'})
    leaveType: string;

    @IsNotEmpty({message: 'Başlangıç tarihi alanı boş bırakılamaz.'})
    @IsDateString()
    startDate: Date;

    @IsNotEmpty({message: 'Bitiş tarihi alanı boş bırakılamaz.'})
    @IsDateString()
    endDate: Date;

    @IsString()
    @IsOptional()
    description?: string;

}

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Leave {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    leaveType: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column({ nullable: true })
    description: string;

    @Column({default: 'Beklemede'})
    status: string; // Beklemede, Onaylandı, Reddedildi

}

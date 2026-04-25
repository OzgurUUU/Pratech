import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeaveModule } from './leave/leave.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leave } from './leave/entities/leave.entity';

@Module({
  imports: [LeaveModule,
    TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'leaves.sqlite',
  entities: [Leave],
  synchronize: true, // Tabloları otomatik oluşturmak için
})
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {
  
}


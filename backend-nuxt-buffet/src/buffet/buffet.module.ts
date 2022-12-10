import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BuffetController } from './controllers/buffet/buffet.controller';
import { BuffetService } from './services/buffet/buffet.service';
import { TableData } from './entity/buffet.table.entity';
import { TableBuffetSucess } from './entity/buffet.table.Sucess.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TableData, TableBuffetSucess])],
  controllers: [BuffetController],
  providers: [BuffetService],
  exports: [BuffetService],
})
export class BuffetModule {}

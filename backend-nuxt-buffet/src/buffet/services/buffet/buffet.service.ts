import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableData } from 'src/buffet/entity/buffet.table.entity';
import { TableBuffetSucess } from 'src/buffet/entity/buffet.table.Sucess.entity';
import { Repository } from 'typeorm';
import { DataInTable, UpdateTable } from '../../dto/createDataTable.dto';
@Injectable()
export class BuffetService {
  constructor(
    @InjectRepository(TableData)
    private buffetRepository: Repository<TableData>,
    @InjectRepository(TableBuffetSucess)
    private buffetSucessRepository: Repository<TableBuffetSucess>,
  ) {}
  TableAll() {
    return this.buffetRepository.find({
      order: {
        table_id: 'DESC', // "DESC"
      },
    });
  }
  CreateTable(dataTable: DataInTable) {
    const Data = this.buffetRepository.create(dataTable);
    return this.buffetRepository.save(Data);
  }
  async UpdateTableUser(id: string, updateTable: UpdateTable) {
    console.log(updateTable);

    await this.buffetRepository.update(id, updateTable);
    const updatedTodo = await this.buffetRepository.findOne({
      where: {
        table_id: id,
      },
    });
    return updatedTodo;
  }
}

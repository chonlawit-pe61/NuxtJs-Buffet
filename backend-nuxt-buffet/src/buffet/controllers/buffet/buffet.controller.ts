import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { DataInTable, UpdateTable } from 'src/buffet/dto/createDataTable.dto';
import { BuffetService } from 'src/buffet/services/buffet/buffet.service';

@Controller('buffet')
export class BuffetController {
  constructor(private buffetService: BuffetService) {}

  @Get()
  getALL() {
    return this.buffetService.TableAll();
  }

  @Post('createTable')
  CreateTableNew(@Body() dataTable: DataInTable) {
    return this.buffetService.CreateTable(dataTable);
  }

  @Put('updateTable/:id')
  UpdateTable(@Param('id') id: string, @Body() updateTable: UpdateTable) {
    return this.buffetService.UpdateTableUser(id, updateTable);
  }
}

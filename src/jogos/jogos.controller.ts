import { Body, Controller, Get, Param, Patch, Post, Res, Delete } from '@nestjs/common';
import { JogosService } from './jogos.service';

@Controller('jogos')
export class JogosController {
    constructor(private readonly jogos: JogosService){}
    
    @Get()
    findAll(
    ){
        return this.jogos.findAll();
    }
        @Get(':id')
        findOne(
            @Param('id') id: string,
        ){
            return this.jogos.findOne(id);
        }

    @Post()
    create(
        @Body() body
    ){
        return this.jogos.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return this.jogos.update(id, body);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ){
        return this.jogos.remove(id);
    }

    










}

import { Body, Controller, Get, Param, Patch, Post, Res, Delete } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { CreateJogoDto } from './dto/create-jogo.dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto/update-jogo.dto';

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
        @Body() createJogo: CreateJogoDto
    ){
        return this.jogos.create(createJogo);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateJogo: UpdateJogoDto){
        return this.jogos.update(id, updateJogo);
    }

    @Delete(':id')
    remove(
        @Param('id') id: string
    ){
        return this.jogos.remove(id);
    }

    










}

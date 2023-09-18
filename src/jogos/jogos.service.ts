import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Jogo } from './jogos.entity';

@Injectable()
export class JogosService {
    private jogos: Jogo[]  = [
        {
            id: 1,
            nome: 'Call of Duty Ghost',
            descricao: 'Welcome to Call of Duty: Ghosts',
            dataLancamento: '2013-05-01',
            website: 'https://www.callofduty.com/br/pt',
            desenvolvedor: 'Activision',
            genero: 'FPS',
            urlCapa: 'whttps://upload.wikimedia.org/Call_of_duty_ghosts_box_art.jpg',
            consoles: ['Codigo: 1', 'Codigo: 2'],
        }
    ];
    
    // GET ALL GAMES OR ONE SINGLE GAME PASSED BY :ID
    findAll() {
        return this.jogos;
    }
    findOne(id: string){
        const findGame = this.jogos.find((jogo) => jogo.id == Number(id));

        if(!findGame) {
            throw new HttpException(
                `Jogo ID /${id} passado na URL não encontrado.`,
                HttpStatus.NOT_FOUND,
                )
            }

        return this.jogos.find((jogo) => jogo.id == Number(id));
    }
        
    // POST A GAME
    create(createJogoDto: any){
        return this.jogos.push(createJogoDto)
    }

    // PATCH A GAME
    update(id: string, updateJogoDto: any){
        const indexJogo = this.jogos.findIndex((jogo) => jogo.id == Number(id));
        
        this.jogos[indexJogo] = updateJogoDto;
    }

    // REMOVE A GAME
    remove(id: string){
        const indexJogo = this.jogos.findIndex((jogo) => jogo.id == Number(id))

        if(indexJogo >= 0){
            this.jogos.splice(indexJogo, 1);
        }

        return `Jogo ${id} deletado`
    }   



}
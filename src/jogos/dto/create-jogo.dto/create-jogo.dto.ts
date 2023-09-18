import { IsNumber, IsString } from "class-validator";

export class CreateJogoDto {

    @IsNumber()
    readonly id: number;

    @IsString()
    readonly nome: string;

    @IsString()
    readonly descricao: string;

    @IsString()
    readonly dataLancamento: string;

    @IsString()
    readonly website: string;

    @IsString()
    readonly desenvolvedor: string;

    @IsString()
    readonly genero: string;

    @IsString()
    readonly urlCapa: string;

    @IsString( { each: true})
    readonly consoles: string[];

}

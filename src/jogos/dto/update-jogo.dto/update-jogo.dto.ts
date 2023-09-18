import { PartialType } from "@nestjs/mapped-types";
import { CreateJogoDto } from "../create-jogo.dto/create-jogo.dto";

export class UpdateJogoDto extends PartialType(CreateJogoDto) {

}

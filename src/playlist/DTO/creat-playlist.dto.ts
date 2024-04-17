import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlaylistDTO {


    @IsString()
    @IsNotEmpty()
    readonly name;


    @IsNumber({}, { each: true })
    @IsNotEmpty()
    @IsArray()
    readonly songs;

    @IsNumber()
    @IsNotEmpty()
    readonly user: number;
}
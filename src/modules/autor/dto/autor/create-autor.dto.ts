import { IsString, MinLength, MaxLength, IsNotEmpty, IsDate } from "class-validator";
import { LibroEntity } from "src/modules/libro/entities/libro.entity";
import { BaseAutorDto } from "./base-autor.dto";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'


export class AutorCreate extends BaseAutorDto{

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @IsDate()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    // @isPositive(IsPositiveValidationOpntions())
    readonly fechaNacimiento:Date;

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly nacionalidad:string;

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly Libro:LibroEntity[];
    
}
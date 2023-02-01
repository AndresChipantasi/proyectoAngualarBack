import { IsString, MinLength, MaxLength, IsNotEmpty, IsDate } from "class-validator";
import { LibroEntity } from "src/modules/libro/entities/libro.entity";
import { BaseAutorDto } from "./base-autor.dto";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
import { Optional } from "@nestjs/common";


export class AutorUpdate extends BaseAutorDto{
    
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @Optional()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @Optional()
    @IsDate()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    // @isPositive(IsPositiveValidationOpntions())
    readonly fechaNacimiento:Date;

    @IsString()
    @MinLength(3)
    @Optional()
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly nacionalidad:string;

    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly Libro:LibroEntity[];
    
}
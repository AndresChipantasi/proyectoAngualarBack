import { LibroEntity } from 'src/modules/libro/entities/libro.entity';
import { IsNotEmpty } from "class-validator";
import { IsDate, isPositive, IsString, Length, MaxLength, MinLength } from "class-validator/types/decorator/decorators";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'
export  class BaseAutorDto{

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


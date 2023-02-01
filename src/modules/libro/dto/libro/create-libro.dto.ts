import { IsString, MinLength, MaxLength, IsNotEmpty, IsDate } from "class-validator";
import { ProductEntity } from "src/modules/sales/entities";
import { BaseLibroDto } from "./base-libro.dto";
import { isNotEmptyValidationOpntions, IsStringValidationOpntions,IsPositiveValidationOpntions } from '@shared/validation'

export class LibroCreate extends BaseLibroDto{

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly name:string;

    @IsDate()
    @IsNotEmpty(isNotEmptyValidationOpntions())
    readonly fechaCreacion:ProductEntity[];

    @IsString()
    @MinLength(3)
    @MaxLength(100)
    @IsNotEmpty(isNotEmptyValidationOpntions())
    @IsString(IsStringValidationOpntions())
    readonly genero:string;
    
}
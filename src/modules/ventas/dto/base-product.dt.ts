import { IsNotEmpty, IsString } from "class-validator";
import { isNotEmptyValidationOptions, IsStringValidationOptions } from "@shared/validation"

export class BaseProductDto{
    @IsNotEmpty (isNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    readonly title:String;

    @IsNotEmpty (isNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    readonly price:number;
    @IsNotEmpty (isNotEmptyValidationOptions())
    @IsString(IsStringValidationOptions())
    readonly description:string;
    @IsNotEmpty (isNotEmptyValidationOptions ())
    @IsString(IsStringValidationOptions())
    readonly images:String[];
}
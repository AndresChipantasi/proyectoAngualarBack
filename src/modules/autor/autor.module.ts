import { Global, Module } from "@nestjs/common";
import { autorProviders } from "./providers/autor.providers";

// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...autorProviders
        ],
    })

    export class AutorModule{

    }
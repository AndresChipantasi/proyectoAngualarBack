import { Global, Module } from "@nestjs/common";
import { libroProviders } from "./providers/libro.providers";
// import {DatabaseModule} from "@database";

@Global()
@Module(
    {
        // imports: [DatabaseModule],
        controllers:[],
        providers:[
            ...libroProviders
        ],
    })

    export class LibroModule{

    }
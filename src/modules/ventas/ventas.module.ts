import {Global, Module} from "nestjs/common";
import { ventasProviders } from "./providers";
import {DatabaseModule} from "@database"

@Global()
@Module({
    imports: [
        DatabaseModule
    ],
    controllers: [],
    providers: [
        ,,,ventasProviders
    ],
    exports: [
        ,,,ventasProviders
    ],
})
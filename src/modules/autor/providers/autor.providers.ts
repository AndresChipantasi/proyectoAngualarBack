import { DataSource } from 'typeorm';



// import { RequirementRequestEntity } from '../entities/requirement-request.entity';
import { CategoryEntity } from 'src/modules/category/entities/category.entity';
import { RepositoryEnum } from 'src/shared/enums';
import { LibroEntity } from 'src/modules/libro/entities/libro.entity';
import { AutorEntity } from '../entities/autor.entity';

export const autorProviders = [
  {
    provide: RepositoryEnum.LIBRO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(LibroEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.AUTOR_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AutorEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]
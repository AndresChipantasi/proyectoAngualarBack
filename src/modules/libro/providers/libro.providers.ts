import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { ProductEntity } from '../../sales/entities';
import { RepositoryEnum } from 'src/shared/enums';
import { LibroEntity } from '../entities/libro.entity';
import { AutorEntity } from 'src/modules/autor/entities/autor.entity';

export const libroProviders = [
  {
    provide: RepositoryEnum.AUTOR_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AutorEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    provide: RepositoryEnum.LIBRO_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(LibroEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]
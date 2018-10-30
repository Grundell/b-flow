import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailedComponent } from './detailed/detailed.component';

export const SingleRoutes = RouterModule.forChild([
  {
    path: '',
    component: DetailedComponent,
  }
])
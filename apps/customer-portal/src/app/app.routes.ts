import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path: 'homepage',
    loadChildren: () =>
      import('@agave-spirits/homepage').then((m) => m.HomepageModule),
  },
  {
    path: 'spirits',
    loadChildren: () =>
      import('@agave-spirits/spirits').then((m) => m.SpiritsModule),
  },
  {
    path: '',
        pathMatch: 'full',
        redirectTo: 'homepage',
  }
];
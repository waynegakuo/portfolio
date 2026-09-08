import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomePage),
    title: 'Wayne Gakuo · Technical Solutions Architect · GDE Angular',
  },
  {
    path: 'work',
    loadComponent: () => import('./pages/work/work').then((m) => m.WorkPage),
    title: 'Work · Wayne Gakuo',
  },
  {
    path: 'writing',
    loadComponent: () => import('./pages/writing/writing').then((m) => m.WritingPage),
    title: 'Writing · Wayne Gakuo',
  },
  {
    path: 'experience',
    loadComponent: () => import('./pages/experience/experience').then((m) => m.ExperiencePage),
    title: 'Experience · Wayne Gakuo',
  },
  {
    path: 'communities',
    loadComponent: () => import('./pages/communities/communities').then((m) => m.CommunitiesPage),
    title: 'Communities · Wayne Gakuo',
  },
  {
    path: 'education',
    loadComponent: () => import('./pages/education/education').then((m) => m.EducationPage),
    title: 'Education · Wayne Gakuo',
  },
  {
    path: '404',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundPage),
    title: 'Page not found · Wayne Gakuo',
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundPage),
    title: 'Page not found · Wayne Gakuo',
  },
];

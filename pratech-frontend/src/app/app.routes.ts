import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'talep-olustur', pathMatch: 'full'},
    {path: 'talep-olustur', loadComponent: () => import('./Components/personnel/personnel').then(m => m.PersonnelComponent)},
    {path: 'yönetici-paneli', loadComponent: () => import('./Components/admin/admin').then(m => m.AdminComponent)},
];

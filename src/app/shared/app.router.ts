import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { BooklistComponent } from '../book/booklist.component';
import { BookbuyComponent } from '../bookbuy/bookbuy.component';


export const router: Routes = [
    {
        path: 'books',
        component: BooklistComponent
    },
    {
        path: 'books/bookbuy/:id',
        component: BookbuyComponent
    },
    {
        path: '', redirectTo: 'about', pathMatch: 'full'
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);


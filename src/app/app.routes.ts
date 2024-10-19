import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './home/main/main.component';
import { ItemComponent } from './home/item/item.component';
import { UsersComponent } from './home/users/users.component';
import { LoginComponent } from './home/login/login.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent, children: [
            { path: '', redirectTo: 'main', pathMatch: 'full' },
            { path: 'main', component: MainComponent },
            { path: 'item', component: ItemComponent },
            { path: 'users', component: UsersComponent },
        ]
    },
    { path: 'login', component: LoginComponent }
];

import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AboutComponent } from './other/about.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ResultComponent } from './result/result.component';

export const router: Routes = [
    // {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '', component: LoginComponent},
    {path: 'other', component: OtherComponent,
    children: [
        {path: '', component: AboutComponent},
        {path: 'notifi', component: NotificationsComponent},
        {path: 'result', component: ResultComponent}
    ]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

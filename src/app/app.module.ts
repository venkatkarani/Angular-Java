import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { OtherComponent } from './other/other.component';
import { AboutComponent } from './other/about.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { DataService } from 'app/data-service.service';
import { TypeDirective } from './type.directive';
@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AboutComponent,
    NotificationsComponent,
    LoginComponent,
    ResultComponent,
    TypeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routes,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

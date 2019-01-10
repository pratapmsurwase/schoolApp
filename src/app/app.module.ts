import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import {AuthGuard} from './auth/auth.guard'
import{ AuthInterceptor } from './auth/auth.interceptor';
import { StudentdataComponent } from './student/studentdata/studentdata.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    UserprofileComponent,
    SignInComponent,
    StudentdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
    
  ],
  providers:  [{provide: HTTP_INTERCEPTORS,
               useClass: AuthInterceptor,
                 multi: true },
                  AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

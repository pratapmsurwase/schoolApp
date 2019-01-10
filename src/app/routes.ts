import{Routes } from '@angular/router'
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { StudentdataComponent } from './student/studentdata/studentdata.component'

export const appRoutes: Routes = [
    {
    path: 'signup',  component: UserComponent,
    children: [{path:'', component:SignUpComponent}]
    },
    {
        path: 'login', component:UserComponent,
        children:[{path: '', component: SignInComponent}]
    },
    {
        path: 'userprofile', component: UserprofileComponent, canActivate:[AuthGuard] 
     },
     {path: 'studentdata', component:StudentdataComponent },
    {
    path: '', redirectTo:'/login', pathMatch:'full'
    },
    
]
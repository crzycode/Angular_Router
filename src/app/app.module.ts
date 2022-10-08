import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component'
import {UserComponent} from './user/user.component'
import {CategoryComponent} from './category/category.component'


const approutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'User', component:UserComponent},
  {path:'User/:id/:name', component:UserComponent},
  {path:'Category', component:CategoryComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

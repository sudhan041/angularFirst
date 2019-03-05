import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router'

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaterComponent } from './family/fater/fater.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { FordirectiveComponent } from './directive/fordirective/fordirective.component';
import { NumbersortPipe } from './custompipe/numbersort.pipe';
import { TemplateformsComponent } from './forms/templateforms/templateforms.component';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
import { fromEventPattern } from 'rxjs';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ParentformComponent } from './forms/parentform/parentform.component';
import { TaskmanagerComponent } from './task/taskmanager/taskmanager.component';

@NgModule({
  declarations: [
    AppComponent,
    FaterComponent,
    SonComponent,
    DaughterComponent,
    FordirectiveComponent,
    NumbersortPipe,
    TemplateformsComponent,
    ReactiveformsComponent,
    NotfoundComponent,
    ParentformComponent,
    TaskmanagerComponent
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      /*{
        path: '',
        component: FaterComponent,
        pathMatch: 'full'
      },
      */
      {
        path :'',
        redirectTo : 'form',
        pathMatch : 'full'
      },
      {
        path : 'family',
        component : FaterComponent
      },
      {
        path : 'directive',
        component : FordirectiveComponent
      },
      {
        path: 'form',
        component : ParentformComponent,
        children :[
          {
            path :'',
            redirectTo : 'reactive',
            pathMatch : 'full'
          },
          {
            path : 'template',
            component : TemplateformsComponent
          },
          {
            path : 'reactive',
            component : ReactiveformsComponent
          }
        ]
      },
      {
        path : 'task',
        component : TaskmanagerComponent
      },
      {
        path:'**',
        component: NotfoundComponent
      }
      /*{
        path : 'template',
        component : TemplateformsComponent
      },
      {
        path : 'reactive',
        component : ReactiveformsComponent
      }*/
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { QuehacerComponent } from './quehacer/quehacer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'que_hacer', component: QuehacerComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'biblioteca', component: PeopleComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
  
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]  
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactAddComponent } from './components/contact-add/contact-add.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:ContactComponent},
  {path:"contacts",component:ContactComponent},
  {path:"contacts/add",component:ContactAddComponent},
  {path:"contacts/edit/:id",pathMatch:"full",component:ContactAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

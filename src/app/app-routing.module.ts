import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = 
  [
    {
      path:"",component:HelloComponent
    },
    {
      path:"**",component:PagenotfoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

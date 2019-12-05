import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumListComponent } from './albums/album-list/album-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "welcome", component: WelcomeComponent },
  { path: "albums", component: AlbumListComponent },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

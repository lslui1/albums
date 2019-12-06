import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AlbumListComponent } from './albums/album-list/album-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  {
    path: "about",
    loadChildren: () => import('./about/about.module')
      .then(mod => {
        console.log('in promise loadChildren');
        return mod.AboutModule;
      })
  },
  { path: "welcome", component: WelcomeComponent },
  // { path: "albums", component: AlbumListComponent },
  {
    path: "albums",
    canActivate: [AuthGuard],
    loadChildren: () => import('./albums/albums.module')
                        .then(mod => {
                        console.log('in promise loadChildren');
                        return mod.AlbumsModule;
                        }),
  },
  { path: "**", component: NotfoundComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

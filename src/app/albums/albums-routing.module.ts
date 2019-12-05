import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: AlbumListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlbumsRoutingModule { }

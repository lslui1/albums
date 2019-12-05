import { Injectable } from "@angular/core";

import { ALBUMS } from "../albums.data";

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  constructor() {}

  getAlbums() {
    return ALBUMS;
  }
}

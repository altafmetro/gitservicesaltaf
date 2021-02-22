import { Component, OnInit } from '@angular/core';
import { IAlbum } from '../model/album';
import { AlbumService } from '../service/album.service';

@Component({
selector: 'album-list',
templateUrl: './album-list.component.html',
styleUrls: ['album-list.component.css']
})
export class AlbumListComponent implements OnInit {
albums: IAlbum[] =[];
constructor(private _albumService: AlbumService) { }
ngOnInit() {
	this._albumService.getAllAlbums().subscribe({
	next: albums =>{
		this.albums=albums
	}
	})
}
}

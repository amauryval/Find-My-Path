import { Component, OnInit } from '@angular/core';
import { name, dependencies } from '../../../../package.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  author = 'amauryval';
  authorRepoUrl = 'https://github.com/amauryval/Find-My-Path';
  nameApp = name;
  year = 2021;

  pythonVersion = '3.8';

  lib1Name = 'OsmGT';
  lib1Version = '';
  lib1RepoUrl = 'https://github.com/amauryval/osmgt';

  lib2Name = 'Flask';
  lib2Version = '';
  lib2RepoUrl = 'https://github.com/pallets/flask';

  angularVersion!: string;
  angularRepoUrl = 'https://github.com/angular/angular';

  bootstrapVersion!: string;
  bootstrapRepoUrl = 'https://github.com/twbs/bootstrap';

  leafletVersion!: string;
  leafletRepoUrl = 'https://github.com/Leaflet/Leaflet';

  d3Version!: string;
  d3RepoUrl = 'https://github.com/d3/d3';

  constructor() { }

  ngOnInit(): void {
    this.angularVersion = dependencies['@angular/core'];
    this.bootstrapVersion = dependencies.bootstrap;
    this.leafletVersion = dependencies.leaflet;
    this.d3Version = dependencies.d3;
  }

}

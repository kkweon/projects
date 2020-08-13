import { Component, OnInit } from '@angular/core';
import * as data from '../data';
import { Project } from '../data.model';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss'],
})
export class ListProjectComponent implements OnInit {
  projects: Project[];

  constructor() {}

  ngOnInit(): void {
    this.projects = [...data.projects];
  }
}

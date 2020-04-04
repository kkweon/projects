import {Component, Input, OnInit, SecurityContext} from '@angular/core';
import {Project} from '../data.model';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-list-project-item',
  templateUrl: './list-project-item.component.html',
  styleUrls: ['./list-project-item.component.scss']
})
export class ListProjectItemComponent implements OnInit {

  @Input()
  project: Project;

  constructor() {
  }

  ngOnInit(): void {
  }
}

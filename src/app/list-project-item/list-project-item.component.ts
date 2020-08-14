import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { Project, ProjectCategory } from '../protos/project_pb';

@Component({
  selector: 'app-list-project-item',
  templateUrl: './list-project-item.component.html',
  styleUrls: ['./list-project-item.component.scss'],
})
export class ListProjectItemComponent implements OnInit {
  @Input()
  project: Project;

  constructor() {}

  ngOnInit(): void {}

  getCategory() {
    switch (this.project.getCategory()) {
      case ProjectCategory.PROJECT_CATEGORY_MOBILE:
        return 'Mobile';
      case ProjectCategory.PROJECT_CATEGORY_UTIL:
        return 'Util';
      case ProjectCategory.PROJECT_CATEGORY_SELF_DRIVING_CAR:
        return 'Self Driving Car';
      case ProjectCategory.PROJECT_CATEGORY_WEB:
        return 'Web';
      case ProjectCategory.PROJECT_CATEGORY_INVALID:
        return 'Invalid';
      case ProjectCategory.PROJECT_CATEGORY_ETC:
        return 'Etc';
      case ProjectCategory.PROJECT_CATEGORY_ML:
        return 'Machine Learning';
    }
  }
}

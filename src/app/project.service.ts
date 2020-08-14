import { Injectable } from '@angular/core';
import { Project, ProjectCategory } from './protos/project_pb';
import { ProjectBuilder } from './project-builder';
import { ProjectLinkBuilder } from './project-link-builder';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    new ProjectBuilder()
      .setTitle('American Sign Language Recognition with HMM')
      .setDescription(
        `- Convert Sign Langauge to English words
- Achieved the WER(Word Error Rate) of 43.8%
- Used Plain Hidden Markov Models and Ensembles`,
      )
      .setCategory(ProjectCategory.PROJECT_CATEGORY_ML)
      .addImage(
        'https://www-i6.informatik.rwth-aachen.de/~dreuw/database/rwth-boston-104/overview/images/orig/098-start.jpg',
      )
      .addProjectLink(
        new ProjectLinkBuilder()
          .setName('GitHub')
          .setUrl(
            'https://nbviewer.jupyter.org/github/kkweon/AIND-Recognizer/blob/develop/asl_recognizer.ipynb',
          )
          .build(),
      )
      .build(),
  ];

  constructor() {}

  getProjects(): Project[] {
    return [...this.projects];
  }
}

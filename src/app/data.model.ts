import { ProjectCategory } from './project-category.enum';

export interface Project {
  category: ProjectCategory;
  title: string;
  image: string;
  content: string;
  links: [Link];
}

export interface Link {
  name: string;
  url: string;
}

export class LinkImpl implements Link {
  constructor(public name: string, public url: string) {}
}

export class ProjectImpl implements Project {
  constructor(
    public category: ProjectCategory,
    public content: string,
    public image: string,
    public links: [Link],
    public title: string,
  ) {}
}

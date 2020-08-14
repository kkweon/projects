import { Project, ProjectCategoryMap, ProjectLink } from './protos/project_pb';

export class ProjectBuilder {
  private title: string;
  private category: ProjectCategoryMap[keyof ProjectCategoryMap];
  private description: string;
  private images: Array<string> = [];
  private projectLinks: Array<ProjectLink> = [];

  constructor() {
  }

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setCategory(category: ProjectCategoryMap[keyof ProjectCategoryMap]): this {
    this.category = category;
    return this;
  }

  setDescription(description: string): this {
    this.description = description;
    return this;
  }

  addImage(image: string): this {
    this.images.push(image);
    return this;
  }

  addProjectLink(projectLink: ProjectLink): this {
    this.projectLinks.push(projectLink);
    return this;
  }

  build(): Project {
    const project = new Project();
    project.setTitle(this.title);
    project.setCategory(this.category);
    project.setDescription(this.description);
    project.setImagesList(this.images);
    project.setLinksList(this.projectLinks);

    return project;
  }
}

import { ProjectLink } from './protos/project_pb';

export class ProjectLinkBuilder {
  private _name: string;
  private _url: string;

  setName(value: string): this {
    this._name = value;
    return this;
  }

  setUrl(value: string): this {
    this._url = value;
    return this;
  }

  build(): ProjectLink {
    const projectLink = new ProjectLink();
    projectLink.setName(this._name);
    projectLink.setUrl(this._url);
    return projectLink;
  }
}

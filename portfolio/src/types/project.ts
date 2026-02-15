export type Category =
  | 'Machine Learning'
  | 'Self Driving Car'
  | 'Web'
  | 'Android/iOS'
  | 'Utils';

export interface ProjectLink {
  type: 'github' | 'demo' | 'gitlab' | 'notebook' | 'amazon';
  url: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  overview: string[];
  image: {
    url: string;
    alt: string;
    isLocal: boolean;
  };
  links: ProjectLink[];
  featured?: boolean;
  tags?: string[];
}

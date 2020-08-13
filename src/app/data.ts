import { LinkImpl, Project, ProjectImpl } from 'src/app/data.model';
import { ProjectCategory } from './project-category.enum';

const GitHub = 'GitHub';
export const projects: Project[] = [
  new ProjectImpl(
    ProjectCategory.MACHINE_LEARNING,
    `<ul><li>Convert Sign Langauge to English words</li>
<li>Achieved the WER(Word Error Rate) of 43.8%</li>
<li>Used Plain Hidden Markov Models and Ensembles</li>
    </ul>`,

    'https://www-i6.informatik.rwth-aachen.de/~dreuw/database/rwth-boston-104/overview/images/orig/098-start.jpg',
    [
      new LinkImpl(
        GitHub,
        'https://nbviewer.jupyter.org/github/kkweon/AIND-Recognizer/blob/develop/asl_recognizer.ipynb',
      ),
    ],
    'American Sign Language Recognition with HMM',
  ),
];

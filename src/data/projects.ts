import type { Project } from '../types/project';

export const projects: Project[] = [
  // Machine Learning Projects
  {
    id: 'asl-recognition',
    title: 'American Sign Language Recognition with HMM',
    category: 'Machine Learning',
    overview: [
      'Convert Sign Language to English words',
      'Achieved the WER(Word Error Rate) of 43.8%',
      'Used Plain Hidden Markov Models and Ensembles',
    ],
    image: {
      url: '/images/generated/asl-recognition.svg',
      alt: 'American Sign Language Recognition',
      isLocal: true,
    },
    links: [
      {
        type: 'notebook',
        url: 'https://nbviewer.jupyter.org/github/kkweon/AIND-Recognizer/blob/develop/asl_recognizer.ipynb',
        label: 'Jupyter Notebook',
      },
    ],
    featured: true,
    tags: ['Machine Learning', 'HMM', 'Python', 'Computer Vision'],
  },
  {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning',
    category: 'Machine Learning',
    overview: [
      'Implemented and compared multiple reinforcement learning algorithms using Tensorflow',
      'DQN, DDQN, PAAC, Policy Gradients, A3C',
    ],
    image: {
      url: 'https://github.com/kkweon/PAAC-in-Tensorflow/blob/master/assets/pong.gif?raw=true',
      alt: 'Reinforcement Learning - Pong Game',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/DQN-in-R',
        label: 'DQN in R',
      },
      {
        type: 'github',
        url: 'https://gist.github.com/kkweon/61fbb76822d9f5753dec2f8e86e86aac',
        label: 'DQN in Python',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/PAAC-in-Tensorflow',
        label: 'PAAC',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/A3C-Tensorflow',
        label: 'A3C',
      },
    ],
    featured: true,
    tags: ['Reinforcement Learning', 'TensorFlow', 'DQN', 'A3C', 'Python'],
  },
  {
    id: 'spending-visualization',
    title: 'Spending Visualization',
    category: 'Machine Learning',
    overview: [
      'Used random forest to categorize my monthly expenditures',
      'Visualized monthly spending in comparison to the previous month',
    ],
    image: {
      url: '/images/personal_project_saving.png',
      alt: 'Personal Spending Visualization',
      isLocal: true,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/my-spending-report',
        label: 'GitHub',
      },
    ],
    tags: ['Machine Learning', 'Random Forest', 'Data Visualization', 'Python'],
  },

  // Self Driving Car Projects
  {
    id: 'vehicle-detection',
    title: 'Vehicle Detection',
    category: 'Self Driving Car',
    overview: [
      'Segmented vehicles on a picture or a video frame with the IOU (Intersection of Union) of ~80%',
      'Implemented the Convolutional Networks for Image Segmentation (U-Net) from scratch',
    ],
    image: {
      url: 'https://github.com/kkweon/UNet-in-Tensorflow/blob/master/assets/output.gif?raw=true',
      alt: 'Vehicle Detection with U-Net',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/UNet-in-Tensorflow',
        label: 'GitHub',
      },
    ],
    featured: true,
    tags: ['Deep Learning', 'U-Net', 'TensorFlow', 'Computer Vision', 'Self-Driving'],
  },
  {
    id: 'path-planning',
    title: 'Path Planning',
    category: 'Self Driving Car',
    overview: [
      'Generates a path plan that can drive on the highway',
      'Implemented an efficient(lane change if necessary) and safe trajectory',
    ],
    image: {
      url: 'https://github.com/kkweon/sdc-path-planning/raw/master/assets/demo.gif?raw=true',
      alt: 'Path Planning Demo',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/sdc-path-planning',
        label: 'GitHub',
      },
    ],
    tags: ['Path Planning', 'C++', 'Algorithms', 'Self-Driving'],
  },
  {
    id: 'model-predictive-controller',
    title: 'Vehicle Control with a Model Predictive Controller',
    category: 'Self Driving Car',
    overview: [
      'Successfully drove vehicles autonomously, maintaining high-speed of over 70+ mph',
      'Implemented a model predictive controller in the simulator',
      'Used C++ and WebSocket to communicate with the simulator',
    ],
    image: {
      url: 'https://github.com/kkweon/CarND-MPC-Project/blob/master/images/mpc_project.gif?raw=true',
      alt: 'Model Predictive Controller',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/CarND-MPC-Project',
        label: 'GitHub',
      },
    ],
    featured: true,
    tags: ['MPC', 'C++', 'Control Systems', 'Self-Driving'],
  },
  {
    id: 'unscented-kalman-filter',
    title: 'Vehicle Localization using Unscented Kalman Filter',
    category: 'Self Driving Car',
    overview: [
      'Localized the vehicle in the simulator with the root mean squared error (RMSE) of ~0.1',
      'Implemented Unscented Kalman Filter in C++',
      'Used googletest to follow the Test Driven Development (TDD)',
    ],
    image: {
      url: 'https://github.com/kkweon/unscented-kalman-filter-simulation/raw/master/assets/unscented-kalman-filter.gif?raw=true',
      alt: 'Unscented Kalman Filter',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/unscented-kalman-filter-simulation/blob/master/README.org',
        label: 'GitHub',
      },
    ],
    tags: ['Kalman Filter', 'C++', 'TDD', 'Self-Driving'],
  },
  {
    id: 'traffic-sign-recognition',
    title: 'Traffic Sign Recognition',
    category: 'Self Driving Car',
    overview: [
      'Used the multiple layers of Convolution Neural Network(CNN) in Keras',
      'Used image augmentation tricks such as color shift, rotation, and zooming',
      'Achieved 98.01% accuracy on the test data',
    ],
    image: {
      url: 'https://github.com/kkweon/CarND-Traffic-Sign-Classifier-Project/raw/master/examples/raw.png?raw=true',
      alt: 'Traffic Sign Recognition',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/CarND-Traffic-Sign-Classifier-Project/blob/master/writeup.md',
        label: 'GitHub',
      },
    ],
    tags: ['CNN', 'Keras', 'Computer Vision', 'Self-Driving'],
  },
  {
    id: 'lane-detection',
    title: 'Finding Driving Lanes',
    category: 'Self Driving Car',
    overview: [
      'Used OpenCV to detect driving lanes on the road',
      'Used canny edge detection and color thresholding',
      'Written in Python',
    ],
    image: {
      url: 'https://media.giphy.com/media/3o6obVZUBgGQODqupq/giphy.gif',
      alt: 'Lane Detection',
      isLocal: false,
    },
    links: [
      {
        type: 'notebook',
        url: 'https://nbviewer.jupyter.org/github/kkweon/lane-detection/blob/master/P1.ipynb',
        label: 'Jupyter Notebook',
      },
    ],
    tags: ['OpenCV', 'Python', 'Computer Vision', 'Self-Driving'],
  },

  // Web Projects
  {
    id: 'landing-page',
    title: 'Landing Page',
    category: 'Web',
    overview: [
      'Modern landing page design',
      'Use Webpack, Pug, Sass',
    ],
    image: {
      url: '/images/mountain-travel.png',
      alt: 'Mountain Travel Landing Page',
      isLocal: true,
    },
    links: [
      {
        type: 'demo',
        url: 'https://kkweon.gitlab.io/mountain-landing',
        label: 'Demo',
      },
      {
        type: 'gitlab',
        url: 'https://gitlab.com/kkweon/mountain-landing',
        label: 'GitLab',
      },
    ],
    tags: ['Webpack', 'Pug', 'Sass', 'Frontend'],
  },
  {
    id: 'mango-commerce',
    title: 'Mango Commerce',
    category: 'Web',
    overview: [
      'Fruits/Vegetable Marketplace Demo',
      'Admin users can create an order using a custom chatbot',
      'Used Elixir, Phoenix, Bootstrap, WebSocket, ES6',
    ],
    image: {
      url: 'https://i.imgur.com/CK9bT4H.png',
      alt: 'Mango Commerce',
      isLocal: false,
    },
    links: [
      {
        type: 'demo',
        url: 'https://mango-commerce.herokuapp.com/',
        label: 'Demo',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/Simple-App-in-Phoenix/tree/mango',
        label: 'GitHub',
      },
    ],
    featured: true,
    tags: ['Elixir', 'Phoenix', 'WebSocket', 'ES6', 'Bootstrap'],
  },
  {
    id: 'pr12',
    title: 'PR-12',
    category: 'Web',
    overview: [
      'Reading/study group organized in Tensorflow KR Facebook Group',
      'Read and discuss deep learning papers every week',
    ],
    image: {
      url: '/images/generated/pr12.svg',
      alt: 'PR-12 Deep Learning Papers',
      isLocal: true,
    },
    links: [
      {
        type: 'demo',
        url: 'https://kkweon.github.io/pr12/',
        label: 'Demo',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/pr12',
        label: 'GitHub',
      },
    ],
    tags: ['Deep Learning', 'Study Group', 'Web'],
  },
  {
    id: 'hue-control',
    title: 'Hue Control Dashboard',
    category: 'Web',
    overview: [
      'Control smart home plugs such as Phillips Hue and TP Link smart plugs',
      'Used Ajax, Webpack, Elm, ES6, CSS',
    ],
    image: {
      url: 'https://i.imgur.com/K16phhV.jpg',
      alt: 'Hue Control Dashboard',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/hue-control',
        label: 'GitHub',
      },
    ],
    tags: ['Elm', 'IoT', 'Ajax', 'Webpack', 'ES6'],
  },
  {
    id: 'nato-phonetic',
    title: 'Nato Phonetic Convert',
    category: 'Web',
    overview: [
      'Convert English Sentence to Nato Phonetic Words',
      'For example: M → Mike, O → Oscar, K → Kilo',
      'Used Elm, CSS',
    ],
    image: {
      url: '/images/generated/nato-phonetic.svg',
      alt: 'NATO Phonetic Converter',
      isLocal: true,
    },
    links: [
      {
        type: 'demo',
        url: 'https://kkweon.github.io/nato-phonetic-elm/',
        label: 'Demo',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/nato-phonetic-elm',
        label: 'GitHub',
      },
    ],
    tags: ['Elm', 'CSS', 'Frontend'],
  },
  {
    id: 'kaggle-clone',
    title: 'Kaggle Clone',
    category: 'Web',
    overview: [
      'Kaggle is a competition website for data scientist',
      'This is a clone version of Kaggle using Django, Postgres',
    ],
    image: {
      url: 'https://github.com/kkweon/minikaggle-clone-django/raw/master/readme_assets/participate_competition.png?raw=true',
      alt: 'Kaggle Clone',
      isLocal: false,
    },
    links: [
      {
        type: 'demo',
        url: 'https://minikaggle.herokuapp.com/',
        label: 'Demo',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/minikaggle-clone-django',
        label: 'GitHub',
      },
    ],
    tags: ['Django', 'PostgreSQL', 'Python', 'Backend'],
  },
  {
    id: 'price-alert',
    title: 'Price Alert',
    category: 'Web',
    overview: [
      'Users can set up a price alert with the target price',
      'Users will get an alert if the price goes down to the target price',
      'Flask and MongoDB were used',
    ],
    image: {
      url: 'https://i.imgur.com/9p6m9PJ.png',
      alt: 'Price Alert',
      isLocal: false,
    },
    links: [
      {
        type: 'demo',
        url: 'https://price-alert-flask.herokuapp.com/',
        label: 'Demo',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/price_alert_flask',
        label: 'GitHub',
      },
    ],
    tags: ['Flask', 'MongoDB', 'Python', 'Backend'],
  },
  {
    id: 'question-vote',
    title: 'Question Asking Platform for Conference/Seminar',
    category: 'Web',
    overview: [
      'Users can write/upvote/downvote a question',
      'Sync real-time using websockets',
      'Written in Elm',
    ],
    image: {
      url: 'https://github.com/kkweon/question-vote-realtime-elm/raw/master/readme_assets/demo.gif?raw=true',
      alt: 'Question Voting Platform',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/question-vote-realtime-elm',
        label: 'GitHub',
      },
    ],
    tags: ['Elm', 'WebSocket', 'Real-time', 'Frontend'],
  },
  {
    id: 'weather-ajax',
    title: 'Simple Weather Ajax in Angular.js (v1)',
    category: 'Web',
    overview: [
      'Used the openweathermap.org API service to query a weather of a city',
      'Angular.js(v1)',
    ],
    image: {
      url: 'https://github.com/kkweon/AngularJS1_Weather_SPA_Reference/raw/master/assets/demo.png?raw=true',
      alt: 'Weather Ajax App',
      isLocal: false,
    },
    links: [
      {
        type: 'demo',
        url: 'https://kkweon.github.io/AngularJS1_Weather_SPA_Reference/#/',
        label: 'Demo',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/AngularJS1_Weather_SPA_Reference',
        label: 'GitHub',
      },
    ],
    tags: ['Angular.js', 'Ajax', 'API', 'Frontend'],
  },
  {
    id: 'blog-rest-api',
    title: 'Blog REST API',
    category: 'Web',
    overview: [
      'Implemented RESTful Blog service through Django Rest Framework',
    ],
    image: {
      url: '/images/generated/blog-rest-api.svg',
      alt: 'Blog REST API',
      isLocal: true,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/django-blog-rest',
        label: 'GitHub',
      },
    ],
    tags: ['Django', 'REST API', 'Python', 'Backend'],
  },

  // Android/iOS Projects
  {
    id: 'employee-manager',
    title: 'Employee Manager App',
    category: 'Android/iOS',
    overview: [
      'As a manager, add/delete/edit employee information',
      'Text an employee the work shift',
      'React Native application',
    ],
    image: {
      url: 'https://gitlab.com/kkweon/TIL/raw/master/ReactNative/Manager/assets/manager.demo.gif',
      alt: 'Employee Manager App',
      isLocal: false,
    },
    links: [
      {
        type: 'gitlab',
        url: 'https://gitlab.com/kkweon/TIL/tree/master/ReactNative/Manager',
        label: 'GitLab',
      },
    ],
    tags: ['React Native', 'Mobile', 'iOS', 'Android'],
  },

  // Utils Projects
  {
    id: 'sh2md',
    title: 'sh2md',
    category: 'Utils',
    overview: [
      'Record your shell session and produce in the markdown format',
    ],
    image: {
      url: 'https://github.com/kkweon/sh2md/blob/master/assets/demo.gif?raw=true',
      alt: 'sh2md Demo',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/sh2md',
        label: 'GitHub',
      },
    ],
    tags: ['CLI', 'Shell', 'Markdown', 'Utility'],
  },
  {
    id: 'shell-in-scala',
    title: 'Shell in Scala',
    category: 'Utils',
    overview: [
      'Shell Implementation in Scala',
    ],
    image: {
      url: 'https://github.com/kkweon/scala-shell/blob/master/assets/demo.gif?raw=true',
      alt: 'Shell in Scala',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/scala-shell',
        label: 'GitHub',
      },
    ],
    tags: ['Scala', 'Shell', 'CLI'],
  },
  {
    id: 'css-autoprefixer',
    title: 'CSS Autoprefix Plugin for Emacs',
    category: 'Utils',
    overview: [
      'Automatically add vendor prefixes to CSS',
      'Emacs plugin for web development',
    ],
    image: {
      url: '/images/generated/css-autoprefixer.svg',
      alt: 'CSS Autoprefixer',
      isLocal: true,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/emacs-css-autoprefixer',
        label: 'GitHub',
      },
    ],
    tags: ['Emacs', 'CSS', 'Plugin', 'Developer Tool'],
  },
  {
    id: 'gbrowse',
    title: 'gbrowse',
    category: 'Utils',
    overview: [
      'Open any git repository file in the browser in GitHub Repository',
      'Command line tool for quick navigation',
    ],
    image: {
      url: '/images/generated/gbrowse.svg',
      alt: 'gbrowse',
      isLocal: true,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/gbrowse',
        label: 'GitHub',
      },
    ],
    tags: ['CLI', 'Git', 'Developer Tool'],
  },
  {
    id: 'trello2text',
    title: 'Trello2Text',
    category: 'Utils',
    overview: [
      'Export trello cards to text with Slack markdown format',
    ],
    image: {
      url: '/images/generated/trello2text.svg',
      alt: 'Trello2Text',
      isLocal: true,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/Trello2Text',
        label: 'GitHub',
      },
    ],
    tags: ['Trello', 'Export', 'Markdown', 'Utility'],
  },
  {
    id: 'caltrain-alexa',
    title: 'CalTrain Shuttle Bus Alexa Skill',
    category: 'Utils',
    overview: [
      'Shuttle bus from Broadway CalTrain Station to Millbrae CalTrain Station',
      'Alexa skill for checking shuttle bus schedule',
      'Used Node.js, AWS Serverless Lambda, Mocha, TDD',
    ],
    image: {
      url: '/images/generated/caltrain-alexa.svg',
      alt: 'CalTrain Alexa Skill',
      isLocal: true,
    },
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Mo-Kweon-Millbrae-Broadway-ShuttleBus/dp/B076W9HTV8/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1509512577&sr=1-1&keywords=millbrae',
        label: 'Amazon Alexa',
      },
      {
        type: 'github',
        url: 'https://github.com/kkweon/caltrain-shuttle-bus-alexa-skill',
        label: 'GitHub',
      },
    ],
    tags: ['Alexa', 'AWS Lambda', 'Node.js', 'TDD'],
  },
  {
    id: 'keras-docset',
    title: 'Keras Docset for Dash/Zeal',
    category: 'Utils',
    overview: [
      'Allows users to lookup Keras API easily',
      'Created a Keras docset for Zeal/Dash',
    ],
    image: {
      url: 'https://github.com/kkweon/keras-docset/raw/master/assets/keras.dense.zeal.png?raw=true',
      alt: 'Keras Docset',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/keras-docset',
        label: 'GitHub',
      },
    ],
    tags: ['Keras', 'Documentation', 'Developer Tool'],
  },
  {
    id: 'identicon-generator',
    title: 'Identicon Generator',
    category: 'Utils',
    overview: [
      'Identicon refers to an image that is unique and can represent one\'s identity',
      'Like UUID but in image format',
      'Used Elixir and Erlang library',
    ],
    image: {
      url: 'https://github.com/kkweon/identicon-generator-in-elixir/blob/master/assets/Hello%20World.png?raw=true',
      alt: 'Identicon Generator',
      isLocal: false,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/identicon-generator-in-elixir',
        label: 'GitHub',
      },
    ],
    tags: ['Elixir', 'Erlang', 'Image Generation'],
  },
  {
    id: 'reddit-crawler',
    title: 'Reddit Crawler in Haskell',
    category: 'Utils',
    overview: [
      'Crawl valuable machine learning information from /r/MachineLearning',
      'Sends top 20 posts via email',
      'Used Haskell, Stack, Docker',
    ],
    image: {
      url: '/images/generated/reddit-crawler.svg',
      alt: 'Reddit Crawler',
      isLocal: true,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/kkweon/reddit-crawl-haskell.git',
        label: 'GitHub',
      },
    ],
    tags: ['Haskell', 'Web Scraping', 'Docker'],
  },
  {
    id: 'deeplearning-zero-to-all',
    title: 'DeepLearningZeroToAll/ReinforcementZeroToAll',
    category: 'Utils',
    overview: [
      'Created to teach people deep learning and reinforcement learning in Tensorflow',
      'Maintainer for both repositories',
    ],
    image: {
      url: '/images/generated/deeplearning-zero-to-all.svg',
      alt: 'DeepLearning and Reinforcement Learning Zero to All',
      isLocal: true,
    },
    links: [
      {
        type: 'github',
        url: 'https://github.com/hunkim/DeepLearningZeroToAll',
        label: 'DeepLearningZeroToAll',
      },
      {
        type: 'github',
        url: 'https://github.com/hunkim/ReinforcementZeroToAll.git',
        label: 'ReinforcementZeroToAll',
      },
    ],
    featured: true,
    tags: ['TensorFlow', 'Teaching', 'Deep Learning', 'Reinforcement Learning'],
  },
];

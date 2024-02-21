// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'alicanakca', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['alicanakca/pixera', 'alicanakca/hypopt'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'pixera',
          description:
            'Pixera will have formed the basis for machines that make Pixel Art.',
          imageUrl:
            'https://pixera.app/assets/images/logo.png',
          link: 'https://pixera.app',
        },
        {
          title: 'hypopt',
          description:
            'Provides to optimize the hyperparameters using Reinforcement Learning. Term Project for the Optimization course at Izmir University of Economics.',
          imageUrl:
            'https://www.gymlibrary.dev/_static/img/gym_logo_white.svg',
          link: 'https://github.com/AlicanAKCA/hypOpt',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Alican Akca',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'alicanakca',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'arifszn',
    dev: 'arifszn',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.pixera.app',
    phone: '',
    email: 'alicanakca.381@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'R',
    'MySQL',
    'Git',
  ],
  experiences: [
    {
      company: 'Traick',
      position: 'AI Intern',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://traick.ai',
    },
  ],
  certifications: [
    {
      name: 'R Programming',
      body: 'Coursera',
      year: 'Jun 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/REG3232T3Z8A',
    },
    {
      name: 'Fundamentals of Visualization with Tableau',
      body: 'Coursera',
      year: 'Jun 2021',
      link: 'https://www.coursera.org/verify/KC3XWQQA6A4U',
    },
    {
      name: 'Machine Learning',
      body: 'Coursera',
      year: 'May 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/GFZM39A4N8KL',
    },
    {
      name: 'Neural Networks and Deep Learning',
      body: 'Coursera',
      year: 'Jun 2021',
      link: 'https://www.coursera.org/account/accomplishments/certificate/HC9KT7Q62VAP',
    },
    {
      name: 'Python for Data Science, AI & Development',
      body: 'Coursera',
      year: 'Jun 2022',
      link: 'https://www.coursera.org/account/accomplishments/certificate/THUVXGC8NL3Z',
    },
  ],
  educations: [
    {
      institution: 'Izmir University of Economics',
      degree: 'Bachelor Degree',
      from: '2020',
      to: '2025',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'alicanakca', // to hide blog section, keep it empty
    limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
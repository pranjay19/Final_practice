// gitprofile.config.js

const config = {
    github: {
        username: 'pranjay19', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
        },
    },
    social: {
        linkedin: 'pranjay19',
        twitter: 'pranjayguleria',
        mastodon: '',
        facebook: '',
        instagram: '',
        dribbble: '',
        behance: '',
        medium: 'pranjayguleria',
        dev: '',
        stackoverflow: '', // format: userid/username
        skype: '',
        telegram: '',
        website: '',
        phone: '',
        email: 'pranjayguleria@gmail.com',
    },
    resume: {
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
    },
    skills: [
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'REACT.js',
        'NODE.js',
        'GIT',
        'GITHUB',
        'EXPRESS.js',
        'MONGODB',
    ],
    experiences: [{
        company: 'NATIONAL INSTITUTE OF TECHNOLOGY HAMIRPUR',
        position: 'INTERNSHIP/TRAINING',
        from: 'June 2022',
        to: 'July 2022',
        companyLink: 'https://example.com',
    }, ],
    certifications: [{
            name: 'Training/Internship Certificate',
            body: 'National institute of Technology (NIT) Hamirpur',
            link: 'https://example.com',
            year: 'June 2022-July 2023',
        },
        {
            name: 'Complete 2023 Web Development Bootcamp',
            body: 'Udemy',
            link: 'https://example.com',
            year: 'January 2023-April 2023',
        },
        {
            name: 'Advanced DSA Training Program certificate.',
            body: 'GeeksforGeeks',
            link: 'https://example.com',
        },
        {
            name: 'Computer Vision Basics',
            body: 'Coursera',
            link: 'https://example.com',
        },
    ],
    education: [{
            institution: 'BENNETT UNIVERSITY',
            degree: 'B.TECH IN COMPUTER SCIENCE AND ENGINEERING',
            from: '2020',
            to: '2024',
        },
        {
            institution: 'TROY MIDDLE SCHOOL,NEW YORK,USA',
            degree: 'MIDDLE SCHOOL',
            from: '2014',
            to: '2015',
        },
    ],

    // To hide the `My Projects` section, keep it empty.
    /*
    externalProjects: [
      {
        title: 'Project Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        imageUrl: 'https://via.placeholder.com/250x250',
        link: 'https://example.com',
      },
      {
        title: 'Project Name',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        imageUrl: 'https://via.placeholder.com/250x250',
        link: 'https://example.com',
      },
    ],
    */
    // Display blog posts from your medium or dev account. (Optional)
    blog: {
        source: 'medium', // medium | dev
        username: 'pranjayguleria', // to hide blog section, keep it empty
        limit: 4, // How many posts to display. Max is 10.
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
        defaultTheme: 'winter',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded defaultTheme
        respectPrefersColorScheme: false,

        // Hide the ring in Profile picture
        hideAvatarRing: false,

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
            'procyon',
        ],

        // Custom theme
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
    class="text-primary" href="https://github.com/pranjay19/gitprofile"
    target="_blank"
    rel="noreferrer"
  >GitProfile</a> and ❤️`,
};

export default config;
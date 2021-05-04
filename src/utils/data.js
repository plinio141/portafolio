const API = 'https://api.github.com/users/plinio141/repos';

const data = {
    profile: {
        name: 'PLINIO JOSE GRIJALBA RAMIREZ',
        role: 'DESARROLLADOR SENIOR',
        image: 'https://avatars.githubusercontent.com/u/5834705?v=4',
        email: 'pramirez966@gmail.com',
        socialNetworks: [
            {
                url: 'https://www.linkedin.com/in/plinio-grijalba/',
                icon: 'linkedin-icon'
            },
            {
                url: 'https://www.linkedin.com/in/plinio-grijalba/',
                icon: 'devto-icon'
            },
            {
                url: 'https://www.linkedin.com/in/plinio-grijalba/',
                icon: 'twitter-icon'
            },
            {
                url: 'https://www.linkedin.com/in/plinio-grijalba/',
                icon: 'github-icon'
            }
        ]
    },
    skills: [
        {
            name: 'nodejs',
            icon: 'nodejs-logo',
            width: '110px',
            height: '110px'
        },
        {
            name: 'mongodb',
            icon: 'mongodb-logo',
            width: '120px',
            height: '130px'
        },
        {
            name: 'angular',
            icon: 'angular-logo',
            width: '110px',
            height: '110px'
        },
        {
            name: 'react',
            icon: 'react-logo',
            width: '150px',
            height: '110px'
        },
        {
            name: 'mysql',
            icon: 'mysql-logo',
            width: '140px',
            height: '130px'
        },
        {
            name: 'cloud',
            icon: 'cloud-logo',
            width: '190px',
            height: '120px'
        },
        {
            name: 'html',
            icon: 'html-logo',
            width: '130px',
            height: '120px'
        },
        {
            name: 'css',
            icon: 'css-logo',
            width: '120px',
            height: '110px'
        }
    ]
}

const getData = async () => {
    try {
        const response = await fetch(API);
        const repos = await response.json();
        let reposMap = repos.map(repo => (
            {
                name: repo.name,
                description: repo.description,
                language: repo.language,
                updated_at: repo.updated_at,
                created_at: repo.created_at,
                socialNetworks: [
                    {
                        url: repo.html_url,
                        icon: 'github-icon'
                    }
                ]
            }
        ))
        reposMap = reposMap.sort((a, b) => {
            if (a.created_at < b.created_at) {
                return 1;
            } else if (a.created_at > b.created_at) {
                return -1;
            }
            return 0;
        });
        data.projects = reposMap;
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export default getData;
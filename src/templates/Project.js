import SocialNetwork from './SocialNetwork';

const Project = (project) => {
    const view = `
        <div class="card-project">
            <div class="__name">
                <h2 class="__h2">${project.name}</h2>
            </div>
            <div class="content">
                <p class="language">
                    ${project.language}
                </p>
                ${
                    project.description ? `<p>${project.description}</p>` : ''
                }
            </div>
            <div class="social-networks">
                ${SocialNetwork(project.socialNetworks)}
            </div>
        </div>
    `;

    return view;
}

export default Project;
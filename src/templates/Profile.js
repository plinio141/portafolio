import SocialNetwork from './SocialNetwork';

const Profile = (profile, enableEmail) => {
    const view = `
        <div class="section-profile">
            <h1>${profile.name}</h1>
            ${
                enableEmail ?  `<h3>${profile.email}</h3>`
                : `
                <h3>${profile.role}</h3>
                <div class="social-networks">
                    ${SocialNetwork(profile.socialNetworks)}
                </div>`
            }
            
            <hr>
        </div>
    `;

    return view;
}

export default Profile;
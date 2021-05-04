import Profile from "./Profile";

const About = (profile) => {
    const view = `
        <div class="about">
            <image class="image-profile" src="${profile.image}"/>
            ${Profile(profile, true)}
        </div>
    `;

    return view;
}

export default About;
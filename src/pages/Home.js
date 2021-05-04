import About from '../templates/About';
import Profile from '../templates/Profile';
import Project from '../templates/Project';
import Skill from '../templates/Skill';
import data from '../utils/data';

const Home = async () => {
    const dataUser = await data();
    const view = `
    ${Profile(dataUser.profile)}
    <div>
        <h1 class="title">Skills</h1>
        <div class="section-skills">
            ${dataUser.skills.map(skill => Skill(skill)).join('')}
        </div>
    </div>
    <div class="section-projects" id="projects">
        <h1>Proyectos GIT</h1>
        <div class="list-projects">
            ${dataUser.projects.map( project => Project(project)).join('')}
        </div>
    </div>
    <div class="section-about" id="about">
        ${About(dataUser.profile)}
    </div>
    `;
    return view;
}

export default Home;
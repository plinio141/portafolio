
const Skill = (skill) => {
    const view = `
        <div class="skill">
            <image src="/images/${skill.icon}.png" style="width: ${skill.width}; height: ${skill.height};"/>
        </div>
    `;

    return view;
}

export default Skill;
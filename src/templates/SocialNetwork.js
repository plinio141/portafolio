const SocialNetwork = (socialNetworks) => {
    const view = socialNetworks.map(socialNetwork => `
        <a href="${socialNetwork.url}" class="icon" target="_blank">
            <image src="/images/${socialNetwork.icon}.svg" class="icon-image" />
        </a>
    `).join('');

    return view;
}

export default SocialNetwork;
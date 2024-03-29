export type TKnowageType = "language" | "framework" | "tools" | "styles";

export interface IKnowage {
    title: string;
    link: string;
    icon: string;
    type: TKnowageType;
}

const knowages: IKnowage[] = [];

// Linguagens
knowages.push({
    title: "Typescript",
    icon: "devicon:typescript",
    link: "https://www.typescriptlang.org/",
    type: "language"
});

knowages.push({
    title: "Javascript",
    icon: "logos:javascript",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    type: "language"
});

knowages.push({
    title: "PHP",
    icon: "devicon:php",
    link: "https://www.php.net/",
    type: "language"
});

// Frameworks
knowages.push({
    title: "Node.js",
    icon: "vscode-icons:file-type-node",
    link: "https://nodejs.org/en",
    type: "framework"
});

knowages.push({
    title: "React.js",
    icon: "devicon:react",
    link: "https://react.dev/",
    type: "framework"
});

knowages.push({
    title: "Next.js",
    icon: "devicon:nextjs",
    link: "https://nextjs.org/",
    type: "framework"
});

knowages.push({
    title: "Vue.js",
    icon: "devicon:vuejs",
    link: "https://vuejs.org/",
    type: "framework"
});

knowages.push({
    title: "Laravel",
    icon: "devicon:laravel",
    link: "https://laravel.com/",
    type: "framework"
});

// Tools
knowages.push({
    title: "Vs Code",
    icon: "devicon:vscode",
    link: "https://code.visualstudio.com/",
    type: "tools"
});

knowages.push({
    title: "Git",
    icon: "devicon:git",
    link: "https://git-scm.com/",
    type: "tools"
});

knowages.push({
    title: "Github",
    icon: "devicon:github",
    link: "https://github.com/",
    type: "tools"
});

knowages.push({
    title: "Insomnia",
    icon: "devicon:insomnia",
    link: "https://insomnia.rest/",
    type: "tools"
});

knowages.push({
    title: "Postman",
    icon: "devicon:postman",
    link: "https://www.postman.com/",
    type: "tools"
});

// Estilos
knowages.push({
    title: "Html",
    icon: "devicon:html5",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    type: "styles"
});

knowages.push({
    title: "Css",
    icon: "devicon:css3",
    link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    type: "styles"
});

knowages.push({
    title: "Sass",
    icon: "skill-icons:sass",
    link: "https://sass-lang.com/",
    type: "styles"
});

knowages.push({
    title: "Styled Components",
    icon: "skill-icons:styledcomponents",
    link: "https://styled-components.com/",
    type: "styles"
});

knowages.push({
    title: "Bootstrap",
    icon: "skill-icons:bootstrap",
    link: "https://getbootstrap.com/",
    type: "styles"
});

knowages.push({
    title: "Tailwind",
    icon: "skill-icons:tailwindcss-dark",
    link: "https://tailwindcss.com/",
    type: "styles"
});

export { knowages }
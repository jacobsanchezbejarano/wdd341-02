const get_name = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    res.send('Nola Justiniano');
}

const professionals = 
    {
        professionalName: "Jacob",
        base64Image: "",
        primaryDescription: "Web Programmer",
        workDescription1: "PHP, MySQL, JavaScript, Python",
        workDescription2: "API REST, Node.js, Angular, MongoDB",
        linkTitleText: "Portfolio",
        githubLink: {
            text: "GitHub",
            link: "https://github.com/jacobsanchezbejarano"
        },
        linkedInLink: {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/jacobsanchezbejarano/"
        },
        nameLink: {
            firstName: "Jacob",
            url: "https://www.linkedin.com/in/jacobsanchezbejarano/"
        }
    }
;

const get_professionals = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');
    res.json(professionals);
}

module.exports = {
    get_name,
    get_professionals
};
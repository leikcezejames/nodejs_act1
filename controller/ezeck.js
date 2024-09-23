const ph = {
    index: (req, res) => {
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');
    },
    project: (req, res) => {
        res.render('project');
    },
    services: (req, res) => {
        res.render('services');
    },
    contact: (req, res) => {
        res.render('contact');
    }
};

module.exports = ph;

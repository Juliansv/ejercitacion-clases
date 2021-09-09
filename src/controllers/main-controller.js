const path = require('path');

const controller = {
    home: (req, res) => {
        const titulo = 'Pimienta y sal';
        const platos = [
            {
                id: '1',
                nombre: 'Carpaccio fresco',
                descripcion: 'Entrada Carpaccio de salmón con cítricos',
                precio: '65.50',
                img: 'Carpaccio-de-salmon.jpg'
            },
            {
                id: '2',
                nombre: 'Risotto de berenjena',
                descripcion: 'Risotto de berenjena y queso de cabra',
                precio: '47.00',
                img: 'Risotto-berenjena-queso-cabra.jpg'
            },
            {
                id: '3',
                nombre: 'Mousse de arroz',
                descripcion: 'Mousse de arroz con leche y aroma de azahar',
                precio: '27.50',
                img: 'Mousse-de-arroz-con-leche.jpg'
            },
            {
                id: '4',
                nombre: 'Espárragos blancos',
                descripcion: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
                precio: '37.50',
                img: 'esparragos.png'
            },
        ]
        res.render('index', {titulo, platos});
    },
    about: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/about.html'));
    },
    detalle: (req, res) => {
        const titulo = 'Pimienta y sal';
        res.render('detalle-menu', {titulo})
    },
};

module.exports = controller;
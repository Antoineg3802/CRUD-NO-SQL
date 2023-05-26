const Realm = require('realm');

// Définir le schéma de votre objet
const ContactSchema = {
    name: 'Contact',
    properties: {
        title: 'string',
        name: 'string',
        adress: 'string',
        realAdress: 'string',
        departement: 'string',
        country: 'string',
        tel: 'string',
        email: 'string',
    }
};

// Fonction pour initialiser Realm
async function initializeRealm() {
    try {
        const realm = await Realm.open({
            schema: [ContactSchema],
        });
        return realm;
    } catch (error) {
        console.error('Erreur lors de l\'initialisation de Realm :', error);
    }
}

module.exports = {
    initializeRealm,
    ContactSchema,
};
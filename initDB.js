const fs = require('fs');
const csv = require('csv-parser');
const { initializeRealm } = require('./database');

// Définir le chemin vers le fichier CSV
const csvFilePath = 'contacts.csv';

// Fonction de parsing du CSV
async function parseCSV() {
    const realm = await initializeRealm();

    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => {
            // Créer un nouvel objet à partir des données du CSV
            realm.write(() => {
                // Assign a newly-created instance to the variable.
                let contact = realm.create('Contact', {
                    title: data.title,
                    name: data.name,
                    adress: data.adress,
                    realAdress: data.realAdress,
                    departement: data.departement,
                    country: data.country,
                    tel: data.tel,
                    email: data.email,
                });
                console.log("Object created : ", contact)
            });
        })
        .on('end', () => {
            console.log('Parsing du CSV terminé.');
            realm.close();
        });
}

parseCSV();
const { initializeRealm } = require('./database');

// CREATE function
async function createContact(title, name, adress, realAdress, departement, country, tel, email) {
    const realm = await initializeRealm();

    realm.write(() => {
        let obj = {
            title: title,
            name: name,
            adress: adress,
            realAdress: realAdress,
            departement: departement,
            country: country,
            tel: tel,
            email: email,
        }
        realm.create('Contact', obj);
        console.log('Contact créé :', obj);
    });

    realm.close();
}

// createContact("CNAM Nord-pas de Calais Lille : S'inscrire, Cursus, Formation ",'CNAM HAUTS DE FRANCE - centre VALENCIENN','15 bis Place Jehan Froissart 59300 VALENCIENNES France','15 bis Place Jehan Froissart','59300 VALENCIENNES','France','03 27 23 04 05','hdf_valenciennes@lecnam.net')

// READ function
async function getContact(name) {
    const realm = await initializeRealm();

    const contacts = realm.objects('Contact');
    let contact = contacts.filtered('name = "' + name + '"')[0]

    let contactOBJ = {
        title: contact.title,
        name: contact.name,
        adress: contact.adress,
        realAdress: contact.realAdress,
        departement: contact.departement,
        country: contact.country,
        tel: contact.tel,
        email: contact.email
    }

    console.log(contactOBJ)
    realm.close();
}

// getContact("CNAM HAUTS DE FRANCE - centre VALENCIENN")

// UPDATE function 
async function updateContact(contact) {
    const realm = await initializeRealm();
    const contacts = realm.objects('Contact');

    realm.write(() => {
        const contactToUpdate = contacts.filtered('name = "' + contact.name + '"')[0];
        if (contactToUpdate) {
            contactToUpdate.title = contact.title
            contactToUpdate.name= contact.name
            contactToUpdate.adress = contact.adress
            contactToUpdate.realAdress = contact.realAdress
            contactToUpdate.departement = contact.departement
            contactToUpdate.country = contact.country
            contactToUpdate.tel = contact.tel
            contactToUpdate.email = contact.email
            console.log('Contact mise à jour :', contact);
        }
    });

    realm.close();
}

// updateContact({
//     title: "CNAM Nord-pas de Calais Lille : S'inscrire, Cursus, Formation ",
//     name: 'CNAM HAUTS DE FRANCE - centre VALENCIENN',
//     adress: '15 bis Place Jehan Froissart 59300 VALENCIENNES Franceeeee',
//     realAdress: '15 bis Place Jehan Froissart',
//     departement: '59300 VALENCIENNES',
//     country: 'France',
//     tel: '03 27 23 04 05',
//     email: 'hdf_valenciennes@lecnam.net'
// })

// DELETE Contact
async function deleteContact(name){
    const realm = await initializeRealm();
    const contacts = realm.objects('Contact');

    realm.write(() => {
        const contactToDelete = contacts.filtered('name = "' + name + '"')[0];
        if (contactToDelete) {
            realm.delete(contactToDelete);
            console.log('Contact supprimé');
        }
    });

    realm.close();
}

deleteContact("CNAM HAUTS DE FRANCE - centre VALENCIENN")
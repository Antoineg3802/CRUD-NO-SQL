# CRUD-NO-SQL

Procédure d'installation du CRUD Realm by MongoDB

## Installer Node

Vous pouvez installer node sur [le lien suivant](https://nodejs.org/en) afin de télécharger la LTS de node si ce n'est pas fait

## Initialisation du projet

Une fois le projet créé rendez-vous dans le dossier du projet et effctuer les commande suivantes 
- `npm i` : afin d'__installer tous les packages__ necessaires au code.
- `npm run init` : qui lancera un script qui vous créera la BDD et la rempli à partir du fichier CSV. L'execution de ce script vous permettra 
- `node index.js` : qui executera le code (veillez à __enlever les commentaires de la fonction que vous souhaitez utiliser__ ainsi que __modifier les paramètres de la fonction__)
- Et après tout ça, enjoy !

## Le CRUD (Create Read Update Delete)

Dans le fichier index.js vous pouvez trouver quatre fonctions qui sont les suivantes : 
- `createContact` : qui nous permet, comme son nom l'indique, de __créer un contact__ à partir des paramètres (title,name,adress,realAdress,departement,country,tel,email) à renseigner
- `getContact` : qui nous permet de __récupérer un contact__ en fonction du 'name' renseigné en paramètre
- `updateContact` : qui nous permet de __modifier un contact__ en fonction du 'name' renseigné dans l'objet en paramètre
- `deleteContact` : qui nous permet de __supprimerer un contact__ en fonction du 'name' renseigné en paramètre 

Si vous voulez faire une fonction personnalisée, pensez bien, si vous devez modifier/ajouter/supprimer des données, à entourer votre traitement de la fonction suivante __afin de pouvoir écrire dans la base de données__
```js
realm.write(() => {
  // Insert your code here
})
```

## Bonus 

Si vous voulez, un outils vous permet de visualiser les données, vous pouvez utiliser [realm studio](https://www.mongodb.com/docs/realm-legacy/products/realm-studio.html#download-studio) ![image](https://github.com/Antoineg3802/CRUD-NO-SQL/assets/72556223/12edabb9-2a7c-46a9-a02d-42708405cda1)


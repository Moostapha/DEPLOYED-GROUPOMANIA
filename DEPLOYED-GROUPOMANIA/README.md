# VERSION BUILD DEPLOIEMENT SUR LE NET

# I) APPLICATION DE RESEAU SOCIAL POUR EMPLOYES DU GROUPE GROUPOMANIA
Le projet se nomme "Groupomania", un réseau social d'entreprise avec pour outil de communication des posts ou publications


# TECHNOLOGIES POUR CE PROJET: 

# => Frontend: Vue.js | Bootstrap | VueCLI
- Vue.js: Framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages (front-end).

# => Backend: SQL | MySQL | Express.js | Node.js 
- Node.js - Environnement d'exécution JavaScript côté serveur (back-end).
- MySQL - Système de gestion de bases de données relationnelles (back-end).
- phpMyAdmin - Application Web de gestion pour les systèmes de base de données MySQL (back-end).



# II) EXIGENCES
- la présentation des fonctionnalités doit être simple ;
- la création d’un compte doit être simple et possible depuis un téléphone mobile ;
- le profil doit contenir très peu d’informations pour que sa complétion soit rapide ;
- la suppression du compte doit être possible ;
- l’accès à un forum où les salariés publient des contenus multimédias doit être présent ;
- l’accès à un forum où les salariés publient des textes doit être présent ;
- les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés ;
- le ou la chargé-e de communication Groupomania doit pouvoir modérer les interactions entre salariés ;



# III) COMPETENCES MOBILISEES
- Personnaliser le contenu envoyé à un client web
- Implémenter un stockage de données sécurisé en utilisant SQL
- Gérer un stockage de données à l'aide de SQL
- Authentifier un utilisateur et maintenir sa session



# IV) INSTALLATION DU PROJET

# 1) Initialisation du projet:
- Télécharger la dernière version de Node.js sur NodeJS.org
- ouvrer votre terminal
- Cloner le repository avec la commande git clone "mon adresse github" avec 2 dossiers frontend et backend
- Importez la base de donnée groupomania.sql (du dossier backend) sur votre système MySQL

# 2) Backend:
- Ouvrez un autre terminal tapez cd backend pour accéder à ce dossier
- Exécutez npm install pour installer les dépendances du projet
- Exécutez npm install -g nodemon
- Ajouter un fichier .env à la racine du dossier fourni avec vos variables 
d'environnement pour pouvoir vous connecter à la base de données MySQL
HOST = votre HOST
USER = votre user
PASSWORD = votre mot de passe
DATABASENAME = Nom
- Lancez la commande nodemon server.js dans le dossier backend pour vous connecter à la database

# 3) frontend:
- Ouvrez un autre terminal tapez cd backend pour accéder à ce dossier
- Executez npm install pour installer toutes les dépendances du projet
- Exécutez npm run serve pour lancer le frontend 
- ouvrez votre navigateur à l'adresse indiquée pour y voir apparaitre le frontend dans le navigateur


# AUTEUR
Moustapha Touré
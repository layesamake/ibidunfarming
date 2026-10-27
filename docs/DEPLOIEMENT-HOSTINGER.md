# Déploiement automatique Hostinger

La GitHub Action `.github/workflows/deploy-hostinger.yml` compile Astro puis envoie le contenu de `dist/` vers le dossier public du site par FTPS.

## Secrets GitHub à créer

Dans **Settings → Secrets and variables → Actions**, ajouter :

- `HOSTINGER_FTP_SERVER` : serveur FTP/FTPS fourni par Hostinger
- `HOSTINGER_FTP_USERNAME` : identifiant FTP du site
- `HOSTINGER_FTP_PASSWORD` : mot de passe FTP
- `HOSTINGER_FTP_SERVER_DIR` : dossier distant de publication, généralement `./public_html/` ; si le compte FTP ouvre déjà directement dans `public_html`, utiliser `./`

Les valeurs restent dans GitHub Actions et ne doivent pas être ajoutées dans `.env`, le code ou les logs.

## Hostinger

Désactiver ensuite le déploiement Git automatique de Hostinger pour ce site afin qu’un push ne publie pas les sources du dépôt directement dans `public_html`. La GitHub Action devient le seul mécanisme de publication.

Après chaque push sur `main`, le workflow :

1. installe les dépendances avec `npm ci` ;
2. vérifie Astro et génère le site avec `npm run build` ;
3. synchronise `dist/` vers `public_html/`.

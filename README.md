
# Étapes suivis pour utiliser Git et GitHub 


après avoir téléchargez et installez Git depuis le site officiel : [git-scm.com](https://git-scm.com/), bien configurer notre compte

```bash
git config --global user.name "séraphin"
git config --global user.email "seraphinndibwami@email.com"
```
et créer un compte github  [github.com](https://github:com), nous avons proceder commen suit

#### 1. créer un repetoire sur github en prenant soint de ne rien y maitre pour n'est pas avoir un une initialisation automatique


#### 2. créer un repertoire git locale avec la commande
```bash
git init
```

#### 3. créer un fichier readme avec la commade
```bash
touch README.md
```
puis on y ajoute quelque contenu qui cadre avec notre repertoire

#### 4. ajouter le fichier README.md a la zone de staging avec la commande
```bash
git add README.md
```

#### 5. on enregistre le modification faite avec la commade
```bash
git commit -m "itialisation du repertoire git"
```

#### 6. on renome notre branche master locale par defaut en main avec la commande
```bash
git branch -M main
```
#### 7. on lie notre repertoire locale au repertoire distant
```bash
git remote add origin https://github.com/seraphin-ndibwami/Salaire-Employes.git
```

#### 8. on envoi nos moficication sur le repertoire distant
```bash
git push -u origin main
```
#### 9. on on créer une autre branch que nous appelons devellopement

```bash
git branch devellopement
```
c'est sur cette branche qu'on sera entrain de faire notre devellopement et quand on se rassure qu'une fonctionnalite fonctionne on va la fusionne avec la brabche principale

#### 10. on se deplace sur cette branch
```bash
git checkout devellopement
```
#### 10.1. on creer un fichier .gitignore
```python
"""seulement pour notre dernier projet car on a utliser composer pour initialiser le projet"""

# Dossiers générés par Composer
/vendor/

# Fichiers de verrouillage de Composer
composer.lock
```
#### 11. ajouter tout le projet a la zone de staging avec la commande
```bash
git add .
```
#### 12. on versionne nos modifications avec la commande
```bash
git commit -m "mise en place du projet sur la branche develloppement"
```
#### 13. on pousse les modifications sur le repertoire distant
```bash
git push origin develloppement
```
#### 14. on passe au repertoire principale
```bash
git checkout main
```
#### 15. on fusionne la brach devellopement a la branch main
comme on se fait confiance, on peut directement fusionner nos branches sans passe par une demanche de tirrage(pull request)
```bash
git merge devellopement
```
#### 16. on met a jour le repertoire distant

```bash
git push
```
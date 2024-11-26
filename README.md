# Herberger-un-projet-Django-et-Mysql-sur-PythonAnywhere

Bonjour et bienvenue à tous, bienvenue aujourd’hui, je vais vous montrer
comment héberger un projet Django et Mysql sur PythonAnywhere étape par
étape.

Tout d'abord, vous devez avoir un compte PythonAnywhere et un projet
Django fonctionnel avant de continuer avec cette vidéo.
La première étape est de se connecter à votre compte PythonAnywhere et de
suivre les étapes suivante :

# 1- Allez sur le lien des consoles et cliquez sur bash
Maintenant, nous allons cloner le référentiel github dans ce Bash. mettre en
dessous de la commande :
## git clone https://github.com/
# 2- Ensuite, vous devez créer un environnement virtuel
Sur PythonAnywhere et y installer les packages nécessaires pour exécuter
votre projet Django. Vous pouvez utiliser la commande suivante dans une
console PythonAnywhere pour créer un environnement virtuel :
## mkvirtualenv --python=/usr/bin/python3.10 testenv
Remplacez testenv par le nom de votre choix. Assurez-vous d'utiliser la
même version de Python que celle utilisée pour votre projet Django.
Maintenant, votre virtualenv est activé. sinon tapez
## workon testenv

# 3- Maintenant, vous devez installer les packages nécessaires
Pour exécuter votre projet Django utiliser pip :
## pip install -r requirements.txt

# 4- Créer une application Web avec une configuration manuelle
Accédez à l'onglet Web et cliquez dessus. Vous verrez créer un bouton
d'application Web, cliquez dessus
puis cliquez sur Configuration manuelle (assurez-vous de ne pas cliquer sur
l'option "Django")
Maintenant, notre application Web sera créée, puis nous ajouterons quelques
chemins : -
## Source code:
## /home/sibylassana53/E_learning
## Working directory: /home/sibylassana53/
## Virtual env :-
## /home/sibylassana53/.virtualenvs/testenv
## Static files :
## /static/ :
## /home/sibylassana53/E_learning/static
## /images/ :
## /home/sibylassana53/E_learning/images
## Configurer le fichier wsgi.py
import os
import sys

project_home = '/home/sibylassana53/E_learning'
if project_home not in sys.path:
    sys.path.insert(0, project_home)
os.environ['DJANGO_SETTINGS_MODULE'] = 'E_learning.settings'
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()


# 5- Créer une base de données
La prochaine étape consiste à configurer votre base de données MySQL sur
PythonAnywhere. Cliquez sur l'onglet "Databases" et suivez les instructions
pour créer une nouvelle base de données MySQL. Assurez-vous de noter les
informations de connexion à la base de données (nom d'utilisateur, mot de
passe, nom de la base de données, etc.).

Maintenant, vous devez configurer votre projet Django pour qu'il utilise la
base de données MySQL sur PythonAnywhere. Modifiez votre fichier
settings.py pour qu'il utilise les informations de connexion à la base de
données MySQL. Assurez-vous de spécifier le bon nom d'utilisateur, mot de
passe, nom de la base de données et hôte.

# 6- Déployer votre projet Django sur PythonAnywhere

## python manage.py makemigrations
## python manage.py migrate (Assurez-vous que toutes les migrations sont appliquées avec succès.)
## python manage.py collectstatic (Cela copie tous les fichiers statiques (CSS, JavaScript, images, etc.) dans un dossier statique que votre application peut utiliser.)

# 7- Bonus

## Créer un super utilisateur : python manage.py createsuperuser
Sauvegarder les données de votre projet dans un fichier
au format JSON :
## python manage.py dumpdata>nom_du_fichier.json ou python -Xutf8 ./manage.py dumpdata > data.json
Charger les données d' un fichier de sauvegarde au format JSON dans votre projet : 
## python manage.py loaddata nom_du_fichier.json
# base de donnée :
DATABASES =
{
'default': {
'ENGINE': 'django.db.backends.mysql',
'NAME': ' ',
'USER': ' ',
Lassana Siby'PASSWORD': ' ',
'HOST': ' ', # Or an IP Address that your DB is hosted on
'PORT': '3306',
}
}

Et voilà ! Vous avez réussi à héberger votre projet Django et Postgresql sur
PythonAnywhere. J'espère que cette vidéo vous a été utile. Merci de l'avoir
regardée et à bientôt !

# Lassana Siby

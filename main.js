const steps = [
    {
        title: "Console Bash",
        content: "Accédez à la console Bash de PythonAnywhere et clonez votre dépôt:",
        code: "git clone https://github.com/votre-repo",
        language: "bash"
    },
    {
        title: "Environnement Virtuel",
        content: "Créez et activez un environnement virtuel Python 3.10, Remplacez testenv par le nom de votre choix:",
        code: "mkvirtualenv --python=/usr/bin/python3.10 testenv\nworkon testenv",
        language: "bash"
    },
    {
        title: "Installation des Dépendances",
        content: "Installez les packages nécessaires depuis requirements.txt.",
        code: "pip install -r requirements.txt",
        language: "bash"
    },
    {
        title: "Configuration Web",
        content : "Dans l'interface de PythonAnywhere, accédez à l'onglet Web, créez une nouvelle application Web avec une configuration manuelle (assurez-vous de ne pas choisir l'option 'Django'), puis configurez les chemins comme suit :",
        code: "# Source code: /home/username/project\n# Working directory: /home/username/\n# Virtual env: /home/username/.virtualenvs/testenv\n\n# Configuration WSGI:\nimport os\nimport sys\n\nproject_home = '/home/username/project'\nif project_home not in sys.path:\n    sys.path.insert(0, project_home)\nos.environ['DJANGO_SETTINGS_MODULE'] = 'project.settings'\n\nfrom django.core.wsgi import get_wsgi_application\napplication = get_wsgi_application()",
        language: "python"
    },
    {
        title: "Base de Données MySQL",
        content : "La prochaine étape consiste à configurer votre base de données MySQL sur PythonAnywhere. Cliquez sur l'onglet 'Databases' et suivez les instructions pour créer une nouvelle base de données MySQL. Assurez-vous de noter les informations de connexion à la base de données (nom d'utilisateur, mot de passe, nom de la base de données, etc.). Maintenant, vous devez configurer votre projet Django pour qu'il utilise la base de données MySQL sur PythonAnywhere. Modifiez votre fichier **settings.py** pour qu'il utilise les informations de connexion à la base de données MySQL. Assurez-vous de spécifier le bon nom d'utilisateur, mot de passe, nom de la base de données et hôte.",
        code: "DATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.mysql',\n        'NAME': 'your_db_name',\n        'USER': 'your_username',\n        'PASSWORD': 'your_password',\n        'HOST': 'your_host',\n        'PORT': '3306',\n    }\n}",
        language: "python"
    },
    {
        title: "Fichiers Statiques",
        content: "Configurez les chemins des fichiers statiques:",
        code: "# Dans settings.py\nSTATIC_URL = '/static/'\nSTATIC_ROOT = '/home/username/project/static'\n\nMEDIA_URL = '/media/'\nMEDIA_ROOT = '/home/username/project/media'",
        language: "python"
    },
    {
        title: "Déploiement",
        content: "Exécutez les commandes de déploiement:",
        code: "python manage.py makemigrations\npython manage.py migrate\npython manage.py collectstatic\npython manage.py createsuperuser",
        language: "bash"
    }
];

const bonusCommands = [
    {
        title: "Créer un superutilisateur",
        code: "python manage.py createsuperuser",
        description: "Créez un compte administrateur pour accéder à l'interface d'administration Django",
        language: "bash"
    },
    {
        title: "Sauvegarder les données",
        code: "python -Xutf8 ./manage.py dumpdata > data.json",
        description: "Exportez toutes les données de votre base de données au format JSON",
        language: "bash"
    },
    {
        title: "Restaurer les données",
        code: "python manage.py loaddata data.json",
        description: "Importez les données depuis un fichier JSON dans votre base de données",
        language: "bash"
    }
];

function createStepCard(step, index) {
    return `
        <div class="step-card group" data-aos="fade-up" data-aos-delay="${index * 100}">
            <div class="flex items-center space-x-4 mb-4">
                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 font-bold">${index + 1}</span>
                <h3 class="text-2xl font-semibold text-gray-600 dark:text-gray-300">${step.title}</h3>
            </div>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${step.content}</p>
            <pre class="code-block group-hover:shadow-lg transition-shadow duration-200 text-gray-600 dark:text-gray-300"><code class="language-${step.language}">${step.code}</code></pre>
        </div>
    `;
}

function createBonusCard(command) {
    return `
        <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200" data-aos="fade-up">
            <h4 class="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">${command.title}</h4>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${command.description}</p>
            <pre class="code-block text-gray-600 dark:text-gray-300"><code class="language-${command.language}">${command.code}</code></pre>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialiser AOS
    AOS.init({
        duration: 800,
        once: true
    });

    // Générer les étapes
    const stepsContainer = document.getElementById('steps');
    stepsContainer.innerHTML = steps.map((step, index) => createStepCard(step, index)).join('');

    // Générer les commandes bonus
    const bonusContainer = document.getElementById('bonus-commands');
    bonusContainer.innerHTML = bonusCommands.map(command => createBonusCard(command)).join('');

    // Gestionnaire du thème sombre/clair
    const themeToggle = document.getElementById('themeToggle');
    
    function updateTheme() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    themeToggle.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'light';
        } else {
            localStorage.theme = 'dark';
        }
        updateTheme();
    });

    // Initialiser le thème
    updateTheme();

    // Initialiser Prism.js
    Prism.highlightAll();
});
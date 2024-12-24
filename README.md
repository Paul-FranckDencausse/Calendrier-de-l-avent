
# Calendrier de l'Avent

Ce projet est un calendrier de l'Avent interactif réalisé en HTML, CSS et JavaScript. Chaque jour de décembre jusqu'à Noël, vous pouvez cliquer sur une case pour révéler un message spécial.

## Fonctionnalités

- **Interface interactive** : Cliquez sur une case pour dévoiler le message du jour.
- **Facile à personnaliser** : Modifiez les messages et les styles selon vos préférences.

## Aperçu

![Aperçu du Calendrier de l'Avent](screenshot.png)

## Utilisation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-nom-utilisateur/calendrier-de-l-avent.git
    ```

2. Accédez au répertoire du projet :
    ```bash
    cd calendrier-de-l-avent
    ```

3. Ouvrez le fichier `index.html` dans votre navigateur préféré.

## Personnalisation

### Messages

Les messages sont définis dans le fichier `script.js`. Vous pouvez les modifier en éditant le tableau `messages` :

```javascript
const messages = [
    "Préparez-vous pour les fêtes!",
    "Décorez votre maison!",
    "Écoutez des chants de Noël!",
    // Ajoutez vos propres messages ici
];
```

### Styles

Les styles sont définis dans le fichier `styles.css`. Vous pouvez les personnaliser pour changer l'apparence du calendrier.

### Exemple de CSS

```css
.day {
    background-color: #007bff;
    color: white;
    padding: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.day:hover {
    background-color: #0056b3;
}
```

## Dépendances

Ce projet n'a pas de dépendances externes. Il utilise uniquement HTML, CSS et JavaScript purs.

## Contributions

Les contributions sont les bienvenues! Si vous avez des idées d'améliorations ou des fonctionnalités supplémentaires, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Auteur

- **Paul-Franck Dencausse** - [Paul-FranckDencausse](https://github.com/Paul-FranckDencausse)

---

Merci d'utiliser ce calendrier de l'Avent! Joyeuses fêtes!

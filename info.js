const data_components = [
    {
      title: 'Clavier',
      image: './image/clavier_image.png',
      info: `
        <h3>Clavier</h3>
        <p>Le clavier est un dispositif d'entrée principal pour les ordinateurs. Son design est dérivé des machines à écrire et a évolué avec les besoins informatiques.</p>
        <h4>Évolution</h4>
        <ul>
          <li>1867: Invention de la machine à écrire par Christopher Latham Sholes</li>
          <li>1960s: Claviers télétypes utilisés avec les ordinateurs</li>
          <li>1980s: Claviers mécaniques pour ordinateurs personnels</li>
          <li>2000s: Claviers ergonomiques et sans fil</li>
        </ul>
      `
    },
    {
      title: 'Vacuum Tube',
      image: './image/vacuum_tube_image.png',
      info: `
        <h3>Vacuum Tube</h3>
        <p>1904 : Les tubes à vide ont été les premiers dispositifs amplificateurs utilisés dans les ordinateurs avant l'invention des transistors. Ils ont joué un rôle crucial dans les premiers développements de l'électronique.</p>
        <h4>Caractéristiques</h4>
        <ul>
          <li>Utilisé dans les premiers ordinateurs comme l'ENIAC</li>
          <li>Remplacé par les transistors dans les années 1950</li>
          <li>Composants volumineux et générateurs de chaleur</li>
        </ul>
      `
    },
    {
      title: 'ENIAC',
      image: './icon/eniac.png',
      info: `
        <h3>ENIAC</h3>
        <p>L'ENIAC (Electronic Numerical Integrator and Computer) a été l'un des premiers ordinateurs électroniques de grande échelle. Il a été conçu par John Presper Eckert et John Mauchly à l'Université de Pennsylvanie et achevé en 1945.</p>
        <h4>Utilisation</h4>
        <ul>
          <li>Calculs balistiques pour l'armée américaine</li>
          <li>Simulations de recherche scientifique</li>
        </ul>
      `
    },
    {
      title: 'Transistor',
      image: './image/transistor_image.png',
      info: `
        <h3>Histoire des Transistors</h3>
        <p>Le transistor a été inventé en 1947 par John Bardeen, Walter Brattain et William Shockley aux Bell Labs. 
        Cette invention a marqué le début de l'ère de l'électronique moderne, remplaçant les tubes à vide utilisés dans les premiers ordinateurs.</p>
        <h4>Évolution</h4>
        <ul>
          <li>1947: Invention du transistor aux Bell Labs</li>
          <li>1954: Premier transistor commercial en silicium par Texas Instruments</li>
          <li>1960s: Transistors intégrés dans les circuits intégrés</li>
          <li>1970s: Avènement des microprocesseurs utilisant des millions de transistors</li>
        </ul>
      `
    },
    {
      title: 'Alimentation',
      image: './image/alimentation_image.png',
      info: `
        <h3>Histoire de l'Alimentation</h3>
        <p>1950 : L'alimentation électrique des ordinateurs a évolué depuis les simples piles et batteries des premiers calculateurs jusqu'aux alimentations sophistiquées des ordinateurs modernes.</p>
        <h4>Évolution</h4>
        <ul>
          <li>1940s: Utilisation de batteries et de générateurs mécaniques</li>
          <li>1950s: Introduction des alimentations à découpage</li>
          <li>1980s: Standardisation des alimentations ATX pour les PC</li>
          <li>2000s: Développement des alimentations modulaires et à haute efficacité</li>
        </ul>
      `
    },
    {
      title: 'UNIVAC I',
      image: './image/univac_image.png',
      info: `
        <h3>Histoire de l'UNIVAC I</h3>
        <p>L'UNIVAC I (Universal Automatic Computer I) a été le premier ordinateur commercial produit aux États-Unis. Il a été conçu par J. Presper Eckert et John Mauchly, les mêmes ingénieurs qui ont créé l'ENIAC. L'UNIVAC I a été livré pour la première fois en 1951.</p>
        <h4>Caractéristiques</h4>
        <ul>
          <li>Processeur: Tube à vide</li>
          <li>Mémoire: 1,000 mots de 12 caractères chacun</li>
          <li>Stockage: Bandes magnétiques</li>
          <li>Vitesse: 1,905 opérations par seconde</li>
        </ul>
        <h4>Utilisation</h4>
        <ul>
          <li>Recensement des États-Unis</li>
          <li>Prévisions électorales</li>
          <li>Applications scientifiques et militaires</li>
        </ul>
      `
    },
    {
      title: 'Souris',
      image: './image/souris_image.png',
      info: `
        <h3>Souris</h3>
        <p>La souris, inventée par Douglas Engelbart en 1964, est un périphérique de pointage essentiel pour l'interaction avec les interfaces graphiques des ordinateurs.</p>
        <h4>Évolution</h4>
        <ul>
          <li>1964: Première souris prototype par Engelbart</li>
          <li>1980s: Introduction de la souris à boule avec l'Apple Lisa</li>
          <li>1990s: Souris optiques sans boule</li>
          <li>2000s: Souris sans fil et avec capteurs laser</li>
        </ul>
      `
    },
    {
      title: 'Carte mère',
      image: './image/carte_mère_image.png',
      info: `
        <h3>Histoire des Cartes Mères</h3>
        <p>1970 : La carte mère est le composant central qui relie tous les autres composants de l'ordinateur, depuis les premiers calculateurs jusqu'aux PC modernes.</p>
        <h4>Évolution</h4>
        <ul>
          <li>1940s: Plaques de câblage manuel</li>
          <li>1960s: Introduction des circuits imprimés (PCB)</li>
          <li>1980s: Standardisation des facteurs de forme (AT, ATX)</li>
          <li>2000s: Intégration de plus en plus de fonctionnalités sur la carte mère</li>
        </ul>
      `
    },
    {
      title: 'Apple I',
      image: './image/apple_i_image.png',
      info: `
        <h3>Apple I</h3>
        <p>L'Apple I, conçu par Steve Wozniak en 1976, est l'un des premiers ordinateurs personnels. Il a été vendu en tant que kit à assembler, destiné aux amateurs d'informatique.</p>
        <h4>Caractéristiques</h4>
        <ul>
          <li>Processeur: MOS 6502</li>
          <li>Mémoire: 4 KB, extensible à 48 KB</li>
          <li>Stockage: Cassette audio</li>
        </ul>
      `
    },
    {
      title: 'Carte Graphique',
      image: './image/carte_graphique_image.png',
      info: `
        <h3>Histoire des Cartes Graphiques</h3>
        <p>1981 : Les cartes graphiques ont évolué d'affichages simples en texte aux GPU sophistiqués capables de rendus 3D complexes.</p>
        <h4>Évolution</h4>
        <ul>
          <li>1970s: Affichages en texte et graphiques 2D de base</li>
          <li>1980s: Introduction des premiers adaptateurs graphiques (CGA, EGA, VGA)</li>
          <li>1990s: Premières cartes graphiques 3D dédiées</li>
          <li>2000s: GPU modernes avec capacités de calcul parallèle avancées</li>
        </ul>
      `
    },
    
    {
      title: 'Carte Réseau',
      image: './image/carte_réseau_image.png',
      info: `
        <h3>Histoire des Cartes Réseau</h3>
        <p>1980 : Les cartes réseau permettent la communication entre les ordinateurs sur un réseau. Elles ont évolué avec les technologies de réseau.</p>
        <h4>Évolution</h4>
        <ul>
          <li>1970s: Réseaux locaux (LAN) primitifs</li>
          <li>1980s: Introduction des cartes Ethernet</li>
          <li>1990s: Standardisation des cartes Ethernet 10/100 Mbps</li>
          <li>2000s: Développement des cartes réseau sans fil et Gigabit Ethernet</li>
        </ul>
      `
    },
    {
      title: 'Macintosh',
      image: './image/macintosh_image.png',
      info: `
        <h3>Premier Macintosh</h3>
        <p>Le Macintosh original, lancé en 1984 par Apple, est célèbre pour avoir popularisé l'interface utilisateur graphique (GUI) et la souris.</p>
        <h4>Caractéristiques</h4>
        <ul>
          <li>Processeur: Motorola 68000</li>
          <li>Mémoire: 128 KB RAM</li>
          <li>Écran: 9 pouces, noir et blanc</li>
          <li>Stockage: Disquette 3,5 pouces de 400 KB</li>
        </ul>
      `
    }
    
    
  ];
  
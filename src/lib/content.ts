export type Locale = 'fr' | 'en';
export type PageKey = 'about' | 'solutions' | 'training' | 'projects' | 'news' | 'contact';

export type SiteCopy = {
  locale: Locale;
  label: string;
  navigation: Record<'about' | 'solutions' | 'training' | 'projects' | 'news' | 'contact', string>;
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    proof: string;
    proofText: string;
  };
  sections: Record<PageKey, { title: string; intro: string }>;
  solutionCards: Array<{ title: string; text: string; tag: string }>;
  trainingModules: string[];
  contact: { title: string; text: string; emailLabel: string; whatsappLabel: string; formCta: string };
};

export const copies: Record<Locale, SiteCopy> = {
  fr: {
    locale: 'fr', label: 'FR',
    navigation: { about: 'L’entreprise', solutions: 'Solutions', training: 'Formation', projects: 'Réalisations', news: 'Actualités', contact: 'Contact' },
    home: {
      eyebrow: 'La passion au cœur de la vision',
      title: 'Faire grandir l’élevage africain avec méthode.',
      intro: 'Ibidun Farming accompagne les éleveurs et les porteurs de projets avec de la formation, de la génétique, du matériel et une expertise adaptée aux réalités africaines.',
      primaryCta: 'Découvrir nos solutions', secondaryCta: 'Parler de votre projet',
      proof: 'Notre terrain d’action', proofText: 'Cuniculture, infrastructures, alimentation et transmission des savoir-faire.'
    },
    sections: {
      about: { title: 'Une vision agricole ancrée dans le réel', intro: 'Une entreprise tournée vers la professionnalisation de l’élevage et la diffusion de solutions concrètes en Afrique.' },
      solutions: { title: 'Des solutions qui relient génétique, matériel et savoir-faire', intro: 'Un accompagnement pensé pour avancer de l’idée à une exploitation mieux structurée.' },
      training: { title: 'Se former avant de se lancer', intro: 'Des contenus pratiques pour comprendre les systèmes d’élevage, réduire les erreurs et gagner en autonomie.' },
      projects: { title: 'Des projets à documenter', intro: 'Retrouvez progressivement les installations, équipements et initiatives validés par l’équipe Ibidun Farming.' },
      news: { title: 'Actualités et ressources', intro: 'Les vidéos, annonces et contenus pédagogiques sélectionnés depuis les canaux officiels.' },
      contact: { title: 'Parlons de votre projet', intro: 'Décrivez votre besoin : un conseiller pourra vous répondre par e-mail ou sur WhatsApp.' }
    },
    solutionCards: [
      { title: 'Génétique cunicole', tag: '01', text: 'Des lignées et des orientations génétiques à étudier selon votre objectif, votre environnement et votre niveau de production.' },
      { title: 'Cages et matériel', tag: '02', text: 'Des équipements d’élevage et des installations conçus pour organiser le travail et améliorer les conditions d’élevage.' },
      { title: 'Bâtiments et fermes', tag: '03', text: 'Une approche de projet pour réfléchir aux flux, à l’environnement, aux équipements et à la mise en service.' },
      { title: 'Formation et conseil', tag: '04', text: 'Des formations en cuniculture et des ressources pour développer une expertise réellement opérationnelle.' }
    ],
    trainingModules: ['Biosécurité', 'Environnement et matériel d’élevage', 'Alimentation', 'Reproduction', 'Prophylaxie et maladies des lapins', 'Cas pratiques'],
    contact: { title: 'Une question, un devis, une formation ?', text: 'Écrivez-nous avec votre pays, votre activité et votre besoin. Les demandes de devis peuvent aussi être poursuivies sur WhatsApp.', emailLabel: 'Envoyer un e-mail', whatsappLabel: 'Écrire sur WhatsApp', formCta: 'Préparer ma demande' }
  },
  en: {
    locale: 'en', label: 'EN',
    navigation: { about: 'Company', solutions: 'Solutions', training: 'Training', projects: 'Projects', news: 'News', contact: 'Contact' },
    home: {
      eyebrow: 'Passion at the heart of the vision',
      title: 'Growing African livestock farming with method.',
      intro: 'Ibidun Farming supports farmers and project owners with training, genetics, equipment and expertise adapted to African realities.',
      primaryCta: 'Explore our solutions', secondaryCta: 'Discuss your project',
      proof: 'Where we focus', proofText: 'Rabbit farming, infrastructure, feed and practical knowledge.'
    },
    sections: {
      about: { title: 'A practical vision for African agriculture', intro: 'A company focused on professional livestock farming and practical solutions across Africa.' },
      solutions: { title: 'Solutions connecting genetics, equipment and know-how', intro: 'Support designed to move from an idea to a better structured farm.' },
      training: { title: 'Learn before you launch', intro: 'Practical content to understand farming systems, reduce mistakes and build autonomy.' },
      projects: { title: 'Projects to be documented', intro: 'A growing selection of installations, equipment and initiatives validated by Ibidun Farming.' },
      news: { title: 'News and resources', intro: 'Videos, announcements and educational content selected from official channels.' },
      contact: { title: 'Let’s discuss your project', intro: 'Tell us what you need. A team member can reply by email or WhatsApp.' }
    },
    solutionCards: [
      { title: 'Rabbit genetics', tag: '01', text: 'Genetic lines and directions to review according to your goals, environment and production level.' },
      { title: 'Cages and equipment', tag: '02', text: 'Livestock equipment and installations designed to organize work and improve farming conditions.' },
      { title: 'Buildings and farms', tag: '03', text: 'A project approach covering flows, environment, equipment and commissioning.' },
      { title: 'Training and advice', tag: '04', text: 'Rabbit farming training and resources to build practical, operational expertise.' }
    ],
    trainingModules: ['Biosecurity', 'Environment and farming equipment', 'Feed', 'Reproduction', 'Rabbit disease prevention', 'Practical cases'],
    contact: { title: 'A question, a quote, a training request?', text: 'Tell us your country, activity and need. Quote requests can also continue on WhatsApp.', emailLabel: 'Send an email', whatsappLabel: 'Write on WhatsApp', formCta: 'Prepare my request' }
  }
};

export const pageKeys: PageKey[] = ['about', 'solutions', 'training', 'projects', 'news', 'contact'];

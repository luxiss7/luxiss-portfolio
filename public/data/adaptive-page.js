// Configuration complète et cohérente
const pageColors = {
  'original-page': {
    root: {
      '--lx-white-color': '#fefefe',
      '--lx-light-color': '#e7e7e7',
      '--lx-black-color': '#121212',
      '--lx-dark-color': '#1e1e1e',
      '--lx-accent-color': '#863acb',
      '--lx-accent-light-color': '#cbabe7',
      '--lx-accent-dark-color': '#6400a4',
    },
    light: {
      bg: 'var(--lx-light-color)',
      pane: 'var(--lx-white-color)',
      text: 'var(--lx-grey-dark-color)',
      textFaint: 'var(--lx-grey-dark-color-transparent)',
      iaText: 'var(--lx-accent-dark-color)',
      secondaryAccent: 'var(--lx-accent-light-color)',
    },
    dark: {
      bg: 'var(--lx-black-color)',
      pane: 'var(--lx-dark-color)',
      text: 'var(--lx-grey-light-color)',
      textFaint: 'var(--lx-grey-light-color-transparent)',
      iaText: 'var(--lx-accent-light-color)',
      secondaryAccent: 'var(--lx-accent-dark-color)',
    }
  },
  'pokemon-death-life': {
    root: {
      '--lx-white-color': '#f7feE7',
      '--lx-light-color': '#e7e7e7',
      '--lx-black-color': '#181222',
      '--lx-dark-color': '#1e1e1e',
      '--lx-accent-color': '#4fd96d',
      '--lx-accent-light-color': '#b0f7c2',
      '--lx-accent-dark-color': '#154a23',
    },
    light: {
      bg: 'var(--lx-light-color)',
      pane: 'var(--lx-white-color)',
      text: 'var(--lx-grey-dark-color)',
      textFaint: 'var(--lx-grey-dark-color-transparent)',
      iaText: 'var(--lx-accent-dark-color)',
      secondaryAccent: 'var(--lx-accent-light-color)',
    },
    dark: {
      bg: 'var(--lx-black-color)',
      pane: 'var(--lx-dark-color)',
      text: 'var(--lx-grey-light-color)',
      textFaint: 'var(--lx-grey-light-color-transparent)',
      iaText: 'var(--lx-accent-light-color)',
      secondaryAccent: 'var(--lx-accent-dark-color)',
    }
  },
  'laced-together': {
    root: {
      '--lx-white-color': '#fefeee',
      '--lx-light-color': '#e7e7d7',
      '--lx-black-color': '#121222',
      '--lx-dark-color': '#1e1e2e',
      '--lx-accent-color': '#d94f4f',
      '--lx-accent-light-color': '#f7b0b0',
      '--lx-accent-dark-color': '#4a1515',
    },
    light: {
      bg: 'var(--lx-light-color)',
      pane: 'var(--lx-white-color)',
      text: 'var(--lx-grey-dark-color)',
      textFaint: 'var(--lx-grey-dark-color-transparent)',
      iaText: 'var(--lx-accent-dark-color)',
      secondaryAccent: 'var(--lx-accent-light-color)',
    },
    dark: {
      bg: 'var(--lx-black-color)',
      pane: 'var(--lx-dark-color)',
      text: 'var(--lx-grey-light-color)',
      textFaint: 'var(--lx-grey-light-color-transparent)',
      iaText: 'var(--lx-accent-light-color)',
      secondaryAccent: 'var(--lx-accent-dark-color)',
    }
  },
  'barcade': {
    root: {
      '--lx-white-color': '#fefefe',
      '--lx-light-color': '#e7e7e7',
      '--lx-black-color': '#121212',
      '--lx-dark-color': '#1e1e1e',
      '--lx-accent-color': '#4f76d9',
      '--lx-accent-light-color': '#b0b0f7',
      '--lx-accent-dark-color': '#15164a',
    },
    light: {
      bg: 'var(--lx-light-color)',
      pane: 'var(--lx-white-color)',
      text: 'var(--lx-grey-dark-color)',
      textFaint: 'var(--lx-grey-dark-color-transparent)',
      iaText: 'var(--lx-accent-dark-color)',
      secondaryAccent: 'var(--lx-accent-light-color)',
    },
    dark: {
      bg: 'var(--lx-black-color)',
      pane: 'var(--lx-dark-color)',
      text: 'var(--lx-grey-light-color)',
      textFaint: 'var(--lx-grey-light-color-transparent)',
      iaText: 'var(--lx-accent-light-color)',
      secondaryAccent: 'var(--lx-accent-dark-color)',
    }
  },
  'qui-vole-un-oeuf': {
    root: {
      '--lx-white-color': '#fefefe',
      '--lx-light-color': '#e7e7e7',
      '--lx-black-color': '#121212',
      '--lx-dark-color': '#1e1e1e',
      '--lx-accent-color': '#4f76d9',
      '--lx-accent-light-color': '#b0b0f7',
      '--lx-accent-dark-color': '#15164a',
    },
    light: {
      bg: 'var(--lx-light-color)',
      pane: 'var(--lx-white-color)',
      text: 'var(--lx-grey-dark-color)',
      textFaint: 'var(--lx-grey-dark-color-transparent)',
      iaText: 'var(--lx-accent-dark-color)',
      secondaryAccent: 'var(--lx-accent-light-color)',
    },
    dark: {
      bg: 'var(--lx-black-color)',
      pane: 'var(--lx-dark-color)',
      text: 'var(--lx-grey-light-color)',
      textFaint: 'var(--lx-grey-light-color-transparent)',
      iaText: 'var(--lx-accent-light-color)',
      secondaryAccent: 'var(--lx-accent-dark-color)',
    }
  }
};

function applyRootVariables(rootVars) {
  if (!rootVars) return;
  Object.entries(rootVars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });
}

function applyColors(colors) {
  document.documentElement.style.setProperty('--lx-bg', colors.bg);
  document.documentElement.style.setProperty('--lx-pane', colors.pane);
  document.documentElement.style.setProperty('--lx-text-color', colors.text);
  document.documentElement.style.setProperty('--lx-text-faint', colors.textFaint);
  document.documentElement.style.setProperty('--lx-ia-text-color', colors.iaText);
  document.documentElement.style.setProperty('--lx-secondary-accent-color', colors.secondaryAccent);
}

function applyColorScheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const page = document.body.getAttribute('data-page');

  if (!pageColors[page]) return;

  const config = pageColors[page];
  const scheme = isDarkMode ? config.dark : config.light;

  applyRootVariables(config.root);
  applyColors(scheme);
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-colors');
  if (!toggleButton) return;

  const gameTheme = document.body.getAttribute('data-game');

  document.body.setAttribute('data-page', 'original-page');
  applyColorScheme();

  toggleButton.addEventListener('click', () => {
    const current = document.body.getAttribute('data-page');
    const next = current === 'original-page' ? gameTheme : 'original-page';

    document.body.setAttribute('data-page', next);
    applyColorScheme();
  });

  // Réagit si l'utilisateur change le thème système
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', applyColorScheme);
});
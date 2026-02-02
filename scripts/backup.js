import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurazione
const BACKUP_DIR = path.join(__dirname, '..', 'backups');
const SOURCE_ROOT = path.join(__dirname, '..');

// File e cartelle da includere nel backup
const INCLUDES = [
  'components',
  'pages',
  'App.tsx',
  'data.ts',
  'index.css',
  'index.html',
  'index.tsx',
  'package.json',
  'postcss.config.js',
  'tailwind.config.js',
  'translations.ts',
  'tsconfig.json',
  'types.ts',
  'vite.config.ts',
  'README.md',
  '.env.local'
];

// Crea la cartella dei backup se non esiste
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR);
}

// Ottieni il nome del backup dagli argomenti o usa "auto"
const backupName = process.argv[2] || 'auto';

// Genera timestamp
const now = new Date();
const timestamp = now.toISOString().replace(/[:.]/g, '-').slice(0, 19);
const folderName = `${timestamp}_${backupName}`;
const targetDir = path.join(BACKUP_DIR, folderName);

// Crea la cartella specifica per questo backup
fs.mkdirSync(targetDir);

console.log(`Creazione backup in: ${targetDir}`);

// Funzione ricorsiva per copiare
function copyRecursive(source, target) {
  if (fs.lstatSync(source).isDirectory()) {
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }
    const files = fs.readdirSync(source);
    files.forEach(file => {
      copyRecursive(path.join(source, file), path.join(target, file));
    });
  } else {
    fs.copyFileSync(source, target);
  }
}

// Esegui il backup
let count = 0;
INCLUDES.forEach(item => {
  const sourcePath = path.join(SOURCE_ROOT, item);
  const targetPath = path.join(targetDir, item);

  if (fs.existsSync(sourcePath)) {
    try {
      copyRecursive(sourcePath, targetPath);
      count++;
    } catch (err) {
      console.error(`Errore nel copiare ${item}:`, err.message);
    }
  } else {
    console.warn(`Attenzione: ${item} non trovato.`);
  }
});

console.log(`Backup completato! ${count} elementi copiati.`);
console.log(`Posizione: ${targetDir}`);

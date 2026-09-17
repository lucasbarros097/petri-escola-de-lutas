// ==========================================
// GALERIA — Dados de imagens por categoria
// Usa Vite glob import para buscar automaticamente
// todas as imagens da pasta src/assets/images/
// ==========================================

const imageModules = import.meta.glob<{ default: string }>(
  '../assets/images/*.{jpg,jpeg,JPG,JPEG}',
  { eager: true }
);

export type CategoryId = 'todas' | 'jiu' | 'thai' | 'boxe' | 'femininas';

export interface GalleryItem {
  src: string;
  isWide?: boolean;
}

export interface Category {
  id: CategoryId;
  label: string;
  color: string;
  glow: string;
}

export const categories: Category[] = [
  { id: 'todas', label: 'Tudo', color: 'var(--color-neon)', glow: 'var(--color-neon-glow)' },
  { id: 'jiu', label: 'Jiu-Jitsu', color: 'var(--color-jiu)', glow: 'var(--color-jiu-glow)' },
  { id: 'boxe', label: 'Boxe', color: 'var(--color-boxe)', glow: 'var(--color-boxe-glow)' },
  { id: 'thai', label: 'Muay Thai', color: 'var(--color-thai)', glow: 'var(--color-thai-glow)' },
  { id: 'femininas', label: 'Femininas', color: '#ec4899', glow: 'rgba(236, 72, 153, 0.3)' },
];

const WIDE_IMAGES = new Set([
  'boxe1.jpeg',
  'thai4.jpg',
  'thai6.jpeg',
  'fem4.jpeg',
  'fem9.jpeg',
  'fem10.jpeg',
  'fem11.jpeg',
]);

function buildGallery(): Record<string, GalleryItem[]> {
  const result: Record<string, GalleryItem[]> = {
    jiu: [],
    thai: [],
    boxe: [],
    femininas: [],
  };

  // Ordenação natural para garantir fem1, fem2 ... fem10, fem11 em ordem sequencial
  const sortedEntries = Object.entries(imageModules).sort(([pathA], [pathB]) => {
    const fileA = pathA.split('/').pop() || '';
    const fileB = pathB.split('/').pop() || '';
    return fileA.localeCompare(fileB, undefined, { numeric: true, sensitivity: 'base' });
  });

  for (const [path, mod] of sortedEntries) {
    const filename = path.split('/').pop()?.toLowerCase() || '';

    // Pula arquivos que não são fotos da galeria
    if (filename.includes('logo') || filename.includes('fundo') || filename.includes('hero')) continue;
    // Pula boxe1.jpg (logo legado) caso exista
    if (filename === 'boxe1.jpg') continue;

    const item: GalleryItem = {
      src: mod.default,
      isWide: WIDE_IMAGES.has(filename),
    };

    if (filename.startsWith('fem') || filename.startsWith('fm') || filename.startsWith('feminina')) {
      result.femininas.push(item);
    } else if (filename.startsWith('thai')) {
      result.thai.push(item);
    } else if (filename.startsWith('boxe')) {
      result.boxe.push(item);
    } else if (filename.startsWith('jiu')) {
      result.jiu.push(item);
    }
  }

  return result;
}

export const galleryImages = buildGallery();

/** Retorna a lista plana de todas as imagens (para a tab "Tudo") */
export function getAllImages(): GalleryItem[] {
  return [
    ...galleryImages.thai,
    ...galleryImages.boxe,
    ...galleryImages.jiu,
    ...galleryImages.femininas,
  ];
}
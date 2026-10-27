export type WordPressPost = {
  id: number;
  date: string;
  link: string;
  slug: string;
  title: { rendered: string };
  excerpt?: { rendered: string };
  content?: { rendered: string };
  featured_media?: number;
  meta?: Record<string, string | boolean>;
};

export type WordPressContentType = 'posts' | 'produits' | 'formations' | 'realisations' | 'temoignages';

const endpoint = import.meta.env.WORDPRESS_API_URL ?? 'https://admin.ibidunfarming.com/wp-json/wp/v2';

export async function getContent(type: WordPressContentType = 'posts', limit = 6): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${endpoint}/${type}?per_page=${limit}&_fields=id,date,link,slug,title,excerpt,featured_media,meta`);
    if (!response.ok) return [];
    return await response.json() as WordPressPost[];
  } catch {
    return [];
  }
}

export const getPosts = (limit = 6) => getContent('posts', limit);

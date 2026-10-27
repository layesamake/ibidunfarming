export type WordPressPost = { id: number; date: string; link: string; title: { rendered: string }; excerpt?: { rendered: string }; content?: { rendered: string }; featured_media?: number };

const endpoint = import.meta.env.WORDPRESS_API_URL ?? 'https://admin.ibidunfarming.com/wp-json/wp/v2';

export async function getPosts(limit = 6): Promise<WordPressPost[]> {
  try {
    const response = await fetch(`${endpoint}/posts?per_page=${limit}&_fields=id,date,link,title,excerpt,featured_media`);
    if (!response.ok) return [];
    return await response.json() as WordPressPost[];
  } catch {
    return [];
  }
}

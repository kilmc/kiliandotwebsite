export const posts: Record<string, App.MdsvexFile> = import.meta.glob('./*.md', { eager: true });

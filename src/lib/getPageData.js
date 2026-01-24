export const ae86 = console.log('Hello: ', import.meta.env.DB_PASSWORD)


export async function getPageData() {
    try {
        const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${import.meta.env.BLOG_ID}/posts?key=${import.meta.env.API_KEY}`);
        const posts = await response.json();
        return posts
    } catch (error) {
        console.log(error)
    }
}
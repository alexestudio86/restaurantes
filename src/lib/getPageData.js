export const getPageData = async() => {
    // To do more one fetch, usea promise all
    try {
        const [blog, posts, pages] = await Promise.all(
            [
                fetch(`https://www.googleapis.com/blogger/v3/blogs/${import.meta.env.BLOG_ID}?key=${import.meta.env.API_KEY}`).then(r => r.json()),
                fetch(`https://www.googleapis.com/blogger/v3/blogs/${import.meta.env.BLOG_ID}/posts?key=${import.meta.env.API_KEY}&fetchImages=true&maxResults=50&fields=items(id,title,images,labels,content,url)&nextPageToken`).then(r => r.json()),
                fetch(`https://www.googleapis.com/blogger/v3/blogs/${import.meta.env.BLOG_ID}/pages?key=${import.meta.env.API_KEY}`).then(r => r.json())
            ]
        );
        return {
            blog: blog ?? [],
            posts: posts.items ?? [],
            pages: pages.items ?? []
        }
    } catch (error) {
        console.log(error)
    }
}
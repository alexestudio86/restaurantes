import { BLOGGER_URI } from "../../db.js";


//console.log( `La variable es: ${import.meta.env.VITE_BLOG_ID} / ${import.meta.env.VITE_API_KEY}` )
export async function getBasicData () {
    //The follow reques is made for make multiple request in the same time
    try {
        const getPosts   = await fetch(`https://www.blogger.com/feeds/${ import.meta.env.VITE_BLOG_ID }/posts/full?alt=json&max-results=50`);
        const {feed: feedPost} = await getPosts.json();
        const {title, subtitle, entry:posts} = feedPost;
        const getPages   = await fetch(`https://www.blogger.com/feeds/${ import.meta.env.VITE_BLOG_ID }/pages/full?alt=json`);
        const {feed: feedPages} = await getPages.json();
        const {entry: pages} = feedPages;
        return { title, subtitle, posts, pages }
    } catch (error) {
        console.log(error)
    }
}

//console.log( `La variable es: ${import.meta.env.VITE_BLOG_ID} / ${import.meta.env.VITE_API_KEY}` )
export async function getPremiumData () {
    //The follow reques is made for make multiple request in the same time
    try {
        const getPosts   = await fetch(`https://${ import.meta.env.VITE_BLOG_NAME }.blogspot.com/feeds/posts/full?alt=json&max-results=50`);
        const {feed: feedPost} = await getPosts.json();
        const {title, subtitle, entry:posts} = feedPost;
        const getPages   = await fetch(`https://${ import.meta.env.VITE_BLOG_NAME }.blogspot.com/feeds/pages/full?alt=json`);
        const {feed: feedPages} = await getPages.json();
        const {entry: pages} = feedPages;
        return { title, subtitle, posts, pages }
    } catch (error) {
        console.log(error)
    }
}

export async function getHomeProducts () {
    try {
        const res   = await fetch(`${BLOGGER_URI}/${ import.meta.env.VITE_BLOG_ID }/posts?key=${ import.meta.env.VITE_API_KEY }&maxResults=6&fetchImages=true&fields=items(id,url,title,labels,images)`);
        const posts = await res.json();
        return { posts: posts }
    } catch (error) {
        console.log(error)
    }
}
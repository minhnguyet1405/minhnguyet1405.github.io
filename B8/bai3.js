// const post = {
//     title: "ahihi",
//     body: "anh Hoàng đzzz",
//     author: "abc",
//     views: 100,
//     comments: [
//       {author: 'anh Huân đzzz', body: "lewlew"},
//       {author: 'anh Huân đzzz', body: "lewlew"},
//     ],
//     isLive: true
//    }
// console.log(post)
function post(title,body,author,views,comments,isLive){
    this.title=title;
    this.body=body;
    this.author=author;
    this.views=views;
    this.comments=comments;
    this.isLive=isLive;
}
// const Comment=new comments()
const Post = new post('ahihi','anh Hoang dzzz','abc',100,[{author: 'anh huan dzzz', body: 'lewlew'},{author:'anh huan dzzz',body: 'lewlew'}],true)
console.log(Post)

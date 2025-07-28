const Tweeter = () => {
  // Private data
  let posts = [
    {
      id: "p1",
      text: "First post!",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      id: "p2",
      text: "Aw man, I wanted to be first",
      comments: [
        {
          id: "c4",
          text: "Don't worry second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  let postIdCounter = 3;
  let commentIdCounter = 7;

  // Public methods
  function getPosts() {
    return posts;
  }

  function addPost(text) {
    const newPost = {
      id: `p${postIdCounter++}`,
      text,
      comments: [],
    };
    posts.push(newPost);
  }

  function removePost(postID) {
    posts = posts.filter((post) => post.id !== postID);
  }

  function addComment(postID, text) {
    const post = posts.find((p) => p.id === postID);
    if (!post) return;
    const newComment = {
      id: `c${commentIdCounter++}`,
      text,
    };
    post.comments.push(newComment);
  }

  function removeComment(postID, commentID) {
    const post = posts.find((p) => p.id === postID);
    if (!post) return;
    post.comments = post.comments.filter((c) => c.id !== commentID);
  }

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
export default Tweeter;

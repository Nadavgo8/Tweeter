const Renderer = () => {
  function createCommentHTML(comment) {
    return `
    <div class="comment" data-id="${comment.id}">
      <span>${comment.text}</span>
      <div class="delete-comment" data-id="${comment.id}">x</div>
    </div>
  `;
  }

  function createPostHTML(post) {
    const commentsHTML = post.comments.map(createCommentHTML).join("");
    return `
    <div class="post" data-id="${post.id}">
      <div class="post-text">${post.text}</div>
      <div class="delete" data-id="${post.id}">Delete Post</div>
      <div class="comments">${commentsHTML}</div>
      <input type="text" placeholder="Got something to say?" class="comment-input">
      <button class="comment-button">Comment</button>
    </div>
  `;
  }

  function renderPosts(posts) {
    const $container = $("#posts");
    $container.empty();

    for (const post of posts) {
      const postHTML = createPostHTML(post);
      $container.append(postHTML);
    }
  }

  return { renderPosts };
};

export default Renderer;

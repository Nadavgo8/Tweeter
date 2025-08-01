import Tweeter from "./model.js";
import Renderer from "./render.js";
const renderer = Renderer();
const tweeter = Tweeter();

// Initial render
renderer.renderPosts(tweeter.getPosts());

// 1. Add Post (Twit button)
$("#twit-btn").on("click", function () {
  const input = $("#input").val();
  if (!input.trim()) return;

  tweeter.addPost(input);
  $("#input").val(""); // clear input
  renderer.renderPosts(tweeter.getPosts());
});

// 2. Delete Post
$("#posts").on("click", ".delete", function () {
  const postId = $(this).data("id");
  tweeter.removePost(postId);
  renderer.renderPosts(tweeter.getPosts());
});

// 3. Add Comment
$("#posts").on("click", ".comment-button", function () {
  const $post = $(this).closest(".post");
  const postId = $post.data("id");
  const $input = $post.find(".comment-input");
  const text = $input.val();
  if (!text.trim()) return;

  tweeter.addComment(postId, text);
  $input.val("");
  renderer.renderPosts(tweeter.getPosts());
});

// 4. Delete Comment (x)
$("#posts").on("click", ".delete-comment", function () {
  const commentId = $(this).data("id");
  const postId = $(this).closest(".post").data("id");

  tweeter.removeComment(postId, commentId);
  renderer.renderPosts(tweeter.getPosts());
});

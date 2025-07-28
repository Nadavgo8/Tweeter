import Tweeter from "./model.js";
const tweeter = Tweeter();

// Add a new post
tweeter.addPost("This is my own post!");
console.log(tweeter.getPosts());

// Remove a post
tweeter.removePost("p1");
console.log(tweeter.getPosts());

// Add comments
tweeter.addComment("p3", "Damn straight it is!");
tweeter.addComment("p2", "Second the best!");
console.log(tweeter.getPosts());

// Remove a comment
tweeter.removeComment("p2", "c6");
console.log(tweeter.getPosts());

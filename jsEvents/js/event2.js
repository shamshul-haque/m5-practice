// step-1: add event listener to the button
document.getElementById("btn-post").addEventListener("click", function () {
  // step-2: get the comment from the inside of text area
  // 1: get new comment
  const commentBox = document.getElementById("new-comment");
  //   2: set new comment
  const newComment = commentBox.value;

  // step-3: set the comment inside the comment container
  // 1: get comment container where the comment will set
  const commentContainer = document.getElementById("comment-container");
  // 2: create a new element to set the comment
  const p = document.createElement("p");
  //3: set the comment into the new element
  p.innerText = newComment;
  // 4: add the element with comment
  commentContainer.appendChild(p);

  // step-4: clear the comment box or textarea
  commentBox.value = "";
});

/* alternate way by onclick attribute
function alternate() {
  const commentBox = document.getElementById("new-comment");
  const newComment = commentBox.value;
  const commentContainer = document.getElementById("comment-container");
  const p = document.createElement("p");
  p.innerText = newComment;
  commentContainer.appendChild(p);
  commentBox.value = "";
} */

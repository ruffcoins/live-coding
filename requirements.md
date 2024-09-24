requirements

https://jsonplaceholder.typicode.com/posts

Crud feature with infinite scrolling


1. Fetch the posts using axios - done
2. Ensure that the data fetching mechanism is separate from the post state mechanism - done
3. use the custom hook to manage the state and sent the date to the presentation layer - done
4. implement infinite scrolling.


Steps to implement infinite scrolling
1. Maintain the post list
2. Limit the intial posts being rendered
3. on scroll of the screen, load more posts

calculate how far i have scrolled and then load more posts

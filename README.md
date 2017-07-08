# react-readmore
This react component renders additional components onto the page through a button click.
Imagine a blog/news site that shows an initial set of articles.
A link at the bottom of the page allows the viewers to render the next article set without page reload.

## Improvements
A more complete example would include a function that fetches posts (i.e. `getPosts(page)`).
The `page` variable would be used to fetch posts for the correct page.
`getPosts` would be called from the function `draw`, and the result would be a posts array.
This array would be sent to the `getNewContent` function (in place of the `nextRef` variable).
`getNewContent` would then create components based on these posts.

Another consideration is how to determine the number of ref components to create.
In this example, two variables are related to this feature:
1. `count` (type: number): the number of ref components to create
2. `createRefComponents` (type: function): creates an array of ref components.

React requires refs to be created inside the `render` function (see [this link](https://fb.me/react-refs-must-have-owner) for details).
This example creates the number of ref components needed to handle the amount of content we need to render during the initial `render` call.
So if your content is in the form of posts for a blog/news site, then you must:
1. determine the total number of posts, then
2. divde by the set you wish to render at each button click

This example implements button elements with functions tied to the onclick event.
Additional buttons are rendered along with new sets of content (i.e. posts) within the `getNewContent` function).
The previous buttons are hidden in a forEach loop, but really the only element that needs to be hidden is the last button.
The `forEach` function could be removed... in it's place the last button in the DOM could be set to `display:none;'`.

## Run
```bash
npm i
npm run dev
```

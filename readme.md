# Overview #

There is no one way to complete these exercises as long as the minimum requirements are met.

## JavaScript Test ##
Write a single page JavaScript application that allows one to search Github.com for repos by keyword. The results should show as a list, grouped by "owner" using Angular Material Design "Sticky Headings" as demo'd in the [Angular Material Design SubHeader Demo](https://material.angularjs.org/#/demo/material.components.subheader). Each matching repo should be contained inside a [Material Design Card](https://material.angularjs.org/#/demo/material.components.card). Cards should contain the following information on separate rows:

* Repo Name (in bold, linked to the repo)
* Description. If not available, this row is hidden
* Home page. If not available, this row is hidden
* Language
* Forks
* Open Issues

All required libraries are provided. **You can only edit app.js; you cannot touch index.html.** Solution does not need to support older browsers.

## CSS Test ##

1. Create a DIV that has 12 equally proportioned child DIVs that on a mobile device stack on top of each other
2. With in each child DIV, vertically center the word “StoryCloud” and give each DIV a unique background color
3. For medium sized devices, have the original position and layout of the child DIVs stack to 4 rows of 3
4. For large sized devices, have the next state for the child DIVs be 6 rows of 2
5. For large sized devices, on hover of a child DIV, create a transition to change the background color and font style to one of your choice
6. Create row above the existing DIVs that is full width of the parent container. In this row create a Checkbox
7. Using this check box, on check, add a class to the container with the 12 child DIVs that makes each of their background colors white and text purple. You should be able to toggle between states using this checkbox

#### CSS Bonus ####

1. Implement a hierarchal page entrance animation for each of the 12 DIVs.
2. Implement a Material Design Slidenav that is locked at 700px, but not at a lower window width. You should be able to toggle it on and off however at < 700px.

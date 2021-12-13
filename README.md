# Frontend Mentor - FAQ accordion card solution

You can see it live here:
https://infallible-babbage-139566.netlify.app/

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Live Site URL: https://infallible-babbage-139566.netlify.app/

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Desktop-first workflow
- Javascript for toggle on and off the accordion

### What I learned

Using ::after and ::before components.
how to work with overflow.
Positioning some elements on the screen (woman img, cube etc)
You cant use transform: translateX and translateY seperately, if you want to use them both at the same time, you have to use transform: translate(X%,Y%).
Use browser developer tools to position your img how you want it and then change the code in the css.

Created a special contariner for the image so I can o overflow:hidden but then did a .card::after for the cube so it works.

I think I have overcomplicated the background image and then on mmobile version I had to remove it.

I should have changed my process flow ->create everything and then fiddle with the images. I have done the complete oposite.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.card::after {
  content: url(images/illustration-woman-online-mobile.svg);

  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-56%, -55%);
}
```

```js
const items = document.querySelectorAll(".item");

items.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.closest(".item").classList.toggle("open");
  });
});
```

### Continued development

I need to focus on CSS custom properties as it could help me in the future. I dont want to dive into SCSS as I am not 100% comfortable in CSS.

## Author

- Frontend Mentor - https://www.frontendmentor.io/profile/JanBlahout

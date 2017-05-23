# experimental-grids

**Warning** this code has not been optimised and I have shared it purely for the purpose of sharing my experiments with layouts.

The purpose of this experiment was to try and create a framework for grids which were VERY flexible and easy to author. The premise of this experiment was to create wrapper divs inside the Shadow DOM to provide another element in which to attach the spacing needed for guttering.

It worked in so far as to provide a way to create various layouts and overcome some of the frustrations with creating layouts using CSS but with the Shadow DOM not being natively supported by all modern browsers yet it also created some frustrations of its own.

## How does it work?

The framework works by using the `display: flex` for every element. Utility class names were then defined to help lay elements simply and predictably yet with a lot of flexibility. The utility classes are particularly useful when the same content needs to appear differently for different viewport sizes or devices as the layout does not need special divs to define columns or rows. Essentially the behaviour acts a lot like a float would except with a lot more flexibility.

### Gutters

The biggest challenge though was creating a framework where near to no effort was required to style the spacing between columns and rows and with near to no limitations or drawbacks. The only way I could think to achieve this was to create wrapper divs inside the Shadow DOM which could then contain the spacing needed for the gutters. It would then not sacrifice any styling of the child element or parent element which occurs with current methods for creating grids.

## Benefits the framework achieves

1. Very little effort needed when writing your markup
2. Use both pixels and percentages for guttering (margins)
3. No need to append extra class to last element of row
4. Complete freedom in styling child element, eg use borders, padding etc
5. Good for creating responsive layouts, no column or row grouping divs used
6. Very very flexible and will accommodate a lot of layout needs

## Issues with the framework

1. Because shims flatten the Shadow DOM in browsers which don't natively support Shadow DOM this creates a bit of a nightmare using the correct CSS selectors.
2. A lot of trickery goes on to give the impression of an element with native guttering which means that there might still be some problems with how you would expect it to work

## Could it be salvaged?

It's possible that with some more experimenting some of the problems could be alleviated.

1. Perhaps it could be made into a wrapper web component? Although annoying requiring more elements in your markup.
2. Perhaps when browsers have better support for web components.
3. Works fine if you don't need guttering or are prepaid to use a other methods for achieving your guttering between columns and rows.
4. Perhaps it could be simplified by not wrapping the child elements to avoid nasty CSS selector problems. Not sure if it would work using pseudo content elements.

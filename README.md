# CV Generator
CRA project written with class components :)

## Learning points:
- Relative file paths for images doesn't work with create-react-app. To resolve this, import the image, and pass them as a variable in `src`
- Conditional rendering - to render a component by making it stateful (e.g., make a state that determines if button is clicked, if true, render component)
- `this.state.whatever` remembers previous state - assign it to a new variable for it to 'refresh' 
- CSS selectors doesn't work with inline styling. This can be rectified using `onMouseEnter` and `onMouseLeave` events
- Changing parent state from a child component by passing the method from the parent
- Changing child state from parent by passing method from parent
- ### Changing Parent's State from Child
> Write a method that updates state in parent, and pass the method to child.

## Problems faced:
- `e.preventDefault()` was not working when `onFormSubmit` was a conditional based on whether `editClicked` was `true` or `false`. Fixed the issue by bringing the conditional in the rendering in `ExperienceForm` component, but I feel that this method is a bit less unelegant than I'd hoped it to be.
- Enabling editing for individual experience list. Initially stored all component states in parent, but any events incurred will affect all components. To move component states to child component (and see if it works out).

## Live site link:
- To add in future
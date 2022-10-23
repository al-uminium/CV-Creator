# CV Generator
CRA project written with class components :)

## Learning points:
- Relative file paths for images doesn't work with create-react-app. To resolve this, import the image, and pass them as a variable in `src`
- Conditional rendering - to render a component by making it stateful (e.g., make a state that determines if button is clicked, if true, render component)
- CSS selectors doesn't work with inline styling. This can be rectified by making the selector stateful (e.g., `onMouseEnter` -> `hover: true`)
- Changing parent state from a child component by passing the method from the parent

## Problems faced:
- Passing down a method from parent to grandchild does not allow `e.preventDefault()` from firing. This is likely due to `e`'s scope being different (?), as moving the method to child will have the expected results.
**SOLUTION**:
In the child component, define a method that has `e.preventDefault()`, and call the parent method in the child method that was passed in as props 
  
- Enabling editing for individual experience list. Initially stored all component states in parent, but any events incurred will affect all components. 
**SOLUTION**
In the child component, added a `editClicked` state, instead of storing that state in parent. This will ensure that only the component that gets clicked will open up the edit form. 
For the actual editing, as the parent holds the list of experiences, the method for `onSubmit` resides on the parent, where it is passed down to the child and eventually the grandchild (form). The `onSubmit` method searches the `experienceList` for the ID, changes the targetted object (in a new variable), and updates the state. 

## Live site link:
https://al-uminium.github.io/CV-Creator/

class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;

    this.tabItem = document.querySelector(`.tabs-item[data-tab='${this.data}']`);

    this.element.addEventListener('click', () => {this.select(event)});


    //this.itemElement = new TabItem(this.itemElement);
  }


  select() {
    console.log('hello');
    // // Get all of the elements with the tabs-link class
    // const links ;

    // // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // // Call the select method on the item associated with this link

 
}
}

// class TabItem {
//   constructor(element) {
//     this.element = element;
//   }
//   toggleContent() {
//     this.itemElement.classList.toggle('tabs-link-selected');
//   }
// }

 // select() {
    // Select all items elements from the DOM
    // Remove the class "tabs-item-selected" from each element
    // Add a class named "tabs-item-selected" to this element 
  



// START HERE: create a reference to the ".tabs" classes
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map( tabs => new TabLink(tabs));

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
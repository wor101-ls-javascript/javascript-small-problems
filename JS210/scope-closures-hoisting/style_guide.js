// 1.
let title = "The Three-Body Problem";
// use only single quotes
let title = 'The Three-Body Problem';

// 2.
let title = 'The Three-Body Problem',
    author = 'Cixin Liu',
    page_count = 400;
// use let keyword for every new variable

// 3. 
let completed = lastPageRead == 400;
// alwyas use strict equality

// 4. 
if (finishedBook())
  console.log('You have finished reading this book');
  // use brackets for function blocks

  // 5. 
  function read(pages) {
    console.log('You started reading.');
    for (let page=0; page<pages; page += 1) {
            let message = 'You read page '+page;
            console.log(message);
    }
}

read(400);

// The style guide recommends using two spaces to indent code, and surrounding operators with spaces. 
// This is especially helpful to new JavaScript developers, as it clearly shows what happens when JavaScript hoists the declarations. 
// Another thing it recommends is to use explicit string coercion, and as such, the page variable is coerced to a string. 
// The style guide recommends avoiding the ++ and -- operators. 
// Finally, the guide also recommends using named function expressions instead of function declarations:
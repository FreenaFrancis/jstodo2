// // we select the elemnt of html document using querySelector

// const textInputField=document.querySelector('#text-input-field');

// const addButton=document.querySelector('#add-button');
// const todosContainer=document.querySelector('.todos-conatainer');


// addButton.addEventListener('click', ()=>{

// if (textInputField.value.trim().length=="")
// return;
// // console.log(textInputField.value);

// // ///////////////////////////////////////////////////////////////////////////////
// //  craete div add class todo-item-container
// // ///////////////////////////////////////////////////////////////////////////////////////

// const todoItemContainer= document.createElement('div');
// todoItemContainer.classList.add('todo-item-container');

// // we wil add todo-item-container to todosContainer which is in top

// todosContainer.appendChild(todoItemContainer);



// // //////////////////////////////////////////////
// // to crate p element add id = todo.txt
// // //////////////////////////////////////////////////////////////////////////////////////

// const todoText=document.createElement('p');
// todoText.id='todo-text';

// // here wehave to get the value which i have given in the input field
// todoText.innerText=textInputField.value;


// // These value should be taken to the todoitemcontaianer
// todoItemContainer.appendChild(todoText)

// todoText.addEventListener('dblclick',()=>{
//     todoText.classList.add('line-through');
//     editButton.setAttribute("disabled","disabled")
// });






// // /////////////////////////////////////////////////////////
// // craete button add id=edit-button
// // ////////////////////////////////////////////////////////////////////////////////////////////


// const editButton=document.createElement('button');
// editButton.id='edit-button'

// // create img fof edit bitton

// const editImage = document.createElement('img');
// editImage.src='edit.jpg';
// // we want to add the editimg to edit button
// editButton.appendChild(editImage);

// todoItemContainer.appendChild(editButton)



// // add click event to eventlistener


// editButton.addEventListener('click',()=>{
//     textInputField.value = todoText.innerText;
//     const parent=editButton.parentElement;
//     parent.parentElement.removeChild(parent);
// })



// // craete delete button and add id

// const deleteButton=createElement('button');
// deleteButton.id='delete-button';

// const deleteImage=document.createElement('img');
// deleteImage.src='delete.svg';

// deleteButton.appendChild(deleteImage);
// todoItemContainer.appendChild(deleteButton);

// // add eentlistener to delete button

// deleteButton.addEventListener('click', ()=>{
//     const parent=deleteButton.parentElement;
//     parent.parentElement.removeChild(parent)
// })

// // after adding the text to it then it should be emptied
// textInputField.value="" 



// })

// Select elements from the HTML document using querySelector
const textInputField = document.querySelector('#text-input-field');
const addButton = document.querySelector('#add-button');
const todosContainer = document.querySelector('.todos-container');

addButton.addEventListener('click', () => {
    if (textInputField.value.trim().length === 0) return;

    // Create a div element with the class 'todo-item-container'
    const todoItemContainer = document.createElement('div');
    // // we wil add todo-item-container to todosContainer which is in top
    todoItemContainer.classList.add('todo-item-container');
    todosContainer.appendChild(todoItemContainer);

    // Create a <p> element with the id 'todo-text' and set its text content
    const todoText = document.createElement('p');
    todoText.id = 'todo-text';
    todoText.innerText = textInputField.value;
    todoItemContainer.appendChild(todoText);

    // Add a double-click event listener to the 'todoText' element
    todoText.addEventListener('dblclick', () => {
        todoText.classList.add('line-through');
        editButton.setAttribute('disabled', 'disabled');
    });

    // Create an 'edit' button and add it to the 'todoItemContainer'
    const editButton = document.createElement('button');
    editButton.id = 'edit-button';

    // Create an image for the 'edit' button
    const editImage = document.createElement('img');
    editImage.src = 'edit.jpg';
    editImage.style.width = '20px'; // Adjust the width as needed
    editImage.style.height = '20px';
    editButton.appendChild(editImage);
    todoItemContainer.appendChild(editButton);

    // Add a click event listener to the 'editButton'
    editButton.addEventListener('click', () => {
        textInputField.value = todoText.innerText;
        const parent = editButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    // Create a 'delete' button and add it to the 'todoItemContainer'
    const deleteButton = document.createElement('button');
    deleteButton.id = 'delete-button';

    // Create an image for the 'delete' button
    const deleteImage = document.createElement('img');
    deleteImage.src = 'delete.jpg';
    deleteImage.style.width = '20px'; // Adjust the width as needed
    deleteImage.style.height = '20px'
    deleteButton.appendChild(deleteImage);
    todoItemContainer.appendChild(deleteButton);

    // Add an event listener to the 'deleteButton'
    deleteButton.addEventListener('click', () => {
        const parent = deleteButton.parentElement;
        parent.parentElement.removeChild(parent);
    });

    // Clear the input field after adding the text
    textInputField.value = '';
});

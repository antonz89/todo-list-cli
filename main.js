const prompt = require('prompt-sync')({sigint: true});
console.log(` \n -------------------------------------------------`)
console.log(`|⚡️Welcome to the To-Do List Manager Application⚡️| `)
console.log(` ------------------- 🔥 🔥 🔥 --------------------`)
console.log(`\n~ Select an action ~`);
console.log(`[1] 🆕 Create a to-do item `);
console.log(`[2] ✅ Complete a to-do item`);
console.log(`[3] ❌ Delete a to-do item`);
console.log(`[4] ☠️  Exit To-Do List Application`);

let option = Number(prompt(`> `));
let toDoList = [];
let statusArray = [];
let mainM = 0;

////----------------------------------------------------------------------
while(option !== 4) {
////----------------------------------------------------------------------
    if (option === 1){
    console.log(`\n~ Creating a new to-do item ~`);
    console.log(`\n\n- push Enter to add a to-do item`);
    //------- inserting back button
    console.log(`- push 9 to return to main menu`);
    mainM = Number(prompt(`> `));
    if(mainM === 9){
        selectOption();
    } else {
            // add to do item
            console.log(`What is this item called?`);
            let addItem = prompt(`add item> `);  // by default prompt is a string
            while (addItem.length === 0){  // if user entered empty string 'while' reprompt for a valid entry
            console.log(`Invalid: Input cannot be empty. Try again.`);
            addItem = prompt(`> `);
            }   
            toDoList.push(addItem);
            statusArray.push(false);
            displayList();
            selectOption();
            }
////-------------------------------------------------------------------------
    } else if (option === 2){
        console.log(`\nComplete a to-do item`);
        
        console.log(`\n\n- push Enter to complete a to-do item`);
        //------- inserting back button
        console.log(`- push 9 to return to main menu`);
        mainM = Number(prompt(`> `));
        
        if(mainM === 9){
        selectOption();
             } else if (toDoList.length !== 0){
                console.log(`\nComplete a to-do item`);
                console.log(`Which to-do item would you like to complete?`);
                displayList();
                let newStatus = Number(prompt('> '));
                
                //// while our newStatus is not a number isNAN
                while(isNaN(newStatus) || newStatus > statusArray.length || newStatus<1){    
                console.log('Please input a number that corresponds to an item in the list: ')
                newStatus = Number(prompt('> '));
                }
                
                statusArray[newStatus-1] = true;
                 // complete an item
                    }  else {
                    console.log(`\nPlease add a to-do item first`);
                    }

        displayList();
        selectOption();
 ////--------------------------------------------------------------------------
    } else if (option === 3){
        
        if(toDoList.length === 0){
            console.log(`\nPlease add a to-do item first.`);
        } else {
        displayList();
        console.log(`\nWhich item would you like to delete?`);
        let removeItem = Number(prompt('> '));
        while(isNaN(removeItem)){    
            console.log('Please input a number that corresponds to an item in the list: ')
            removeItem = Number(prompt('> '));
        }
        toDoList.splice(removeItem-1,1);
        statusArray.splice(removeItem-1,1);
        displayList();
        }
        selectOption();
 ////--------------------------------------------------------------------------

    } else {
    console.log(`\nInvalid Operation`);
    // reprompt the user
    selectOption();
    } 
}
////---------------------------------------------------------------------------
////Exiting Application
console.log(`~ Exiting To-Do Lest Application`);


////----------------------Functions-----------------------------------------------------
function selectOption(){
    console.log(`\n~ Select an action ~`);
    console.log(`[1] 🆕 Create a to-do item `);
    console.log(`[2] ✅ Complete a to-do item`);
    console.log(`[3] ❌ Delete a to-do item`);
    console.log(`[4] ☠️  Exit To-Do List Application`);
    console.log(`--------------------------------------`);
    option = Number(prompt(`> `));   
}

function displayList(){
    if(toDoList === 0){
        console.log(`Your to-do list is empty.`)
    } else {
        console.log(`\nYou have ${toDoList.length} to-do item(s)`)
    }
    for (let i = 0; i<toDoList.length; i++){
        let status = "";
        
        if(statusArray[i] === false){
            status = "[incomplete]";
        } else if (statusArray[i] === true){
            status = "[complete]";
        }
        
        
        console.log(`${i+1}. ${status} ${toDoList[i]}`); //to account for that numbers start at 1 (i+1)
    }
}






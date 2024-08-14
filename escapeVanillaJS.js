document.addEventListener("DOMContentLoaded", () => {
    //ID was not identical to HTML ID - DONE
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's mssing from JS concepts? / Added async - DONE
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call - DONE
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").textContent = message;
                    }); console.log(message)
            });
    });
});

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(mostRecent.published < new Date(book.published)) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA].filter(x => setB.has(x))); // SEE REFERENCE BELOW
    console.log(intersection);

    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}


//____________________________________________________________________________________________________________________________________________________________________________________________________

/*
#### Debugging Tasks
// DONE
1. **Correct the ID used in the event listener for Room 1.** DONE
2. **Use the correct element ID when displaying results for Room 1.** DONE
3. **Add the missing 'async' keyword to the JS concepts set.** DONE
4. **Correct the function call to find the intersection of `jsConcepts` and `reactConcepts` for Room 2.** DONE
5. **Ensure asynchronous operations are handled correctly in Room 3, particularly by adding `await` before the promise in `navigateLabyrinth`.** DONE
7. **Fix the `findIntersection` function to correctly determine the intersection of two sets.** DONE DONE
8. **Add the `await` keyword before `new Promise` in `navigateLabyrinth` to ensure the simulation of asynchronous operations works as intended.** DONE


//NOT YET

6. **Adjust the `findMostRecentBook` function to correctly compare dates and find the most recent book.**



//____________________________________________________________________________________________________________________________________________________________________________________________________
// COMMENTS & NOTES

    REFERENCE FOR FILTER() METHOD
    1. https://www.geeksforgeeks.org/how-to-perform-intersection-of-two-sets-in-javascript/

*/
//____________________________________________________________________________________________________________________________________________________________________________________________________
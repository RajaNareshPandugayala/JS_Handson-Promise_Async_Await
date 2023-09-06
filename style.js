
//Question 1: Write one example explaining how you can write a callback function
document.write('<p><b>Q1 : Write one example explaining how you can write a callback function</b><br><br><i style="color: darkred;"><b>Code : </b><br>function doSomethingAsync(callback) {<br>    setTimeout(function () {<br>    console.log("Task done!");<i style="color: blue;">//Second Output, after 2 seconds</i><br>    callback();<i style="color: darkgreen;"> // Execute the callback function</i><br>}, 2000);<br>}<br><br><i style="color: darkgreen;">// Callback function</i><br>function callbackFunction() {<br>    console.log("Callback function executed!");<i style="color: blue;">//Third Output</i><br>}<br><br><i style="color: darkgreen;">// Calling the function with the callback</i><br>doSomethingAsync(callbackFunction);<br><br>console.log("End of the main script.");<i style="color: blue;">//First Output</i></i></p>');

function doSomethingAsync(callback) {
    setTimeout(function () {
        console.log("Task done!");
        callback(); // Execute the callback function
    }, 1000);
}

// Callback function
function callbackFunction() {
    console.log("Callback function executed!");
}

// Calling the function with the callback
doSomethingAsync(callbackFunction);

console.log("End of the main script.");

document.write(`<pre><br><br><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("End of the main script.")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Task done!")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Callback function executed!")}</i></pre>`);

document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.We define a function doSomethingAsync that takes a callback function as an argument. <br>This function uses setTimeout to simulate an asynchronous operation that takes 2 seconds to complete.<br>2.Inside doSomethingAsync, after the 2-second delay, it logs "Task done!" and then calls the provided callback function.<br>3.We define a callback function called callbackFunction that logs "Callback function executed!".<br>4.We call doSomethingAsync and pass callbackFunction as the callback function.<br><br>First, "End of the main script." is logged because it's outside of "doSomethingAsync" and gets executed immediately.<br>Then, after 2 seconds, "Task done!" is logged from within "doSomethingAsync".<br>Finally, the callback function "callbackFunction" is executed, and "Callback function executed!" is logged.</p><hr>`);








// Question 2: "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.

// Explain callback hell.
//     Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
document.write('<p><b>Q2 : "Write a callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.<br><br>Explain callback hell.<br>    Numbers<br>1<br>2<br>3<br>4<br>5<br>6<br>7"</b><br><br><i style="color: darkred;"><b>Code : </b><br>function printNumbers() {<br>    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));<br><br>async function printNumber(number) {<br>    await delay(number * 1000); <i style="color: green;"> // Multiply by 1000 to convert seconds to milliseconds</i><br>    console.log(number);<br>}<br><br>async function printSequentialNumbers() {<br>    for (let i = 1; i <= 7; i++) {<br>        await printNumber(i);<br>    }<br>}<br>printSequentialNumbers();<br>}<br>printNumbers();</i></p> ');


function printNumbers() {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    async function printNumber(number) {
        await delay(number * 1000); // Multiply by 1000 to convert seconds to milliseconds
        console.log(number);

    }

    async function printSequentialNumbers() {
        for (let i = 1; i <= 7; i++) {
            await printNumber(i);
        }
    }

    printSequentialNumbers();
}

printNumbers();
document.write(`<pre><i style="color: darkblue;"><b>Output: <br></b>${JSON.stringify('1 will be printed after 1 second.<br>2 will be printed after 2 seconds.<br>3 will be printed after 3 seconds.<br>4 will be printed after 4 seconds.<br>5 will be printed after 5 seconds.<br>6 will be printed after 6 seconds.<br>7 will be printed after 7 seconds.')}</i></pre>`);

document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.delay is a utility function that returns a Promise that resolves after a specified number of milliseconds. We use this function to introduce the delay between printing numbers.<br>2.printNumber is an async function that takes a number as an argument, waits for the specified delay, and then logs the number to the console.<br>3.printSequentialNumbers is an async function that iterates from 1 to 7 using a for loop. Inside the loop, it calls printNumber for each number in sequence, and because it is an async function, it awaits for each printNumber call to complete before moving on to the next one.<br>4.Finally, we call printSequentialNumbers to start printing the numbers sequentially.<br><br>This code uses async/await to achieve sequential execution of asynchronous operations, ensuring that each number is printed after the specified delay, and it avoids callback hell by using a more structured and readable approach.</p><hr>`);








// Question 3: "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"

document.write('<p><b>Q3 : "Write the promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 2 should be printed after 2 sec, 3 should be printed after 3 sec, and so on.<br><br>    Numbers<br>1<br>2<br>3<br>4<br>5<br>6<br>7"</b><br><br><i style="color: darkred;"><b>Code : </b><br>function printNumbers() {<br>    const numbers = [1, 2, 3, 4, 5, 6, 7];<br>const printNumber = async (number) => {<br>    await new Promise(resolve => setTimeout(resolve, number * 1000));<br>    console.log(number);<br>};<br><br>async function printSequentially() {<br>    for (const number of numbers) {<br>        await printNumber(number);<br>    }<br>}<br>printSequentially();<br>}<br>printNumbers(); </i></p> ');




function printNumbers() {
    const numbers = [1, 2, 3, 4, 5, 6, 7];

    const printNumber = async (number) => {
        await new Promise(resolve => setTimeout(resolve, number * 1000));
        console.log(number);
    };

    async function printSequentially() {
        for (const number of numbers) {
            await printNumber(number);
        }
    }

    printSequentially();
}

printNumbers();

document.write(`<pre><i style="color: darkblue;"><b>Output: <br></b>${JSON.stringify('1 will be printed after 1 second.<br>2 will be printed after 2 seconds.<br>3 will be printed after 3 seconds.<br>4 will be printed after 4 seconds.<br>5 will be printed after 5 seconds.<br>6 will be printed after 6 seconds.<br>7 will be printed after 7 seconds.')}</i></pre>`);

document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.We define an array numbers containing the numbers 1 to 7.<br>2.Inside the printNumbers function, we define an async function called printNumber which takes a number as an argument.<br>3.In printNumber, we use await new Promise with setTimeout to introduce a delay. The delay is determined by multiplying the number by 1000 milliseconds (1 second for each number).<br>4.After the delay, we log the current number to the console.<br>5.The printSequentially function is defined to iterate over the numbers array and call printNumber for each number, ensuring that they are printed sequentially with the specified delays.<br>6.Finally, we call printSequentially() to start the process.<br><br>The numbers are printed in ascending order, with each number printed after a delay corresponding to its value. This is achieved using the await keyword to pause the execution of the loop until each Promise (representing the delay) is resolved.</p><hr>`);




//Question 4: "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject the state and catch the error and print Promise Rejected "


document.write('<p><b>Q4 : "Create a promise function accepting an argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject the state and catch the error and print Promise Rejected "</b><br><br><i style="color: darkred;"><b>Code : </b><br>function myPromise(input) {<br>    return new Promise((resolve, reject) => {<br>    if (input === "yes") {<br>        resolve("Promise Resolved");<br>    } else {<br>        reject("Promise Rejected");<br>    }<br>});<br>}<br><br>async function testPromise(input) {<br>    try {<br>        const result = await myPromise(input);<br>        console.log(result);<br>    } catch (error) {<br>        console.log(error);<br>    }<br>}<br>testPromise("yes");<i style="color: darkgreen;"> // Test case 1 "Promise Resolved"</i><br>testPromise();<i style="color: darkgreen;">      // Test case 2 "Promise Rejected"</i></i></p> ');



function myPromise(input) {
    return new Promise((resolve, reject) => {
        if (input === 'yes') {
            resolve('Promise Resolved');
        } else {
            reject('Promise Rejected');
        }
    });
}

async function testPromise(input) {
    try {
        const result = await myPromise(input);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

testPromise('yes'); // Test case 1 "Promise Resolved"
testPromise();      // Test case 2 "Promise Rejected"

document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Promise Resolved')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Promise Rejected')}</i></pre>`);

document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.testPromise('yes'); - Test Case 1In this test case, we call testPromise with the argument 'yes'.<br>Inside testPromise, it calls myPromise('yes').<br>myPromise creates a new Promise and resolves it because the input is 'yes'.<br>The await keyword inside testPromise waits for the promise to be resolved.<br>Since the promise is resolved, it logs 'Promise Resolved' to the console.<br>So, the output for Test Case 1 is: "Promise Resolved"<br><br>2.testPromise(); - Test Case 2<br>In this test case, we call testPromise with no argument (undefined).<br>Inside testPromise, it calls myPromise().<br>myPromise creates a new Promise and rejects it because no argument was passed.<br>The await keyword inside testPromise waits for the promise to be rejected.<br>Since the promise is rejected, it catches the error and logs 'Promise Rejected' to the console.<br>So, the output for Test Case 2 is: "Promise Rejected"<br><br>In summary, the output depends on whether 'yes' or nothing (undefined) is passed as an argument to the myPromise function. If 'yes' is passed, the promise is resolved, and 'Promise Resolved' is printed. If nothing is passed or any other value is passed, the promise is rejected, and 'Promise Rejected' is printed.</p><hr>`);






//Question 5: Create examples to explain callback function

document.write('<p><b>Q5 : "Create examples to explain callback function"</b><br><br><i style="color: darkred;"><b>Code : </b><br>function fetchDataFromAPI() {<br>    return new Promise((resolve, reject) => {<br>    setTimeout(() => {<br>        const data = { message: "Data fetched successfully!" };<br>        resolve(data);<br>    }, 2000); <i style="color: darkgreen;">// Simulate an API call with a 2-second delay</i><br>}); <br>}<br><br><i style="color: darkgreen;">// Create an async function that uses await and a callback</i><br>async function fetchAndProcessData() {<br>    try {<br>        console.log("Fetching data...");<i style="color: darkblue;">//First Output</i><br>        const result = await fetchDataFromAPI(); <i style="color: darkgreen;">// Await for the promise to resolve</i><br>        console.log("Data fetched:", result.message);<i style="color: darkblue;">//Third Output</i><br>        <i style="color: darkgreen;">// Simulate processing the data asynchronously</i><br><br>        setTimeout(() => {<br>            console.log("Data processed!");<i style="color: darkblue;">//Forth Output</i><br>        }, 1000);<br>    } catch (error) {<br>        console.error("Error:", error);<br>    }<br>}<br><br><i style="color: darkgreen;">// Call the async function</i><br>fetchAndProcessData();<br>console.log("Async function called.");<i style="color: darkblue;">//Second Output</i></i></p> ');


// // Define a function that returns a Promise
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);// Simulate processing the data asynchronously
    });
}

// Create an async function that uses await and a callback
async function fetchAndProcessData() {
    try {
        console.log("Fetching data...");
        const result = await fetchDataFromAPI(); // Await for the promise to resolve
        console.log("Data fetched:", result.message);

        // Simulate processing the data asynchronously
        setTimeout(() => {
            console.log("Data processed!");
        }, 1000);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the async function
fetchAndProcessData();
console.log("Async function called.");

document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Fetching data...")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Async function called.")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Data fetched: Data fetched successfully!")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Data processed!")}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1."Fetching data..." is logged immediately when fetchAndProcessData is called because it's part of the function execution.<br>2.The async function pauses at the await fetchDataFromAPI() line. It waits for the fetchDataFromAPI promise to resolve. During this time, the control returns to the event loop, and other code (like the "Async function called." log) can execute.<br>3.After approximately 2 seconds (simulating an API call delay), the promise resolves, and "Data fetched: Data fetched successfully!" is logged because the await keyword allows the async function to continue executing.<br>4."Async function called." is logged immediately after calling fetchAndProcessData.<br>5.The setTimeout inside the async function simulates data processing, and "Data processed!" is logged after 1 second.<br><br>In summary, this example demonstrates the usage of callback functions in the context of Promises and async/await to handle asynchronous operations and ensure that code execution flows smoothly, even when dealing with asynchronous tasks.</p><hr>`);



//Question 6: Create examples to explain callback hell function

document.write('<p><b>Q6 : "Create examples to explain callback hell function"</b><br><br><i style="color: darkred;"><b>Code : </b><br><i style="color: darkgreen;">// Function to simulate an asynchronous operation with a callback</i><br>function asyncOperation(callback) {<br>setTimeout(() => {<br>console.log("Async operation completed"); <i style="color: darkblue;">//5th,7th,9th,11th,13th & 16th Output</i><br>            callback();<br>        }, 1000);<br>    }<br><br>    <i style = "color: darkgreen;">// Using callback hell</i><br>    async function callbackHellExample() {<br>        console.log("Start-1"); <i style="color: darkblue;">//2nd Output</i><br>        asyncOperation(function () {<br>            console.log("Step-A-1"); <i style="color: darkblue;">//6th Output</i><br>            asyncOperation(function () {<br>                console.log("Step-A-2"); <i style="color: darkblue;">//10th Output</i><br>                asyncOperation(function () {<br>                    console.log("Step-A-3"); <i style="color: darkblue;">//14th Output</i><br>                    console.log("End of callback hell"); <i style="color: darkblue;">//15th Output</i><br>                });<br>            });<br>        });<br>    }<br><br>    <i style = "color: darkgreen;">// Using async/await to improve readability</i><br>    async function asyncAwaitExample() {<br>        console.log("Start-2"); <i style="color: darkblue;">//4th Output</i><br>        await new Promise((resolve) => {<br>            asyncOperation(function () {<br>                console.log("Step-B-1"); <i style="color: darkblue;">//8th Output</i><br>                resolve();<br>            });<br>        });<br><br>        await new Promise((resolve) => {<br>            asyncOperation(function () {<br>                console.log("Step-B-2"); <i style="color: darkblue;">//12th Output</i><br>                resolve();<br>            });<br>        });<br><br>        await new Promise((resolve) => {<br>            asyncOperation(function () {<br>                console.log("Step-B-3"); <i style="color: darkblue;">//17th Output</i><br>                console.log("End of async/await"); <i style="color: darkblue;">//18th Output</i><br>                resolve();<br>            });<br>        });<br>    }<br><br><i style = "color: darkgreen;">//Using callback hell</i><br>console.log("Callback Hell Example:");<i style="color: darkblue;">//1st Output</i><br>callbackHellExample();</i></p>');
document.write('<p><i style="color: darkred;"><i style="color: darkgreen;">//Using async/await</i><br>console.log("Async/Await Example:"); <i style="color: darkblue;">//3rd Output</i><br>asyncAwaitExample();<br></i></p>');





// Function to simulate an asynchronous operation with a callback
function asyncOperation(callback) {
    setTimeout(() => {
        console.log("Async operation completed");//5th,7th,9th,11th,13th & 16th Output
        callback();
    }, 1000);
}

// Using callback hell
async function callbackHellExample() {
    console.log("Start-1");//2nd Output
    asyncOperation(function () {
        console.log("Step-A-1");//6th Output
        asyncOperation(function () {
            console.log("Step-A-2");//10th Output
            asyncOperation(function () {
                console.log("Step-A-3");//14th Output
                console.log("End of callback hell");//15th Output
            });
        });
    });
}

// Using async/await to improve readability
async function asyncAwaitExample() {
    console.log("Start-2");//4th Output
    await new Promise((resolve) => {
        asyncOperation(function () {
            console.log("Step-B-1");//8th Output
            resolve();
        });
    });

    await new Promise((resolve) => {
        asyncOperation(function () {
            console.log("Step-B-2");//12th Output
            resolve();
        });
    });

    await new Promise((resolve) => {
        asyncOperation(function () {
            console.log("Step-B-3");//17th Output
            console.log("End of async/await");//18th Output
            resolve();
        });
    });
}

// Using callback hell
console.log("Callback Hell Example:");//1st Output
callbackHellExample();

// Using async/await
console.log("\nAsync/Await Example:");//3rd Output
asyncAwaitExample();




document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Callback Hell Example:')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Start-1')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async/Await Example:')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Start-2')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async operation completed')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Step-A-1')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async operation completed')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Step-B-1')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async operation completed')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Step-A-2')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async operation completed')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Step-B-2')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async operation completed')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Step-A-3')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('End of callback hell')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async operation completed')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Step-B-3')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('End of async/await')}</i></pre>`);



document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.In the code above, we have two functions: <b>callbackHellExample</b> and <b>asyncAwaitExample.</b><br>2.<b>callbackHellExample</b> demonstrates the callback hell scenario. We have three nested calls to the <b>asyncOperation</b> function, and each call depends on the completion of the previous one. This leads to deeply nested code and is hard to read and maintain.<br>3.<b>asyncAwaitExample</b> uses async/await to improve readability and maintainability. We use the <b>await</b> keyword with Promises to ensure that each asynchronous operation completes before moving to the next one. This makes the code much more linear and easier to understand.<br>4.When you run the code, you'll see that the "Callback Hell Example" prints the steps in a nested fashion with a delay between them, while the "Async/Await Example" prints them sequentially, waiting for each step to complete before moving to the next one.<br>5.The key takeaway is that async/await allows you to write asynchronous code in a more readable and structured manner, avoiding the callback hell problem.</p><hr>`);



//Question 7: Create examples to explain promises function

document.write('<p><b>Q7 : "Create examples to explain promises function"</b><br><br><i style="color: darkred;"><b>Code : </b><br><i style="color: darkgreen;">// Create a function that returns a promise which resolves after a specified delay</i><br>function delay(milliseconds) {<br>        return new Promise((resolve) => {<br>            setTimeout(() => {<br>                resolve(`Resolved after ${milliseconds} milliseconds`);<i style="color: darkblue;">// 2nd & 3rd Output</i><br>            }, milliseconds);<br>         });<br>     }<br> <br><i style="color: darkgreen;">// Create an async function to demonstrate async/await</i><br>async function asyncExample() {<br>    console.log("Start of asyncExample");//First Output<br><br><i style="color: darkgreen;">   // Using await to wait for the promise to resolve</i><br>    const result1 = await delay(2000);<i style="color: darkblue;">//For Second Output</i><br>    console.log(result1);<br><br>    const result2 = await delay(1000);<i style="color: darkblue;">//For Third Output</i><br>    console.log(result2);<br><br>    console.log("End of asyncExample");<i style="color: darkblue;">//Forth Output</i><br>}<br><br><i style="color: darkgreen;">// Call the async function</i><br>asyncExample();</i ></p > ');




// Create a function that returns a promise which resolves after a specified delay
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${milliseconds} milliseconds`); //2nd & 3rd Output
        }, milliseconds);
    });
}

// Create an async function to demonstrate async/await
async function asyncExample() {
    console.log("Start of asyncExample");//First Output

    // Using await to wait for the promise to resolve
    const result1 = await delay(2000);//For Second Output
    console.log(result1);

    const result2 = await delay(1000);//For Third Output
    console.log(result2);

    console.log("End of asyncExample");//Forth Output
}

// Call the async function
asyncExample();

document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Start of asyncExample')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Resolved after 2000 milliseconds')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Resolved after 1000 milliseconds')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('End of asyncExample')}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.<b>"Start of asyncExample"</b> will be logged first because it's outside the await statements.<br>2.<b>delay(2000)</b> is called, which returns a promise. The <b>await</b> keyword is used to wait for this promise to resolve. During this time, the event loop is not blocked, and other code can continue executing.<br>3.After 2 seconds (2000 milliseconds), the first promise resolves, and <b>"Resolved after 2000 milliseconds"</b> will be logged.<br>4.<b>delay(1000)</b> is called, and again, the <b>await</b> keyword is used to wait for this promise to resolve. It will not block the event loop.<br>5.After 1 second (1000 milliseconds), the second promise resolves, and <b>"Resolved after 1000 milliseconds"</b> will be logged.<br>6.Finally, <b>"End of asyncExample"</b> will be logged.<br><br>This example demonstrates how you can use promises inside an async function and use <b>await</b> to pause the execution of the async function until a promise is resolved. This ensures that asynchronous code is executed in a sequential and readable manner.</p><hr>`);





//Question 8: Create examples to explain async await function
document.write('<p><b>Q8 : "Create examples to explain async await function"</b><br><br><i style="color: darkred;"><b>Code : </b><br>async function exampleAsyncFunction() {<br>    console.log("Start of the function");<i style="color: darkblue;">//Second Output</i><br>await new Promise((resolve) => setTimeout(resolve, 2000));<i style="color: darkgreen;">// Simulating an async operation</i><br>console.log("Async operation completed");<i style="color: darkblue;">//Third Output</i><br>return 42;<br>}<br><br>async function main() {<br>    console.log("Before calling the async function");<i style="color: darkblue;">//First Output</i><br>    const result = await exampleAsyncFunction();<br>    console.log("After calling the async function");<i style="color: darkblue;">//Forth Output</i><br>    console.log("Result:", result);<i style="color: darkblue;">//Fifth Output</i>}<br><br>main(); </i ></p > ');



async function exampleAsyncFunction() {
    console.log("Start of the function");//Second Output
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating an async operation
    console.log("Async operation completed");//Third Output
    return 42;
}

async function main() {
    console.log("Before calling the async function");//First Output
    const result = await exampleAsyncFunction();
    console.log("After calling the async function");//Forth Output
    console.log("Result:", result);//Fifth Output
}

main();


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Before calling the async function')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Start of the function')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Async operation completed')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('After calling the async function')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Result: 42')}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.<b>Before calling the async function</b> is logged to the console.<br>This line is executed synchronously when the <b>main</b> function is called.<br>2.<b>Start of the function</b> is logged to the console.<br>This line is executed when <b>exampleAsyncFunction</b> is called.<br>3.<b>Async operation completed</b> is logged to the console.<br>This line is executed after the <b>await</b> statement inside <b>exampleAsyncFunction.</b> The <b>await</b> keyword pauses the execution of the function until the Promise is resolved (in this case, after a 2-second delay).<br>4.<b>After calling the async function</b> is logged to the console.<br>This line is executed after the <b>exampleAsyncFunction</b> call is complete.<br>5.Result: 42 is logged to the console.<br>The result of the <b>exampleAsyncFunction</b> call is logged, which is 42.<br><br>The <b>await</b> keyword allows the code to wait for the asynchronous operation (in this case, the <b>setTimeout</b>) to complete without blocking the entire program. It makes asynchronous code appear as if it were synchronous, which can greatly improve code readability and maintainability.</p><hr>`);








// //Question 9: Create examples to explain promise.all function
document.write('<p><b>Q9 : "Create examples to explain promise.all function"</b><br><br><i style="color: darkred;"><b>Code : </b><br><i style="color: darkgreen;">// Simulate asynchronous API calls with setTimeout</i><br>function fetchDataFromAPI(apiEndpoint, delay) {<br>        return new Promise((resolve, reject) => {<br>            setTimeout(() => {<br>                resolve(`Data from ${apiEndpoint}`);<br>            }, delay);<br>        });<br>    }<br><br>async function fetchAndProcessData() {<br>        try {<br>            const promises = [<br>                fetchDataFromAPI("user", 2000),<br>                fetchDataFromAPI("product", 1000),<br>                fetchDataFromAPI("order", 1500),<br>            ];<br><br>            const results = await Promise.all(promises);<br><br>            console.log("All data fetched:");<br>            console.log(results[0]);<i style="color: darkgreen;"> // User data</i><br>            console.log(results[1]); <i style="color: darkgreen;">// Product data</i><br>console.log(results[2]); <i style="color: darkgreen;">// Order data</i><br><br><i style="color: darkgreen;">            // Process the data or perform other operations here</i><br>        } catch (error) {<br>    console.error("An error occurred:", error);<br>}<br>    }<br><br>fetchAndProcessData(); <br></i ></p > ');



// Simulate asynchronous API calls with setTimeout
function fetchDataFromAPI(apiEndpoint, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${apiEndpoint}`);
        }, delay);
    });
}

async function fetchAndProcessData() {
    try {
        const promises = [
            fetchDataFromAPI('user', 2000),
            fetchDataFromAPI('product', 1000),
            fetchDataFromAPI('order', 1500),
        ];

        const results = await Promise.all(promises);

        console.log('All data fetched:');
        console.log(results[0]); // User data
        console.log(results[1]); // Product data
        console.log(results[2]); // Order data

        // Process the data or perform other operations here
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

fetchAndProcessData();



document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('All data fetched:')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Data from user')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Data from product')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Data from order')}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.We define a function <b>fetchDataFromAPI</b> to simulate asynchronous API calls using <b>setTimeout</b>. Each API call takes a different amount of time to complete (2000ms for users, 1000ms for products, and 1500ms for orders).<br>2.Inside the <b>fetchAndProcessData</b> function, we create an array of promises <b>(promises)</b> for the three API calls.<br>3.We then use <b>Promise.all</b> to wait for all the promises in the <b>promises</b> array to resolve. This ensures that we get an array of results in the same order as the promises were defined.<br>4.We use <b>await</b> to wait for the results of <b>Promise.all</b>, and once they are available, we log the data for users, products, and orders.<br>5.If any of the promises in the <b>promises</b> array rejects (e.g., due to a network error), the <b>catch</b> block will handle the error.<br><br><b>Promise.all</b> is a powerful tool for handling multiple asynchronous operations concurrently, waiting for all of them to complete, and collecting their results for further processing. It ensures that the results are in the same order as the original promises and can be used to handle errors as well.</p><hr>`);

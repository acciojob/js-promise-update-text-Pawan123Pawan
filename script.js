//your JS code here. If required.
 function delayedHello() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve('Hello, world!');
                }, 1000); // 1000 milliseconds (1 second)
            });
        }

// Call the delayedHello function and update the HTML element when the Promise resolves
delayedHello()
.then((message) => {
document.getElementById('output').textContent = message;
});

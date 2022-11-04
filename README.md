# Optimized Typescript queue

I was working on a javascript / _typescript_ challenge and noticed there is no inbuilt queue data structure.

So here is one to copy and paste for your projects.

Neatly documented to make learning easier.

## What is a queue?

#### A queue is a First-In-First-Out (FIFO) data structure where the first element added to the queue is the first one to be removed.

## How is it used?

```javascript
new Queue([OPTIONAL ARGUMENTS]) // Create a new queue. With optional list of elements.

enqueue(element) // Add a new element to the end of the queue.

dequeue() // Remove the element from the front of the queue and return it.

peek() // Return the element from the front of the queue.
```

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Data_Queue.svg/1920px-Data_Queue.svg.png" width="240" alt="Queue data structure">

### Why not use the javascript / _typescript_ array.push(element) and [array.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) methods?

That is a good question.

The default array.shift() method works the same as dequeue(),

However every array.shift() call rebuilds the array and has an O(n) complexity, leading to slow performance for large queues.

Here dequeue() is an O(1) operation up to a given limit, which you can edit.

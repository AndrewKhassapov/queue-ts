export class Queue{

    /**
     * Maximum array length. 
     * To remove all deleted elements and restart queue.
     * O(1) operation until limit. Then O(n) complexity for 'n' elements in queue.
     * Increase this to improve performance.
     * @constant
     */
    private readonly LIMIT:number = Number.MAX_SAFE_INTEGER-1;
    
    private queue:any[] = [];
    private start:number = 0;
    
    /**
     * New queue.
     * @param {any[]} args Optional: Array of arguments to be enqueued.
     * @example myQueue = new Queue(1, 2, 3)
     */
    constructor(...args:any[]){
        this.queue = [...args];
        this.start = 0;
    }
    
    /**
     * Add to end of queue.
     * @param {any} value Value to add to end of queue.
     */
    public enqueue(value:any):void{
        this.queue.push(value);
    }
    
    /**
     * Remove from front of queue.
     * @returns {any} Front of queue. Undefined if queue is empty.
     * @reference shift() can be used but has O(n) complexity: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
     */
    public dequeue():any{

        if(this.start < this.queue.length){
            let element:any = this.queue[this.start];
            delete this.queue[this.start];
            this.start++;
            
            if(this.start >= this.LIMIT){
                let newQueue:any[] = [];
                for(let i:number = this.LIMIT; i < this.queue.length; i++){
                    newQueue.push(this.queue[i]);
                }
                this.queue = newQueue;
                this.start = 0;
            }
            
            return element;
        }
        return undefined; // Queue is empty.
    }
    
    /**
     * Show the front of queue without dequeuing.
     * @returns {any} Front of queue. Undefined if queue is empty.
     */
    public peek():any{
        if(this.start < this.queue.length){
            return this.queue[this.start];
        }
        return undefined; // Queue is empty.
    }
    
    /**
     * Size of queue.
     * @returns {number} Size of queue.
     */
    public get size():number{
        return this.queue.length - this.start;
    }

    /**
     * Size of queue.
     * @returns {number} Size of queue.
     */
    public getSize():number{
        return this.size;
    }
    
    /**
     * Queue as string.
     * @returns {string} String representation of queue, eg. "[ 1, 2, 3 ]".
     */
    public toString():string{
        if(this.start >= this.queue.length){
            return `Empty`;
        }
        
        let asString:string = `[ `;
        for(let i:number = this.start; i < this.queue.length - 1; i++){
            asString += this.queue[i] + `, `;
        }
        asString += this.queue[this.queue.length - 1] + ` ]`;
        return asString;
    }
}
class MyQueue {
    private readonly stack1 = new Stack<number>();
     private readonly stack2 = new Stack<number>();
     private front: number;
     constructor() {
 
     }
 
     push(x: number): void {
       if(this.stack1.empty()){
         this.front = x;
       }
       this.stack1.push(x)
     }
 
     pop(): number {
      //This if condition makes sure that this loop is run only when stack2 is empty
      //becase we have things here to pop unless its empty so no need to do it everytime
        if (this.stack2.empty()) {
          while(!this.stack1.empty()){
           this.stack2.push(this.stack1.pop())
          }
          return this.stack2.pop()
        }
     }
     //we show the outside world stack2
     peek(): number {
       if(!this.stack2.empty()){
         return this.stack2.peek()
       }
       return this.front
     }

     //need to check if both are empty
     empty(): boolean {
        return this.stack1.empty() && this.stack2.empty();
     }
 }
 
 class Stack<T> {
 
     private data: T[] = [];
 
     constructor() {}
 
     push(x: T): void {
         this.data.push(x);
     }
 
     pop(): T {
         return this.data.pop();
     }
 
     peek(): T {
         return this.data[this.data.length - 1];
     }
 
     empty(): boolean {
         return this.data.length === 0;
     }
 
 }
 //https://leetcode.com/problems/implement-queue-using-stacks/solutions/3103426/typescript-2-stacks-solution-amortized/
 
 /**
  * Your MyQueue object will be instantiated and called as such:
  * var obj = new MyQueue()
  * obj.push(x)
  * var param_2 = obj.pop()
  * var param_3 = obj.peek()
  * var param_4 = obj.empty()
  */
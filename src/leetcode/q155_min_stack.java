public class MinStack {

    private Stack stack;
    private Stack minStack;
    /** initialize your data structure here. */
    public MinStack() {
        this.stack = new Stack();
        this.minStack = new Stack();
    }
    
    public void push(int x) {
        if (this.stack.empty()) {
            this.minStack.push(Integer.valueOf(x));
        } else {
            int min = this.getMin();
            this.minStack.push(Integer.valueOf(Math.min(min, x)));
        }
        this.stack.push(Integer.valueOf(x));
    }
    
    public void pop() {
        this.stack.pop();
        this.minStack.pop();
    }
    
    public int top() {
        Integer top = (Integer) this.stack.peek(); 
        return top.intValue();
    }
    
    public int getMin() {
        Integer top = (Integer) this.minStack.peek(); 
        return top.intValue();
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
public class MinStack {

    private Stack<Integer> minStack;
    private int minValue;

    /** initialize your data structure here. */
    public MinStack() {
        this.minStack = new Stack<>();
        this.minValue = Integer.MAX_VALUE;
    }
    
    public void push(int x) {
        if (this.minStack.empty()) {
            this.minStack.push(Integer.valueOf(x));
            this.minValue = x;
        } else {
            int min = this.getMin();
            if (x <= min) {
                this.minStack.push(min);
                this.minValue = x;
            }
        }
        this.minStack.push(Integer.valueOf(x));
    }
    
    public void pop() {
        if (this.top() == this.minValue) {
            // pop extra min and reset min to last min
            this.minStack.pop();
            this.minValue = this.minStack.peek();
        }
        this.minStack.pop();
    }
    
    public int top() {
        return this.minStack.peek(); 
    }
    
    public int getMin() {
        return this.minValue;
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
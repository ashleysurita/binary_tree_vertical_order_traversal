var verticalOrder = function(root) {
    if(!root) return []
    
    root.offset = 0
    const res = []
    const queue = [root]
    let rootLevel = 0
    
    while(queue.length){
        let node = queue.shift()
        
        // if we created an array for the column already
        if(res[rootLevel + node.offset]){
            // just add to it
            res[rootLevel + node.offset].push(node.val)
        } else if (node.offset < 0) { // if its not added and it's on the left
            // put it in the front
            res.unshift([node.val])
            // then increment the level
            rootLevel++
        } else { // if it's not added and it's on the right
            // add it to the right
            res.push([node.val])
        }
        
        if(node.left){
            // add left to queue with a lower offset then current
            node.left.offset = node.offset - 1
            queue.push(node.left)
        }
        if(node.right){
            // add right to queue with a higher offset then current            
            node.right.offset = node.offset + 1
            queue.push(node.right)            
        }
        
    }
    
    return res
};

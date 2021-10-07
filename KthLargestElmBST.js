// node KthLargestElmBST.js

class Node {
    constructor(data) {
        this.left = null
        this.right = null
        this.data = data
    }
}
class count {
    constructor() { this.c = 0; }

}

class BST {
    constructor() {
        this.root = null
    }
    insert(data) {
        var newNode = new Node(data)
        if (this.root == null) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }

    }
    insertNode(root, newNode) {

        if (newNode.data > root.data) {
            if (root.right == null) {
                root.right = newNode
            }
            else {
                this.insertNode(root.right, newNode)
            }

        }
        else {
            if (root.left == null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
            }
        }
    }
    inOrder(root) {
        if (root === null) {
            return
        }
        this.inOrder(root.right)
        console.log(root.data)
        this.inOrder(root.left)

    }
    kthLargestUtil(node, k, C) {
        // Base cases, the second condition is important to
        // avoid unnecessary recursive calls
        if (node == null || C.c >= k)
            return;

        // Follow reverse inorder traversal so that the
        // largest element is visited first
        this.kthLargestUtil(node.right, k, C);

        // Increment count of visited nodes
        C.c++;

        // If c becomes k now, then this is the k'th largest
        if (C.c == k) {
            console.log(k + "th largest element is " +
                node.data + "");
            return;
        }

        // Recur for left subtree
        this.kthLargestUtil(node.left, k, C);
    }

    // Method to find the kth largest no in given BST
    kthLargest(k) {
        var c = new count(); // object of class count
        this.kthLargestUtil(this.root, k, c);
    }

}
var tree = new BST()
tree.insert(10)
tree.insert(21)
tree.insert(12)
tree.insert(14)
tree.insert(8)
tree.insert(2)
tree.inOrder(tree.root)
console.log("Kth Largest--element is ")
for (var i = 1; i < 5; i++) {
    tree.kthLargest(i)
}




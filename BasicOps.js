// node BasicOps.js

class Node {

    constructor(data) {
        this.data = data
        this.left = null
        this.right = null

    }

}
class BST {

    constructor() {

        this.root = null

    }
    insert(data) {
        // Creating a node and initialising
        // with data
        var newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode
            }
            else {

                this.insertNode(node.left, newNode)
            }

        }
        else if (newNode.data > node.data) {
            if (node.right === null) {
                node.right = newNode
            }
            else {
                this.insertNode(node.right, newNode)
            }

        }

    }
    inOrder(root) {

        if (root == null) {
            return
        }
        this.inOrder(root.left)
        console.log(root.data)
        this.inOrder(root.right)

    }
    reverseInOrder(root) {
        if (root == null) {
            return
        }
        this.reverseInOrder(root.right)
        console.log(root.data)
        this.reverseInOrder(root.left)
    }
    searchNode(root, data) {
        if (root === null)
            return null;

        if (data > root.data) {
            this.searchNode(root.right, data)
        }
        else if (data < root.data) {
            this.searchNode(root.left, data)
        }
        else {
            console.log(`${data} element found`)
            return
        }

        return -1


    }

}
var binaryTree = new BST()
binaryTree.insert(5)
binaryTree.insert(1)
binaryTree.insert(17)
binaryTree.insert(10)
console.log("In-order traversal prints elements in increasing order--->")
binaryTree.inOrder(binaryTree.root)
console.log("Reverse inorder traversal prints elements in descreasing order--->")
binaryTree.reverseInOrder(binaryTree.root)
binaryTree.searchNode(binaryTree.root, 10)
binaryTree.searchNode(binaryTree.root, 5)
console.log(binaryTree.searchNode(binaryTree.root, 44))


class Node {
    constructor(data) {
        this.data = data
        this.right = null
        this.left = null
    }
}
class Tree {
    constructor() {
        this.root = null
    }
    insert(data) {
        var newNode = new Node(
            data)
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
            if (root.left === null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
            }

        }
    }
    inorder(root) {
        if (root === null) {
            return
        }
        this.inorder(root.left)
        console.log(root.data)
        this.inorder(root.right)
    }
    rootToNodePath(root, num, output) {
        if (root.data === num) {
            output.push(root.data)
            return
        }
        else if (num > root.data) {
            output.push(root.data)
            this.rootToNodePath(root.right, num, output)
        }
        else {
            output.push(root.data)
            this.rootToNodePath(root.left, num, output)

        }
    }
}
const BST = new Tree()
BST.insert(10)
BST.insert(8)
BST.insert(7)
BST.insert(20)
BST.insert(15)
BST.insert(25)
BST.inorder(BST.root)
const output = []
BST.rootToNodePath(BST.root, 15, output)
console.log(output)
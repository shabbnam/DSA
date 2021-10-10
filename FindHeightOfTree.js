// node findHeightOfTree
class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}
class Tree {
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
        else if (newNode.data < root.data) {
            if (root.left == null) {
                root.left = newNode
            }
            else {
                this.insertNode(root.left, newNode)
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

    findHeightOfTree(root) {
        if (root == null) {
            return 0
        }
        var leftmax = this.findHeightOfTree(root.left)
        var rightMax = this.findHeightOfTree(root.right)
        return Math.max(leftmax, rightMax) + 1

    }
}
var BST = new Tree()
BST.insert(10)
BST.insert(8)
BST.insert(14)
BST.insert(13)
BST.insert(12)
BST.insert(11)
BST.insert(23)
BST.insert(34)
BST.insert(31)
BST.insert(28)
BST.insert(27)
BST.insert(25)
BST.insert(5)
BST.inOrder(BST.root)
console.log("Heigt of the tree is -->")
console.log(BST.findHeightOfTree(BST.root))
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function (root) {
    function forwards(rootTree, arr) {
        if (!rootTree) return rootTree;
        forwards(rootTree.left,arr);
        arr.push(rootTree.val);
        forwards(rootTree.right,arr);
    }
    let a = [];

    forwards(root,a);
    console.log(a);
    return a;
};
var preorderTraversal = function (root) {
    let arr = [],stack=[];

    while (root || stack.length){
        while (root){
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();
        arr.push(root.val);
        root = root.right;
    }
    console.log(arr);
    return arr;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode('F'),
    r = root;

r.left = new TreeNode('B');
r.left.left = new TreeNode('A');
r.left.right = new TreeNode('D');
r.left.right.left = new TreeNode('C');
r.left.right.right = new TreeNode('E');
r.right = new TreeNode('G');
r.right.right = new TreeNode('I');
r.right.right.left = new TreeNode('H');

preorderTraversal(root);

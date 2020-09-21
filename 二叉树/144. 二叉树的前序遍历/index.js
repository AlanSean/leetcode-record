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
        arr.push(rootTree.val);
        forwards(rootTree.left,arr);
        forwards(rootTree.right,arr);
    }
    let a = [];

    forwards(root,a);
    console.log(a);
    return a;
};
var preorderTraversal = function (root) {
    let arr = [],a=[];

    if (root ) arr.push(root);
    while (arr.length>0){
        let cur = arr.pop();

        a.push(cur.val);
        cur.right && arr.push(cur.right);
        cur.left && arr.push(cur.left);
    }
    return a;
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

/******************************************************************************

Copyright (c) 2016, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

******************************************************************************/

/** Tree component
 *
 *  @example
 *  var tree = highed.Tree(document.body).build({
 *     //Tree data here   
 *  });
 * 
 *  @emits Select {object} - when a node is selected
 *
 *  @constructor
 *  @param parent {domnode} - the node to attach the tree to
 */
highed.Tree = function (parent) {
    var container = highed.dom.cr('div', 'highed-tree'),
        selectedNode = false,
        reselectFn = false,
        events = highed.events()
    ;

    ///////////////////////////////////////////////////////////////////////////

    function createNode(child, key, pnode, instancedData, dataIndex, arrayHeader) {
        var title = highed.dom.cr('div', 'parent-title', child.title || highed.uncamelize(key)),
            icon = highed.dom.cr('div', 'exp-col-icon fa fa-plus'),
            body = highed.dom.cr('div', 'parent-body'),
            node = highed.dom.cr('div', 'node'),

            rightIcons = highed.dom.cr('div', 'right-icons'),
            remIcon = highed.dom.cr('div', 'highed-icon fa fa-trash'),
            addIcon = highed.dom.cr('div', 'highed-icon fa fa-plus-circle'),

            expanded = false,
            noInspectSelf = false
        ;

        if (!arrayHeader && child.entries.length === 0 && Object.keys(child.children).length === 0) {
           // return;
        }

        if (arrayHeader || child.isArrayParent) {
            highed.dom.ap(node, rightIcons);

            if (arrayHeader) {
                highed.dom.ap(rightIcons,
                    addIcon
                );
            }

            if (child.isArrayParent) {
                highed.dom.ap(rightIcons,
                    remIcon
                );
            }

            highed.dom.on(remIcon, 'click', function () {
                if (confirm('Really delete the entry?')) {
                    arr = highed.getAttr(instancedData, child.id, dataIndex);
                    arr = arr.filter(function (b, i) {
                        return i !== dataIndex;
                    });
                    highed.setAttr(instancedData, child.id, arr);  
                }
            });

            highed.dom.on(addIcon, 'click', function () {
                arr = highed.getAttr(instancedData, child.id, dataIndex);
                if (highed.isArr(arr)) {
                    arr.push({});
                    highed.setAttr(instancedData, child.id, arr);                       
                } else {
                    highed.setAttr(instancedData, child.id, [{}]);
                }
                if (highed.isFn(reselectFn)) {
                    reselectFn();
                }
            });
        }

        //child.dataIndex = dataIndex;

        highed.dom.ap(pnode,
            highed.dom.ap(node,
                icon,
                title
            ),
            body
        );

        highed.dom.style(body, {display: 'none'});

        function toggle() {
            if (!arrayHeader && Object.keys(child.children).length === 0) {
                return;
            }

            expanded = !expanded;
            if (expanded) {
                icon.className = 'exp-col-icon fa fa-minus';
                highed.dom.style(body, {display: 'block'});
            } else {
                icon.className = 'exp-col-icon fa fa-plus';                        
                highed.dom.style(body, {display: 'none'});
            }
        }

        highed.dom.on(icon, 'click', toggle);

        if (!arrayHeader && Object.keys(child.children).length === 0) {
            icon.className = 'exp-col-icon fa fa-sliders'
        }

        highed.dom.on(title, 'click', function () {
            if (arrayHeader) {
                return toggle();
            }

            if (noInspectSelf) {
                return;
            }

            if (selectedNode) {
                selectedNode.className = 'parent-title';
            }

            title.className = 'parent-title parent-title-selected';
            selectedNode = title;

            reselectFn = function () {
                events.emit('Select', child, highed.uncamelize(key), child.dataIndex);
            };

            events.emit('Select', child, highed.uncamelize(key), child.dataIndex);
        });

        return body;
    }
    
    /** Build the tree
     *  @memberof highed.Tree
     *  @param tree {object} - the tree to display
     *    > children {object} - the children of the node
     *    > entries {array} - array of orphan children 
     */
    function build(tree, pnode, instancedData, dataIndex) {

       // dataIndex = tree.dataIndex || dataIndex;

        if (tree.isInstancedArray) {

            //This requires some special handling. We actually need
            //access to instanced data to build it. 
            //What this means is that we need to create a sub-tree
            //for each of the elements in the instanced array.
            //Problem is we need to insert one element per. entry
            var arr = highed.getAttr(instancedData, tree.id, dataIndex),
                children = {}
            ;

            if (highed.isArr(arr)) {
                arr.forEach(function (data, i) {
                    children[tree.shortName + ' #' + (i + 1)] = {                        
                        children: tree.children,
                        entries: tree.entries,
                        dataIndex: i,
                        isArrayParent: true
                    };
                });

                return build(
                    {
                        children: children,
                        entries: []
                    }, 
                    createNode(tree, tree.shortName, pnode, instancedData, dataIndex, true),
                    instancedData, 
                    dataIndex
                );  
            } 
        } 

        // if (tree.shortName) {
        //     instancedData = instancedData[tree.shortName];

        //     if (highed.isArr(instancedData) && dataIndex >= 0) {
        //         instancedData = instancedData[dataIndex];
        //     }
        // }

        if (tree && tree.entries) {
            Object.keys(tree.entries).forEach(function (key) {
                var entry = tree.entries[key];
                entry.data = instancedData;
            });
        }

        if (tree && tree.children) {
            Object.keys(tree.children).forEach(function (key) {
                var child = tree.children[key],
                    title = highed.dom.cr('div', 'parent-title', child.title || highed.uncamelize(key)),
                    icon = highed.dom.cr('div', 'exp-col-icon fa fa-plus'),
                    body = highed.dom.cr('div', 'parent-body'),
                    node = highed.dom.cr('div', 'node'),

                    rightIcons = highed.dom.cr('div', 'right-icons'),
                    remIcon = highed.dom.cr('div', 'highed-icon fa fa-trash'),

                    expanded = false,
                    noInspectSelf = false,
                    arr
                ;

                 if (child.isInstancedArray) {
                    arr = highed.getAttr(instancedData, child.id, dataIndex);
                    if (highed.isArr(arr)) {
                        //Skip node creation - will be done later
                        return build(child, pnode, instancedData, dataIndex);                        
                    } 
                }

                body = createNode(child, key, pnode, instancedData, dataIndex);                        

                //If the child is an instanced array, we should abort 
                // if (child.isInstancedArray) {
                //     arr = highed.getAttr(instancedData, child.id, dataIndex);
                //     if (highed.isArr(arr)) {
                //         return build(child, level, pnode, instancedData, dataIndex);                        
                //     }
                // }

                // if (child.entries.length === 0 && Object.keys(child.children).length === 0) {
                //     return;
                // }

                // highed.dom.ap(pnode,
                //     highed.dom.ap(node,
                //         icon,
                //         title
                //     ),
                //     body
                // );

                // if (child.isArrayParent) {
                //     highed.dom.ap(node, rightIcons);

                //     highed.dom.ap(rightIcons,
                //         remIcon
                //     );
                // }

                // highed.dom.style(body, {display: 'none'});

                // function toggle() {
                //     if (Object.keys(child.children).length === 0) {
                //         return;
                //     }

                //     expanded = !expanded;
                //     if (expanded) {
                //         icon.className = 'exp-col-icon fa fa-minus';
                //         highed.dom.style(body, {display: 'block'});
                //     } else {
                //         icon.className = 'exp-col-icon fa fa-plus';                        
                //         highed.dom.style(body, {display: 'none'});
                //     }
                // }

                // highed.dom.on(icon, 'click', toggle);

                // if (Object.keys(child.children).length === 0) {
                //     icon.className = 'exp-col-icon fa fa-sliders'
                // }

                // highed.dom.on(title, 'click', function () {
                //     if (noInspectSelf) {
                //         return;
                //     }

                //     if (selectedNode) {
                //         selectedNode.className = 'parent-title';
                //     }

                //     title.className = 'parent-title parent-title-selected';
                //     selectedNode = title;

                //     reselectFn = function () {
                //         events.emit('Select', child, highed.uncamelize(key), child.dataIndex);
                //     };

                //     events.emit('Select', child, highed.uncamelize(key), child.dataIndex);
                // });

                build(child, body, instancedData, child.dataIndex);
            });
        }
    }

    /** Reselect the currently selected node
     *  @memberof highed.Tree
     */
    function reselect() {
        if (selectedNode && highed.isFn(reselectFn)) {
            reselectFn();
        }
    }

    ///////////////////////////////////////////////////////////////////////////

    highed.dom.ap(parent, container);

    ///////////////////////////////////////////////////////////////////////////
    
    return {
        on: events.on,
        reselect: reselect,
        build: function (tree, data) {
            container.innerHTML = '';
            build(tree, container, data, 0);
        }
    };
};
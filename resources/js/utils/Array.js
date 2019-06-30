// 1 child
function flatToHierarchy(flat) {
    var roots = [] // things without parent
    // make them accessible by id on this map
    var all = {}
    flat.forEach(function (item) {
        all[item.id] = item
    })
    // connect childrens to its parent, and split roots apart
    Object.keys(all).forEach(function (id) {
        var item = all[id]
        if (item.parent === null || item.parent === 0) {
            roots.push(item)
        } else if (item.parent in all) {
            var p = all[item.parent]
            if (!('child' in p)) {
                p.child = []
            }
            p.child.push(item)
        }
    })
    // done!
    return roots
}

// unli child
function flatToHierarchy2(flat) {
    var arr = [...flat]
    return arr
}

//compare array
function compare(arr1, arr2) {
    if (!arr1 || !arr2) return
    let result;
    arr1.forEach((e1, i) => arr2.forEach(e2 => {
        if (e1.length > 1 && e2.length) {
            result = compare(e1, e2);
        } else if (e1 !== e2) {
            result = false
        } else {
            result = true
        }
    })
    )
    return result
}


export {
    flatToHierarchy,
    compare
}
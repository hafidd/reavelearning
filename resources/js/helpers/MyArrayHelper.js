export default class MyArrayHelper {
    static flatToHierarchy(flat) {
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
}
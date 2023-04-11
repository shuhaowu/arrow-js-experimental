export class IndexAccessProxyHandler {
    get(target, key, receiver) {
        if (typeof key === "string") { // Need to check because key can be a symbol, such as [Symbol.iterator].
            const idx = +key; // Convert the key to a number
            if (idx === idx) { // Basically an inverse NaN check
                return (receiver || target).get(idx);
            }
        }
        return Reflect.get(target, key, receiver);
    }
    set(target, key, value, receiver) {
        if (typeof key === "string") { // Need to check because key can be a symbol, such as [Symbol.iterator].
            const idx = +key; // Convert the key to a number
            if (idx === idx) { // Basically an inverse NaN check
                (receiver || target).set(idx, value);
                return true; // Is this correct?
            }
        }
        return Reflect.set(target, key, value, receiver);
    }
}

//# sourceMappingURL=proxyhandler.mjs.map

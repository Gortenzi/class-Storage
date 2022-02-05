class Storage {
    
    constructor(key, defaultValue = "", storage = localStorage) {
        this.key = key
        this.defaultValue = defaultValue
        this.storage = storage
    }
    get() {
        return JSON.parse(this.storage.getItem(this.key))
    }
    set(value = this.defaultValue) {
        this.storage.setItem(this.key, JSON.stringify(value))
    }
    clear() {
        this.storage.removeItem(this.key)

    }
    isEmpty() {
        return (!this.storage.getItem(this.key))
    }

}

const storageCat = new Storage('cat', 'red')
storageCat.set('grey')
console.log(storageCat.isEmpty())
storageCat.clear()
console.log(storageCat.isEmpty())

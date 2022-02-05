class Storage {
    
    constructor(key, defaultValue = "", storage = localStorage) {
        this.key = key
        this.defaultValue = defaultValue
        this.storage = storage
    }
    get() {
        return JSON.parse(this.storage.getItem(this.key))
    }
    set(value) {
        this.storage.setItem(this.key, JSON.stringify(value))
    }
    clear() {
        this.storage.removeItem(this.key)

    }
    isEmpty() {
        return this.storage.getItem(this.key) ? false : true
    }

}

const storageCat = new Storage('cat', 'red')

console.log(storageCat)
storageCat.set('grey')
// storageCat.clear()
storageCat.get()

const storageDog = new Storage('dog', 'angry', sessionStorage)
storageDog.set('very angry')
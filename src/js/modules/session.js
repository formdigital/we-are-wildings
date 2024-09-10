export default class Session {
    constructor(){
        this.storage = { noticeModal: false };
        this.defaultTtl = 86400000;
        this.getStorage();
    }

    getStorage() {
        if (sessionStorage.getItem('zeppit_storage')) {
            this.storage = JSON.parse(sessionStorage.getItem('zeppit_storage'))
        }
    }

    setStorage() {
        sessionStorage.setItem('zeppit_storage', JSON.stringify(this.storage))
    }

    setItem (name, value) {
        value = value || '';
        this.storage[name] = value;
        this.setStorage();
    }

    setItemWithTtl(key, value, ttl = this.defaultTtl) {
        const now = new Date();

        const item = {
            value,
            expiry: now.getTime() + ttl
        }

        this.storage[key] = item;
        this.setStorage();
    }

    getItem(name) {
        this.getStorage();
        return this.storage[name];
    }

    getWithExpiry(key) {
        this.getStorage();

        const item = this.storage[key];

        if(!item) {
            return null;
        }

        const now = new Date();
        if(now.getTime() >  item.expiry) {
            this.storage[key] = null;
            this.setStorage();
            return null;
        }

        return item.value;
    }
}

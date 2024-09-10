import Storage from './session.js'
import StickyPopUp from './sticky-popup.js'

export default class Main {
  constructor() {
    console.log('Init main script')
    this.storage = new Storage()
    this.initComponents()
    this.initPages()
    this.initForms()
  }

  initComponents() {
    new StickyPopUp(this.storage)
  }

  initPages() {

  }

  initForms() {
    
  }
}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="article-sort"
export default class extends Controller {
  static targets = [ "select" ]
  connect() {
    console.log("Hello, Stimulus!", this.element)
    console.log(this.selectTarget.value)
  }
}

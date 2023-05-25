import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="article-sort"
export default class extends Controller {
  static targets = [ "select" ]
  connect() {
    console.log("Hello, Stimulus!", this.element)
    console.log(this.selectTarget.value)
  }

  sortPosts() {
    const sortValue = this.selectTarget.value;
    const url = `/articles?sort_by=${sortValue}`; // not ideal, prone to route change

    Turbo.visit(url);
  }


  sort() {
    console.log("update");
    this.sortPosts();
  }
}

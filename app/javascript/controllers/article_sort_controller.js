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

    // Turbo.visit(url); // this reloads the whole page
    this.doTurboRequest(url);
  }

  doTurboRequest(url) {
    fetch(url, {
      headers: {
        Accept: "text/vnd.turbo-stream.html",
      },
    })
    .then((response) => response.text())
    .then((html) => {
      Turbo.renderStreamMessage(html);
    });
  }

  sort() {
    console.log("update");
    this.sortPosts();
  }
}

import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        this.element.innerHTML = "<h1 class='text-red-500 font-bold text-center p-2'>hello world</h1>"
    }
}

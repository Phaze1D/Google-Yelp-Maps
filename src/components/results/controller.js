import { component } from 'utils/decorators';


@component({
  name: 'results',
  template: require('./view.html')
})
/** KnockoutJS ViewModel that represents the Results Panel */
class ResultsViewModel {

  /**
  * @constructor ResultsViewModel
  * @param {function} onRequestItem - Callback
  * @param {function} onRequestIn - Callback
  * @param {function} onRequestOut - Callback
  * @param {observableArray} results - The observableArray of results
  * @param {observable} fetching - Observable boolean
  * @param {observable} show - Observable boolean
  */
  constructor(params) {
    this.onRequestItem = params.onRequestItem;
    this.onRequestIn = params.onRequestIn;
    this.onRequestOut = params.onRequestOut;
    this.results = params.results;
    this.fetching = params.fetching;
    this.show = params.show;

    // Binding event functions
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  /**
  * Click Event handler
  * @param {object} data
  * @param {object} event
  */
  handleItemClick(data, event) {
    this.onRequestItem(data);
  }

  /**
  * MouseEnter Event handler
  * @param {object} data
  * @param {object} event
  */
  handleMouseIn(data, event) {
    this.onRequestIn(data);
  }

  /**
  * MouseLeave Event handler
  * @param {object} data
  * @param {object} event
  */
  handleMouseOut(data, event) {
    this.onRequestOut(data);
  }
}

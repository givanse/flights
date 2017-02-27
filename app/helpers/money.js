import Ember from 'ember';

/**
 * https://guides.emberjs.com/v2.11.0/templates/writing-helpers/
 */

export function money(params/*, hash*/) {
  const price = (params[0] || 0).toFixed(2);
  const htmlString = "<span class=\"money\"></span>$" + price;
  return Ember.String.htmlSafe(htmlString);
}

export default Ember.Helper.helper(money);

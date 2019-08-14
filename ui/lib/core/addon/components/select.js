import Component from '@ember/component';
import layout from '../templates/components/select';

/**
 * @module Select
 * Select components are used to render a dropdown.
 *
 * @example
 * ```js
 * <Select @label='Date Range' @options={{[{ value: 'berry', label: 'Berry' }]}} @onChange={{onChange}}/>
 * ```
 *
 * @param label=null {String} - The label for the select element.
 * @param options=null {Array} - A list of items that the user will select from. This can be an array of strings or objects.
 * @param [selectedValue=null] {String} - The currently selected item. Can also be used to set the default selected item. This should correspond to the `value` of one of the `<option>`s.
 * @param [name=null] {String} - The name of the select, used for the test selector.
 * @param [valueAttribute=value] {String} - When `options` is an array objects, the key to check for when assigning the option elements value.
 * @param [labelAttribute=label] {String} - When `options` is an array objects, the key to check for when assigning the option elements' inner text.
 * @param [isInline=false] {Bool} - Whether or not the select should be displayed as inline-block or block.
 * @param [isFullwidth=false] {Bool} - Whether or not the select should take up the full width of the parent element.
 * @param onChange=null {Func} - The action to take once the user has selected an item. This method will be passed the `value` of the select.
 */

export default Component.extend({
  layout,
  classNames: ['field'],
  label: null,
  selectedValue: null,
  name: null,
  options: null,
  valueAttribute: 'value',
  labelAttribute: 'label',
  isInline: false,
  isFullwidth: false,
  onChange() {},
});

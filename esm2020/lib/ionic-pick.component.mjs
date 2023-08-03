// tslint:disable-next-line:max-line-length
import { Component, ContentChild, ElementRef, EventEmitter, forwardRef, HostBinding, Input, IterableDiffers, Optional, Output, Renderer2, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonItem, ModalController, Platform } from '@ionic/angular';
import { IonicPickAddItemTemplateDirective } from './ionic-pick-add-item-template.directive';
import { IonicPickCloseButtonTemplateDirective } from './ionic-pick-close-button-template.directive';
import { IonicPickFooterTemplateDirective } from './ionic-pick-footer-template.directive';
import { IonicPickGroupEndTemplateDirective } from './ionic-pick-group-end-template.directive';
import { IonicPickGroupTemplateDirective } from './ionic-pick-group-template.directive';
import { IonicPickHeaderTemplateDirective } from './ionic-pick-header-template.directive';
import { IonicPickItemEndTemplateDirective } from './ionic-pick-item-end-template.directive';
import { IonicPickItemIconTemplateDirective } from './ionic-pick-item-icon-template.directive';
import { IonicPickItemTemplateDirective } from './ionic-pick-item-template.directive';
import { IonicPickMessageTemplateDirective } from './ionic-pick-message-template.directive';
import { IonicPickModalComponent } from './ionic-pick-modal.component';
import { IonicPickPlaceholderTemplateDirective } from './ionic-pick-placeholder-template.directive';
import { IonicPickSearchFailTemplateDirective } from './ionic-pick-search-fail-template.directive';
import { IonicPickTitleTemplateDirective } from './ionic-pick-title-template.directive';
import { IonicPickValueTemplateDirective } from './ionic-pick-value-template.directive';
import { IonicPickIconTemplateDirective } from './ionic-pick-icon-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/common";
export class IonicPickComponent {
    constructor(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
        this._modalController = _modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new EventEmitter();
        this._hasIonLabel = false;
        this._ionLabelPosition = null;
        this._label = '';
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#items).
         *
         * @default []
         * @memberof IonicPickComponent
         */
        this.items = [];
        this.itemsChange = new EventEmitter();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#modalcssclass).
         *
         * @default null
         * @memberof IonicPickComponent
         */
        this.modalCssClass = '';
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isconfirmbuttonenabled).
         *
         * @default true
         * @memberof IonicPickComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemvaluefield).
         *
         * @default null
         * @memberof IonicPickComponent
         */
        this.itemValueField = '';
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemtextfield).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.itemTextField = '';
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#groupvaluefield).
         *
         * @default null
         * @memberof IonicPickComponent
         */
        this.groupValueField = '';
        /**
      * Group property to display, e.g. `'country.name'`.
      * **Note**: `items` should be an object array.
      * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#grouptextfield).
      *
      * @default null
      * @memberof IonicPickComponent
      */
        this.groupTextField = '';
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#cansearch).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.canSearch = false;
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasinfinitescroll).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasvirtualscroll).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.hasVirtualScroll = false;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * @default '40px'
         * @memberof IonicPickComponent
         */
        this.virtualScrollApproxItemHeight = '40px';
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchplaceholder).
         *
         * @default 'Search'
         * @memberof IonicPickComponent
         */
        this.searchPlaceholder = 'Search';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#placeholder).
         *
         * @default null
         * @memberof IonicPickComponent
         */
        this.placeholder = '';
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchfailtext).
         *
         * @default 'No items found.'
         * @memberof IonicPickComponent
         */
        this.searchFailText = 'No items found.';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#clearbuttontext).
         *
         * @default 'Clear'
         * @memberof IonicPickComponent
         */
        this.clearButtonText = 'Clear';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#addbuttontext).
         *
         * @default 'Add'
         * @memberof IonicPickComponent
         */
        this.addButtonText = 'Add';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#confirmbuttontext).
         *
         * @default 'OK'
         * @memberof IonicPickComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#closebuttontext).
         *
         * @default 'Cancel'
         * @memberof IonicPickComponent
         */
        this.closeButtonText = 'Cancel';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#shouldfocussearchbar).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.shouldFocusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#headercolor).
         *
         * @default null
         * @memberof IonicPickComponent
         */
        this.headerColor = '';
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#groupcolor).
         *
         * @default null
         * @memberof IonicPickComponent
         */
        this.groupColor = '';
        /**
         * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#closebuttonslot).
         *
         * @default 'start'
         * @memberof IonicPickComponent
         */
        this.closeButtonSlot = 'start';
        /**
         * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemiconslot).
         *
         * @default 'start'
         * @memberof IonicPickComponent
         */
        this.itemIconSlot = 'start';
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onchange).
         *
         * @memberof IonicPickComponent
         */
        this.onChange = new EventEmitter();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsearch).
         *
         * @memberof IonicPickComponent
         */
        this.onSearch = new EventEmitter();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsearchfail).
         *
         * @memberof IonicPickComponent
         */
        this.onSearchFail = new EventEmitter();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsearchsuccess).
         *
         * @memberof IonicPickComponent
         */
        this.onSearchSuccess = new EventEmitter();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#oninfinitescroll).
         *
         * @memberof IonicPickComponent
         */
        this.onInfiniteScroll = new EventEmitter();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onopen).
         *
         * @memberof IonicPickComponent
         */
        this.onOpen = new EventEmitter();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onclose).
         *
         * @memberof IonicPickComponent
         */
        this.onClose = new EventEmitter();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onselect).
         *
         * @memberof IonicPickComponent
         */
        this.onSelect = new EventEmitter();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onclear).
         *
         * @memberof IonicPickComponent
         */
        this.onClear = new EventEmitter();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchdebounce).
         *
         * @default 250
         * @memberof IonicPickComponent
         */
        this.searchDebounce = 250;
        /**
         * Determimes whether or not searching will automatically search. autoSearch is enabled by default and
         * will trigged based on `searchDebounce` value.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#autosearch).
         *
         * @default true
         * @memberof IonicPickComponent
         */
        this.autoSearch = true;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#disableditems).
         *
         * @default []
         * @memberof IonicPickComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#shouldstoreitemvalue).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#cansaveitem).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#candeleteitem).
         *
         * @default false
         * @memberof IonicPickComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicPickAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsaveitem).
         *
         * @memberof IonicPickComponent
         */
        this.onSaveItem = new EventEmitter();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#ondeleteitem).
         *
         * @memberof IonicPickComponent
         */
        this.onDeleteItem = new EventEmitter();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicPickAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onadditem).
         *
         * @memberof IonicPickComponent
         */
        this.onAddItem = new EventEmitter();
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#virtualscrollheaderfn).
         *
         * @memberof IonicPickComponent
         */
        this.virtualScrollHeaderFn = () => {
            return null;
        };
        this.propagateOnChange = (_) => { };
        this.propagateOnTouched = () => { };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    get _hasValueCssClass() {
        return this.hasValue();
    }
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    get _hasIonLabelCssClass() {
        return this._hasIonLabel;
    }
    get _hasDefaultIonLabelCssClass() {
        return this._ionLabelPosition === 'default';
    }
    get _hasFixedIonLabelCssClass() {
        return this._ionLabelPosition === 'fixed';
    }
    get _hasStackedIonLabelCssClass() {
        return this._ionLabelPosition === 'stacked';
    }
    get _hasFloatingIonLabelCssClass() {
        return this._ionLabelPosition === 'floating';
    }
    get _hasInfiniteScroll() {
        return this.isEnabled && this._modalComponent &&
            this._modalComponent._infiniteScroll ? true : false;
    }
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#label).
     *
     * @readonly
     * @default null
     * @memberof IonicPickComponent
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchtext).
     *
     * @readonly
     * @default ''
     * @memberof IonicPickComponent
     */
    get searchText() {
        return this._searchText;
    }
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#issearching).
     *
     * @default false
     * @readonly
     * @memberof IonicPickComponent
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hassearchtext).
     *
     * @default false
     * @readonly
     * @memberof IonicPickComponent
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        // Set value items.
        this._valueItems.splice(0, this._valueItems.length);
        if (this.isMultiple) {
            if (value && value.length) {
                Array.prototype.push.apply(this._valueItems, value);
            }
        }
        else {
            if (!this._isNullOrWhiteSpace(value)) {
                this._valueItems.push(value);
            }
        }
        this._setIonItemHasValue();
        this._setHasPlaceholder();
    }
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isenabled).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#shouldbackdropclose).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isopened).
     *
     * @default false
     * @readonly
     * @memberof IonicPickComponent
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
   * Determines whether Confirm button is visible for single selection.
   * By default Confirm button is visible only for multiple selection.
   * **Note**: It is always true for multiple selection and cannot be changed.
   * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasconfirmbutton).
   *
   * @default true
   * @memberof IonicPickComponent
   */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isonsearchenabled).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#canclear).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    get canClear() {
        return this._canClear;
    }
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#ismultiple).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    get isMultiple() {
        return this._isMultiple;
    }
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemstoconfirm).
     *
     * @default []
     * @readonly
     * @memberof IonicPickComponent
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#canadditem).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    get canAddItem() {
        return this._canAddItem;
    }
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    initFocus() { }
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    }
    _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    _setHasSearchText() {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    }
    _hasOnSearch() {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    }
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    }
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    }
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    }
    _emitValueChange() {
        this.propagateOnChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    }
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item: item,
            isSelected: isSelected
        });
    }
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items: items
        });
    }
    _emitOnSearchSuccessOrFail(isSuccess) {
        const eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    _formatItem(item) {
        if (this._isNullOrWhiteSpace(item)) {
            return '';
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            const selectedItem = this.items.find(_item => {
                return _item[this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    }
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    }
    _onSearchbarClear() {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    }
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            let groups = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups = this._groups;
            }
            else {
                const filterText = this._searchText.trim().toLowerCase();
                this._groups.forEach(group => {
                    const items = group.items.filter((item) => {
                        const itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText) !== -1;
                    });
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !this._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    }
    _autoSearch() {
        this.autoSearch ? this._filterItems() : false;
    }
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return true;
        }
        return this.disabledItems.some(_item => {
            return this._getItemValue(_item) === this._getItemValue(item);
        });
    }
    _isItemSelected(item) {
        return this._selectedItems.find(selectedItem => {
            return this._getItemValue(item) === this._getStoredItemValue(selectedItem);
        }) !== undefined;
    }
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    }
    _deleteSelectedItem(item) {
        let itemToDeleteIndex = 0;
        this._selectedItems.forEach((selectedItem, itemIndex) => {
            if (this._getItemValue(item) ===
                this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    }
    _click() {
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then(() => {
            this.onOpen.emit({
                component: this
            });
        });
    }
    _saveItem(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _deleteItemClick(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    }
    _addItemClick() {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _positionAddItemTemplate() {
        // Wait for the template to render.
        setTimeout(() => {
            const footer = this._modalComponent._element.nativeElement
                .querySelector('.ionic-pick-add-item-template ion-footer');
            this._addItemTemplateFooterHeight = footer ? `calc(100% - ${footer.offsetHeight}px)` : '100%';
        }, 100);
    }
    _close() {
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    }
    _clear() {
        const selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
    }
    _getMoreItems() {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    _setItemsToConfirm(items) {
        let itemsBlank = [];
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = itemsBlank.concat(items);
    }
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    _select(item) {
        const isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    }
    _confirm() {
        this.confirm();
        this._close();
    }
    _getLabelText() {
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    }
    _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every((group) => {
            return !group.items || group.items.length === 0;
        });
    }
    _countFooterButtons() {
        let footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    }
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/ceotrammell/ionic-pick/issues/70.
        let groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(item => {
                    const groupValue = this._getPropertyValue(item, this.groupValueField), group = groups.find(_group => _group.value === groupValue);
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: this._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    }
    _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((_object, _property) => {
            return _object ? _object[_property] : null;
        }, object);
    }
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    }
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    }
    _setHasPlaceholder() {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    }
    _setIonItemCssClass(cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        // Change to Renderer2
        if (shouldAdd) {
            this._renderer.addClass(this._ionItemElement, cssClass);
        }
        else {
            this._renderer.removeClass(this._ionItemElement, cssClass);
        }
    }
    _toggleAddItemTemplate(isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    }
    /* ControlValueAccessor */
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(method) {
        this.propagateOnChange = method;
    }
    registerOnTouched(method) {
        this.propagateOnTouched = method;
    }
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
    }
    /* .ControlValueAccessor */
    ngOnInit() {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-pick', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
    }
    ngDoCheck() {
        const itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicPickComponent
     */
    addItem(item) {
        const self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._addItemObservable.unsubscribe();
                resolve(true);
            }, () => {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
   * Deletes item.
   * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
   * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#deleteitem).
   *
   * @param item Item to delete.
   * @returns Promise that resolves when item has been deleted.
   * @memberof IonicPickComponent
   */
    deleteItem(item) {
        const self = this;
        let hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(_item => {
                return this._getItemValue(item) !== this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                const values = this.value.filter((value) => {
                    return value.id !== item.id;
                });
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        const items = this.items.filter(_item => {
            return _item.id !== item.id;
        });
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._deleteItemObservable.unsubscribe();
                resolve(true);
            }, () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicPickComponent
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicPickComponent
     */
    open() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('IonicPick is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            const modalOptions = {
                component: IonicPickModalComponent,
                componentProps: { selectComponent: self },
                backdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modalController.create(modalOptions).then(modal => {
                self._modal = modal;
                modal.present().then(() => {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                });
                modal.onWillDismiss().then(() => {
                    self._setIonItemHasFocus(false);
                });
                modal.onDidDismiss().then(event => {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                });
            });
        });
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicPickComponent
     */
    close() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('IonicPick is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(() => {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#clear).
     *
     * @memberof IonicPickComponent
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#confirm).
     *
     * @memberof IonicPickComponent
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicPickComponent
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            const hasItems = items && items.length;
            let itemsToToggle = this._groups.reduce((allItems, group) => {
                return allItems.concat(group.items);
            }, []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter((itemToToggle) => {
                    return items.find(item => {
                        return this._getItemValue(itemToToggle) === this._getItemValue(item);
                    }) !== undefined;
                });
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach((item) => {
                this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicPickComponent
     */
    scrollToTop() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicPick content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(() => {
                resolve(true);
            });
        });
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicPickComponent
     */
    scrollToBottom() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicPick content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(() => {
                resolve(true);
            });
        });
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#startsearch).
     *
     * @memberof IonicPickComponent
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#endsearch).
     *
     * @memberof IonicPickComponent
     */
    endSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/ceotrammell/ionic-pick/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicPickComponent
     */
    enableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicPickComponent
     */
    disableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicPickComponent
     */
    endInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicPickComponent
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#showloading).
     *
     * @memberof IonicPickComponent
     */
    showLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hideloading).
     *
     * @memberof IonicPickComponent
     */
    hideLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    }
    /**
     * Shows `ionicPickAddItemTemplate`.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicPickComponent
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    }
    /**
     * Hides `ionicPickAddItemTemplate`.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicPickComponent
     */
    hideAddItemTemplate() {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    }
}
IonicPickComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickComponent, deps: [{ token: i1.ModalController }, { token: i1.Platform }, { token: i1.IonItem, optional: true }, { token: i0.IterableDiffers }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
IonicPickComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickComponent, selector: "ionic-pick", inputs: { items: "items", isEnabled: "isEnabled", shouldBackdropClose: "shouldBackdropClose", modalCssClass: "modalCssClass", modalEnterAnimation: "modalEnterAnimation", modalLeaveAnimation: "modalLeaveAnimation", isConfirmButtonEnabled: "isConfirmButtonEnabled", hasConfirmButton: "hasConfirmButton", itemValueField: "itemValueField", itemTextField: "itemTextField", groupValueField: "groupValueField", groupTextField: "groupTextField", canSearch: "canSearch", isOnSearchEnabled: "isOnSearchEnabled", canClear: "canClear", hasInfiniteScroll: "hasInfiniteScroll", hasVirtualScroll: "hasVirtualScroll", virtualScrollApproxItemHeight: "virtualScrollApproxItemHeight", searchPlaceholder: "searchPlaceholder", placeholder: "placeholder", isMultiple: "isMultiple", searchFailText: "searchFailText", clearButtonText: "clearButtonText", addButtonText: "addButtonText", confirmButtonText: "confirmButtonText", closeButtonText: "closeButtonText", shouldFocusSearchbar: "shouldFocusSearchbar", headerColor: "headerColor", groupColor: "groupColor", closeButtonSlot: "closeButtonSlot", itemIconSlot: "itemIconSlot", searchDebounce: "searchDebounce", autoSearch: "autoSearch", disabledItems: "disabledItems", shouldStoreItemValue: "shouldStoreItemValue", canSaveItem: "canSaveItem", canDeleteItem: "canDeleteItem", canAddItem: "canAddItem", virtualScrollHeaderFn: "virtualScrollHeaderFn" }, outputs: { itemsChange: "itemsChange", onChange: "onChange", onSearch: "onSearch", onSearchFail: "onSearchFail", onSearchSuccess: "onSearchSuccess", onInfiniteScroll: "onInfiniteScroll", onOpen: "onOpen", onClose: "onClose", onSelect: "onSelect", onClear: "onClear", onSaveItem: "onSaveItem", onDeleteItem: "onDeleteItem", onAddItem: "onAddItem" }, host: { properties: { "class.ionic-pick": "this._cssClass", "class.ionic-pick-ios": "this._isIos", "class.ionic-pick-md": "this._isMD", "class.ionic-pick-is-multiple": "this._isMultipleCssClass", "class.ionic-pick-has-value": "this._hasValueCssClass", "class.ionic-pick-has-placeholder": "this._hasPlaceholderCssClass", "class.ionic-pick-has-label": "this._hasIonLabelCssClass", "class.ionic-pick-label-default": "this._hasDefaultIonLabelCssClass", "class.ionic-pick-label-fixed": "this._hasFixedIonLabelCssClass", "class.ionic-pick-label-stacked": "this._hasStackedIonLabelCssClass", "class.ionic-pick-label-floating": "this._hasFloatingIonLabelCssClass", "class.ionic-pick-is-enabled": "this.isEnabled", "class.ionic-pick-can-clear": "this.canClear" } }, providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => IonicPickComponent),
            multi: true
        }], queries: [{ propertyName: "valueTemplate", first: true, predicate: IonicPickValueTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemTemplate", first: true, predicate: IonicPickItemTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemEndTemplate", first: true, predicate: IonicPickItemEndTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "titleTemplate", first: true, predicate: IonicPickTitleTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "placeholderTemplate", first: true, predicate: IonicPickPlaceholderTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "messageTemplate", first: true, predicate: IonicPickMessageTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "groupTemplate", first: true, predicate: IonicPickGroupTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "groupEndTemplate", first: true, predicate: IonicPickGroupEndTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "closeButtonTemplate", first: true, predicate: IonicPickCloseButtonTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "searchFailTemplate", first: true, predicate: IonicPickSearchFailTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "addItemTemplate", first: true, predicate: IonicPickAddItemTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "footerTemplate", first: true, predicate: IonicPickFooterTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "headerTemplate", first: true, predicate: IonicPickHeaderTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemIconTemplate", first: true, predicate: IonicPickItemIconTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "iconTemplate", first: true, predicate: IonicPickIconTemplateDirective, descendants: true, read: TemplateRef }], ngImport: i0, template: "<div class=\"ionic-pick-inner\">\n  <div class=\"ionic-pick-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-pick-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-pick-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-pick-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-pick-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-pick-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-pick-icon\">\n    <div class=\"ionic-pick-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-pick-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n", styles: [".item-ionic-pick .item-inner .input-wrapper{align-items:normal}.item-ionic-pick ion-label{flex:1;max-width:initial}.ionic-pick{display:block;max-width:45%}.ionic-pick-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-pick-has-placeholder .ionic-pick-value-item{color:var(--placeholder-color, #999)}.ionic-pick-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-pick-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-pick-value-item:not(:last-child){margin-bottom:5px}.ionic-pick-icon{position:relative;width:20px}.ionic-pick-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color, #999)}.ionic-pick-icon-template{align-self:center;margin-left:5px}.ionic-pick-ios .ionic-pick-value{padding-top:11px;padding-bottom:11px}.ionic-pick-ios .ionic-pick-icon-inner{top:19px}.ionic-pick-spinner{position:fixed;inset:0;z-index:1}.ionic-pick-spinner-background{inset:0;position:absolute;background-color:#000;opacity:.05}.ionic-pick-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-pick-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;appearance:none;outline:0}.ionic-pick-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:var(--ion-background-color)}.ionic-pick-add-item-template-inner{overflow-y:auto}.ionic-pick-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-pick-label-stacked,.ionic-pick-label-floating{align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-pick-label-stacked .ionic-pick-value,.ionic-pick-label-floating .ionic-pick-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-pick-label-stacked .ionic-pick-icon-inner,.ionic-pick-label-floating .ionic-pick-icon-inner{top:7px}.ionic-pick-label-stacked.ionic-pick-ios .ionic-pick-value,.ionic-pick-label-floating.ionic-pick-ios .ionic-pick-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-pick-label-stacked.ionic-pick-ios .ionic-pick-icon-inner,.ionic-pick-label-floating.ionic-pick-ios .ionic-pick-icon-inner{top:8px}.ionic-pick-label-default .ionic-pick-value,.ionic-pick-label-fixed .ionic-pick-value{padding-left:var(--padding-start, 16px)}.ionic-pick-label-fixed:not(.ionic-pick-has-value) .ionic-pick-value{padding-left:calc(var(--padding-start, 16px) + 11px)}.ionic-pick-modal .ionic-pick-group ion-item-divider{padding-right:16px}.ionic-pick-modal .ionic-pick-item-button{margin-left:8px;margin-right:8px}.ionic-pick-modal-ios .ionic-pick-message{padding:8px}.ionic-pick-modal-ios .ionic-pick-group ion-item-divider{padding-right:8px}.ionic-pick-modal-md .ionic-pick-message{padding:8px 12px}.ionic-pick-modal.ionic-pick-modal-can-clear.ionic-pick-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-pick-modal.ionic-pick-modal-can-clear.ionic-pick-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-pick-modal.ionic-pick-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-pick-modal.ionic-pick-modal-is-add-item-template-visible>.content>.scroll-content{overflow-y:hidden}.ionic-pick-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ionic-pick', encapsulation: ViewEncapsulation.None, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => IonicPickComponent),
                            multi: true
                        }], template: "<div class=\"ionic-pick-inner\">\n  <div class=\"ionic-pick-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-pick-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-pick-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-pick-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-pick-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-pick-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-pick-icon\">\n    <div class=\"ionic-pick-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button class=\"ionic-pick-cover\" [disabled]=\"!isEnabled\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n", styles: [".item-ionic-pick .item-inner .input-wrapper{align-items:normal}.item-ionic-pick ion-label{flex:1;max-width:initial}.ionic-pick{display:block;max-width:45%}.ionic-pick-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-pick-has-placeholder .ionic-pick-value-item{color:var(--placeholder-color, #999)}.ionic-pick-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-pick-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-pick-value-item:not(:last-child){margin-bottom:5px}.ionic-pick-icon{position:relative;width:20px}.ionic-pick-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color, #999)}.ionic-pick-icon-template{align-self:center;margin-left:5px}.ionic-pick-ios .ionic-pick-value{padding-top:11px;padding-bottom:11px}.ionic-pick-ios .ionic-pick-icon-inner{top:19px}.ionic-pick-spinner{position:fixed;inset:0;z-index:1}.ionic-pick-spinner-background{inset:0;position:absolute;background-color:#000;opacity:.05}.ionic-pick-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-pick-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;-webkit-appearance:none;appearance:none;outline:0}.ionic-pick-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:var(--ion-background-color)}.ionic-pick-add-item-template-inner{overflow-y:auto}.ionic-pick-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-pick-label-stacked,.ionic-pick-label-floating{align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-pick-label-stacked .ionic-pick-value,.ionic-pick-label-floating .ionic-pick-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-pick-label-stacked .ionic-pick-icon-inner,.ionic-pick-label-floating .ionic-pick-icon-inner{top:7px}.ionic-pick-label-stacked.ionic-pick-ios .ionic-pick-value,.ionic-pick-label-floating.ionic-pick-ios .ionic-pick-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-pick-label-stacked.ionic-pick-ios .ionic-pick-icon-inner,.ionic-pick-label-floating.ionic-pick-ios .ionic-pick-icon-inner{top:8px}.ionic-pick-label-default .ionic-pick-value,.ionic-pick-label-fixed .ionic-pick-value{padding-left:var(--padding-start, 16px)}.ionic-pick-label-fixed:not(.ionic-pick-has-value) .ionic-pick-value{padding-left:calc(var(--padding-start, 16px) + 11px)}.ionic-pick-modal .ionic-pick-group ion-item-divider{padding-right:16px}.ionic-pick-modal .ionic-pick-item-button{margin-left:8px;margin-right:8px}.ionic-pick-modal-ios .ionic-pick-message{padding:8px}.ionic-pick-modal-ios .ionic-pick-group ion-item-divider{padding-right:8px}.ionic-pick-modal-md .ionic-pick-message{padding:8px 12px}.ionic-pick-modal.ionic-pick-modal-can-clear.ionic-pick-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-pick-modal.ionic-pick-modal-can-clear.ionic-pick-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-pick-modal.ionic-pick-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-pick-modal.ionic-pick-modal-is-add-item-template-visible>.content>.scroll-content{overflow-y:hidden}.ionic-pick-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.ModalController }, { type: i1.Platform }, { type: i1.IonItem, decorators: [{
                    type: Optional
                }] }, { type: i0.IterableDiffers }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { _cssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick']
            }], _isIos: [{
                type: HostBinding,
                args: ['class.ionic-pick-ios']
            }], _isMD: [{
                type: HostBinding,
                args: ['class.ionic-pick-md']
            }], _isMultipleCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-is-multiple']
            }], _hasValueCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-has-value']
            }], _hasPlaceholderCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-has-placeholder']
            }], _hasIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-has-label']
            }], _hasDefaultIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-label-default']
            }], _hasFixedIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-label-fixed']
            }], _hasStackedIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-label-stacked']
            }], _hasFloatingIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-label-floating']
            }], items: [{
                type: Input
            }], itemsChange: [{
                type: Output
            }], isEnabled: [{
                type: HostBinding,
                args: ['class.ionic-pick-is-enabled']
            }, {
                type: Input,
                args: ['isEnabled']
            }], shouldBackdropClose: [{
                type: Input,
                args: ['shouldBackdropClose']
            }], modalCssClass: [{
                type: Input
            }], modalEnterAnimation: [{
                type: Input
            }], modalLeaveAnimation: [{
                type: Input
            }], isConfirmButtonEnabled: [{
                type: Input
            }], hasConfirmButton: [{
                type: Input,
                args: ['hasConfirmButton']
            }], itemValueField: [{
                type: Input
            }], itemTextField: [{
                type: Input
            }], groupValueField: [{
                type: Input
            }], groupTextField: [{
                type: Input
            }], canSearch: [{
                type: Input
            }], isOnSearchEnabled: [{
                type: Input,
                args: ['isOnSearchEnabled']
            }], canClear: [{
                type: HostBinding,
                args: ['class.ionic-pick-can-clear']
            }, {
                type: Input,
                args: ['canClear']
            }], hasInfiniteScroll: [{
                type: Input
            }], hasVirtualScroll: [{
                type: Input
            }], virtualScrollApproxItemHeight: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], isMultiple: [{
                type: Input,
                args: ['isMultiple']
            }], searchFailText: [{
                type: Input
            }], clearButtonText: [{
                type: Input
            }], addButtonText: [{
                type: Input
            }], confirmButtonText: [{
                type: Input
            }], closeButtonText: [{
                type: Input
            }], shouldFocusSearchbar: [{
                type: Input
            }], headerColor: [{
                type: Input
            }], groupColor: [{
                type: Input
            }], closeButtonSlot: [{
                type: Input
            }], itemIconSlot: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onSearch: [{
                type: Output
            }], onSearchFail: [{
                type: Output
            }], onSearchSuccess: [{
                type: Output
            }], onInfiniteScroll: [{
                type: Output
            }], onOpen: [{
                type: Output
            }], onClose: [{
                type: Output
            }], onSelect: [{
                type: Output
            }], onClear: [{
                type: Output
            }], searchDebounce: [{
                type: Input
            }], autoSearch: [{
                type: Input
            }], disabledItems: [{
                type: Input
            }], shouldStoreItemValue: [{
                type: Input
            }], canSaveItem: [{
                type: Input
            }], canDeleteItem: [{
                type: Input
            }], canAddItem: [{
                type: Input,
                args: ['canAddItem']
            }], onSaveItem: [{
                type: Output
            }], onDeleteItem: [{
                type: Output
            }], onAddItem: [{
                type: Output
            }], valueTemplate: [{
                type: ContentChild,
                args: [IonicPickValueTemplateDirective, { read: TemplateRef }]
            }], itemTemplate: [{
                type: ContentChild,
                args: [IonicPickItemTemplateDirective, { read: TemplateRef }]
            }], itemEndTemplate: [{
                type: ContentChild,
                args: [IonicPickItemEndTemplateDirective, { read: TemplateRef }]
            }], titleTemplate: [{
                type: ContentChild,
                args: [IonicPickTitleTemplateDirective, { read: TemplateRef }]
            }], placeholderTemplate: [{
                type: ContentChild,
                args: [IonicPickPlaceholderTemplateDirective, { read: TemplateRef }]
            }], messageTemplate: [{
                type: ContentChild,
                args: [IonicPickMessageTemplateDirective, { read: TemplateRef }]
            }], groupTemplate: [{
                type: ContentChild,
                args: [IonicPickGroupTemplateDirective, { read: TemplateRef }]
            }], groupEndTemplate: [{
                type: ContentChild,
                args: [IonicPickGroupEndTemplateDirective, { read: TemplateRef }]
            }], closeButtonTemplate: [{
                type: ContentChild,
                args: [IonicPickCloseButtonTemplateDirective, { read: TemplateRef }]
            }], searchFailTemplate: [{
                type: ContentChild,
                args: [IonicPickSearchFailTemplateDirective, { read: TemplateRef }]
            }], addItemTemplate: [{
                type: ContentChild,
                args: [IonicPickAddItemTemplateDirective, { read: TemplateRef }]
            }], footerTemplate: [{
                type: ContentChild,
                args: [IonicPickFooterTemplateDirective, { read: TemplateRef }]
            }], headerTemplate: [{
                type: ContentChild,
                args: [IonicPickHeaderTemplateDirective, { read: TemplateRef }]
            }], itemIconTemplate: [{
                type: ContentChild,
                args: [IonicPickItemIconTemplateDirective, { read: TemplateRef }]
            }], iconTemplate: [{
                type: ContentChild,
                args: [IonicPickIconTemplateDirective, { read: TemplateRef }]
            }], virtualScrollHeaderFn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtcGljay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9pb25pYy1waWNrLWFuZ3VsYXIvc3JjL2xpYi9pb25pYy1waWNrLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL2lvbmljLXBpY2stYW5ndWxhci9zcmMvbGliL2lvbmljLXBpY2suY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFXLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWtCLGVBQWUsRUFBVSxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDak8sT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25HLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBYXRGLE1BQU0sT0FBTyxrQkFBa0I7SUF5d0I3QixZQUNVLGdCQUFpQyxFQUNqQyxTQUFtQixFQUNQLE9BQWdCLEVBQzVCLGdCQUFpQyxFQUNqQyxRQUFvQixFQUNwQixTQUFvQjtRQUxwQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDUCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQzVCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBN3dCOUIsY0FBUyxHQUFHLElBQUksQ0FBQztRQXFDVCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQVEsSUFBSSxDQUFDO1FBSW5CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBR3BCLGtCQUFhLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsc0JBQWlCLEdBQXdELElBQUksQ0FBQztRQUM5RSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBUTVCLGdCQUFXLEdBQVUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFlBQU8sR0FBVSxFQUFFLENBQUM7UUFDcEIsb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFDNUIsbUJBQWMsR0FBVSxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7UUFJNUIsOEJBQXlCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixlQUFVLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4QixzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUE2RTFCOzs7Ozs7V0FNRztRQUVILFVBQUssR0FBVSxFQUFFLENBQUM7UUFFbEIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWtDcEQ7Ozs7OztXQU1HO1FBRUgsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFrQzNCOzs7Ozs7V0FNRztRQUVILDJCQUFzQixHQUFHLElBQUksQ0FBQztRQW9COUI7Ozs7Ozs7V0FPRztRQUVILG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBRTVCOzs7Ozs7O1dBT0c7UUFFSCxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQjs7Ozs7Ozs7V0FRRztRQUVILG9CQUFlLEdBQVcsRUFBRSxDQUFDO1FBRTdCOzs7Ozs7O1FBT0E7UUFFQSxtQkFBYyxHQUFXLEVBQUUsQ0FBQztRQUU1Qjs7Ozs7O1dBTUc7UUFFSCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBa0NsQjs7Ozs7OztXQU9HO1FBRUgsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRTFCOzs7Ozs7O1dBT0c7UUFFSCxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFFekI7Ozs7OztXQU1HO1FBRUgsa0NBQTZCLEdBQUcsTUFBTSxDQUFDO1FBRXZDOzs7Ozs7V0FNRztRQUVILHNCQUFpQixHQUFHLFFBQVEsQ0FBQztRQUU3Qjs7Ozs7O1dBTUc7UUFFSCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQWtCekI7Ozs7OztXQU1HO1FBRUgsbUJBQWMsR0FBRyxpQkFBaUIsQ0FBQztRQUVuQzs7Ozs7O1dBTUc7UUFFSCxvQkFBZSxHQUFHLE9BQU8sQ0FBQztRQUUxQjs7Ozs7O1dBTUc7UUFFSCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUV0Qjs7Ozs7O1dBTUc7UUFFSCxzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFekI7Ozs7Ozs7V0FPRztRQUVILG9CQUFlLEdBQUcsUUFBUSxDQUFDO1FBRTNCOzs7Ozs7V0FNRztRQUVILHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUU3Qjs7Ozs7O1dBTUc7UUFFSCxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUV6Qjs7Ozs7O1dBTUc7UUFFSCxlQUFVLEdBQVcsRUFBRSxDQUFDO1FBRXhCOzs7Ozs7V0FNRztRQUVILG9CQUFlLEdBQUcsT0FBTyxDQUFDO1FBRTFCOzs7Ozs7V0FNRztRQUVILGlCQUFZLEdBQUcsT0FBTyxDQUFDO1FBRXZCOzs7OztXQUtHO1FBRUgsYUFBUSxHQUFnRSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTNGOzs7Ozs7V0FNRztRQUVILGFBQVEsR0FBa0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3Rjs7Ozs7V0FLRztRQUVILGlCQUFZLEdBQWtFLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakc7Ozs7O1dBS0c7UUFFSCxvQkFBZSxHQUFrRSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBHOzs7Ozs7V0FNRztRQUVILHFCQUFnQixHQUFrRSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXJHOzs7OztXQUtHO1FBRUgsV0FBTSxHQUFvRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTdFOzs7OztXQUtHO1FBRUgsWUFBTyxHQUFvRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlFOzs7OztXQUtHO1FBRUgsYUFBUSxHQUFvRixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRS9HOzs7OztXQUtHO1FBRUgsWUFBTyxHQUFrRSxJQUFJLFlBQVksRUFBRSxDQUFDO1FBZTVGOzs7Ozs7V0FNRztRQUVILG1CQUFjLEdBQVcsR0FBRyxDQUFDO1FBRTdCOzs7Ozs7O1dBT0c7UUFFSCxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCOzs7Ozs7V0FNRztRQUVILGtCQUFhLEdBQVUsRUFBRSxDQUFDO1FBRTFCOzs7Ozs7O1dBT0c7UUFFSCx5QkFBb0IsR0FBRyxLQUFLLENBQUM7UUFFN0I7Ozs7OztXQU1HO1FBRUgsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFFcEI7Ozs7OztXQU1HO1FBRUgsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFrQnRCOzs7Ozs7O1dBT0c7UUFFSCxlQUFVLEdBQStELElBQUksWUFBWSxFQUFFLENBQUM7UUFFNUY7Ozs7OztXQU1HO1FBRUgsaUJBQVksR0FBK0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5Rjs7Ozs7OztXQU9HO1FBRUgsY0FBUyxHQUFvRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBa0NoRjs7Ozs7V0FLRztRQUVILDBCQUFxQixHQUFHLEdBQUcsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQTtRQThlTyxzQkFBaUIsR0FBRyxDQUFDLENBQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLHVCQUFrQixHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQXJlckMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDdEUsQ0FBQztJQS93QkQsSUFDSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxJQUNJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0QsSUFDSSx1QkFBdUI7UUFDekIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFDRCxJQUNJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUNELElBQ0ksMkJBQTJCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBQ0QsSUFDSSx5QkFBeUI7UUFDM0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLEtBQUssT0FBTyxDQUFDO0lBQzVDLENBQUM7SUFDRCxJQUNJLDJCQUEyQjtRQUM3QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUM7SUFDOUMsQ0FBQztJQUNELElBQ0ksNEJBQTRCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixLQUFLLFVBQVUsQ0FBQztJQUMvQyxDQUFDO0lBcUJELElBQVksa0JBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZTtZQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEQsQ0FBQztJQUNELElBQUkscUJBQXFCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQztJQWtCRDs7Ozs7OztPQU9HO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUFrQjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztRQUM5QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFVO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXBCLG1CQUFtQjtRQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDekIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDckQ7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDOUI7U0FDRjtRQUVELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFjRDs7Ozs7O09BTUc7SUFDSCxJQUVJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksU0FBUyxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFDSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDbkMsQ0FBQztJQUNELElBQUksbUJBQW1CLENBQUMsbUJBQTRCO1FBQ2xELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQUMsbUJBQW1CLENBQUM7SUFDcEQsQ0FBQztJQWdDRDs7Ozs7OztPQU9HO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFZRDs7Ozs7Ozs7S0FRQztJQUNELElBQ0ksZ0JBQWdCO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFDRCxJQUFJLGdCQUFnQixDQUFDLGdCQUF5QjtRQUM1QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQzVDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUF5REQ7Ozs7OztPQU1HO0lBQ0gsSUFDSSxpQkFBaUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksaUJBQWlCLENBQUMsaUJBQTBCO1FBQzlDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBRUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsUUFBaUI7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFzREQ7Ozs7OztPQU1HO0lBQ0gsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLFVBQVUsQ0FBQyxVQUFtQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQTBMRDs7Ozs7Ozs7T0FRRztJQUNILElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQWdFRDs7Ozs7O09BTUc7SUFDSCxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQUksVUFBVSxDQUFDLFVBQW1CO1FBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBNEZELFNBQVMsS0FBSyxDQUFDO0lBRWYsYUFBYSxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFVO1FBQzVCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCwrQ0FBK0M7UUFDL0MsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixTQUFTLEVBQUUsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1NBQ3ZCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBUyxFQUFFLFVBQW1CO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsVUFBVTtTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVk7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDaEIsU0FBUyxFQUFFLElBQUk7WUFDZixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxTQUFrQjtRQUMzQyxNQUFNLFNBQVMsR0FBRztZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztTQUN2QixDQUFDO1FBRUYsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3hCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLDJEQUEyRDtZQUMzRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFTO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELG1CQUFtQixDQUFDLElBQVM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGlCQUFpQjtRQUNmLHlEQUF5RDtRQUN6RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixtQ0FBbUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxxQkFBcUI7WUFDckIsSUFBSSxNQUFNLEdBQWUsRUFBRSxDQUFDO1lBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDakQsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdkI7aUJBQU07Z0JBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7d0JBQzdDLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQzt3QkFDNUQsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxDQUFDLENBQUMsQ0FBQztvQkFFSCxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUM7NEJBQ1YsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLOzRCQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7NEJBQ2hCLEtBQUssRUFBRSxLQUFLO3lCQUNiLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxrQkFBa0I7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNWLEtBQUssRUFBRSxFQUFFO3FCQUNWLENBQUMsQ0FBQztpQkFDSjthQUNGO1lBRUQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7WUFDOUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2hELENBQUM7SUFFRCxlQUFlLENBQUMsSUFBUztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxlQUFlLENBQUMsSUFBUztRQUN2QixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0UsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFTO1FBQ3hCLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBUztRQUMzQixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsRUFBRTtZQUN0RCxJQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO2dCQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEVBQ3RDO2dCQUNBLGlCQUFpQixHQUFHLFNBQVMsQ0FBQzthQUMvQjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDZixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBWSxFQUFFLElBQVM7UUFDL0IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUNuQixTQUFTLEVBQUUsSUFBSTtnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDdEIsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQVksRUFBRSxJQUFTO1FBQ3RDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQzNCLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDckIsU0FBUyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQ3RCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCx3QkFBd0I7UUFDdEIsbUNBQW1DO1FBQ25DLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxhQUFhO2lCQUN2RCxhQUFhLENBQUMsMENBQTBDLENBQUMsQ0FBQztZQUU3RCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUFlLE1BQU0sQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2hHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUUxQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2dCQUNoQixTQUFTLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztZQUN6QixTQUFTLEVBQUUsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsS0FBWTtRQUM3QixJQUFJLFVBQVUsR0FBZSxFQUFFLENBQUM7UUFDaEMsMkVBQTJFO1FBQzNFLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsU0FBUyxDQUFDLFlBQWlCO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBUztRQUNmLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksY0FBYyxFQUFFO2dCQUNsQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDaEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzdCO1lBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUU3QywyRUFBMkU7WUFDM0Usb0JBQW9CO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ2hELHdEQUF3RDtnQkFDeEQsb0VBQW9FO2dCQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztnQkFFekIsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDaEM7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM3QjtnQkFFRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUU3QywyRUFBMkU7Z0JBQzNFLG9CQUFvQjtnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxFQUFFO29CQUNuQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUU1QixpQ0FBaUM7b0JBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUUvQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTt3QkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7cUJBQzFDO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3RCO2lCQUNGO2dCQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sYUFBYTtRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7SUFFTyxlQUFlLENBQUMsTUFBVztRQUNqQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sbUJBQW1CO1FBQ3pCLElBQUksa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixrQkFBa0IsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUM3QyxrQkFBa0IsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLGtCQUFrQixFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsa0JBQWtCLENBQUM7SUFDaEQsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFZO1FBQzVCLHFGQUFxRjtRQUNyRixrREFBa0Q7UUFDbEQsMkRBQTJEO1FBQzNELElBQUksTUFBTSxHQUFVLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxLQUFLLElBQUksRUFBRTthQUNuQixDQUFDLENBQUM7UUFFSCxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFWixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFDbkUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDO29CQUU3RCxJQUFJLEtBQUssRUFBRTt3QkFDVCxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDeEI7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQzs0QkFDVixLQUFLLEVBQUUsVUFBVTs0QkFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQzs0QkFDdkQsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO3lCQUNkLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxRQUFnQjtRQUNyRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEVBQUU7WUFDdkQsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTyxtQkFBbUIsQ0FBQyxRQUFpQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxtRUFBbUU7UUFDbkUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxtQkFBbUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTztTQUNSO1FBRUQsbUVBQW1FO1FBQ25FLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sa0JBQWtCO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDM0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUtPLG1CQUFtQixDQUFDLFFBQWdCLEVBQUUsU0FBa0I7UUFDOUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDekIsT0FBTztTQUNSO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7SUFFTyxzQkFBc0IsQ0FBQyxTQUFrQjtRQUMvQyw2REFBNkQ7UUFDN0QsbUVBQW1FO1FBQ25FLGdGQUFnRjtRQUNoRixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFFRCw0RUFBNEU7UUFDNUUsNEVBQTRFO1FBQzVFLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxTQUFTLENBQUM7UUFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQVc7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztJQUNsQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBa0I7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQ0QsMkJBQTJCO0lBRTNCLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xFLDBDQUEwQztRQUMxQywrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFOUYsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFbEQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXhFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO29CQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztvQkFDekIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksU0FBUyxDQUFDO2lCQUN0RjthQUNGO1NBQ0Y7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsU0FBUztRQUNQLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4RCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFFeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7Z0JBQ3RCLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsT0FBTyxDQUFDLElBQVM7UUFDZixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsc0NBQXNDO1FBQ3RDLDhEQUE4RDtRQUM5RCwwRUFBMEU7UUFDMUUsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpCLGtDQUFrQztRQUNsQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsaURBQWlEO1lBQ2pELGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUN6RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLEVBQUUsR0FBRyxFQUFFO2dCQUNOLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEMsTUFBTSxFQUFFLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7OztLQVFDO0lBQ0QsVUFBVSxDQUFDLElBQVM7UUFDbEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksZUFBZSxHQUFHLEtBQUssQ0FBQztRQUU1QiwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELGtDQUFrQztRQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ25CLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7b0JBQzlDLE9BQU8sS0FBSyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUNwQixlQUFlLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjthQUNGO2lCQUFNO2dCQUNMLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUNsQixlQUFlLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjthQUNGO1NBQ0Y7UUFFRCxJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUN6QjtRQUVELGlDQUFpQztRQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN0QyxPQUFPLEtBQUssQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILHFDQUFxQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUN0QixTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDLENBQUM7UUFFSCxrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzFDO1FBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO1lBQzFDLGlEQUFpRDtZQUNqRCxpREFBaUQ7WUFDakQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDNUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxFQUFFLEdBQUcsRUFBRTtnQkFDTixJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ3pDLE1BQU0sRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDdEMsTUFBTSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7Z0JBQ25ELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUV0QixNQUFNLFlBQVksR0FBaUI7Z0JBQ2pDLFNBQVMsRUFBRSx1QkFBdUI7Z0JBQ2xDLGNBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUU7Z0JBQ3pDLGVBQWUsRUFBRSxJQUFJLENBQUMsb0JBQW9CO2FBQzNDLENBQUM7WUFFRixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3RCLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzthQUM1QztZQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM1QixZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzthQUN4RDtZQUVELElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO2dCQUM1QixZQUFZLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQzthQUN4RDtZQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ3hCLDZFQUE2RTtvQkFDN0Usd0JBQXdCO29CQUN4QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQy9CLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO2dCQUVILEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztvQkFFMUIsZ0RBQWdEO29CQUNoRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssVUFBVSxFQUFFO3dCQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDaEIsU0FBUyxFQUFFLElBQUk7eUJBQ2hCLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsS0FBSztRQUNILE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QyxNQUFNLENBQUMsMENBQTBDLENBQUMsQ0FBQztnQkFDbkQsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsV0FBVyxDQUFDLFFBQWlCLEVBQUUsS0FBYTtRQUMxQyxJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sUUFBUSxHQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMxRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVQLGtEQUFrRDtZQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakMsYUFBYSxHQUFHLEVBQUUsQ0FBQzthQUNwQjtZQUVELHlCQUF5QjtZQUN6QixJQUFJLFFBQVEsRUFBRTtnQkFDWixhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQWlCLEVBQUUsRUFBRTtvQkFDekQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDdkUsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQztnQkFFSCx1Q0FBdUM7Z0JBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDNUI7YUFDRjtZQUVELGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsV0FBVztRQUNULE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ25CLE1BQU0sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2dCQUNoRCxPQUFPO2FBQ1I7WUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNwRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxjQUFjO1FBQ1osTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7Z0JBQ2hELE9BQU87YUFDUjtZQUVELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFNBQVM7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFbkIsc0RBQXNEO1FBQ3RELG9FQUFvRTtRQUNwRSwyREFBMkQ7UUFDM0QsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFCQUFxQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxJQUFZO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDMUQsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsQywrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CO1FBQ2pCLGtGQUFrRjtRQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7K0dBOXlEVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix5OUVBTmxCLENBQUM7WUFDVixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsa0JBQWtCLENBQUM7WUFDakQsS0FBSyxFQUFFLElBQUk7U0FDWixDQUFDLHFFQWd1QlksK0JBQStCLDJCQUFVLFdBQVcsNERBRXBELDhCQUE4QiwyQkFBVSxXQUFXLCtEQUVuRCxpQ0FBaUMsMkJBQVUsV0FBVyw2REFFdEQsK0JBQStCLDJCQUFVLFdBQVcsbUVBRXBELHFDQUFxQywyQkFBVSxXQUFXLCtEQUUxRCxpQ0FBaUMsMkJBQVUsV0FBVyw2REFFdEQsK0JBQStCLDJCQUFVLFdBQVcsZ0VBRXBELGtDQUFrQywyQkFBVSxXQUFXLG1FQUV2RCxxQ0FBcUMsMkJBQVUsV0FBVyxrRUFFMUQsb0NBQW9DLDJCQUFVLFdBQVcsK0RBRXpELGlDQUFpQywyQkFBVSxXQUFXLDhEQUV0RCxnQ0FBZ0MsMkJBQVUsV0FBVyw4REFHckQsZ0NBQWdDLDJCQUFVLFdBQVcsZ0VBRXJELGtDQUFrQywyQkFBVSxXQUFXLDREQUV2RCw4QkFBOEIsMkJBQVUsV0FBVyw2QkM3eEJuRSxvb0RBeUNBOzJGRFBhLGtCQUFrQjtrQkFYOUIsU0FBUzsrQkFDRSxZQUFZLGlCQUdQLGlCQUFpQixDQUFDLElBQUksYUFDMUIsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxtQkFBbUIsQ0FBQzs0QkFDakQsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQzs7MEJBOHdCQyxRQUFROzJIQTF3QlgsU0FBUztzQkFEUixXQUFXO3VCQUFDLGtCQUFrQjtnQkFHL0IsTUFBTTtzQkFETCxXQUFXO3VCQUFDLHNCQUFzQjtnQkFHbkMsS0FBSztzQkFESixXQUFXO3VCQUFDLHFCQUFxQjtnQkFHOUIsbUJBQW1CO3NCQUR0QixXQUFXO3VCQUFDLDhCQUE4QjtnQkFLdkMsaUJBQWlCO3NCQURwQixXQUFXO3VCQUFDLDRCQUE0QjtnQkFLckMsdUJBQXVCO3NCQUQxQixXQUFXO3VCQUFDLGtDQUFrQztnQkFLM0Msb0JBQW9CO3NCQUR2QixXQUFXO3VCQUFDLDRCQUE0QjtnQkFLckMsMkJBQTJCO3NCQUQ5QixXQUFXO3VCQUFDLGdDQUFnQztnQkFLekMseUJBQXlCO3NCQUQ1QixXQUFXO3VCQUFDLDhCQUE4QjtnQkFLdkMsMkJBQTJCO3NCQUQ5QixXQUFXO3VCQUFDLGdDQUFnQztnQkFLekMsNEJBQTRCO3NCQUQvQixXQUFXO3VCQUFDLGlDQUFpQztnQkFtSTlDLEtBQUs7c0JBREosS0FBSztnQkFHTixXQUFXO3NCQURWLE1BQU07Z0JBWUgsU0FBUztzQkFGWixXQUFXO3VCQUFDLDZCQUE2Qjs7c0JBQ3pDLEtBQUs7dUJBQUMsV0FBVztnQkFpQmQsbUJBQW1CO3NCQUR0QixLQUFLO3VCQUFDLHFCQUFxQjtnQkFnQjVCLGFBQWE7c0JBRFosS0FBSztnQkFXTixtQkFBbUI7c0JBRGxCLEtBQUs7Z0JBV04sbUJBQW1CO3NCQURsQixLQUFLO2dCQXVCTixzQkFBc0I7c0JBRHJCLEtBQUs7Z0JBYUYsZ0JBQWdCO3NCQURuQixLQUFLO3VCQUFDLGtCQUFrQjtnQkFrQnpCLGNBQWM7c0JBRGIsS0FBSztnQkFZTixhQUFhO3NCQURaLEtBQUs7Z0JBYU4sZUFBZTtzQkFEZCxLQUFLO2dCQVlOLGNBQWM7c0JBRGIsS0FBSztnQkFXTixTQUFTO3NCQURSLEtBQUs7Z0JBV0YsaUJBQWlCO3NCQURwQixLQUFLO3VCQUFDLG1CQUFtQjtnQkFpQnRCLFFBQVE7c0JBRlgsV0FBVzt1QkFBQyw0QkFBNEI7O3NCQUN4QyxLQUFLO3VCQUFDLFVBQVU7Z0JBa0JqQixpQkFBaUI7c0JBRGhCLEtBQUs7Z0JBWU4sZ0JBQWdCO3NCQURmLEtBQUs7Z0JBV04sNkJBQTZCO3NCQUQ1QixLQUFLO2dCQVdOLGlCQUFpQjtzQkFEaEIsS0FBSztnQkFXTixXQUFXO3NCQURWLEtBQUs7Z0JBV0YsVUFBVTtzQkFEYixLQUFLO3VCQUFDLFlBQVk7Z0JBaUJuQixjQUFjO3NCQURiLEtBQUs7Z0JBV04sZUFBZTtzQkFEZCxLQUFLO2dCQVdOLGFBQWE7c0JBRFosS0FBSztnQkFXTixpQkFBaUI7c0JBRGhCLEtBQUs7Z0JBWU4sZUFBZTtzQkFEZCxLQUFLO2dCQVdOLG9CQUFvQjtzQkFEbkIsS0FBSztnQkFXTixXQUFXO3NCQURWLEtBQUs7Z0JBV04sVUFBVTtzQkFEVCxLQUFLO2dCQVdOLGVBQWU7c0JBRGQsS0FBSztnQkFXTixZQUFZO3NCQURYLEtBQUs7Z0JBVU4sUUFBUTtzQkFEUCxNQUFNO2dCQVdQLFFBQVE7c0JBRFAsTUFBTTtnQkFVUCxZQUFZO3NCQURYLE1BQU07Z0JBVVAsZUFBZTtzQkFEZCxNQUFNO2dCQVdQLGdCQUFnQjtzQkFEZixNQUFNO2dCQVVQLE1BQU07c0JBREwsTUFBTTtnQkFVUCxPQUFPO3NCQUROLE1BQU07Z0JBVVAsUUFBUTtzQkFEUCxNQUFNO2dCQVVQLE9BQU87c0JBRE4sTUFBTTtnQkF3QlAsY0FBYztzQkFEYixLQUFLO2dCQVlOLFVBQVU7c0JBRFQsS0FBSztnQkFXTixhQUFhO3NCQURaLEtBQUs7Z0JBWU4sb0JBQW9CO3NCQURuQixLQUFLO2dCQVdOLFdBQVc7c0JBRFYsS0FBSztnQkFXTixhQUFhO3NCQURaLEtBQUs7Z0JBV0YsVUFBVTtzQkFEYixLQUFLO3VCQUFDLFlBQVk7Z0JBa0JuQixVQUFVO3NCQURULE1BQU07Z0JBV1AsWUFBWTtzQkFEWCxNQUFNO2dCQVlQLFNBQVM7c0JBRFIsTUFBTTtnQkFJUCxhQUFhO3NCQURaLFlBQVk7dUJBQUMsK0JBQStCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUdwRSxZQUFZO3NCQURYLFlBQVk7dUJBQUMsOEJBQThCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUduRSxlQUFlO3NCQURkLFlBQVk7dUJBQUMsaUNBQWlDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUd0RSxhQUFhO3NCQURaLFlBQVk7dUJBQUMsK0JBQStCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUdwRSxtQkFBbUI7c0JBRGxCLFlBQVk7dUJBQUMscUNBQXFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUcxRSxlQUFlO3NCQURkLFlBQVk7dUJBQUMsaUNBQWlDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUd0RSxhQUFhO3NCQURaLFlBQVk7dUJBQUMsK0JBQStCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUdwRSxnQkFBZ0I7c0JBRGYsWUFBWTt1QkFBQyxrQ0FBa0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBR3ZFLG1CQUFtQjtzQkFEbEIsWUFBWTt1QkFBQyxxQ0FBcUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBRzFFLGtCQUFrQjtzQkFEakIsWUFBWTt1QkFBQyxvQ0FBb0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBR3pFLGVBQWU7c0JBRGQsWUFBWTt1QkFBQyxpQ0FBaUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBR3RFLGNBQWM7c0JBRGIsWUFBWTt1QkFBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBSXJFLGNBQWM7c0JBRGIsWUFBWTt1QkFBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Z0JBR3JFLGdCQUFnQjtzQkFEZixZQUFZO3VCQUFDLGtDQUFrQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHdkUsWUFBWTtzQkFEWCxZQUFZO3VCQUFDLDhCQUE4QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFVbkUscUJBQXFCO3NCQURwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxyXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsIEl0ZXJhYmxlRGlmZmVyLCBJdGVyYWJsZURpZmZlcnMsIE9uSW5pdCwgT3B0aW9uYWwsIE91dHB1dCwgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJb25JdGVtLCBNb2RhbENvbnRyb2xsZXIsIFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBBbmltYXRpb25CdWlsZGVyLCBNb2RhbE9wdGlvbnMgfSBmcm9tICdAaW9uaWMvY29yZSc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJb25pY1BpY2tBZGRJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stYWRkLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW9uaWNQaWNrQ2xvc2VCdXR0b25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1jbG9zZS1idXR0b24tdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW9uaWNQaWNrRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElvbmljUGlja0dyb3VwRW5kVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stZ3JvdXAtZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElvbmljUGlja0dyb3VwVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stZ3JvdXAtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW9uaWNQaWNrSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2staGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElvbmljUGlja0l0ZW1FbmRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1pdGVtLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJb25pY1BpY2tJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLWl0ZW0taWNvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJb25pY1BpY2tJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2staXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJb25pY1BpY2tNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stbWVzc2FnZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJb25pY1BpY2tNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtcGljay1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJb25pY1BpY2tQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLXBsYWNlaG9sZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElvbmljUGlja1NlYXJjaEZhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1zZWFyY2gtZmFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJb25pY1BpY2tUaXRsZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLXRpdGxlLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IElvbmljUGlja1ZhbHVlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stdmFsdWUtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSW9uaWNQaWNrSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLWljb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW9uaWMtcGljaycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lvbmljLXBpY2suY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2lvbmljLXBpY2suY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByb3ZpZGVyczogW3tcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uaWNQaWNrQ29tcG9uZW50KSxcclxuICAgIG11bHRpOiB0cnVlXHJcbiAgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIElvbmljUGlja0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIERvQ2hlY2sge1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtcGljaycpXHJcbiAgX2Nzc0NsYXNzID0gdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXBpY2staW9zJylcclxuICBfaXNJb3M6IGJvb2xlYW47XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1waWNrLW1kJylcclxuICBfaXNNRDogYm9vbGVhbjtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXBpY2staXMtbXVsdGlwbGUnKVxyXG4gIGdldCBfaXNNdWx0aXBsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNNdWx0aXBsZTtcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1waWNrLWhhcy12YWx1ZScpXHJcbiAgZ2V0IF9oYXNWYWx1ZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaGFzVmFsdWUoKTtcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1waWNrLWhhcy1wbGFjZWhvbGRlcicpXHJcbiAgZ2V0IF9oYXNQbGFjZWhvbGRlckNzc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhc1BsYWNlaG9sZGVyO1xyXG4gIH1cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXBpY2staGFzLWxhYmVsJylcclxuICBnZXQgX2hhc0lvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzSW9uTGFiZWw7XHJcbiAgfVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtcGljay1sYWJlbC1kZWZhdWx0JylcclxuICBnZXQgX2hhc0RlZmF1bHRJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsUG9zaXRpb24gPT09ICdkZWZhdWx0JztcclxuICB9XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1waWNrLWxhYmVsLWZpeGVkJylcclxuICBnZXQgX2hhc0ZpeGVkSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZml4ZWQnO1xyXG4gIH1cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXBpY2stbGFiZWwtc3RhY2tlZCcpXHJcbiAgZ2V0IF9oYXNTdGFja2VkSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnc3RhY2tlZCc7XHJcbiAgfVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtcGljay1sYWJlbC1mbG9hdGluZycpXHJcbiAgZ2V0IF9oYXNGbG9hdGluZ0lvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ2Zsb2F0aW5nJztcclxuICB9XHJcbiAgcHJpdmF0ZSBfaXNPblNlYXJjaEVuYWJsZWQgPSB0cnVlO1xyXG4gIHByaXZhdGUgX2lzRW5hYmxlZCA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfc2hvdWxkQmFja2Ryb3BDbG9zZSA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfaXNPcGVuZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF92YWx1ZTogYW55ID0gbnVsbDtcclxuICBwcml2YXRlIF9tb2RhbDogSFRNTElvbk1vZGFsRWxlbWVudDtcclxuICBwcml2YXRlIF9pdGVtc0RpZmZlcjogSXRlcmFibGVEaWZmZXI8YW55PjtcclxuICBwcml2YXRlIF9oYXNPYmplY3RzOiBib29sZWFuO1xyXG4gIHByaXZhdGUgX2NhbkNsZWFyID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfaGFzQ29uZmlybUJ1dHRvbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2lzTXVsdGlwbGUgPSBmYWxzZTtcclxuICBwcml2YXRlIF9jYW5BZGRJdGVtID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYWRkSXRlbU9ic2VydmFibGU6IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF9kZWxldGVJdGVtT2JzZXJ2YWJsZTogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgb25JdGVtc0NoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHJpdmF0ZSBfaW9uSXRlbUVsZW1lbnQ6IGFueTtcclxuICBwcml2YXRlIF9pb25MYWJlbEVsZW1lbnQ6IGFueTtcclxuICBwcml2YXRlIF9oYXNJb25MYWJlbCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2lvbkxhYmVsUG9zaXRpb246ICdmaXhlZCcgfCAnc3RhY2tlZCcgfCAnZmxvYXRpbmcnIHwgJ2RlZmF1bHQnIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIHByaXZhdGUgZ2V0IF9oYXNJbmZpbml0ZVNjcm9sbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzRW5hYmxlZCAmJiB0aGlzLl9tb2RhbENvbXBvbmVudCAmJlxyXG4gICAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwgPyB0cnVlIDogZmFsc2U7XHJcbiAgfVxyXG4gIGdldCBfc2hvdWxkU3RvcmVJdGVtVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG91bGRTdG9yZUl0ZW1WYWx1ZSAmJiB0aGlzLl9oYXNPYmplY3RzO1xyXG4gIH1cclxuICBfdmFsdWVJdGVtczogYW55W10gPSBbXTtcclxuICBfc2VhcmNoVGV4dCA9ICcnO1xyXG4gIF9oYXNTZWFyY2hUZXh0ID0gZmFsc2U7XHJcbiAgX2dyb3VwczogYW55W10gPSBbXTtcclxuICBfaXRlbXNUb0NvbmZpcm06IGFueVtdID0gW107XHJcbiAgX3NlbGVjdGVkSXRlbXM6IGFueVtdID0gW107XHJcbiAgX21vZGFsQ29tcG9uZW50OiBJb25pY1BpY2tNb2RhbENvbXBvbmVudDtcclxuICBfZmlsdGVyZWRHcm91cHM6IGFueVtdID0gW107XHJcbiAgX2hhc0dyb3VwczogYm9vbGVhbjtcclxuICBfaXNTZWFyY2hpbmc6IGJvb2xlYW47XHJcbiAgX2hhc1BsYWNlaG9sZGVyOiBib29sZWFuO1xyXG4gIF9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBmYWxzZTtcclxuICBfaXNGb290ZXJWaXNpYmxlID0gdHJ1ZTtcclxuICBfaXRlbVRvQWRkOiBhbnkgPSBudWxsO1xyXG4gIF9mb290ZXJCdXR0b25zQ291bnQgPSAwO1xyXG4gIF9oYXNGaWx0ZXJlZEl0ZW1zID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRleHQgb2YgW0lvbmljIExhYmVsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9sYWJlbCkuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2xhYmVsKS5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZXh0IHRoYXQgdGhlIHVzZXIgaGFzIHR5cGVkIGluIFNlYXJjaGJhci5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNodGV4dCkuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAZGVmYXVsdCAnJ1xyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBnZXQgc2VhcmNoVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFRleHQ7XHJcbiAgfVxyXG4gIHNldCBzZWFyY2hUZXh0KHNlYXJjaFRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XHJcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgc2VhcmNoIGlzIHJ1bm5pbmcuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2lzc2VhcmNoaW5nKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIGdldCBpc1NlYXJjaGluZygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1NlYXJjaGluZztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB1c2VyIGhhcyB0eXBlZCBhbnl0aGluZyBpbiBTZWFyY2hiYXIuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2hhc3NlYXJjaHRleHQpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZ2V0IGhhc1NlYXJjaFRleHQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faGFzU2VhcmNoVGV4dDtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuXHJcbiAgICAvLyBTZXQgdmFsdWUgaXRlbXMuXHJcbiAgICB0aGlzLl92YWx1ZUl0ZW1zLnNwbGljZSgwLCB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkodGhpcy5fdmFsdWVJdGVtcywgdmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZUl0ZW1zLnB1c2godmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc2V0SW9uSXRlbUhhc1ZhbHVlKCk7XHJcbiAgICB0aGlzLl9zZXRIYXNQbGFjZWhvbGRlcigpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBsaXN0IG9mIGl0ZW1zLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtcykuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBbXVxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIEBPdXRwdXQoKVxyXG4gIGl0ZW1zQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjb21wb25lbnQgaXMgZW5hYmxlZC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jaXNlbmFibGVkKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1waWNrLWlzLWVuYWJsZWQnKVxyXG4gIEBJbnB1dCgnaXNFbmFibGVkJylcclxuICBnZXQgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRW5hYmxlZDtcclxuICB9XHJcbiAgc2V0IGlzRW5hYmxlZChpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzRW5hYmxlZCA9ICEhaXNFbmFibGVkO1xyXG4gICAgdGhpcy5lbmFibGVJb25JdGVtKHRoaXMuX2lzRW5hYmxlZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgTW9kYWwgc2hvdWxkIGJlIGNsb3NlZCB3aGVuIGJhY2tkcm9wIGlzIGNsaWNrZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI3Nob3VsZGJhY2tkcm9wY2xvc2UpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoJ3Nob3VsZEJhY2tkcm9wQ2xvc2UnKVxyXG4gIGdldCBzaG91bGRCYWNrZHJvcENsb3NlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2U7XHJcbiAgfVxyXG4gIHNldCBzaG91bGRCYWNrZHJvcENsb3NlKHNob3VsZEJhY2tkcm9wQ2xvc2U6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3Nob3VsZEJhY2tkcm9wQ2xvc2UgPSAhIXNob3VsZEJhY2tkcm9wQ2xvc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb2RhbCBDU1MgY2xhc3MuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI21vZGFsY3NzY2xhc3MpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIG1vZGFsQ3NzQ2xhc3M6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBNb2RhbCBlbnRlciBhbmltYXRpb24uXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI21vZGFsZW50ZXJhbmltYXRpb24pLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIG1vZGFsRW50ZXJBbmltYXRpb246IEFuaW1hdGlvbkJ1aWxkZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vZGFsIGxlYXZlIGFuaW1hdGlvbi5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jbW9kYWxsZWF2ZWFuaW1hdGlvbikuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgbW9kYWxMZWF2ZUFuaW1hdGlvbjogQW5pbWF0aW9uQnVpbGRlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIE1vZGFsIGlzIG9wZW5lZC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jaXNvcGVuZWQpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZ2V0IGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIENvbmZpcm0gYnV0dG9uIGlzIGVuYWJsZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2lzY29uZmlybWJ1dHRvbmVuYWJsZWQpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgdHJ1ZVxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGlzQ29uZmlybUJ1dHRvbkVuYWJsZWQgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIENvbmZpcm0gYnV0dG9uIGlzIHZpc2libGUgZm9yIHNpbmdsZSBzZWxlY3Rpb24uXHJcbiAqIEJ5IGRlZmF1bHQgQ29uZmlybSBidXR0b24gaXMgdmlzaWJsZSBvbmx5IGZvciBtdWx0aXBsZSBzZWxlY3Rpb24uXHJcbiAqICoqTm90ZSoqOiBJdCBpcyBhbHdheXMgdHJ1ZSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uIGFuZCBjYW5ub3QgYmUgY2hhbmdlZC5cclxuICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2hhc2NvbmZpcm1idXR0b24pLlxyXG4gKlxyXG4gKiBAZGVmYXVsdCB0cnVlXHJcbiAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICovXHJcbiAgQElucHV0KCdoYXNDb25maXJtQnV0dG9uJylcclxuICBnZXQgaGFzQ29uZmlybUJ1dHRvbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9oYXNDb25maXJtQnV0dG9uO1xyXG4gIH1cclxuICBzZXQgaGFzQ29uZmlybUJ1dHRvbihoYXNDb25maXJtQnV0dG9uOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9oYXNDb25maXJtQnV0dG9uID0gISFoYXNDb25maXJtQnV0dG9uO1xyXG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJdGVtIHByb3BlcnR5IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyLCBlLmcsIGAnaWQnYC5cclxuICAgKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtdmFsdWVmaWVsZCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgaXRlbVZhbHVlRmllbGQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBJdGVtIHByb3BlcnR5IHRvIGRpc3BsYXksIGUuZywgYCduYW1lJ2AuXHJcbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jaXRlbXRleHRmaWVsZCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGl0ZW1UZXh0RmllbGQ6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEdyb3VwIHByb3BlcnR5IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGdyb3VwIGl0ZW1zLCBlLmcuIGAnY291bnRyeS5pZCdgLlxyXG4gICAqICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwdmFsdWVmaWVsZCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ3JvdXBWYWx1ZUZpZWxkOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqXHJcbiogR3JvdXAgcHJvcGVydHkgdG8gZGlzcGxheSwgZS5nLiBgJ2NvdW50cnkubmFtZSdgLlxyXG4qICoqTm90ZSoqOiBgaXRlbXNgIHNob3VsZCBiZSBhbiBvYmplY3QgYXJyYXkuXHJcbiogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwdGV4dGZpZWxkKS5cclxuKlxyXG4qIEBkZWZhdWx0IG51bGxcclxuKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiovXHJcbiAgQElucHV0KClcclxuICBncm91cFRleHRGaWVsZDogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IFNlYXJjaGJhci5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jY2Fuc2VhcmNoKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgY2FuU2VhcmNoID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciBgb25TZWFyY2hgIGV2ZW50IGlzIGVuYWJsZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2lzb25zZWFyY2hlbmFibGVkKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCdpc09uU2VhcmNoRW5hYmxlZCcpXHJcbiAgZ2V0IGlzT25TZWFyY2hFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzT25TZWFyY2hFbmFibGVkO1xyXG4gIH1cclxuICBzZXQgaXNPblNlYXJjaEVuYWJsZWQoaXNPblNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzT25TZWFyY2hFbmFibGVkID0gISFpc09uU2VhcmNoRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IENsZWFyIGJ1dHRvbi5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jY2FuY2xlYXIpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1waWNrLWNhbi1jbGVhcicpXHJcbiAgQElucHV0KCdjYW5DbGVhcicpXHJcbiAgZ2V0IGNhbkNsZWFyKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NhbkNsZWFyO1xyXG4gIH1cclxuICBzZXQgY2FuQ2xlYXIoY2FuQ2xlYXI6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2NhbkNsZWFyID0gISFjYW5DbGVhcjtcclxuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIElvbmljIFtJbmZpbml0ZVNjcm9sbF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy9pbmZpbml0ZS1zY3JvbGwvSW5maW5pdGVTY3JvbGwvKSBpcyBlbmFibGVkLlxyXG4gICAqICoqTm90ZSoqOiBJbmZpbml0ZSBzY3JvbGwgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCB2aXJ0dWFsIHNjcm9sbC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jaGFzaW5maW5pdGVzY3JvbGwpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBoYXNJbmZpbml0ZVNjcm9sbCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgSW9uaWMgW1ZpcnR1YWxTY3JvbGxdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvVmlydHVhbFNjcm9sbC8pIGlzIGVuYWJsZWQuXHJcbiAgICogKipOb3RlKio6IFZpcnR1YWwgc2Nyb2xsIGNhbm5vdCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggaW5maW5pdGUgc2Nyb2xsLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXN2aXJ0dWFsc2Nyb2xsKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgaGFzVmlydHVhbFNjcm9sbCA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBTZWUgSW9uaWMgVmlydHVhbFNjcm9sbCBbYXBwcm94SXRlbUhlaWdodF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI3ZpcnR1YWxzY3JvbGxhcHByb3hpdGVtaGVpZ2h0KS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICc0MHB4J1xyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHZpcnR1YWxTY3JvbGxBcHByb3hJdGVtSGVpZ2h0ID0gJzQwcHgnO1xyXG5cclxuICAvKipcclxuICAgKiBBIHBsYWNlaG9sZGVyIGZvciBTZWFyY2hiYXIuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaHBsYWNlaG9sZGVyKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICdTZWFyY2gnXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2VhcmNoUGxhY2Vob2xkZXIgPSAnU2VhcmNoJztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBwbGFjZWhvbGRlci5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jcGxhY2Vob2xkZXIpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIG11bHRpcGxlIGl0ZW1zIGNhbiBiZSBzZWxlY3RlZC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jaXNtdWx0aXBsZSkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoJ2lzTXVsdGlwbGUnKVxyXG4gIGdldCBpc011bHRpcGxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzTXVsdGlwbGU7XHJcbiAgfVxyXG4gIHNldCBpc011bHRpcGxlKGlzTXVsdGlwbGU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzTXVsdGlwbGUgPSAhIWlzTXVsdGlwbGU7XHJcbiAgICB0aGlzLl9jb3VudEZvb3RlckJ1dHRvbnMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIG5vIGl0ZW1zIGhhdmUgYmVlbiBmb3VuZCBkdXJpbmcgc2VhcmNoLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2hmYWlsdGV4dCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCAnTm8gaXRlbXMgZm91bmQuJ1xyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNlYXJjaEZhaWxUZXh0ID0gJ05vIGl0ZW1zIGZvdW5kLic7XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGJ1dHRvbiB0ZXh0LlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNjbGVhcmJ1dHRvbnRleHQpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJ0NsZWFyJ1xyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGNsZWFyQnV0dG9uVGV4dCA9ICdDbGVhcic7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBidXR0b24gdGV4dC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jYWRkYnV0dG9udGV4dCkuXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCAnQWRkJ1xyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGFkZEJ1dHRvblRleHQgPSAnQWRkJztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uZmlybSBidXR0b24gdGV4dC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jY29uZmlybWJ1dHRvbnRleHQpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJ09LJ1xyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGNvbmZpcm1CdXR0b25UZXh0ID0gJ09LJztcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgYnV0dG9uIHRleHQuXHJcbiAgICogVGhlIGZpZWxkIGlzIG9ubHkgYXBwbGljYWJsZSB0byAqKmlPUyoqIHBsYXRmb3JtLCBvbiAqKkFuZHJvaWQqKiBvbmx5IENyb3NzIGljb24gaXMgZGlzcGxheWVkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZWJ1dHRvbnRleHQpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJ0NhbmNlbCdcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBjbG9zZUJ1dHRvblRleHQgPSAnQ2FuY2VsJztcclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIFNlYXJjaGJhciBzaG91bGQgcmVjZWl2ZSBmb2N1cyB3aGVuIE1vZGFsIGlzIG9wZW5lZC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkZm9jdXNzZWFyY2hiYXIpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzaG91bGRGb2N1c1NlYXJjaGJhciA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBIZWFkZXIgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2hlYWRlcmNvbG9yKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBoZWFkZXJDb2xvcjogc3RyaW5nID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdyb3VwIGNvbG9yLiBbSW9uaWMgY29sb3JzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvYWR2YW5jZWQjY29sb3JzKSBhcmUgc3VwcG9ydGVkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNncm91cGNvbG9yKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBncm91cENvbG9yOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgYnV0dG9uIHNsb3QuIFtJb25pYyBzbG90c10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvYnV0dG9ucykgYXJlIHN1cHBvcnRlZC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jY2xvc2VidXR0b25zbG90KS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0ICdzdGFydCdcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBjbG9zZUJ1dHRvblNsb3QgPSAnc3RhcnQnO1xyXG5cclxuICAvKipcclxuICAgKiBJdGVtIGljb24gc2xvdC4gW0lvbmljIHNsb3RzXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9pdGVtKSBhcmUgc3VwcG9ydGVkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtaWNvbnNsb3QpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgJ3N0YXJ0J1xyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGl0ZW1JY29uU2xvdCA9ICdzdGFydCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVzIHdoZW4gaXRlbS9zIGhhcyBiZWVuIHNlbGVjdGVkIGFuZCBNb2RhbCBjbG9zZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI29uY2hhbmdlKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1BpY2tDb21wb25lbnQsIHZhbHVlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFNlYXJjaGJhci5cclxuICAgKiAqKk5vdGUqKjogYGNhblNlYXJjaGAgYW5kIGBpc09uU2VhcmNoRW5hYmxlZGAgaGFzIHRvIGJlIGVuYWJsZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1BpY2tDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiBubyBpdGVtcyBoYXZlIGJlZW4gZm91bmQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoZmFpbCkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25TZWFyY2hGYWlsOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljUGlja0NvbXBvbmVudCwgdGV4dDogc3RyaW5nIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIHNvbWUgaXRlbXMgaGF2ZSBiZWVuIGZvdW5kLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlYXJjaHN1Y2Nlc3MpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uU2VhcmNoU3VjY2VzczogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1BpY2tDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiB0aGUgdXNlciBoYXMgc2Nyb2xsZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cclxuICAgKiAqKk5vdGUqKjogYGhhc0luZmluaXRlU2Nyb2xsYCBoYXMgdG8gYmUgZW5hYmxlZC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jb25pbmZpbml0ZXNjcm9sbCkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25JbmZpbml0ZVNjcm9sbDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1BpY2tDb21wb25lbnQsIHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBvcGVuZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI29ub3BlbikuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25PcGVuOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljUGlja0NvbXBvbmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlyZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI29uY2xvc2UpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQ2xvc2U6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNQaWNrQ29tcG9uZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIGFuIGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWQgb3IgdW5zZWxlY3RlZC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jb25zZWxlY3QpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljUGlja0NvbXBvbmVudCwgaXRlbTogYW55LCBpc1NlbGVjdGVkOiBib29sZWFuIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIENsZWFyIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmNsZWFyKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljUGlja0NvbXBvbmVudCwgaXRlbXM6IGFueVtdIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBBIGxpc3Qgb2YgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWQgYW5kIGF3YWl0aW5nIGNvbmZpcm1hdGlvbiBieSB1c2VyLCB3aGVuIGhlIGhhcyBjbGlja2VkIENvbmZpcm0gYnV0dG9uLlxyXG4gICAqIEFmdGVyIHRoZSB1c2VyIGhhcyBjbGlja2VkIENvbmZpcm0gYnV0dG9uIGl0ZW1zIHRvIGNvbmZpcm0gYXJlIGNsZWFyZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2l0ZW1zdG9jb25maXJtKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IFtdXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIGdldCBpdGVtc1RvQ29uZmlybSgpOiBhbnlbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXRlbXNUb0NvbmZpcm07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIb3cgbG9uZywgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIGZpbHRlciBpdGVtcyBvciB0byB0cmlnZ2VyIGBvblNlYXJjaGAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGRlYm91bmNlKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IDI1MFxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNlYXJjaERlYm91bmNlOiBOdW1iZXIgPSAyNTA7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWltZXMgd2hldGhlciBvciBub3Qgc2VhcmNoaW5nIHdpbGwgYXV0b21hdGljYWxseSBzZWFyY2guIGF1dG9TZWFyY2ggaXMgZW5hYmxlZCBieSBkZWZhdWx0IGFuZFxyXG4gICAqIHdpbGwgdHJpZ2dlZCBiYXNlZCBvbiBgc2VhcmNoRGVib3VuY2VgIHZhbHVlLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNhdXRvc2VhcmNoKS5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBhdXRvU2VhcmNoOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBsaXN0IG9mIGl0ZW1zIHRvIGRpc2FibGUuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2Rpc2FibGVkaXRlbXMpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgW11cclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBkaXNhYmxlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgaXRlbSB2YWx1ZSBvbmx5IHNob3VsZCBiZSBzdG9yZWQgaW4gYG5nTW9kZWxgLCBub3QgdGhlIGVudGlyZSBpdGVtLlxyXG4gICAqICoqTm90ZSoqOiBJdGVtIHZhbHVlIGlzIGRlZmluZWQgYnkgYGl0ZW1WYWx1ZUZpZWxkYC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkc3RvcmVpdGVtdmFsdWUpLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzaG91bGRTdG9yZUl0ZW1WYWx1ZSA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWxsb3cgZWRpdGluZyBpdGVtcy5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jY2Fuc2F2ZWl0ZW0pLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBjYW5TYXZlSXRlbSA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gYWxsb3cgZGVsZXRpbmcgaXRlbXMuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2NhbmRlbGV0ZWl0ZW0pLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBjYW5EZWxldGVJdGVtID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBhZGRpbmcgaXRlbXMuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2NhbmFkZGl0ZW0pLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgZmFsc2VcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KCdjYW5BZGRJdGVtJylcclxuICBnZXQgY2FuQWRkSXRlbSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jYW5BZGRJdGVtO1xyXG4gIH1cclxuICBzZXQgY2FuQWRkSXRlbShjYW5BZGRJdGVtOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9jYW5BZGRJdGVtID0gISFjYW5BZGRJdGVtO1xyXG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIEVkaXQgaXRlbSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZC5cclxuICAgKiBXaGVuIHRoZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZCBgaW9uaWNQaWNrQWRkSXRlbVRlbXBsYXRlYCB3aWxsIGJlIHNob3duLiBVc2UgdGhlIHRlbXBsYXRlIHRvIGNyZWF0ZSBhIGZvcm0gdG8gZWRpdCBpdGVtLlxyXG4gICAqICoqTm90ZSoqOiBgY2FuU2F2ZUl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNhdmVpdGVtKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBvblNhdmVJdGVtOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljUGlja0NvbXBvbmVudCwgaXRlbTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIERlbGV0ZSBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxyXG4gICAqICoqTm90ZSoqOiBgY2FuRGVsZXRlSXRlbWAgaGFzIHRvIGJlIGVuYWJsZWQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI29uZGVsZXRlaXRlbSkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpXHJcbiAgb25EZWxldGVJdGVtOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljUGlja0NvbXBvbmVudCwgaXRlbTogYW55IH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBGaXJlcyB3aGVuIEFkZCBpdGVtIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkLlxyXG4gICAqIFdoZW4gdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkIGBpb25pY1BpY2tBZGRJdGVtVGVtcGxhdGVgIHdpbGwgYmUgc2hvd24uIFVzZSB0aGUgdGVtcGxhdGUgdG8gY3JlYXRlIGEgZm9ybSB0byBhZGQgaXRlbS5cclxuICAgKiAqKk5vdGUqKjogYGNhbkFkZEl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmFkZGl0ZW0pLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIG9uQWRkSXRlbTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1BpY2tDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNQaWNrVmFsdWVUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIHZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChJb25pY1BpY2tJdGVtVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBpdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChJb25pY1BpY2tJdGVtRW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBpdGVtRW5kVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChJb25pY1BpY2tUaXRsZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgdGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKElvbmljUGlja1BsYWNlaG9sZGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBwbGFjZWhvbGRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNQaWNrTWVzc2FnZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgbWVzc2FnZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNQaWNrR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChJb25pY1BpY2tHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgZ3JvdXBFbmRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAQ29udGVudENoaWxkKElvbmljUGlja0Nsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBjbG9zZUJ1dHRvblRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNQaWNrU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2VhcmNoRmFpbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNQaWNrQWRkSXRlbVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgYWRkSXRlbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNQaWNrRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBfYWRkSXRlbVRlbXBsYXRlRm9vdGVySGVpZ2h0OiBzdHJpbmc7XHJcbiAgQENvbnRlbnRDaGlsZChJb25pY1BpY2tIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBDb250ZW50Q2hpbGQoSW9uaWNQaWNrSXRlbUljb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIGl0ZW1JY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChJb25pY1BpY2tJY29uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBpY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlZSBJb25pYyBWaXJ0dWFsU2Nyb2xsIFtoZWFkZXJGbl0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvY29tcG9uZW50cy92aXJ0dWFsLXNjcm9sbC9WaXJ0dWFsU2Nyb2xsLykuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI3ZpcnR1YWxzY3JvbGxoZWFkZXJmbikuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICB2aXJ0dWFsU2Nyb2xsSGVhZGVyRm4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGlvbkl0ZW06IElvbkl0ZW0sXHJcbiAgICBwcml2YXRlIF9pdGVyYWJsZURpZmZlcnM6IEl0ZXJhYmxlRGlmZmVycyxcclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICBpZiAoIXRoaXMuaXRlbXMgfHwgIXRoaXMuaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9pdGVtc0RpZmZlciA9IHRoaXMuX2l0ZXJhYmxlRGlmZmVycy5maW5kKHRoaXMuaXRlbXMpLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaW5pdEZvY3VzKCkgeyB9XHJcblxyXG4gIGVuYWJsZUlvbkl0ZW0oaXNFbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pb25JdGVtLmRpc2FibGVkID0gIWlzRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIF9pc051bGxPcldoaXRlU3BhY2UodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29udmVydCB2YWx1ZSB0byBzdHJpbmcgaW4gY2FzZSBpZiBpdCdzIG5vdC5cclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnJlcGxhY2UoL1xccy9nLCAnJykubGVuZ3RoIDwgMTtcclxuICB9XHJcblxyXG4gIF9zZXRIYXNTZWFyY2hUZXh0KCkge1xyXG4gICAgdGhpcy5faGFzU2VhcmNoVGV4dCA9ICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5fc2VhcmNoVGV4dCk7XHJcbiAgfVxyXG5cclxuICBfaGFzT25TZWFyY2goKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc09uU2VhcmNoRW5hYmxlZCAmJiB0aGlzLm9uU2VhcmNoLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgX2hhc09uU2F2ZUl0ZW0oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5TYXZlSXRlbSAmJiB0aGlzLm9uU2F2ZUl0ZW0ub2JzZXJ2ZXJzLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBfaGFzT25BZGRJdGVtKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FuQWRkSXRlbSAmJiB0aGlzLm9uQWRkSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIF9oYXNPbkRlbGV0ZUl0ZW0oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jYW5EZWxldGVJdGVtICYmIHRoaXMub25EZWxldGVJdGVtLm9ic2VydmVycy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgX2VtaXRWYWx1ZUNoYW5nZSgpIHtcclxuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgY29tcG9uZW50OiB0aGlzLFxyXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZW1pdFNlYXJjaCgpIHtcclxuICAgIGlmICghdGhpcy5jYW5TZWFyY2gpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25TZWFyY2guZW1pdCh7XHJcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcclxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZW1pdE9uU2VsZWN0KGl0ZW06IGFueSwgaXNTZWxlY3RlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHtcclxuICAgICAgY29tcG9uZW50OiB0aGlzLFxyXG4gICAgICBpdGVtOiBpdGVtLFxyXG4gICAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9lbWl0T25DbGVhcihpdGVtczogYW55W10pIHtcclxuICAgIHRoaXMub25DbGVhci5lbWl0KHtcclxuICAgICAgY29tcG9uZW50OiB0aGlzLFxyXG4gICAgICBpdGVtczogaXRlbXNcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwoaXNTdWNjZXNzOiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBldmVudERhdGEgPSB7XHJcbiAgICAgIGNvbXBvbmVudDogdGhpcyxcclxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoaXNTdWNjZXNzKSB7XHJcbiAgICAgIHRoaXMub25TZWFyY2hTdWNjZXNzLmVtaXQoZXZlbnREYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25TZWFyY2hGYWlsLmVtaXQoZXZlbnREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9mb3JtYXRJdGVtKGl0ZW06IGFueSk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKGl0ZW0pKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5pdGVtVGV4dEZpZWxkID8gaXRlbVt0aGlzLml0ZW1UZXh0RmllbGRdIDogaXRlbS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgX2Zvcm1hdFZhbHVlSXRlbShpdGVtOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlKSB7XHJcbiAgICAgIC8vIEdldCBpdGVtIHRleHQgZnJvbSB0aGUgbGlzdCBhcyB3ZSBzdG9yZSBpdCdzIHZhbHVlIG9ubHkuXHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXMuZmluZChfaXRlbSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIF9pdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdID09PSBpdGVtO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9mb3JtYXRJdGVtKHNlbGVjdGVkSXRlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRlbShpdGVtKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRJdGVtVmFsdWUoaXRlbTogYW55KTogYW55IHtcclxuICAgIGlmICghdGhpcy5faGFzT2JqZWN0cykge1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXTtcclxuICB9XHJcblxyXG4gIF9nZXRTdG9yZWRJdGVtVmFsdWUoaXRlbTogYW55KTogYW55IHtcclxuICAgIGlmICghdGhpcy5faGFzT2JqZWN0cykge1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUgPyBpdGVtIDogaXRlbVt0aGlzLml0ZW1WYWx1ZUZpZWxkXTtcclxuICB9XHJcblxyXG4gIF9vblNlYXJjaGJhckNsZWFyKCkge1xyXG4gICAgLy8gSW9uaWMgU2VhcmNoYmFyIGRvZXNuJ3QgY2xlYXIgYmluZCB3aXRoIG5nTW9kZWwgdmFsdWUuXHJcbiAgICAvLyBEbyBpdCBvdXJzZWx2ZXMuXHJcbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gJyc7XHJcbiAgfVxyXG5cclxuICBfZmlsdGVySXRlbXMoKSB7XHJcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XHJcblxyXG4gICAgaWYgKHRoaXMuX2hhc09uU2VhcmNoKCkpIHtcclxuICAgICAgLy8gRGVsZWdhdGUgZmlsdGVyaW5nIHRvIHRoZSBldmVudC5cclxuICAgICAgdGhpcy5fZW1pdFNlYXJjaCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRGVmYXVsdCBmaWx0ZXJpbmcuXHJcbiAgICAgIGxldCBncm91cHM6IEFycmF5PGFueT4gPSBbXTtcclxuXHJcbiAgICAgIGlmICghdGhpcy5fc2VhcmNoVGV4dCB8fCAhdGhpcy5fc2VhcmNoVGV4dC50cmltKCkpIHtcclxuICAgICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyVGV4dCA9IHRoaXMuX3NlYXJjaFRleHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2dyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcclxuICAgICAgICAgIGNvbnN0IGl0ZW1zID0gZ3JvdXAuaXRlbXMuZmlsdGVyKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbVRleHQgPSAodGhpcy5pdGVtVGV4dEZpZWxkID9cclxuICAgICAgICAgICAgICBpdGVtW3RoaXMuaXRlbVRleHRGaWVsZF0gOiBpdGVtKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtVGV4dC5pbmRleE9mKGZpbHRlclRleHQpICE9PSAtMTtcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBncm91cC52YWx1ZSxcclxuICAgICAgICAgICAgICB0ZXh0OiBncm91cC50ZXh0LFxyXG4gICAgICAgICAgICAgIGl0ZW1zOiBpdGVtc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTm8gaXRlbXMgZm91bmQuXHJcbiAgICAgICAgaWYgKCFncm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBncm91cHMucHVzaCh7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9maWx0ZXJlZEdyb3VwcyA9IGdyb3VwcztcclxuICAgICAgdGhpcy5faGFzRmlsdGVyZWRJdGVtcyA9ICF0aGlzLl9hcmVHcm91cHNFbXB0eShncm91cHMpO1xyXG4gICAgICB0aGlzLl9lbWl0T25TZWFyY2hTdWNjZXNzT3JGYWlsKHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2F1dG9TZWFyY2goKSB7XHJcbiAgICB0aGlzLmF1dG9TZWFyY2ggPyB0aGlzLl9maWx0ZXJJdGVtcygpIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfaXNJdGVtRGlzYWJsZWQoaXRlbTogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWRJdGVtcykge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZEl0ZW1zLnNvbWUoX2l0ZW0gPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKF9pdGVtKSA9PT0gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfaXNJdGVtU2VsZWN0ZWQoaXRlbTogYW55KSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJdGVtcy5maW5kKHNlbGVjdGVkSXRlbSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkgPT09IHRoaXMuX2dldFN0b3JlZEl0ZW1WYWx1ZShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgfSkgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIF9hZGRTZWxlY3RlZEl0ZW0oaXRlbTogYW55KSB7XHJcbiAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5wdXNoKHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZGVsZXRlU2VsZWN0ZWRJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgbGV0IGl0ZW1Ub0RlbGV0ZUluZGV4ID0gMDtcclxuXHJcbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZvckVhY2goKHNlbGVjdGVkSXRlbSwgaXRlbUluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkgPT09XHJcbiAgICAgICAgdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKHNlbGVjdGVkSXRlbSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgaXRlbVRvRGVsZXRlSW5kZXggPSBpdGVtSW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMuc3BsaWNlKGl0ZW1Ub0RlbGV0ZUluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIF9jbGljaygpIHtcclxuICAgIGlmICghdGhpcy5pc0VuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xhYmVsID0gdGhpcy5fZ2V0TGFiZWxUZXh0KCk7XHJcbiAgICB0aGlzLm9wZW4oKS50aGVuKCgpID0+IHtcclxuICAgICAgdGhpcy5vbk9wZW4uZW1pdCh7XHJcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2F2ZUl0ZW0oZXZlbnQ6IEV2ZW50LCBpdGVtOiBhbnkpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5faXRlbVRvQWRkID0gaXRlbTtcclxuXHJcbiAgICBpZiAodGhpcy5faGFzT25TYXZlSXRlbSgpKSB7XHJcbiAgICAgIHRoaXMub25TYXZlSXRlbS5lbWl0KHtcclxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXHJcbiAgICAgICAgaXRlbTogdGhpcy5faXRlbVRvQWRkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93QWRkSXRlbVRlbXBsYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZGVsZXRlSXRlbUNsaWNrKGV2ZW50OiBFdmVudCwgaXRlbTogYW55KSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuX2l0ZW1Ub0FkZCA9IGl0ZW07XHJcblxyXG4gICAgaWYgKHRoaXMuX2hhc09uRGVsZXRlSXRlbSgpKSB7XHJcbiAgICAgIC8vIERlbGVnYXRlIGxvZ2ljIHRvIGV2ZW50LlxyXG4gICAgICB0aGlzLm9uRGVsZXRlSXRlbS5lbWl0KHtcclxuICAgICAgICBjb21wb25lbnQ6IHRoaXMsXHJcbiAgICAgICAgaXRlbTogdGhpcy5faXRlbVRvQWRkXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kZWxldGVJdGVtKHRoaXMuX2l0ZW1Ub0FkZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYWRkSXRlbUNsaWNrKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc09uQWRkSXRlbSgpKSB7XHJcbiAgICAgIHRoaXMub25BZGRJdGVtLmVtaXQoe1xyXG4gICAgICAgIGNvbXBvbmVudDogdGhpc1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvd0FkZEl0ZW1UZW1wbGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3Bvc2l0aW9uQWRkSXRlbVRlbXBsYXRlKCkge1xyXG4gICAgLy8gV2FpdCBmb3IgdGhlIHRlbXBsYXRlIHRvIHJlbmRlci5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmb290ZXIgPSB0aGlzLl9tb2RhbENvbXBvbmVudC5fZWxlbWVudC5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5pb25pYy1waWNrLWFkZC1pdGVtLXRlbXBsYXRlIGlvbi1mb290ZXInKTtcclxuXHJcbiAgICAgIHRoaXMuX2FkZEl0ZW1UZW1wbGF0ZUZvb3RlckhlaWdodCA9IGZvb3RlciA/IGBjYWxjKDEwMCUgLSAke2Zvb3Rlci5vZmZzZXRIZWlnaHR9cHgpYCA6ICcxMDAlJztcclxuICAgIH0sIDEwMCk7XHJcbiAgfVxyXG5cclxuICBfY2xvc2UoKSB7XHJcbiAgICB0aGlzLmNsb3NlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcclxuICAgICAgICBjb21wb25lbnQ6IHRoaXNcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2hhc09uU2VhcmNoKCkpIHtcclxuICAgICAgdGhpcy5fc2VhcmNoVGV4dCA9ICcnO1xyXG4gICAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY2xlYXIoKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gdGhpcy5fc2VsZWN0ZWRJdGVtcztcclxuXHJcbiAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcclxuICAgIHRoaXMuX2VtaXRPbkNsZWFyKHNlbGVjdGVkSXRlbXMpO1xyXG4gICAgdGhpcy5jbG9zZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm9uQ2xvc2UuZW1pdCh7XHJcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfZ2V0TW9yZUl0ZW1zKCkge1xyXG4gICAgdGhpcy5vbkluZmluaXRlU2Nyb2xsLmVtaXQoe1xyXG4gICAgICBjb21wb25lbnQ6IHRoaXMsXHJcbiAgICAgIHRleHQ6IHRoaXMuX3NlYXJjaFRleHRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldEl0ZW1zVG9Db25maXJtKGl0ZW1zOiBhbnlbXSkge1xyXG4gICAgbGV0IGl0ZW1zQmxhbms6IEFycmF5PGFueT4gPSBbXTtcclxuICAgIC8vIFJldHVybiBhIGNvcHkgb2Ygb3JpZ2luYWwgYXJyYXksIHNvIGl0IGNvdWxkbid0IGJlIGNoYW5nZWQgZnJvbSBvdXRzaWRlLlxyXG4gICAgdGhpcy5faXRlbXNUb0NvbmZpcm0gPSBpdGVtc0JsYW5rLmNvbmNhdChpdGVtcyk7XHJcbiAgfVxyXG5cclxuICBfZG9TZWxlY3Qoc2VsZWN0ZWRJdGVtOiBhbnkpIHtcclxuICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZEl0ZW07XHJcbiAgICB0aGlzLl9lbWl0VmFsdWVDaGFuZ2UoKTtcclxuICB9XHJcblxyXG4gIF9zZWxlY3QoaXRlbTogYW55KSB7XHJcbiAgICBjb25zdCBpc0l0ZW1TZWxlY3RlZCA9IHRoaXMuX2lzSXRlbVNlbGVjdGVkKGl0ZW0pO1xyXG5cclxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgaWYgKGlzSXRlbVNlbGVjdGVkKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsZXRlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2FkZFNlbGVjdGVkSXRlbShpdGVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fc2V0SXRlbXNUb0NvbmZpcm0odGhpcy5fc2VsZWN0ZWRJdGVtcyk7XHJcblxyXG4gICAgICAvLyBFbWl0IG9uU2VsZWN0IGV2ZW50IGFmdGVyIHNldHRpbmcgaXRlbXMgdG8gY29uZmlybSBzbyB0aGV5IGNvdWxkIGJlIHVzZWRcclxuICAgICAgLy8gaW5zaWRlIHRoZSBldmVudC5cclxuICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sICFpc0l0ZW1TZWxlY3RlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5oYXNDb25maXJtQnV0dG9uIHx8IHRoaXMuZm9vdGVyVGVtcGxhdGUpIHtcclxuICAgICAgICAvLyBEb24ndCBjbG9zZSBNb2RhbCBhbmQga2VlcCB0cmFjayBvbiBpdGVtcyB0byBjb25maXJtLlxyXG4gICAgICAgIC8vIFdoZW4gZm9vdGVyIHRlbXBsYXRlIGlzIHVzZWQgaXQncyB1cCB0byBkZXZlbG9wZXIgdG8gY2xvc2UgTW9kYWwuXHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcclxuICAgICAgICAgIHRoaXMuX2RlbGV0ZVNlbGVjdGVkSXRlbShpdGVtKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbXNUb0NvbmZpcm0odGhpcy5fc2VsZWN0ZWRJdGVtcyk7XHJcblxyXG4gICAgICAgIC8vIEVtaXQgb25TZWxlY3QgZXZlbnQgYWZ0ZXIgc2V0dGluZyBpdGVtcyB0byBjb25maXJtIHNvIHRoZXkgY291bGQgYmUgdXNlZFxyXG4gICAgICAgIC8vIGluc2lkZSB0aGUgZXZlbnQuXHJcbiAgICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sICFpc0l0ZW1TZWxlY3RlZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFpc0l0ZW1TZWxlY3RlZCkge1xyXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xyXG5cclxuICAgICAgICAgIC8vIEVtaXQgb25TZWxlY3QgYmVmb3JlIG9uQ2hhbmdlLlxyXG4gICAgICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sIHRydWUpO1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRTdG9yZUl0ZW1WYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kb1NlbGVjdCh0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZG9TZWxlY3QoaXRlbSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfY29uZmlybSgpIHtcclxuICAgIHRoaXMuY29uZmlybSgpO1xyXG4gICAgdGhpcy5fY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldExhYmVsVGV4dCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsRWxlbWVudCA/IHRoaXMuX2lvbkxhYmVsRWxlbWVudC50ZXh0Q29udGVudCA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hcmVHcm91cHNFbXB0eShncm91cHM6IGFueSkge1xyXG4gICAgcmV0dXJuIGdyb3Vwcy5sZW5ndGggPT09IDAgfHwgZ3JvdXBzLmV2ZXJ5KChncm91cDogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiAhZ3JvdXAuaXRlbXMgfHwgZ3JvdXAuaXRlbXMubGVuZ3RoID09PSAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jb3VudEZvb3RlckJ1dHRvbnMoKSB7XHJcbiAgICBsZXQgZm9vdGVyQnV0dG9uc0NvdW50ID0gMDtcclxuXHJcbiAgICBpZiAodGhpcy5jYW5DbGVhcikge1xyXG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlIHx8IHRoaXMuX2hhc0NvbmZpcm1CdXR0b24pIHtcclxuICAgICAgZm9vdGVyQnV0dG9uc0NvdW50Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY2FuQWRkSXRlbSkge1xyXG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9mb290ZXJCdXR0b25zQ291bnQgPSBmb290ZXJCdXR0b25zQ291bnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRJdGVtcyhpdGVtczogYW55W10pIHtcclxuICAgIC8vIEl0J3MgaW1wb3J0YW50IHRvIGhhdmUgYW4gZW1wdHkgc3RhcnRpbmcgZ3JvdXAgd2l0aCBlbXB0eSBpdGVtcyAoZ3JvdXBzWzBdLml0ZW1zKSxcclxuICAgIC8vIGJlY2F1c2Ugd2UgYmluZCB0byBpdCB3aGVuIHVzaW5nIFZpcnR1YWxTY3JvbGwuXHJcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svaXNzdWVzLzcwLlxyXG4gICAgbGV0IGdyb3VwczogYW55W10gPSBbe1xyXG4gICAgICBpdGVtczogaXRlbXMgfHwgW11cclxuICAgIH1dO1xyXG5cclxuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgaWYgKHRoaXMuX2hhc0dyb3Vwcykge1xyXG4gICAgICAgIGdyb3VwcyA9IFtdO1xyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IHRoaXMuX2dldFByb3BlcnR5VmFsdWUoaXRlbSwgdGhpcy5ncm91cFZhbHVlRmllbGQpLFxyXG4gICAgICAgICAgICBncm91cCA9IGdyb3Vwcy5maW5kKF9ncm91cCA9PiBfZ3JvdXAudmFsdWUgPT09IGdyb3VwVmFsdWUpO1xyXG5cclxuICAgICAgICAgIGlmIChncm91cCkge1xyXG4gICAgICAgICAgICBncm91cC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xyXG4gICAgICAgICAgICAgIHZhbHVlOiBncm91cFZhbHVlLFxyXG4gICAgICAgICAgICAgIHRleHQ6IHRoaXMuX2dldFByb3BlcnR5VmFsdWUoaXRlbSwgdGhpcy5ncm91cFRleHRGaWVsZCksXHJcbiAgICAgICAgICAgICAgaXRlbXM6IFtpdGVtXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcclxuICAgIHRoaXMuX2ZpbHRlcmVkR3JvdXBzID0gdGhpcy5fZ3JvdXBzO1xyXG4gICAgdGhpcy5faGFzRmlsdGVyZWRJdGVtcyA9ICF0aGlzLl9hcmVHcm91cHNFbXB0eSh0aGlzLl9maWx0ZXJlZEdyb3Vwcyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eVZhbHVlKG9iamVjdDogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcclxuICAgIGlmICghcHJvcGVydHkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3BlcnR5LnNwbGl0KCcuJykucmVkdWNlKChfb2JqZWN0LCBfcHJvcGVydHkpID0+IHtcclxuICAgICAgcmV0dXJuIF9vYmplY3QgPyBfb2JqZWN0W19wcm9wZXJ0eV0gOiBudWxsO1xyXG4gICAgfSwgb2JqZWN0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3NldElvbkl0ZW1IYXNGb2N1cyhoYXNGb2N1czogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLmlvbkl0ZW0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFwcGx5IGZvY3VzIENTUyBjbGFzcyBmb3IgcHJvcGVyIHN0eWx5aW5nIG9mIGlvbi1pdGVtL2lvbi1sYWJlbC5cclxuICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1oYXMtZm9jdXMnLCBoYXNGb2N1cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRJb25JdGVtSGFzVmFsdWUoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXBwbHkgdmFsdWUgQ1NTIGNsYXNzIGZvciBwcm9wZXIgc3R5bHlpbmcgb2YgaW9uLWl0ZW0vaW9uLWxhYmVsLlxyXG4gICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWhhcy12YWx1ZScsIHRoaXMuaGFzVmFsdWUoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zZXRIYXNQbGFjZWhvbGRlcigpIHtcclxuICAgIHRoaXMuX2hhc1BsYWNlaG9sZGVyID0gIXRoaXMuaGFzVmFsdWUoKSAmJlxyXG4gICAgICAoIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBsYWNlaG9sZGVyKSB8fCB0aGlzLnBsYWNlaG9sZGVyVGVtcGxhdGUpID9cclxuICAgICAgdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwcm9wYWdhdGVPbkNoYW5nZSA9IChfOiBhbnkpID0+IHsgfTtcclxuICBwcml2YXRlIHByb3BhZ2F0ZU9uVG91Y2hlZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgcHJpdmF0ZSBfc2V0SW9uSXRlbUNzc0NsYXNzKGNzc0NsYXNzOiBzdHJpbmcsIHNob3VsZEFkZDogYm9vbGVhbikge1xyXG4gICAgaWYgKCF0aGlzLl9pb25JdGVtRWxlbWVudCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2hhbmdlIHRvIFJlbmRlcmVyMlxyXG4gICAgaWYgKHNob3VsZEFkZCkge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9pb25JdGVtRWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5faW9uSXRlbUVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3RvZ2dsZUFkZEl0ZW1UZW1wbGF0ZShpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgIC8vIEl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBzaG93L2hpZGUgdGhlIHRlbXBsYXRlIHJlZ2FyZGxlc3NcclxuICAgIC8vIGNhbkFkZEl0ZW0gb3IgY2FuU2F2ZUl0ZW0gcGFyYW1ldGVycywgc28gd2UgY291bGQgaW1wbGVtZW50IHNvbWVcclxuICAgIC8vIGN1c3RvbSBiZWhhdmlvci4gRS5nLiBhZGRpbmcgaXRlbSB3aGVuIHNlYXJjaCBmYWlscyB1c2luZyBvblNlYXJjaEZhaWwgZXZlbnQuXHJcbiAgICBpZiAoIXRoaXMuYWRkSXRlbVRlbXBsYXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUbyBtYWtlIFNhdmVJdGVtVGVtcGxhdGUgdmlzaWJsZSB3ZSBqdXN0IHBvc2l0aW9uIGl0IG92ZXIgbGlzdCB1c2luZyBDU1MuXHJcbiAgICAvLyBXZSBkb24ndCBoaWRlIGxpc3Qgd2l0aCAqbmdJZiBvciBbaGlkZGVuXSB0byBwcmV2ZW50IGl0cyBzY3JvbGwgcG9zaXRpb24uXHJcbiAgICB0aGlzLl9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBpc1Zpc2libGU7XHJcbiAgICB0aGlzLl9pc0Zvb3RlclZpc2libGUgPSAhaXNWaXNpYmxlO1xyXG4gIH1cclxuXHJcbiAgLyogQ29udHJvbFZhbHVlQWNjZXNzb3IgKi9cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UobWV0aG9kOiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UgPSBtZXRob2Q7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChtZXRob2Q6ICgpID0+IHZvaWQpIHtcclxuICAgIHRoaXMucHJvcGFnYXRlT25Ub3VjaGVkID0gbWV0aG9kO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRW5hYmxlZCA9ICFpc0Rpc2FibGVkO1xyXG4gIH1cclxuICAvKiAuQ29udHJvbFZhbHVlQWNjZXNzb3IgKi9cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl9pc0lvcyA9IHRoaXMuX3BsYXRmb3JtLmlzKCdpb3MnKTtcclxuICAgIHRoaXMuX2lzTUQgPSAhdGhpcy5faXNJb3M7XHJcbiAgICB0aGlzLl9oYXNPYmplY3RzID0gIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLml0ZW1WYWx1ZUZpZWxkKTtcclxuICAgIC8vIEdyb3VwaW5nIGlzIHN1cHBvcnRlZCBmb3Igb2JqZWN0cyBvbmx5LlxyXG4gICAgLy8gSW9uaWMgVmlydHVhbFNjcm9sbCBoYXMgaXQncyBvd24gaW1wbGVtZW50YXRpb24gb2YgZ3JvdXBpbmcuXHJcbiAgICB0aGlzLl9oYXNHcm91cHMgPSBCb29sZWFuKHRoaXMuX2hhc09iamVjdHMgJiYgdGhpcy5ncm91cFZhbHVlRmllbGQgJiYgIXRoaXMuaGFzVmlydHVhbFNjcm9sbCk7XHJcblxyXG4gICAgaWYgKHRoaXMuaW9uSXRlbSkge1xyXG4gICAgICB0aGlzLl9pb25JdGVtRWxlbWVudCA9IHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudC5jbG9zZXN0KCdpb24taXRlbScpO1xyXG4gICAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taW50ZXJhY3RpdmUnLCB0cnVlKTtcclxuICAgICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWlvbmljLXBpY2snLCB0cnVlKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9pb25JdGVtRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2lvbkxhYmVsRWxlbWVudCA9IHRoaXMuX2lvbkl0ZW1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW9uTGFiZWxFbGVtZW50KSB7XHJcbiAgICAgICAgICB0aGlzLl9oYXNJb25MYWJlbCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID0gdGhpcy5faW9uTGFiZWxFbGVtZW50LmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSB8fCAnZGVmYXVsdCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbmFibGVJb25JdGVtKHRoaXMuaXNFbmFibGVkKTtcclxuICB9XHJcblxyXG4gIG5nRG9DaGVjaygpIHtcclxuICAgIGNvbnN0IGl0ZW1zQ2hhbmdlcyA9IHRoaXMuX2l0ZW1zRGlmZmVyLmRpZmYodGhpcy5pdGVtcyk7XHJcblxyXG4gICAgaWYgKGl0ZW1zQ2hhbmdlcykge1xyXG4gICAgICB0aGlzLl9zZXRJdGVtcyh0aGlzLml0ZW1zKTtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XHJcblxyXG4gICAgICB0aGlzLm9uSXRlbXNDaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBpdGVtLlxyXG4gICAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCBhbiBpdGVtIHRvIGJlIGFkZGVkIHRvIHRoZSBvcmlnaW5hbCBhcnJheSBhcyB3ZWxsIHVzZSB0d28td2F5IGRhdGEgYmluZGluZyBzeW50YXggb24gYFsoaXRlbXMpXWAgZmllbGQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2FkZGl0ZW0pLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0byBhZGQuXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gaXRlbSBoYXMgYmVlbiBhZGRlZC5cclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgYWRkSXRlbShpdGVtOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgLy8gQWRkaW5nIGl0ZW0gdHJpZ2dlcnMgb25JdGVtc0NoYW5nZS5cclxuICAgIC8vIFJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIG9uSXRlbXNDaGFuZ2UgZmluaXNoZXMuXHJcbiAgICAvLyBXZSBuZWVkIGEgcHJvbWlzZSBvciB1c2VyIGNvdWxkIGRvIHNvbWV0aGluZyBhZnRlciBpdGVtIGhhcyBiZWVuIGFkZGVkLFxyXG4gICAgLy8gZS5nLiB1c2Ugc2VhcmNoKCkgbWV0aG9kIHRvIGZpbmQgdGhlIGFkZGVkIGl0ZW0uXHJcbiAgICB0aGlzLml0ZW1zLnVuc2hpZnQoaXRlbSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgYW55IHJ1bm5pbmcgc3Vic2NyaXB0aW9uLlxyXG4gICAgaWYgKHRoaXMuX2FkZEl0ZW1PYnNlcnZhYmxlKSB7XHJcbiAgICAgIHRoaXMuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgLy8gQ29tcGxldGUgY2FsbGJhY2sgaXNuJ3QgZmlyZWQgZm9yIHNvbWUgcmVhc29uLFxyXG4gICAgICAvLyBzbyB1bnN1YnNjcmliZSBpbiBib3RoIHN1Y2Nlc3MgYW5kIGZhaWwgY2FzZXMuXHJcbiAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlID0gc2VsZi5vbkl0ZW1zQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICByZWplY3QoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gKiBEZWxldGVzIGl0ZW0uXHJcbiAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCBhbiBpdGVtIHRvIGJlIGRlbGV0ZWQgZnJvbSB0aGUgb3JpZ2luYWwgYXJyYXkgYXMgd2VsbCB1c2UgdHdvLXdheSBkYXRhIGJpbmRpbmcgc3ludGF4IG9uIGBbKGl0ZW1zKV1gIGZpZWxkLlxyXG4gKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jZGVsZXRlaXRlbSkuXHJcbiAqXHJcbiAqIEBwYXJhbSBpdGVtIEl0ZW0gdG8gZGVsZXRlLlxyXG4gKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBpdGVtIGhhcyBiZWVuIGRlbGV0ZWQuXHJcbiAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICovXHJcbiAgZGVsZXRlSXRlbShpdGVtOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICBsZXQgaGFzVmFsdWVDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGRlbGV0ZWQgaXRlbSBmcm9tIHNlbGVjdGVkIGl0ZW1zLlxyXG4gICAgaWYgKHRoaXMuX3NlbGVjdGVkSXRlbXMpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX3NlbGVjdGVkSXRlbXMuZmlsdGVyKF9pdGVtID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pICE9PSB0aGlzLl9nZXRTdG9yZWRJdGVtVmFsdWUoX2l0ZW0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgZGVsZXRlZCBpdGVtIGZyb20gdmFsdWUuXHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5pZCAhPT0gaXRlbS5pZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggIT09IHRoaXMudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVzO1xyXG4gICAgICAgICAgaGFzVmFsdWVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09IHRoaXMudmFsdWUpIHtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgaGFzVmFsdWVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaGFzVmFsdWVDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZUNoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZSBkZWxldGVkIGl0ZW0gZnJvbSBsaXN0LlxyXG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zLmZpbHRlcihfaXRlbSA9PiB7XHJcbiAgICAgIHJldHVybiBfaXRlbS5pZCAhPT0gaXRlbS5pZDtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZnJlc2ggaXRlbXMgb24gcGFyZW50IGNvbXBvbmVudC5cclxuICAgIHRoaXMuaXRlbXNDaGFuZ2UuZW1pdChpdGVtcyk7XHJcblxyXG4gICAgLy8gUmVmcmVzaCBsaXN0LlxyXG4gICAgdGhpcy5fc2V0SXRlbXMoaXRlbXMpO1xyXG5cclxuICAgIHRoaXMub25JdGVtc0NoYW5nZS5lbWl0KHtcclxuICAgICAgY29tcG9uZW50OiB0aGlzXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbG9zZSBhbnkgcnVubmluZyBzdWJzY3JpcHRpb24uXHJcbiAgICBpZiAodGhpcy5fZGVsZXRlSXRlbU9ic2VydmFibGUpIHtcclxuICAgICAgdGhpcy5fZGVsZXRlSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAvLyBDb21wbGV0ZSBjYWxsYmFjayBpc24ndCBmaXJlZCBmb3Igc29tZSByZWFzb24sXHJcbiAgICAgIC8vIHNvIHVuc3Vic2NyaWJlIGluIGJvdGggc3VjY2VzcyBhbmQgZmFpbCBjYXNlcy5cclxuICAgICAgc2VsZi5fZGVsZXRlSXRlbU9ic2VydmFibGUgPSBzZWxmLm9uSXRlbXNDaGFuZ2UuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzZWxmLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0sICgpID0+IHtcclxuICAgICAgICBzZWxmLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHJlamVjdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFueSBpdGVtIGhhcyBiZWVuIHNlbGVjdGVkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNoYXN2YWx1ZSkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBBIGJvb2xlYW4gZGV0ZXJtaW5pbmcgd2hldGhlciBhbnkgaXRlbSBoYXMgYmVlbiBzZWxlY3RlZC5cclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgaGFzVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCAhPT0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCAhPT0gMCAmJiAhdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMuX3ZhbHVlSXRlbXNbMF0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgTW9kYWwuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI29wZW4pLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gb3BlbmVkLlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBvcGVuKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgc2VsZi5faXNPcGVuZWQpIHtcclxuICAgICAgICByZWplY3QoJ0lvbmljUGljayBpcyBkaXNhYmxlZCBvciBhbHJlYWR5IG9wZW5lZC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuX2ZpbHRlckl0ZW1zKCk7XHJcbiAgICAgIHNlbGYuX2lzT3BlbmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGNvbnN0IG1vZGFsT3B0aW9uczogTW9kYWxPcHRpb25zID0ge1xyXG4gICAgICAgIGNvbXBvbmVudDogSW9uaWNQaWNrTW9kYWxDb21wb25lbnQsXHJcbiAgICAgICAgY29tcG9uZW50UHJvcHM6IHsgc2VsZWN0Q29tcG9uZW50OiBzZWxmIH0sXHJcbiAgICAgICAgYmFja2Ryb3BEaXNtaXNzOiBzZWxmLl9zaG91bGRCYWNrZHJvcENsb3NlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoc2VsZi5tb2RhbENzc0NsYXNzKSB7XHJcbiAgICAgICAgbW9kYWxPcHRpb25zLmNzc0NsYXNzID0gc2VsZi5tb2RhbENzc0NsYXNzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2VsZi5tb2RhbEVudGVyQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgbW9kYWxPcHRpb25zLmVudGVyQW5pbWF0aW9uID0gc2VsZi5tb2RhbEVudGVyQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc2VsZi5tb2RhbExlYXZlQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgbW9kYWxPcHRpb25zLmxlYXZlQW5pbWF0aW9uID0gc2VsZi5tb2RhbExlYXZlQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLl9tb2RhbENvbnRyb2xsZXIuY3JlYXRlKG1vZGFsT3B0aW9ucykudGhlbihtb2RhbCA9PiB7XHJcbiAgICAgICAgc2VsZi5fbW9kYWwgPSBtb2RhbDtcclxuICAgICAgICBtb2RhbC5wcmVzZW50KCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAvLyBTZXQgZm9jdXMgYWZ0ZXIgTW9kYWwgaGFzIG9wZW5lZCB0byBhdm9pZCBmbGlja2VyaW5nIG9mIGZvY3VzIGhpZ2hsaWdodGluZ1xyXG4gICAgICAgICAgLy8gYmVmb3JlIE1vZGFsIG9wZW5pbmcuXHJcbiAgICAgICAgICBzZWxmLl9zZXRJb25JdGVtSGFzRm9jdXModHJ1ZSk7XHJcbiAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1vZGFsLm9uV2lsbERpc21pc3MoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oZXZlbnQgPT4ge1xyXG4gICAgICAgICAgc2VsZi5faXNPcGVuZWQgPSBmYWxzZTtcclxuICAgICAgICAgIHNlbGYuX2l0ZW1zVG9Db25maXJtID0gW107XHJcblxyXG4gICAgICAgICAgLy8gQ2xvc2VkIGJ5IGNsaWNraW5nIG9uIGJhY2tkcm9wIG91dHNpZGUgbW9kYWwuXHJcbiAgICAgICAgICBpZiAoZXZlbnQucm9sZSA9PT0gJ2JhY2tkcm9wJykge1xyXG4gICAgICAgICAgICBzZWxmLm9uQ2xvc2UuZW1pdCh7XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBzZWxmXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIE1vZGFsLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZSkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgIXNlbGYuX2lzT3BlbmVkKSB7XHJcbiAgICAgICAgcmVqZWN0KCdJb25pY1BpY2sgaXMgZGlzYWJsZWQgb3IgYWxyZWFkeSBjbG9zZWQuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnByb3BhZ2F0ZU9uVG91Y2hlZCgpO1xyXG4gICAgICBzZWxmLl9pc09wZW5lZCA9IGZhbHNlO1xyXG4gICAgICBzZWxmLl9pdGVtVG9BZGQgPSBudWxsO1xyXG4gICAgICBzZWxmLl9tb2RhbC5kaXNtaXNzKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgc2VsZi5fc2V0SW9uSXRlbUhhc0ZvY3VzKGZhbHNlKTtcclxuICAgICAgICBzZWxmLmhpZGVBZGRJdGVtVGVtcGxhdGUoKTtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgdmFsdWUuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLmlzTXVsdGlwbGUgPyBbXSA6IG51bGw7XHJcbiAgICB0aGlzLl9pdGVtc1RvQ29uZmlybSA9IFtdO1xyXG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbmZpcm1zIHNlbGVjdGVkIGl0ZW1zIGJ5IHVwZGF0aW5nIHZhbHVlLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNjb25maXJtKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBjb25maXJtKCkge1xyXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xyXG4gICAgICB0aGlzLl9kb1NlbGVjdCh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNDb25maXJtQnV0dG9uIHx8IHRoaXMuZm9vdGVyVGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy5fZG9TZWxlY3QodGhpcy5fc2VsZWN0ZWRJdGVtc1swXSB8fCBudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIGFsbCBvciBzcGVjaWZpYyBpdGVtcy5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jdG9nZ2xlaXRlbXMpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlzU2VsZWN0IERldGVybWluZXMgd2hldGhlciB0byBzZWxlY3Qgb3IgZGVzZWxlY3QgaXRlbXMuXHJcbiAgICogQHBhcmFtIFtpdGVtc10gSXRlbXMgdG8gdG9nZ2xlLiBJZiBpdGVtcyBhcmUgbm90IHNldCBhbGwgaXRlbXMgd2lsbCBiZSB0b2dnbGVkLlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICB0b2dnbGVJdGVtcyhpc1NlbGVjdDogYm9vbGVhbiwgaXRlbXM/OiBhbnlbXSkge1xyXG4gICAgaWYgKGlzU2VsZWN0KSB7XHJcbiAgICAgIGNvbnN0IGhhc0l0ZW1zID0gaXRlbXMgJiYgaXRlbXMubGVuZ3RoO1xyXG4gICAgICBsZXQgaXRlbXNUb1RvZ2dsZSA9IHRoaXMuX2dyb3Vwcy5yZWR1Y2UoKGFsbEl0ZW1zLCBncm91cCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhbGxJdGVtcy5jb25jYXQoZ3JvdXAuaXRlbXMpO1xyXG4gICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAvLyBEb24ndCBhbGxvdyB0byBzZWxlY3QgYWxsIGl0ZW1zIGluIHNpbmdsZSBtb2RlLlxyXG4gICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSAmJiAhaGFzSXRlbXMpIHtcclxuICAgICAgICBpdGVtc1RvVG9nZ2xlID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFRvZ2dsZSBzcGVjaWZpYyBpdGVtcy5cclxuICAgICAgaWYgKGhhc0l0ZW1zKSB7XHJcbiAgICAgICAgaXRlbXNUb1RvZ2dsZSA9IGl0ZW1zVG9Ub2dnbGUuZmlsdGVyKChpdGVtVG9Ub2dnbGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW1zLmZpbmQoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbVRvVG9nZ2xlKSA9PT0gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pO1xyXG4gICAgICAgICAgfSkgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVGFrZSB0aGUgZmlyc3QgaXRlbSBmb3Igc2luZ2xlIG1vZGUuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUpIHtcclxuICAgICAgICAgIGl0ZW1zVG9Ub2dnbGUuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaXRlbXNUb1RvZ2dsZS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICB0aGlzLl9hZGRTZWxlY3RlZEl0ZW0oaXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2Nyb2xscyB0byB0aGUgdG9wIG9mIE1vZGFsIGNvbnRlbnQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI3Njcm9sbHRvdG9wKS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNjcm9sbCBoYXMgYmVlbiBjb21wbGV0ZWQuXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHNjcm9sbFRvVG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICBpZiAoIXNlbGYuX2lzT3BlbmVkKSB7XHJcbiAgICAgICAgcmVqZWN0KCdJb25pY1BpY2sgY29udGVudCBjYW5ub3QgYmUgc2Nyb2xsZWQuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLl9tb2RhbENvbXBvbmVudC5fY29udGVudC5zY3JvbGxUb1RvcCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTY3JvbGxzIHRvIHRoZSBib3R0b20gb2YgTW9kYWwgY29udGVudC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jc2Nyb2xsdG9ib3R0b20pLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc2Nyb2xsIGhhcyBiZWVuIGNvbXBsZXRlZC5cclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgc2Nyb2xsVG9Cb3R0b20oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgIGlmICghc2VsZi5faXNPcGVuZWQpIHtcclxuICAgICAgICByZWplY3QoJ0lvbmljUGljayBjb250ZW50IGNhbm5vdCBiZSBzY3JvbGxlZC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYuX21vZGFsQ29tcG9uZW50Ll9jb250ZW50LnNjcm9sbFRvQm90dG9tKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBzZWFyY2ggcHJvY2VzcyBieSBzaG93aW5nIExvYWRpbmcgc3Bpbm5lci5cclxuICAgKiBVc2UgaXQgdG9nZXRoZXIgd2l0aCBgb25TZWFyY2hgIGV2ZW50IHRvIGluZGljYXRlIHNlYXJjaCBzdGFydC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jc3RhcnRzZWFyY2gpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHN0YXJ0U2VhcmNoKCkge1xyXG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvd0xvYWRpbmcoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuZHMgc2VhcmNoIHByb2Nlc3MgYnkgaGlkaW5nIExvYWRpbmcgc3Bpbm5lciBhbmQgcmVmcmVzaGluZyBpdGVtcy5cclxuICAgKiBVc2UgaXQgdG9nZXRoZXIgd2l0aCBgb25TZWFyY2hgIGV2ZW50IHRvIGluZGljYXRlIHNlYXJjaCBlbmQuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2VuZHNlYXJjaCkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZW5kU2VhcmNoKCkge1xyXG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcclxuXHJcbiAgICAvLyBXaGVuIGluc2lkZSBJb25pYyBNb2RhbCBhbmQgb25TZWFyY2ggZXZlbnQgaXMgdXNlZCxcclxuICAgIC8vIG5nRG9DaGVjaygpIGRvZXNuJ3Qgd29yayBhcyBfaXRlbXNEaWZmZXIgZmFpbHMgdG8gZGV0ZWN0IGNoYW5nZXMuXHJcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svaXNzdWVzLzQ0LlxyXG4gICAgLy8gUmVmcmVzaCBpdGVtcyBtYW51YWxseS5cclxuICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xyXG4gICAgdGhpcy5fZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbCh0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZXMgaW5maW5pdGUgc2Nyb2xsLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNlbmFibGVpbmZpbml0ZXNjcm9sbCkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgZW5hYmxlSW5maW5pdGVTY3JvbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc0luZmluaXRlU2Nyb2xsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwuZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGVzIGluZmluaXRlIHNjcm9sbC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jZGlzYWJsZWluZmluaXRlc2Nyb2xsKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBkaXNhYmxlSW5maW5pdGVTY3JvbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMuX2hhc0luZmluaXRlU2Nyb2xsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9tb2RhbENvbXBvbmVudC5faW5maW5pdGVTY3JvbGwuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5kcyBpbmZpbml0ZSBzY3JvbGwuXHJcbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Nlb3RyYW1tZWxsL2lvbmljLXBpY2svd2lraS9Eb2N1bWVudGF0aW9uI2VuZGluZmluaXRlc2Nyb2xsKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBlbmRJbmZpbml0ZVNjcm9sbCgpIHtcclxuICAgIGlmICghdGhpcy5faGFzSW5maW5pdGVTY3JvbGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmlnZ2VycyBzZWFyY2ggb2YgaXRlbXMuXHJcbiAgICogKipOb3RlKio6IGBjYW5TZWFyY2hgIGhhcyB0byBiZSBlbmFibGVkLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2gpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRleHQgVGV4dCB0byBzZWFyY2ggaXRlbXMgYnkuXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHNlYXJjaCh0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5faXNFbmFibGVkIHx8ICF0aGlzLl9pc09wZW5lZCB8fCAhdGhpcy5jYW5TZWFyY2gpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3NlYXJjaFRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xyXG4gICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIExvYWRpbmcgc3Bpbm5lci5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jc2hvd2xvYWRpbmcpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIHNob3dMb2FkaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIExvYWRpbmcgc3Bpbm5lci5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jaGlkZWxvYWRpbmcpLlxyXG4gICAqXHJcbiAgICogQG1lbWJlcm9mIElvbmljUGlja0NvbXBvbmVudFxyXG4gICAqL1xyXG4gIGhpZGVMb2FkaW5nKCkge1xyXG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93cyBgaW9uaWNQaWNrQWRkSXRlbVRlbXBsYXRlYC5cclxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vY2VvdHJhbW1lbGwvaW9uaWMtcGljay93aWtpL0RvY3VtZW50YXRpb24jc2hvd2FkZGl0ZW10ZW1wbGF0ZSkuXHJcbiAgICpcclxuICAgKiBAbWVtYmVyb2YgSW9uaWNQaWNrQ29tcG9uZW50XHJcbiAgICovXHJcbiAgc2hvd0FkZEl0ZW1UZW1wbGF0ZSgpIHtcclxuICAgIHRoaXMuX3RvZ2dsZUFkZEl0ZW1UZW1wbGF0ZSh0cnVlKTtcclxuXHJcbiAgICAvLyBQb3NpdGlvbiB0aGUgdGVtcGxhdGUgb25seSB3aGVuIGl0IHNob3VzIHVwLlxyXG4gICAgdGhpcy5fcG9zaXRpb25BZGRJdGVtVGVtcGxhdGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIGBpb25pY1BpY2tBZGRJdGVtVGVtcGxhdGVgLlxyXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9jZW90cmFtbWVsbC9pb25pYy1waWNrL3dpa2kvRG9jdW1lbnRhdGlvbiNoaWRlYWRkaXRlbXRlbXBsYXRlKS5cclxuICAgKlxyXG4gICAqIEBtZW1iZXJvZiBJb25pY1BpY2tDb21wb25lbnRcclxuICAgKi9cclxuICBoaWRlQWRkSXRlbVRlbXBsYXRlKCkge1xyXG4gICAgLy8gQ2xlYW4gaXRlbSB0byBhZGQgYXMgaXQncyBubyBsb25nZXIgbmVlZGVkIG9uY2UgQWRkIEl0ZW0gTW9kYWwgaGFzIGJlZW4gY2xvc2VkLlxyXG4gICAgdGhpcy5faXRlbVRvQWRkID0gbnVsbDtcclxuICAgIHRoaXMuX3RvZ2dsZUFkZEl0ZW1UZW1wbGF0ZShmYWxzZSk7XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJpb25pYy1waWNrLWlubmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJpb25pYy1waWNrLXZhbHVlXCI+XG4gICAgPGRpdiAqbmdJZj1cInZhbHVlVGVtcGxhdGUgJiYgX3ZhbHVlSXRlbXMubGVuZ3RoICYmIGlzTXVsdGlwbGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwidmFsdWVUZW1wbGF0ZVwiXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyB2YWx1ZTogX3ZhbHVlSXRlbXMgfVwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpb25pYy1waWNrLXZhbHVlLWl0ZW1cIlxuICAgICAgKm5nSWY9XCJ2YWx1ZVRlbXBsYXRlICYmIF92YWx1ZUl0ZW1zLmxlbmd0aCAmJiAhaXNNdWx0aXBsZVwiPlxuICAgICAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJ2YWx1ZVRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgdmFsdWU6IF92YWx1ZUl0ZW1zWzBdIH1cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzcGFuICpuZ0lmPVwiIXZhbHVlVGVtcGxhdGUgJiYgX3ZhbHVlSXRlbXMubGVuZ3RoXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW9uaWMtcGljay12YWx1ZS1pdGVtXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IHZhbHVlSXRlbSBvZiBfdmFsdWVJdGVtc1wiPlxuICAgICAgICB7e19mb3JtYXRWYWx1ZUl0ZW0odmFsdWVJdGVtKX19XG4gICAgICA8L2Rpdj5cbiAgICA8L3NwYW4+XG4gICAgPGRpdiAqbmdJZj1cIl9oYXNQbGFjZWhvbGRlciAmJiBwbGFjZWhvbGRlclRlbXBsYXRlXCJcbiAgICAgIGNsYXNzPVwiaW9uaWMtcGljay12YWx1ZS1pdGVtXCI+XG4gICAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInBsYWNlaG9sZGVyVGVtcGxhdGVcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpb25pYy1waWNrLXZhbHVlLWl0ZW1cIlxuICAgICAgKm5nSWY9XCJfaGFzUGxhY2Vob2xkZXIgJiYgIXBsYWNlaG9sZGVyVGVtcGxhdGVcIj5cbiAgICAgIHt7cGxhY2Vob2xkZXJ9fVxuICAgIDwvZGl2PlxuICAgIDwhLS0gRml4IGljb24gYWxsaWdubWVudCB3aGVuIHRoZXJlJ3Mgbm8gdmFsdWUgb3IgcGxhY2Vob2xkZXIuIC0tPlxuICAgIDxzcGFuICpuZ0lmPVwiIV92YWx1ZUl0ZW1zLmxlbmd0aCAmJiAhX2hhc1BsYWNlaG9sZGVyXCI+Jm5ic3A7PC9zcGFuPlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cImljb25UZW1wbGF0ZVwiIGNsYXNzPVwiaW9uaWMtcGljay1pY29uLXRlbXBsYXRlXCI+XG4gICAgICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cImljb25UZW1wbGF0ZVwiPjwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiAqbmdJZj1cIiFpY29uVGVtcGxhdGVcIiBjbGFzcz1cImlvbmljLXBpY2staWNvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJpb25pYy1waWNrLWljb24taW5uZXJcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIDwhLS0gTmVlZCB0byBiZSB0eXBlPVwiYnV0dG9uXCIgb3RoZXJ3aXNlIGNsaWNrIGV2ZW50IHRyaWdnZXJzIGZvcm0gbmdTdWJtaXQuIC0tPlxuICA8YnV0dG9uIGNsYXNzPVwiaW9uaWMtcGljay1jb3ZlclwiIFtkaXNhYmxlZF09XCIhaXNFbmFibGVkXCJcbiAgICAoY2xpY2spPVwiX2NsaWNrKClcIiB0eXBlPVwiYnV0dG9uXCI+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=
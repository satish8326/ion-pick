import { DoCheck, ElementRef, EventEmitter, IterableDiffers, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { IonItem, ModalController, Platform } from '@ionic/angular';
import { AnimationBuilder } from '@ionic/core';
import { IonicPickModalComponent } from './ionic-pick-modal.component';
import * as i0 from "@angular/core";
export declare class IonicPickComponent implements ControlValueAccessor, OnInit, DoCheck {
    private _modalController;
    private _platform;
    private ionItem;
    private _iterableDiffers;
    private _element;
    private _renderer;
    _cssClass: boolean;
    _isIos: boolean;
    _isMD: boolean;
    get _isMultipleCssClass(): boolean;
    get _hasValueCssClass(): boolean;
    get _hasPlaceholderCssClass(): boolean;
    get _hasIonLabelCssClass(): boolean;
    get _hasDefaultIonLabelCssClass(): boolean;
    get _hasFixedIonLabelCssClass(): boolean;
    get _hasStackedIonLabelCssClass(): boolean;
    get _hasFloatingIonLabelCssClass(): boolean;
    private _isOnSearchEnabled;
    private _isEnabled;
    private _shouldBackdropClose;
    private _isOpened;
    private _value;
    private _modal;
    private _itemsDiffer;
    private _hasObjects;
    private _canClear;
    private _hasConfirmButton;
    private _isMultiple;
    private _canAddItem;
    private _addItemObservable;
    private _deleteItemObservable;
    private onItemsChange;
    private _ionItemElement;
    private _ionLabelElement;
    private _hasIonLabel;
    private _ionLabelPosition;
    private _label;
    private get _hasInfiniteScroll();
    get _shouldStoreItemValue(): boolean;
    _valueItems: any[];
    _searchText: string;
    _hasSearchText: boolean;
    _groups: any[];
    _itemsToConfirm: any[];
    _selectedItems: any[];
    _modalComponent: IonicPickModalComponent;
    _filteredGroups: any[];
    _hasGroups: boolean;
    _isSearching: boolean;
    _hasPlaceholder: boolean;
    _isAddItemTemplateVisible: boolean;
    _isFooterVisible: boolean;
    _itemToAdd: any;
    _footerButtonsCount: number;
    _hasFilteredItems: boolean;
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#label).
     *
     * @readonly
     * @default null
     * @memberof IonicPickComponent
     */
    get label(): string;
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchtext).
     *
     * @readonly
     * @default ''
     * @memberof IonicPickComponent
     */
    get searchText(): string;
    set searchText(searchText: string);
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#issearching).
     *
     * @default false
     * @readonly
     * @memberof IonicPickComponent
     */
    get isSearching(): boolean;
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hassearchtext).
     *
     * @default false
     * @readonly
     * @memberof IonicPickComponent
     */
    get hasSearchText(): boolean;
    get value(): any;
    set value(value: any);
    /**
     * A list of items.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#items).
     *
     * @default []
     * @memberof IonicPickComponent
     */
    items: any[];
    itemsChange: EventEmitter<any>;
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isenabled).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    get isEnabled(): boolean;
    set isEnabled(isEnabled: boolean);
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#shouldbackdropclose).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    get shouldBackdropClose(): boolean;
    set shouldBackdropClose(shouldBackdropClose: boolean);
    /**
     * Modal CSS class.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#modalcssclass).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    modalCssClass: string;
    /**
     * Modal enter animation.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#modalenteranimation).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    modalEnterAnimation: AnimationBuilder;
    /**
     * Modal leave animation.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#modalleaveanimation).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    modalLeaveAnimation: AnimationBuilder;
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isopened).
     *
     * @default false
     * @readonly
     * @memberof IonicPickComponent
     */
    get isOpened(): boolean;
    /**
     * Determines whether Confirm button is enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isconfirmbuttonenabled).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    isConfirmButtonEnabled: boolean;
    /**
   * Determines whether Confirm button is visible for single selection.
   * By default Confirm button is visible only for multiple selection.
   * **Note**: It is always true for multiple selection and cannot be changed.
   * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasconfirmbutton).
   *
   * @default true
   * @memberof IonicPickComponent
   */
    get hasConfirmButton(): boolean;
    set hasConfirmButton(hasConfirmButton: boolean);
    /**
     * Item property to use as a unique identifier, e.g, `'id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemvaluefield).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    itemValueField: string;
    /**
     * Item property to display, e.g, `'name'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemtextfield).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    itemTextField: string;
    /**
     *
     * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
     * **Note**: `items` should be an object array.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#groupvaluefield).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    groupValueField: string;
    /**
  * Group property to display, e.g. `'country.name'`.
  * **Note**: `items` should be an object array.
  * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#grouptextfield).
  *
  * @default null
  * @memberof IonicPickComponent
  */
    groupTextField: string;
    /**
     * Determines whether to show Searchbar.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#cansearch).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    canSearch: boolean;
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#isonsearchenabled).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    get isOnSearchEnabled(): boolean;
    set isOnSearchEnabled(isOnSearchEnabled: boolean);
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#canclear).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    get canClear(): boolean;
    set canClear(canClear: boolean);
    /**
     * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
     * **Note**: Infinite scroll cannot be used together with virtual scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasinfinitescroll).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    hasInfiniteScroll: boolean;
    /**
     * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
     * **Note**: Virtual scroll cannot be used together with infinite scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasvirtualscroll).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    hasVirtualScroll: boolean;
    /**
     * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#virtualscrollapproxitemheight).
     *
     * @default '40px'
     * @memberof IonicPickComponent
     */
    virtualScrollApproxItemHeight: string;
    /**
     * A placeholder for Searchbar.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchplaceholder).
     *
     * @default 'Search'
     * @memberof IonicPickComponent
     */
    searchPlaceholder: string;
    /**
     * A placeholder.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#placeholder).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    placeholder: string;
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#ismultiple).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    get isMultiple(): boolean;
    set isMultiple(isMultiple: boolean);
    /**
     * Text to display when no items have been found during search.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchfailtext).
     *
     * @default 'No items found.'
     * @memberof IonicPickComponent
     */
    searchFailText: string;
    /**
     * Clear button text.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#clearbuttontext).
     *
     * @default 'Clear'
     * @memberof IonicPickComponent
     */
    clearButtonText: string;
    /**
     * Add button text.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#addbuttontext).
     *
     * @default 'Add'
     * @memberof IonicPickComponent
     */
    addButtonText: string;
    /**
     * Confirm button text.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#confirmbuttontext).
     *
     * @default 'OK'
     * @memberof IonicPickComponent
     */
    confirmButtonText: string;
    /**
     * Close button text.
     * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#closebuttontext).
     *
     * @default 'Cancel'
     * @memberof IonicPickComponent
     */
    closeButtonText: string;
    /**
     * Determines whether Searchbar should receive focus when Modal is opened.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#shouldfocussearchbar).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    shouldFocusSearchbar: boolean;
    /**
     * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#headercolor).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    headerColor: string;
    /**
     * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#groupcolor).
     *
     * @default null
     * @memberof IonicPickComponent
     */
    groupColor: string;
    /**
     * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#closebuttonslot).
     *
     * @default 'start'
     * @memberof IonicPickComponent
     */
    closeButtonSlot: string;
    /**
     * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemiconslot).
     *
     * @default 'start'
     * @memberof IonicPickComponent
     */
    itemIconSlot: string;
    /**
     * Fires when item/s has been selected and Modal closed.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onchange).
     *
     * @memberof IonicPickComponent
     */
    onChange: EventEmitter<{
        component: IonicPickComponent;
        value: any;
    }>;
    /**
     * Fires when the user is typing in Searchbar.
     * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsearch).
     *
     * @memberof IonicPickComponent
     */
    onSearch: EventEmitter<{
        component: IonicPickComponent;
        text: string;
    }>;
    /**
     * Fires when no items have been found.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsearchfail).
     *
     * @memberof IonicPickComponent
     */
    onSearchFail: EventEmitter<{
        component: IonicPickComponent;
        text: string;
    }>;
    /**
     * Fires when some items have been found.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsearchsuccess).
     *
     * @memberof IonicPickComponent
     */
    onSearchSuccess: EventEmitter<{
        component: IonicPickComponent;
        text: string;
    }>;
    /**
     * Fires when the user has scrolled to the end of the list.
     * **Note**: `hasInfiniteScroll` has to be enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#oninfinitescroll).
     *
     * @memberof IonicPickComponent
     */
    onInfiniteScroll: EventEmitter<{
        component: IonicPickComponent;
        text: string;
    }>;
    /**
     * Fires when Modal has been opened.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onopen).
     *
     * @memberof IonicPickComponent
     */
    onOpen: EventEmitter<{
        component: IonicPickComponent;
    }>;
    /**
     * Fires when Modal has been closed.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onclose).
     *
     * @memberof IonicPickComponent
     */
    onClose: EventEmitter<{
        component: IonicPickComponent;
    }>;
    /**
     * Fires when an item has been selected or unselected.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onselect).
     *
     * @memberof IonicPickComponent
     */
    onSelect: EventEmitter<{
        component: IonicPickComponent;
        item: any;
        isSelected: boolean;
    }>;
    /**
     * Fires when Clear button has been clicked.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onclear).
     *
     * @memberof IonicPickComponent
     */
    onClear: EventEmitter<{
        component: IonicPickComponent;
        items: any[];
    }>;
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#itemstoconfirm).
     *
     * @default []
     * @readonly
     * @memberof IonicPickComponent
     */
    get itemsToConfirm(): any[];
    /**
     * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#searchdebounce).
     *
     * @default 250
     * @memberof IonicPickComponent
     */
    searchDebounce: Number;
    /**
     * Determimes whether or not searching will automatically search. autoSearch is enabled by default and
     * will trigged based on `searchDebounce` value.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#autosearch).
     *
     * @default true
     * @memberof IonicPickComponent
     */
    autoSearch: Boolean;
    /**
     * A list of items to disable.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#disableditems).
     *
     * @default []
     * @memberof IonicPickComponent
     */
    disabledItems: any[];
    /**
     * Determines whether item value only should be stored in `ngModel`, not the entire item.
     * **Note**: Item value is defined by `itemValueField`.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#shouldstoreitemvalue).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    shouldStoreItemValue: boolean;
    /**
     * Determines whether to allow editing items.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#cansaveitem).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    canSaveItem: boolean;
    /**
     * Determines whether to allow deleting items.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#candeleteitem).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    canDeleteItem: boolean;
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#canadditem).
     *
     * @default false
     * @memberof IonicPickComponent
     */
    get canAddItem(): boolean;
    set canAddItem(canAddItem: boolean);
    /**
     * Fires when Edit item button has been clicked.
     * When the button has been clicked `ionicPickAddItemTemplate` will be shown. Use the template to create a form to edit item.
     * **Note**: `canSaveItem` has to be enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onsaveitem).
     *
     * @memberof IonicPickComponent
     */
    onSaveItem: EventEmitter<{
        component: IonicPickComponent;
        item: any;
    }>;
    /**
     * Fires when Delete item button has been clicked.
     * **Note**: `canDeleteItem` has to be enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#ondeleteitem).
     *
     * @memberof IonicPickComponent
     */
    onDeleteItem: EventEmitter<{
        component: IonicPickComponent;
        item: any;
    }>;
    /**
     * Fires when Add item button has been clicked.
     * When the button has been clicked `ionicPickAddItemTemplate` will be shown. Use the template to create a form to add item.
     * **Note**: `canAddItem` has to be enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#onadditem).
     *
     * @memberof IonicPickComponent
     */
    onAddItem: EventEmitter<{
        component: IonicPickComponent;
    }>;
    valueTemplate: TemplateRef<any>;
    itemTemplate: TemplateRef<any>;
    itemEndTemplate: TemplateRef<any>;
    titleTemplate: TemplateRef<any>;
    placeholderTemplate: TemplateRef<any>;
    messageTemplate: TemplateRef<any>;
    groupTemplate: TemplateRef<any>;
    groupEndTemplate: TemplateRef<any>;
    closeButtonTemplate: TemplateRef<any>;
    searchFailTemplate: TemplateRef<any>;
    addItemTemplate: TemplateRef<any>;
    footerTemplate: TemplateRef<any>;
    _addItemTemplateFooterHeight: string;
    headerTemplate: TemplateRef<any>;
    itemIconTemplate: TemplateRef<any>;
    iconTemplate: TemplateRef<any>;
    /**
     * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#virtualscrollheaderfn).
     *
     * @memberof IonicPickComponent
     */
    virtualScrollHeaderFn: () => null;
    constructor(_modalController: ModalController, _platform: Platform, ionItem: IonItem, _iterableDiffers: IterableDiffers, _element: ElementRef, _renderer: Renderer2);
    initFocus(): void;
    enableIonItem(isEnabled: boolean): void;
    _isNullOrWhiteSpace(value: any): boolean;
    _setHasSearchText(): void;
    _hasOnSearch(): boolean;
    _hasOnSaveItem(): boolean;
    _hasOnAddItem(): boolean;
    _hasOnDeleteItem(): boolean;
    _emitValueChange(): void;
    _emitSearch(): void;
    _emitOnSelect(item: any, isSelected: boolean): void;
    _emitOnClear(items: any[]): void;
    _emitOnSearchSuccessOrFail(isSuccess: boolean): void;
    _formatItem(item: any): string;
    _formatValueItem(item: any): string;
    _getItemValue(item: any): any;
    _getStoredItemValue(item: any): any;
    _onSearchbarClear(): void;
    _filterItems(): void;
    _autoSearch(): void;
    _isItemDisabled(item: any): boolean;
    _isItemSelected(item: any): boolean;
    _addSelectedItem(item: any): void;
    _deleteSelectedItem(item: any): void;
    _click(): void;
    _saveItem(event: Event, item: any): void;
    _deleteItemClick(event: Event, item: any): void;
    _addItemClick(): void;
    _positionAddItemTemplate(): void;
    _close(): void;
    _clear(): void;
    _getMoreItems(): void;
    _setItemsToConfirm(items: any[]): void;
    _doSelect(selectedItem: any): void;
    _select(item: any): void;
    _confirm(): void;
    private _getLabelText;
    private _areGroupsEmpty;
    private _countFooterButtons;
    private _setItems;
    private _getPropertyValue;
    private _setIonItemHasFocus;
    private _setIonItemHasValue;
    private _setHasPlaceholder;
    private propagateOnChange;
    private propagateOnTouched;
    private _setIonItemCssClass;
    private _toggleAddItemTemplate;
    writeValue(value: any): void;
    registerOnChange(method: any): void;
    registerOnTouched(method: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngDoCheck(): void;
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicPickComponent
     */
    addItem(item: any): Promise<any>;
    /**
   * Deletes item.
   * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
   * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#deleteitem).
   *
   * @param item Item to delete.
   * @returns Promise that resolves when item has been deleted.
   * @memberof IonicPickComponent
   */
    deleteItem(item: any): Promise<any>;
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicPickComponent
     */
    hasValue(): boolean;
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicPickComponent
     */
    open(): Promise<void>;
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicPickComponent
     */
    close(): Promise<void>;
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#clear).
     *
     * @memberof IonicPickComponent
     */
    clear(): void;
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#confirm).
     *
     * @memberof IonicPickComponent
     */
    confirm(): void;
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicPickComponent
     */
    toggleItems(isSelect: boolean, items?: any[]): void;
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicPickComponent
     */
    scrollToTop(): Promise<any>;
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicPickComponent
     */
    scrollToBottom(): Promise<any>;
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#startsearch).
     *
     * @memberof IonicPickComponent
     */
    startSearch(): void;
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#endsearch).
     *
     * @memberof IonicPickComponent
     */
    endSearch(): void;
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicPickComponent
     */
    enableInfiniteScroll(): void;
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicPickComponent
     */
    disableInfiniteScroll(): void;
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicPickComponent
     */
    endInfiniteScroll(): void;
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicPickComponent
     */
    search(text: string): void;
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#showloading).
     *
     * @memberof IonicPickComponent
     */
    showLoading(): void;
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hideloading).
     *
     * @memberof IonicPickComponent
     */
    hideLoading(): void;
    /**
     * Shows `ionicPickAddItemTemplate`.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicPickComponent
     */
    showAddItemTemplate(): void;
    /**
     * Hides `ionicPickAddItemTemplate`.
     * See more on [GitHub](https://github.com/ceotrammell/ionic-pick/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicPickComponent
     */
    hideAddItemTemplate(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonicPickComponent, [null, null, { optional: true; }, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonicPickComponent, "ionic-pick", never, { "items": "items"; "isEnabled": "isEnabled"; "shouldBackdropClose": "shouldBackdropClose"; "modalCssClass": "modalCssClass"; "modalEnterAnimation": "modalEnterAnimation"; "modalLeaveAnimation": "modalLeaveAnimation"; "isConfirmButtonEnabled": "isConfirmButtonEnabled"; "hasConfirmButton": "hasConfirmButton"; "itemValueField": "itemValueField"; "itemTextField": "itemTextField"; "groupValueField": "groupValueField"; "groupTextField": "groupTextField"; "canSearch": "canSearch"; "isOnSearchEnabled": "isOnSearchEnabled"; "canClear": "canClear"; "hasInfiniteScroll": "hasInfiniteScroll"; "hasVirtualScroll": "hasVirtualScroll"; "virtualScrollApproxItemHeight": "virtualScrollApproxItemHeight"; "searchPlaceholder": "searchPlaceholder"; "placeholder": "placeholder"; "isMultiple": "isMultiple"; "searchFailText": "searchFailText"; "clearButtonText": "clearButtonText"; "addButtonText": "addButtonText"; "confirmButtonText": "confirmButtonText"; "closeButtonText": "closeButtonText"; "shouldFocusSearchbar": "shouldFocusSearchbar"; "headerColor": "headerColor"; "groupColor": "groupColor"; "closeButtonSlot": "closeButtonSlot"; "itemIconSlot": "itemIconSlot"; "searchDebounce": "searchDebounce"; "autoSearch": "autoSearch"; "disabledItems": "disabledItems"; "shouldStoreItemValue": "shouldStoreItemValue"; "canSaveItem": "canSaveItem"; "canDeleteItem": "canDeleteItem"; "canAddItem": "canAddItem"; "virtualScrollHeaderFn": "virtualScrollHeaderFn"; }, { "itemsChange": "itemsChange"; "onChange": "onChange"; "onSearch": "onSearch"; "onSearchFail": "onSearchFail"; "onSearchSuccess": "onSearchSuccess"; "onInfiniteScroll": "onInfiniteScroll"; "onOpen": "onOpen"; "onClose": "onClose"; "onSelect": "onSelect"; "onClear": "onClear"; "onSaveItem": "onSaveItem"; "onDeleteItem": "onDeleteItem"; "onAddItem": "onAddItem"; }, ["valueTemplate", "itemTemplate", "itemEndTemplate", "titleTemplate", "placeholderTemplate", "messageTemplate", "groupTemplate", "groupEndTemplate", "closeButtonTemplate", "searchFailTemplate", "addItemTemplate", "footerTemplate", "headerTemplate", "itemIconTemplate", "iconTemplate"], never, false, never>;
}

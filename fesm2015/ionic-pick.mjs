import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Directive, Component, ViewChild, HostBinding, HostListener, EventEmitter, forwardRef, TemplateRef, ViewEncapsulation, Optional, Input, Output, ContentChild, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import * as i1 from '@ionic/angular';
import { IonContent, IonInfiniteScroll, IonicModule } from '@ionic/angular';
import * as i4 from '@angular/cdk/scrolling';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

class IonicPickAddItemTemplateDirective {
}
IonicPickAddItemTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickAddItemTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickAddItemTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickAddItemTemplateDirective, selector: "[ionicPickAddItemTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickAddItemTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickAddItemTemplate]',
                }]
        }] });

class IonicPickCloseButtonTemplateDirective {
}
IonicPickCloseButtonTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickCloseButtonTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickCloseButtonTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickCloseButtonTemplateDirective, selector: "[ionicPickCloseButtonTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickCloseButtonTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickCloseButtonTemplate]',
                }]
        }] });

class IonicPickFooterTemplateDirective {
}
IonicPickFooterTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickFooterTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickFooterTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickFooterTemplateDirective, selector: "[ionicPickFooterTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickFooterTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickFooterTemplate]',
                }]
        }] });

class IonicPickGroupEndTemplateDirective {
}
IonicPickGroupEndTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickGroupEndTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickGroupEndTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickGroupEndTemplateDirective, selector: "[ionicPickGroupEndTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickGroupEndTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickGroupEndTemplate]',
                }]
        }] });

class IonicPickGroupTemplateDirective {
}
IonicPickGroupTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickGroupTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickGroupTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickGroupTemplateDirective, selector: "[ionicPickGroupTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickGroupTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickGroupTemplate]',
                }]
        }] });

class IonicPickHeaderTemplateDirective {
}
IonicPickHeaderTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickHeaderTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickHeaderTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickHeaderTemplateDirective, selector: "[ionicPickHeaderTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickHeaderTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickHeaderTemplate]',
                }]
        }] });

class IonicPickItemEndTemplateDirective {
}
IonicPickItemEndTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickItemEndTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickItemEndTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickItemEndTemplateDirective, selector: "[ionicPickItemEndTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickItemEndTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickItemEndTemplate]',
                }]
        }] });

class IonicPickItemIconTemplateDirective {
}
IonicPickItemIconTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickItemIconTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickItemIconTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickItemIconTemplateDirective, selector: "[ionicPickItemIconTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickItemIconTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickItemIconTemplate]'
                }]
        }] });

class IonicPickItemTemplateDirective {
}
IonicPickItemTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickItemTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickItemTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickItemTemplateDirective, selector: "[ionicPickItemTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickItemTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickItemTemplate]'
                }]
        }] });

class IonicPickMessageTemplateDirective {
}
IonicPickMessageTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickMessageTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickMessageTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickMessageTemplateDirective, selector: "[ionicPickMessageTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickMessageTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickMessageTemplate]',
                }]
        }] });

class IonicPickModalComponent {
    constructor(navParams, _element) {
        this.navParams = navParams;
        this._element = _element;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach((item) => {
                    this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    get _canClearCssClass() {
        return this.selectComponent.canClear;
    }
    get _isMultipleCssClass() {
        return this.selectComponent.isMultiple;
    }
    get _isSearchingCssClass() {
        return this.selectComponent._isSearching;
    }
    get _isIos() {
        return this.selectComponent._isIos;
    }
    _isMD() {
        return this.selectComponent._isMD;
    }
    get _isAddItemTemplateVisibleCssClass() {
        return this.selectComponent._isAddItemTemplateVisible;
    }
    onResize() {
        // ion-footer inside the template might change its height when
        // device orientation changes.
        this.selectComponent._positionAddItemTemplate();
    }
    ngAfterViewInit() {
        this._header = this._element.nativeElement.querySelector('ion-header');
        if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(() => {
                this._searchbarComponent.setFocus();
            }, 1000);
        }
    }
}
IonicPickModalComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickModalComponent, deps: [{ token: i1.NavParams }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
IonicPickModalComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickModalComponent, selector: "ionic-pick-modal", host: { listeners: { "window:resize": "onResize()" }, properties: { "class.ionic-pick-modal": "this._cssClass", "class.ionic-pick-modal-can-clear": "this._canClearCssClass", "class.ionic-pick-modal-is-multiple": "this._isMultipleCssClass", "class.ionic-pick-modal-is-searching": "this._isSearchingCssClass", "class.ionic-pick-modal-ios": "this._isIos", "class.ionic-pick-modal-md": "this._isMD", "class.ionic-pick-modal-is-add-item-template-visible": "this._isAddItemTemplateVisibleCssClass" } }, viewQueries: [{ propertyName: "_content", first: true, predicate: IonContent, descendants: true }, { propertyName: "_searchbarComponent", first: true, predicate: ["searchbarComponent"], descendants: true }, { propertyName: "_infiniteScroll", first: true, predicate: IonInfiniteScroll, descendants: true }], ngImport: i0, template: "<ion-header>\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\n      <ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\n          {{selectComponent.closeButtonText}}\n        </span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <!-- Need span for for text ellipsis. -->\n      <span *ngIf=\"selectComponent.titleTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.headerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar\n    *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent\n      [(ngModel)]=\"selectComponent._searchText\"\n      (ionChange)=\"!selectComponent.autoSearch && selectComponent._filterItems()\"\n      (ionInput)=\"selectComponent._autoSearch()\"\n      (ionClear)=\"selectComponent._onSearchbarClear()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\"\n      [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-pick-message\"\n      *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-pick-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-pick-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list class=\"ion-no-margin\"\n    *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\"\n      class=\"ionic-pick-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Need span for for text ellipsis. -->\n        <span *ngIf=\"selectComponent.groupTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\"\n            [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-pick-item\"\n        [ngClass]=\"{\n          'ionic-pick-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-pick-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n          [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"create\" md=\"create-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"trash\" md=\"trash-sharp\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\"\n      [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" class=\"ion-margin\">\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\"\n    [disabled]=\"!selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <cdk-virtual-scroll-viewport itemSize=\"56\" minBufferPx=\"900\" maxBufferPx=\"1350\" class=\"ion-no-margin\"\n    *ngIf=\"selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <div *cdkVirtualFor=\"let box of (selectComponent._filteredGroups[0].items || []); let i = index\">\n    <ion-item-divider *virtualHeader=\"let header\"\n      [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n      {{header}}\n    </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *virtualItem=\"let item\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-pick-item\"\n        [ngClass]=\"{\n          'ionic-pick-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-pick-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n          [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </div>\n  </cdk-virtual-scroll-viewport>\n</ion-content>\n<div class=\"ionic-pick-add-item-template\"\n  *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <div class=\"ionic-pick-add-item-template-inner\"\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n    </span>\n  </div>\n</div>\n<ion-footer\n  *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col\n        *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i1.IonButton, selector: "ion-button", inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"] }, { kind: "component", type: i1.IonButtons, selector: "ion-buttons", inputs: ["collapse"] }, { kind: "component", type: i1.IonCol, selector: "ion-col", inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"] }, { kind: "component", type: i1.IonContent, selector: "ion-content", inputs: ["color", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"] }, { kind: "component", type: i1.IonFooter, selector: "ion-footer", inputs: ["collapse", "mode", "translucent"] }, { kind: "component", type: i1.IonHeader, selector: "ion-header", inputs: ["collapse", "mode", "translucent"] }, { kind: "component", type: i1.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }, { kind: "component", type: i1.IonInfiniteScroll, selector: "ion-infinite-scroll", inputs: ["disabled", "position", "threshold"] }, { kind: "component", type: i1.IonInfiniteScrollContent, selector: "ion-infinite-scroll-content", inputs: ["loadingSpinner", "loadingText"] }, { kind: "component", type: i1.IonItem, selector: "ion-item", inputs: ["button", "color", "counter", "counterFormatter", "detail", "detailIcon", "disabled", "download", "fill", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "shape", "target", "type"] }, { kind: "component", type: i1.IonItemDivider, selector: "ion-item-divider", inputs: ["color", "mode", "sticky"] }, { kind: "component", type: i1.IonItemGroup, selector: "ion-item-group" }, { kind: "component", type: i1.IonLabel, selector: "ion-label", inputs: ["color", "mode", "position"] }, { kind: "component", type: i1.IonList, selector: "ion-list", inputs: ["inset", "lines", "mode"] }, { kind: "component", type: i1.IonRow, selector: "ion-row" }, { kind: "component", type: i1.IonSearchbar, selector: "ion-searchbar", inputs: ["animated", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "mode", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"] }, { kind: "component", type: i1.IonSpinner, selector: "ion-spinner", inputs: ["color", "duration", "name", "paused"] }, { kind: "component", type: i1.IonTitle, selector: "ion-title", inputs: ["color", "size"] }, { kind: "component", type: i1.IonToolbar, selector: "ion-toolbar", inputs: ["color", "mode"] }, { kind: "directive", type: i1.TextValueAccessor, selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar" }, { kind: "directive", type: i4.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i4.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i4.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ionic-pick-modal', template: "<ion-header>\n  <ion-toolbar *ngIf=\"!selectComponent.headerTemplate\"\n    [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\">\n    <ion-buttons [slot]=\"selectComponent.closeButtonSlot\">\n      <ion-button (click)=\"selectComponent._close()\">\n        <span *ngIf=\"selectComponent.closeButtonTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\">\n        </span>\n        <span *ngIf=\"!selectComponent.closeButtonTemplate\">\n          {{selectComponent.closeButtonText}}\n        </span>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      <!-- Need span for for text ellipsis. -->\n      <span *ngIf=\"selectComponent.titleTemplate\"\n        [ngTemplateOutlet]=\"selectComponent.titleTemplate\">\n      </span>\n      <span *ngIf=\"!selectComponent.titleTemplate\">\n        {{selectComponent.label}}\n      </span>\n    </ion-title>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.headerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.headerTemplate\">\n  </div>\n  <ion-toolbar\n    *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\">\n    <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent\n      [(ngModel)]=\"selectComponent._searchText\"\n      (ionChange)=\"!selectComponent.autoSearch && selectComponent._filterItems()\"\n      (ionInput)=\"selectComponent._autoSearch()\"\n      (ionClear)=\"selectComponent._onSearchbarClear()\"\n      [placeholder]=\"selectComponent.searchPlaceholder\"\n      [debounce]=\"selectComponent.searchDebounce\">\n    </ion-searchbar>\n    <div class=\"ionic-pick-message\"\n      *ngIf=\"selectComponent.messageTemplate\">\n      <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\">\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"ionic-pick-spinner\" *ngIf=\"selectComponent._isSearching\">\n    <div class=\"ionic-pick-spinner-background\"></div>\n    <ion-spinner></ion-spinner>\n  </div>\n  <ion-list class=\"ion-no-margin\"\n    *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\"\n      class=\"ionic-pick-group\">\n      <ion-item-divider *ngIf=\"selectComponent._hasGroups\"\n        [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n        <!-- Need span for for text ellipsis. -->\n        <span *ngIf=\"selectComponent.groupTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.groupTemplate\"\n          [ngTemplateOutletContext]=\"{ group: group }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.groupTemplate\">\n          {{group.text}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.groupEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.groupEndTemplate\"\n            [ngTemplateOutletContext]=\"{ group: group }\">\n          </div>\n        </div>\n      </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *ngFor=\"let item of group.items\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-pick-item\"\n        [ngClass]=\"{\n          'ionic-pick-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-pick-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n          [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"create\" md=\"create-sharp\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" ios=\"trash\" md=\"trash-sharp\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </ion-item-group>\n  </ion-list>\n  <!-- Fail text should be above InfiniteScroll to avoid a gap when no items are found. -->\n  <div *ngIf=\"!selectComponent._hasFilteredItems\">\n    <span *ngIf=\"selectComponent.searchFailTemplate\"\n      [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\">\n    </span>\n    <div *ngIf=\"!selectComponent.searchFailTemplate\" class=\"ion-margin\">\n      {{selectComponent.searchFailText}}\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\"\n    [disabled]=\"!selectComponent.hasInfiniteScroll\"\n    (ionInfinite)=\"selectComponent._getMoreItems()\">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <cdk-virtual-scroll-viewport itemSize=\"56\" minBufferPx=\"900\" maxBufferPx=\"1350\" class=\"ion-no-margin\"\n    *ngIf=\"selectComponent.hasVirtualScroll && selectComponent._hasFilteredItems\">\n    <div *cdkVirtualFor=\"let box of (selectComponent._filteredGroups[0].items || []); let i = index\">\n    <ion-item-divider *virtualHeader=\"let header\"\n      [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\">\n      {{header}}\n    </ion-item-divider>\n      <ion-item button=\"true\" detail=\"false\" *virtualItem=\"let item\"\n        (click)=\"selectComponent._select(item)\" class=\"ionic-pick-item\"\n        [ngClass]=\"{\n          'ionic-pick-item-is-selected': selectComponent._isItemSelected(item),\n          'ionic-pick-item-is-disabled': selectComponent._isItemDisabled(item)\n        }\" [disabled]=\"selectComponent._isItemDisabled(item)\">\n        <!-- Need span for text ellipsis. -->\n        <span *ngIf=\"selectComponent.itemTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <!-- Need ion-label for text ellipsis. -->\n        <ion-label *ngIf=\"!selectComponent.itemTemplate\">\n          {{selectComponent._formatItem(item)}}\n        </ion-label>\n        <div *ngIf=\"selectComponent.itemEndTemplate\" slot=\"end\">\n          <div [ngTemplateOutlet]=\"selectComponent.itemEndTemplate\"\n            [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n          </div>\n        </div>\n        <span *ngIf=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutlet]=\"selectComponent.itemIconTemplate\"\n          [ngTemplateOutletContext]=\"{ item: item, isItemSelected: selectComponent._isItemSelected(item) }\">\n        </span>\n        <ion-icon *ngIf=\"!selectComponent.itemIconTemplate\"\n          [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\"\n          [color]=\"selectComponent._isItemSelected(item) ? 'primary' : null\"\n          [slot]=\"selectComponent.itemIconSlot\">\n        </ion-icon>\n        <ion-button *ngIf=\"selectComponent.canSaveItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._saveItem($event, item)\">\n          <ion-icon slot=\"icon-only\" name=\"md-create\"></ion-icon>\n        </ion-button>\n        <ion-button *ngIf=\"selectComponent.canDeleteItem\"\n          class=\"ionic-pick-item-button\" slot=\"end\" fill=\"outline\"\n          (click)=\"selectComponent._deleteItemClick($event, item)\">\n          <ion-icon slot=\"icon-only\" name=\"md-trash\"></ion-icon>\n        </ion-button>\n      </ion-item>\n    </div>\n  </cdk-virtual-scroll-viewport>\n</ion-content>\n<div class=\"ionic-pick-add-item-template\"\n  *ngIf=\"selectComponent._isAddItemTemplateVisible\"\n  [ngStyle]=\"{ 'top.px': _header.offsetHeight }\">\n  <div class=\"ionic-pick-add-item-template-inner\"\n    [ngStyle]=\"{ 'height': selectComponent._addItemTemplateFooterHeight }\">\n    <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\"\n      [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\">\n    </span>\n  </div>\n</div>\n<ion-footer\n  *ngIf=\"selectComponent._footerButtonsCount > 0 || selectComponent.footerTemplate\"\n  [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\">\n  <ion-toolbar *ngIf=\"!selectComponent.footerTemplate\">\n    <ion-row>\n      <ion-col *ngIf=\"selectComponent.canClear\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._clear()\"\n          [disabled]=\"!selectComponent._selectedItems.length\">\n          {{selectComponent.clearButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col *ngIf=\"selectComponent.canAddItem\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._addItemClick()\">\n          {{selectComponent.addButtonText}}\n        </ion-button>\n      </ion-col>\n      <ion-col\n        *ngIf=\"selectComponent.isMultiple || selectComponent.hasConfirmButton\">\n        <ion-button expand=\"full\" (click)=\"selectComponent._confirm()\"\n          [disabled]=\"!selectComponent.isConfirmButtonEnabled\">\n          {{selectComponent.confirmButtonText}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n  <div *ngIf=\"selectComponent.footerTemplate\"\n    [ngTemplateOutlet]=\"selectComponent.footerTemplate\">\n  </div>\n</ion-footer>\n" }]
        }], ctorParameters: function () { return [{ type: i1.NavParams }, { type: i0.ElementRef }]; }, propDecorators: { _content: [{
                type: ViewChild,
                args: [IonContent]
            }], _searchbarComponent: [{
                type: ViewChild,
                args: ['searchbarComponent']
            }], _infiniteScroll: [{
                type: ViewChild,
                args: [IonInfiniteScroll]
            }], _cssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-modal']
            }], _canClearCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-modal-can-clear']
            }], _isMultipleCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-modal-is-multiple']
            }], _isSearchingCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-modal-is-searching']
            }], _isIos: [{
                type: HostBinding,
                args: ['class.ionic-pick-modal-ios']
            }], _isMD: [{
                type: HostBinding,
                args: ['class.ionic-pick-modal-md']
            }], _isAddItemTemplateVisibleCssClass: [{
                type: HostBinding,
                args: ['class.ionic-pick-modal-is-add-item-template-visible']
            }], onResize: [{
                type: HostListener,
                args: ['window:resize']
            }] } });

class IonicPickPlaceholderTemplateDirective {
}
IonicPickPlaceholderTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickPlaceholderTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickPlaceholderTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickPlaceholderTemplateDirective, selector: "[ionicPickPlaceholderTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickPlaceholderTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickPlaceholderTemplate]',
                }]
        }] });

class IonicPickSearchFailTemplateDirective {
}
IonicPickSearchFailTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickSearchFailTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickSearchFailTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickSearchFailTemplateDirective, selector: "[ionicPickSearchFailTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickSearchFailTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickSearchFailTemplate]',
                }]
        }] });

class IonicPickTitleTemplateDirective {
}
IonicPickTitleTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickTitleTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickTitleTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickTitleTemplateDirective, selector: "[ionicPickTitleTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickTitleTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickTitleTemplate]',
                }]
        }] });

class IonicPickValueTemplateDirective {
}
IonicPickValueTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickValueTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickValueTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickValueTemplateDirective, selector: "[ionicPickValueTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickValueTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickValueTemplate]',
                }]
        }] });

class IonicPickIconTemplateDirective {
}
IonicPickIconTemplateDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickIconTemplateDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IonicPickIconTemplateDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.9", type: IonicPickIconTemplateDirective, selector: "[ionicPickIconTemplate]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickIconTemplateDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ionicPickIconTemplate]'
                }]
        }] });

// tslint:disable-next-line:max-line-length
class IonicPickComponent {
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
        this.filterItems();
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
        }], ctorParameters: function () {
        return [{ type: i1.ModalController }, { type: i1.Platform }, { type: i1.IonItem, decorators: [{
                        type: Optional
                    }] }, { type: i0.IterableDiffers }, { type: i0.ElementRef }, { type: i0.Renderer2 }];
    }, propDecorators: { _cssClass: [{
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

const components = [IonicPickComponent, IonicPickModalComponent], directives = [
    IonicPickValueTemplateDirective,
    IonicPickItemTemplateDirective,
    IonicPickItemEndTemplateDirective,
    IonicPickTitleTemplateDirective,
    IonicPickPlaceholderTemplateDirective,
    IonicPickMessageTemplateDirective,
    IonicPickGroupTemplateDirective,
    IonicPickGroupEndTemplateDirective,
    IonicPickCloseButtonTemplateDirective,
    IonicPickSearchFailTemplateDirective,
    IonicPickAddItemTemplateDirective,
    IonicPickFooterTemplateDirective,
    IonicPickHeaderTemplateDirective,
    IonicPickItemIconTemplateDirective,
    IonicPickIconTemplateDirective
];
class IonicPickAngularModule {
}
IonicPickAngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickAngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
IonicPickAngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.9", ngImport: i0, type: IonicPickAngularModule, declarations: [IonicPickComponent, IonicPickModalComponent, IonicPickValueTemplateDirective,
        IonicPickItemTemplateDirective,
        IonicPickItemEndTemplateDirective,
        IonicPickTitleTemplateDirective,
        IonicPickPlaceholderTemplateDirective,
        IonicPickMessageTemplateDirective,
        IonicPickGroupTemplateDirective,
        IonicPickGroupEndTemplateDirective,
        IonicPickCloseButtonTemplateDirective,
        IonicPickSearchFailTemplateDirective,
        IonicPickAddItemTemplateDirective,
        IonicPickFooterTemplateDirective,
        IonicPickHeaderTemplateDirective,
        IonicPickItemIconTemplateDirective,
        IonicPickIconTemplateDirective], imports: [CommonModule,
        FormsModule,
        IonicModule,
        ScrollingModule,
        CdkVirtualScrollViewport], exports: [IonicPickComponent, IonicPickModalComponent, IonicPickValueTemplateDirective,
        IonicPickItemTemplateDirective,
        IonicPickItemEndTemplateDirective,
        IonicPickTitleTemplateDirective,
        IonicPickPlaceholderTemplateDirective,
        IonicPickMessageTemplateDirective,
        IonicPickGroupTemplateDirective,
        IonicPickGroupEndTemplateDirective,
        IonicPickCloseButtonTemplateDirective,
        IonicPickSearchFailTemplateDirective,
        IonicPickAddItemTemplateDirective,
        IonicPickFooterTemplateDirective,
        IonicPickHeaderTemplateDirective,
        IonicPickItemIconTemplateDirective,
        IonicPickIconTemplateDirective] });
IonicPickAngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickAngularModule, imports: [CommonModule,
        FormsModule,
        IonicModule,
        ScrollingModule,
        CdkVirtualScrollViewport] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: IonicPickAngularModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        ScrollingModule,
                        CdkVirtualScrollViewport,
                    ],
                    declarations: [
                        ...components,
                        ...directives
                    ],
                    exports: [
                        ...components,
                        ...directives
                    ],
                    entryComponents: components
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { IonicPickAddItemTemplateDirective, IonicPickAngularModule, IonicPickCloseButtonTemplateDirective, IonicPickComponent, IonicPickFooterTemplateDirective, IonicPickGroupEndTemplateDirective, IonicPickGroupTemplateDirective, IonicPickHeaderTemplateDirective, IonicPickIconTemplateDirective, IonicPickItemEndTemplateDirective, IonicPickItemIconTemplateDirective, IonicPickItemTemplateDirective, IonicPickMessageTemplateDirective, IonicPickModalComponent, IonicPickPlaceholderTemplateDirective, IonicPickSearchFailTemplateDirective, IonicPickTitleTemplateDirective, IonicPickValueTemplateDirective };
//# sourceMappingURL=ionic-pick.mjs.map

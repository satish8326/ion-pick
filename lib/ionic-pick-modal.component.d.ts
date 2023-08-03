import { AfterViewInit, ElementRef } from '@angular/core';
import { IonContent, IonInfiniteScroll, IonSearchbar, NavParams } from '@ionic/angular';
import { IonicPickComponent } from './ionic-pick.component';
import * as i0 from "@angular/core";
export declare class IonicPickModalComponent implements AfterViewInit {
    private navParams;
    _element: ElementRef;
    _content: IonContent;
    _header: HTMLElement;
    selectComponent: IonicPickComponent;
    _searchbarComponent: IonSearchbar;
    _infiniteScroll: IonInfiniteScroll;
    _cssClass: boolean;
    get _canClearCssClass(): boolean;
    get _isMultipleCssClass(): boolean;
    get _isSearchingCssClass(): boolean;
    get _isIos(): boolean;
    _isMD(): boolean;
    get _isAddItemTemplateVisibleCssClass(): boolean;
    onResize(): void;
    constructor(navParams: NavParams, _element: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IonicPickModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IonicPickModalComponent, "ionic-pick-modal", never, {}, {}, never, never, false, never>;
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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
import { IonicPickComponent } from './ionic-pick.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import * as i0 from "@angular/core";
export { IonicPickAddItemTemplateDirective } from './ionic-pick-add-item-template.directive';
export { IonicPickCloseButtonTemplateDirective } from './ionic-pick-close-button-template.directive';
export { IonicPickFooterTemplateDirective } from './ionic-pick-footer-template.directive';
export { IonicPickGroupEndTemplateDirective } from './ionic-pick-group-end-template.directive';
export { IonicPickGroupTemplateDirective } from './ionic-pick-group-template.directive';
export { IonicPickHeaderTemplateDirective } from './ionic-pick-header-template.directive';
export { IonicPickItemEndTemplateDirective } from './ionic-pick-item-end-template.directive';
export { IonicPickItemIconTemplateDirective } from './ionic-pick-item-icon-template.directive';
export { IonicPickItemTemplateDirective } from './ionic-pick-item-template.directive';
export { IonicPickMessageTemplateDirective } from './ionic-pick-message-template.directive';
export { IonicPickModalComponent } from './ionic-pick-modal.component';
export { IonicPickPlaceholderTemplateDirective } from './ionic-pick-placeholder-template.directive';
export { IonicPickSearchFailTemplateDirective } from './ionic-pick-search-fail-template.directive';
export { IonicPickTitleTemplateDirective } from './ionic-pick-title-template.directive';
export { IonicPickValueTemplateDirective } from './ionic-pick-value-template.directive';
export { IonicPickIconTemplateDirective } from './ionic-pick-icon-template.directive';
export { IonicPickComponent } from './ionic-pick.component';
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
export class IonicPickAngularModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtcGljay1hbmd1bGFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lvbmljLXBpY2stYW5ndWxhci9zcmMvbGliL2lvbmljLXBpY2stYW5ndWxhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUNyRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNwRyxPQUFPLEVBQUUsb0NB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O1FBQ3JDLG9DQUFvQztRQUNwQyxpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsOEJBQThCO29IQXFCckIsc0JBQXNCLFlBaEIvQixZQUFZO1FBQ1osV0FBVztRQUNYLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysd0JBQXdCOzJGQVlmLHNCQUFzQjtrQkFsQmxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3dCQUNYLGVBQWU7d0JBQ2Ysd0JBQXdCO3FCQUN6QjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osR0FBRyxVQUFVO3dCQUNiLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsR0FBRyxVQUFVO3dCQUNiLEdBQUcsVUFBVTtxQkFDZDtvQkFDRCxlQUFlLEVBQUUsVUFBVTtpQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBJb25pY1BpY2tBZGRJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stYWRkLWl0ZW0tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljUGlja0Nsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stY2xvc2UtYnV0dG9uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1BpY2tGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1mb290ZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljUGlja0dyb3VwRW5kVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stZ3JvdXAtZW5kLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1BpY2tHcm91cFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLWdyb3VwLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1BpY2tIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1oZWFkZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljUGlja0l0ZW1FbmRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1pdGVtLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNQaWNrSXRlbUljb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1pdGVtLWljb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljUGlja0l0ZW1UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1BpY2tNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stbWVzc2FnZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNQaWNrTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2lvbmljLXBpY2stbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljUGlja1BsYWNlaG9sZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stcGxhY2Vob2xkZXItdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljUGlja1NlYXJjaEZhaWxUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1zZWFyY2gtZmFpbC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNQaWNrVGl0bGVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay10aXRsZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNQaWNrVmFsdWVUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay12YWx1ZS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNQaWNrSWNvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLWljb24tdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljUGlja0NvbXBvbmVudCB9IGZyb20gJy4vaW9uaWMtcGljay5jb21wb25lbnQnO1xuZXhwb3J0IHsgSW9uaWNQaWNrQWRkSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLWFkZC1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1BpY2tDbG9zZUJ1dHRvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLWNsb3NlLWJ1dHRvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNQaWNrRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1BpY2tHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLWdyb3VwLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNQaWNrR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1ncm91cC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNQaWNrSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2staGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1BpY2tJdGVtRW5kVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2staXRlbS1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljUGlja0l0ZW1JY29uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2staXRlbS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1BpY2tJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2staXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuZXhwb3J0IHsgSW9uaWNQaWNrTWVzc2FnZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLW1lc3NhZ2UtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljUGlja01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYy1waWNrLW1vZGFsLmNvbXBvbmVudCc7XG5leHBvcnQgeyBJb25pY1BpY2tQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1waWNrLXBsYWNlaG9sZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1BpY2tTZWFyY2hGYWlsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stc2VhcmNoLWZhaWwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljUGlja1RpdGxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stdGl0bGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljUGlja1ZhbHVlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXBpY2stdmFsdWUtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmV4cG9ydCB7IElvbmljUGlja0ljb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtcGljay1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5leHBvcnQgeyBJb25pY1BpY2tDb21wb25lbnQgfSBmcm9tICcuL2lvbmljLXBpY2suY29tcG9uZW50JztcbmltcG9ydCB7IFNjcm9sbGluZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnR9IGZyb20gXCJAYW5ndWxhci9jZGsvc2Nyb2xsaW5nXCI7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSBbSW9uaWNQaWNrQ29tcG9uZW50LCBJb25pY1BpY2tNb2RhbENvbXBvbmVudF0sXG4gIGRpcmVjdGl2ZXMgPSBbXG4gICAgSW9uaWNQaWNrVmFsdWVUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1BpY2tJdGVtVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNQaWNrSXRlbUVuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljUGlja1RpdGxlVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNQaWNrUGxhY2Vob2xkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1BpY2tNZXNzYWdlVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNQaWNrR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1BpY2tHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljUGlja0Nsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgSW9uaWNQaWNrU2VhcmNoRmFpbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljUGlja0FkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1BpY2tGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1BpY2tIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBJb25pY1BpY2tJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIElvbmljUGlja0ljb25UZW1wbGF0ZURpcmVjdGl2ZVxuICBdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSxcbiAgICBDZGtWaXJ0dWFsU2Nyb2xsVmlld3BvcnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLmNvbXBvbmVudHMsXG4gICAgLi4uZGlyZWN0aXZlc1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uY29tcG9uZW50cyxcbiAgICAuLi5kaXJlY3RpdmVzXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogY29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBJb25pY1BpY2tBbmd1bGFyTW9kdWxlIHt9XG4iXX0=
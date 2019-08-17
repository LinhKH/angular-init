import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElmFooterComponent } from './elm-footer/elm-footer.component';
import { ElmFooterBottomComponent } from './elm-footer-bottom/elm-footer-bottom.component';
import { ElmFooterTopComponent } from './elm-footer-top/elm-footer-top.component';
import { ElmHeaderComponent } from './elm-header/elm-header.component';
import { ElmLoaderComponent } from './elm-loader/elm-loader.component';
import { ElmPagerComponent } from './elm-pager/elm-pager.component';
import { ElmPanelTitleComponent } from './elm-panel-title/elm-panel-title.component';
import { ElmPlaylistComponent } from './elm-playlist/elm-playlist.component';
import { ElmPlaylistLoadMoreComponent } from './elm-playlist-load-more/elm-playlist-load-more.component';
import { ElmPlaylistPaginationComponent } from './elm-playlist-pagination/elm-playlist-pagination.component';
import { ElmVideoComponent } from './elm-video/elm-video.component';
import { ElmYoutubeIframeComponent } from './elm-youtube-iframe/elm-youtube-iframe.component';
import { WidgetAddsComponent } from './widget-adds/widget-adds.component';
import { WidgetBannerComponent } from './widget-banner/widget-banner.component';
import { WidgetContactComponent } from './widget-contact/widget-contact.component';
import { WidgetCopyrightComponent } from './widget-copyright/widget-copyright.component';
import { WidgetFacebookComponent } from './widget-facebook/widget-facebook.component';
import { WidgetFeaturedVideoComponent } from './widget-featured-video/widget-featured-video.component';
import { WidgetMenuBottomComponent } from './widget-menu-bottom/widget-menu-bottom.component';
import { WidgetMenuMainComponent } from './widget-menu-main/widget-menu-main.component';
import { WidgetMenuTopComponent } from './widget-menu-top/widget-menu-top.component';
import { WidgetPlaylistComponent } from './widget-playlist/widget-playlist.component';
import { WidgetPopularVideoComponent } from './widget-popular-video/widget-popular-video.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';


@NgModule({
  declarations: [ElmFooterComponent, ElmFooterBottomComponent, ElmFooterTopComponent, ElmHeaderComponent, ElmLoaderComponent, ElmPagerComponent, ElmPanelTitleComponent, ElmPlaylistComponent, ElmPlaylistLoadMoreComponent, ElmPlaylistPaginationComponent, ElmVideoComponent, ElmYoutubeIframeComponent, WidgetAddsComponent, WidgetBannerComponent, WidgetContactComponent, WidgetCopyrightComponent, WidgetFacebookComponent, WidgetFeaturedVideoComponent, WidgetMenuBottomComponent, WidgetMenuMainComponent, WidgetMenuTopComponent, WidgetPlaylistComponent, WidgetPopularVideoComponent, WidgetSocialComponent],
  imports: [
    CommonModule
  ]
})
export class ElementsModule { }

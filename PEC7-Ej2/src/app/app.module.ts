import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guard/auth.guard';
import { WineLoadResolverGuard } from './guard/wine-load-resolver.guard';
import { WineNewDeactivateGuard } from './guard/wine-new-deactivate-guard';
import { ImageWinePipe } from './pipes/image-wine.pipe';
import { UserStoreService } from './services/user-store.service';
import { UserService } from './services/user.service';
import { WineAppInterceptor } from './services/wine-app.interceptor';
import { WineService } from './services/wine.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { WineDetailComponent } from './wines/wine-detail/wine-detail.component';
import { WineItemComponent } from './wines/wine-item/wine-item.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineNewComponent } from './wines/wine-new/wine-new.component';

@NgModule({
  declarations: [
    AppComponent,
    WineItemComponent,
    WineListComponent,
    WineNewComponent,
    ImageWinePipe,
    LoginComponent,
    RegisterComponent,
    WineDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // NgModel
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    WineService,
    UserService,
    UserStoreService,
    AuthGuard,
    WineLoadResolverGuard,
    WineNewDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WineAppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

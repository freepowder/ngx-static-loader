export const environment = {
  production: true,
  addModule:
    `
  import { NgModule } from '@angular/core';
  import { AppComponent } from './app.component';
  import { NgxStaticLoaderModule } from 'ngx-static-loader';
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      NgxStaticLoaderModule.forRoot({ path: 'assets/path/to/your/static-content.json' })
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }

`,
  withMarkup: `<div [innerHTML]="'APP.BODY.CONTENT' | staticLoader | async"></div>`,
  useStatic: `<p>{{ 'APP.BODY.TITLE' | staticLoader | async }}</p>`,
  useStaticSafe: `<img [attr.src]="'APP.LOGO.URL' | staticLoaderSafeUrl | async" alt="{{'APP.LOGO.ALT' | staticLoader | async }}">`,
  useStaticSafe2:
    `<a [attr.href]="'APP.BODY.CTA.LINK' | staticLoaderSafeUrl | async" rel="noopener" target="_blank">
          {{'APP.BODY.CTA.LINK' | staticLoader | async }}
    </a>`,
  jsonEx: `{
  "APP": {
    "LOGO" : {
       "URL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmci
       IHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2
       My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQz
       MwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8
       cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNG
       wxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==",
       "ALT": "angular logo brand"
    },
    "BODY" : {
      "TITLE": "static async loader",
      "CTA":{
        "LABEL": "load static content",
        "LINK": "https://angular.io/tutorial"
      },
      "CONTENT": "&lt;span&gt; load static content with html &lt;/span&gt;"
    }
  }
}`
};

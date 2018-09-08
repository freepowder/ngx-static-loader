# Ngx Static Loader

[![NPM](https://nodei.co/npm/ngx-static-loader.png?downloads=true&stars=true)](https://nodei.co/npm/ngx-static-loader/)
 
### Load static content into your angular apps!
#### Fetch static content into your templates from a .json file using ngx-static-loader.<br/> Supports text, links, markup, and urls. <br/>All your static content in one place, perfect for quick prototyping, demos, small & medium apps, mvps, etc...<br/>This library requires you to use the assets folder as entry point, and it supports any level of nested objects in your .json file.

This is a component for Angular 6.x. 


## Install
    npm i ngx-static-loader --save

    
## Configuration

Create your *.json file in assets folder:

    "EXAMPLE" : {
          "LOGO" : {
            "URL": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==",
            "ALT": "angular logo brand"
          },
          "BODY" : {
            "TITLE": "static async loader",
            "CTA":{
              "LABEL": "load static content",
              "LINK": "https://angular.io/tutorial"
            },
            "CONTENT": "<span> load static content with html </span>"
          }
        }

Add it to your module

```javascript
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
```

## Usage

### @Pipe staticLoader 

with text

`<p>{{ 'APP.BODY.TITLE' | staticLoader | async }}</p>`

with markup 

`<div [innerHTML]="'APP.BODY.CONTENT' | staticLoader | async"></div>`

### @Pipe staticLoaderSafeUrl 

with image

`<img [attr.src]="'APP.LOGO.URL' | staticLoaderSafeUrl | async" alt="{{'APP.LOGO.ALT' | staticLoader | async }}">`

with link

 `<a [attr.href]="'APP.BODY.CTA.LINK' | staticLoaderSafeUrl | async" rel="noopener" target="_blank">
          {{'APP.BODY.CTA.LINK' | staticLoader | async }}
    </a>`

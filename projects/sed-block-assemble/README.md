# SedBlockAssemble

An engaging animation to enhance your Angular components.

## Usage
Import the `sed-block-assemble` module into your application or feature module 
after any common modules, libraries or frameworks

```js
import { SedBlockAssembleModule } from '@sedware/block-assemble';

@NgModule({
  ...
  imports: [
    ...
    SedBlockAssembleModule
  ],
  ...
})
export class AppModule { }
```

Use the block assemble animation in your components

```html
<sed-block-assemble>
    Your content/components go here...
</sed-block-assemble>
```

#### Summary
Aside from the typcial Angular dependencies, this component utilises 
the [dom-to-image](https://github.com/tsayen/dom-to-image) plugin to increase 
animation performance.

If you have any issues or would like to contribute, please raise a 
[Github issue](https://github.com/saedwards/sed-block-assemble/issues) or a pull 
request with new changes. If you think the component doesn't quite fit your 
needs and could be improved, you're very welcome to start a discussion about 
new feature requests/changes by raising an issue.

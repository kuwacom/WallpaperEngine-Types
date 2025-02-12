# WallpaperEngine-Types
WallpaperEngine TypeScirpt types

# Use example

Install Types
```bash
npm i @kuwa/wallpaper-engine-types
```

Coding
```ts
window.wallpaperPropertyListener = {
  applyUserProperties: (properties) => {
    if (!properties) return;

    for (const propertyKey in properties) {
      const prop = properties[propertyKey];
      console.log(prop);

      switch (prop.type) {
        case "slider": // スライダー
          if (propertyKey == "property name here") {
          }
          break;

        case "bool": // チェックボックス
          break;

        case "combo": // セレクトメニュー
          break;
      }
    }
  },
};
```
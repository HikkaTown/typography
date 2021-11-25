## Правила именования css классов
- camelCase
- модификаторы через 2 тире '--'
- разделение блока через '__'

## GIT
- название ветки: {номер задачи}_{краткое описание}

```
$mobileS: 320px;
$mobileM: 375px;
$mobileL: 425px;
$tablet: 768px;
$desktopL: 1320px;
$desktopM: 1024px;

@mixin mobileS {
  @media (min-width: #{$mobileS}) and (max-width: #{$tablet - 1px}) {
    @content;
  }
}

@mixin mobileM {
  @media (min-width: #{$mobileM}) and (max-width: #{$tablet - 1px}) {
    @content;
  }
}

@mixin mobileL {
  @media (min-width: #{$mobileL}) and (max-width: #{$tablet - 1px}) {
    @content;
  }
}

@mixin mobileOnly {
  @media (min-width: 0px) and (max-width: #{$tablet - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$tablet}) and (max-width: #{$desktopM - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$desktopM}) {
    @content;
  }
}
```

1ppc.ru

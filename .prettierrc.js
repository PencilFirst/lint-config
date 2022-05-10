module.exports = {
  // 一行的字符数，如果超过会进行换行，默认为80，官方建议设100-120其中一个数
  printWidth: 100,
  // 一个tab代表几个空格数，默认就是2
  tabWidth: 2,
  // 启用tab取代空格符缩进，默认为false
  useTabs: false,
  // 行尾是否使用分号，默认为true
  semi: false,
  // 字符串是否使用单引号，默认为false，即使用双引号，建议设true，即单引号
  singleQuote: true,
  // 给对象里的属性名是否要加上引号，默认为as-needed，即根据需要决定，如果不加引号会报错则加，否则不加
  quoteProps: 'as-needed',
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: 'none',
  // 在jsx里是否使用单引号
  jsxSingleQuote: true,
  // 对象大括号之间是否有空格，默认为true，效果：{ foo: bar }
  bracketSpacing: true,
  // JSX标签闭合位置 默认false
  jsxBracketSameLine: false,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  arrowParens: 'avoid',
  singleAttributePerLine: true,
  htmlWhitespaceSensitivity: 'ignore'
}

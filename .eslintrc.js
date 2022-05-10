module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/extensions': 0,
    'no-await-in-loop': 0,
    'no-nested-ternary': 0,
    'no-loop-func': 0,
    'func-names': 0,
    'no-multi-assign': 0,
    'no-console': ['error'],
    'vue/order-in-components': 0,
    'array-callback-return': 0,
    'vue/no-v-html': 0,
    'import/no-dynamic-require': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'global-require': 0,
    'import/no-unresolved': 0,
    'brace-style': 0,
    'object-curly-newline': ['error', { consistent: true }],
    'indent': 0,
    'arrow-parens': ['error', 'as-needed'],
    'semi': 0,
    'implicit-arrow-linebreak': 0,
    'quote-props': ['error', 'consistent-as-needed'],
    'prettier/prettier': 0,
    'no-trailing-spaces': 0,
    'jsx-quotes': 0,
    // 禁止使用尾逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline',
      },
    ],
    // 禁止使用逗号表达式
    'no-sequences': 0,
    // 禁止 var 声明中的初始化
    'init-declarations': 2,
    // 禁止在变量定义之前使用它们
    'no-use-before-define': 2,
    // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'no-undef': 0,
    // 禁用 void 操作符
    'no-void': 0,
    // 禁用按位运算符
    'no-bitwise': 0,
    // 禁止扩展原生类型
    'no-extend-native': 0,
    // 要求 return 语句要么总是指定返回的值，要么不指定
    'consistent-return': 0,
    // 禁用一元操作符 ++ 和 --
    'no-plusplus': 0,
    // 禁用特定的语法
    'no-restricted-syntax': 0,
    // 禁止标识符中有悬空下划线
    'no-underscore-dangle': 0,
    // 禁止直接调用 Object.prototypes 的内置属性
    'no-prototype-builtins': 0,
    // 禁止重复模块导入
    'no-duplicate-imports': 2,
    // 优先使用数组和对象解构
    'prefer-destructuring': 2,
    'import/no-cycle': 0,
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-tags-order': [
      'error',
      {
        order: [['script', 'template'], 'style'],
      },
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
        alphabetical: false,
      },
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1,
          allowFirstLine: true
        },
        multiline: {
          max: 1,
          allowFirstLine: true
        },
      },
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: [
          'pre',
          'textarea',
          'a',
          'abbr',
          'audio',
          'b',
          'bdi',
          'bdo',
          'canvas',
          'cite',
          'code',
          'data',
          'del',
          'dfn',
          'em',
          'i',
          'iframe',
          'ins',
          'kbd',
          'label',
          'map',
          'mark',
          'noscript',
          'object',
          'output',
          'picture',
          'q',
          'ruby',
          's',
          'samp',
          'small',
          'span',
          'strong',
          'sub',
          'sup',
          'svg',
          'time',
          'u',
          'var',
          'video',
        ],
      },
    ],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/require-v-for-key': 2,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src/']],
      },
    },
  },
}

module.exports = {
    ignoreFiles: ['**/*.js', 'theme/', 'plugins/', 'css/'],
    defaultSeverity: 'error',
    extends: ['stylelint-config-standard', 'stylelint-config-prettier', 'stylelint-config-recommended-vue', 'stylelint-config-recommended-vue/scss', 'stylelint-config-recess-order'],
    plugins: ['stylelint-scss'],
    overrides: [
      {
        files: ['*.{ vue, css, less, scss, html }', '**/*.{ vue, css, less, scss, html }']
      }
    ],
    rules: {
      'no-invalid-position-at-import-rule': null,
      'font-family-no-missing-generic-family-keyword': null,
      'color-hex-length': 'long',
      'media-feature-name-no-vendor-prefix': true,
      'at-rule-no-vendor-prefix': true,
      'selector-no-vendor-prefix': true,
      'property-no-vendor-prefix': null,
      'value-no-vendor-prefix': null,
      'block-no-empty': null,
      'no-empty-source': null,
      'no-descending-specificity': null,
      'selector-type-no-unknown': null,
      'no-duplicate-selectors': null,
      'declaration-block-no-duplicate-properties': null,
      'property-no-unknown': null,
      'selector-pseudo-element-no-unknown': null,
      'selector-pseudo-class-no-unknown': null,
      'at-rule-no-unknown': null,
      'scss/at-rule-no-unknown': true
    }
  }

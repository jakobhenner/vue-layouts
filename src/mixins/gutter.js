export default {
  props: {
    gutterVertical: [Boolean, String],
    marginBottom: [Boolean, String],
    marginTop: [Boolean, String],
    supportedGutterTypes: {
      type: Array,
      default: function () {
        return [
          'gutterVertical',
          'marginBottom',
          'marginTop'
        ]
      }
    }
  },
  methods: {
    kebabToCamel (str) {
      if (!str || typeof str !== 'string') return
      const array = str.split('-')
      let camel = ''
      array.forEach(substring => {
        camel += substring.charAt(0).toUpperCase() + substring.slice(1)
      })
      return camel
    },
    getGutter (type) {
      // Find multiplier value on instance [e.g. large, x-large, small]
      const multiplier = this[type]

      // Convert from kebab to CamelCase
      const formattedName = multiplier && this.kebabToCamel(multiplier)

      // Stringify className and find class
      const className = this.$style[`${type}${formattedName}`]
      return {
        className,
        // multiplier can both be a {Boolean} and {String}
        enabled: multiplier === '' || multiplier,
        formattedName,
        type
      }
    }
  },
  computed: {
    gutters () {
      const classes = {}
      this.supportedGutterTypes.forEach(type => {
        const gutter = this.getGutter(type)

        // Tests whether class actual exists in css AND enabled on component
        if (gutter.className && gutter.enabled) {
          classes[gutter.className] = gutter.enabled
        }
      })
      return classes
    }
  }
}

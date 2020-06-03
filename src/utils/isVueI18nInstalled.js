export default function() {
  return this.$i18n && this.$i18n.constructor && this.$i18n.constructor.name == 'VueI18n' && this.$t !== undefined
}
export default {
  change: {
    base: {
      description: 'Change event',
      params: {
        newValue: {
          description: 'New value',
          types: ['string']
        },
        oldValue: {
          description: 'Old value',
          types: ['string']
        },
      }
    }
  }
}
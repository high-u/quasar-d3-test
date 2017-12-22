export const SCHEMA_CHART = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      label: {
        description: 'label',
        type: 'string'
      },
      count: {
        description: 'count',
        type: 'integer'
      }
    }
  }
}

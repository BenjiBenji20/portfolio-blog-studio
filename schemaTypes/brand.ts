import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'brand',
    title: 'Portfolio Brand',
    type: 'document',
    fields: [
        defineField({ name: 'portfolioBrandName', type: 'string' }),
        defineField({ name: 'image', type: 'customAsset' }),
    ],
})

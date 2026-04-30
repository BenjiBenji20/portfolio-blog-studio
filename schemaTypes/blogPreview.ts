import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogPreview',
    title: 'Blog Preview',
    type: 'document',
    fields: [
        defineField({
            name: 'profileDetails',
            type: 'reference',
            to: [{ type: 'home' }]
        }),
        defineField({ name: 'profilePhoto', type: 'customAsset' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
            name: 'carousel',
            type: 'array',
            of: [{ type: 'customAsset' }]
        }),
    ],
})

import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [
        defineField({ name: 'mainDescription', type: 'text' }),
        defineField({
            name: 'personalInformation',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    { name: 'label', type: 'string' },
                    { name: 'value', type: 'string' }
                ]
            }]
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{ type: 'customAsset' }]
        }),
        defineField({
            name: 'moreAboutMe',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    { name: 'headerTitle', type: 'string' },
                    { name: 'description', type: 'text' },
                    { name: 'items', type: 'array', of: [{ type: 'string' }] },
                    { name: 'images', type: 'array', of: [{ type: 'customAsset' }] }
                ]
            }]
        }),
    ],
})

import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contact',
    title: 'Contact Section',
    type: 'document',
    fields: [
        defineField({ name: 'email', type: 'string' }),
        defineField({ name: 'availability', type: 'string' }),
        defineField({ name: 'location', type: 'string' }),
        defineField({ name: 'timezone', type: 'string' }),
        defineField({
            name: 'formOptions',
            type: 'array',
            of: [{ type: 'string' }]
        }),
        defineField({
            name: 'socials',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    { name: 'platform', type: 'string' },
                    { name: 'username', type: 'string' },
                    { name: 'iconUrl', type: 'customAsset' },
                    { name: 'url', type: 'string' }
                ]
            }]
        }),
    ],
})

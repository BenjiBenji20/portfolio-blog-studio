import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home Section',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({ name: 'role', type: 'string' }),
        defineField({ name: 'tagline', type: 'string' }),
        defineField({ name: 'selfPortrait', type: 'customAsset' }),
        defineField({
            name: 'links',
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
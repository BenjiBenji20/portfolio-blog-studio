import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectImages',
    title: 'Project Images',
    type: 'document',
    fields: [
        defineField({
            name: 'project',
            title: 'Linked Project',
            type: 'reference',
            to: [{ type: 'project' }]
        }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
            name: 'contents',
            type: 'array',
            of: [{ type: 'customAsset' }]
        }),
    ],
})

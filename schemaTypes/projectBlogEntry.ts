import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectBlogEntry',
    title: 'Daily Blog Entry',
    type: 'document',
    fields: [
        defineField({
            name: 'project',
            title: 'Linked Project',
            type: 'reference',
            to: [{ type: 'project' }]
        }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'datetime', type: 'datetime' }),
        defineField({ name: 'description', title: 'Content (Markdown)', type: 'text' }),
        defineField({ name: 'commitLink', type: 'url' }),
        defineField({
            name: 'assets',
            type: 'array',
            of: [{ type: 'customAsset' }]
        }),
    ],
})
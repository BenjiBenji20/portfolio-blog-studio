import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'slug',
            title: 'Slug (Project ID)',
            type: 'slug',
            options: { source: 'title' }
        }),
        defineField({ name: 'datetime', type: 'datetime' }),
        defineField({ name: 'shortDescription', type: 'text' }),
        defineField({ name: 'repositoryLink', type: 'url' }),
        defineField({ name: 'thumbnail', type: 'customAsset' }),
    ],
})
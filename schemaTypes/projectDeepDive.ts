import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectDeepDive',
    title: 'Project Deep Dive',
    type: 'document',
    fields: [
        defineField({
            name: 'project',
            title: 'Linked Project',
            type: 'reference',
            to: [{ type: 'project' }]
        }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'liveAPIDocumentation', type: 'url' }),
        defineField({
            name: 'assets',
            type: 'array',
            of: [{ type: 'customAsset' }]
        }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'repoLink', type: 'url' }),
        defineField({ name: 'liveSiteLink', type: 'url' }),
    ],
})

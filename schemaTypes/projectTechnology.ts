import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projectTechnology',
    title: 'Project Technology',
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
            name: 'techStacks',
            type: 'array',
            of: [{
                type: 'object', fields: [
                    {
                        name: 'type',
                        type: 'string',
                        options: { list: ['language', 'deployment', 'tool', 'ai-agent', 'others'] }
                    },
                    { name: 'description', type: 'text' },
                    { name: 'assets', type: 'array', of: [{ type: 'customAsset' }] }
                ]
            }]
        }),
    ],
})

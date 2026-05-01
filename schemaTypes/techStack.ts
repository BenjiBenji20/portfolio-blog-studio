import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'techStack',
    title: 'Tech Stack Item',
    type: 'document',
    fields: [
        defineField({ name: 'name', type: 'string' }),
        defineField({
            name: 'category',
            type: 'string',
            options: { list: ['Language', 'Deployment', 'Tool', 'AIAgent', 'Others'] }
        }),
        defineField({ name: 'icon', type: 'customAsset' }),
    ],
})

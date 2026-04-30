import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'customAsset',
    title: 'Asset',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            type: 'string',
            options: { list: ['image', 'video'] }
        }),
        defineField({
            name: 'videoType',
            type: 'string',
            options: { list: ['sanity', 'youtube', 'vimeo'] },
            hidden: ({ parent }) => parent?.type !== 'video'
        }),
        defineField({
            name: 'assetUrl',
            title: 'URL / Video Link',
            type: 'string',
        }),
        defineField({
            name: 'imageFile',
            title: 'Image Upload',
            type: 'image',
            options: { hotspot: true },
            hidden: ({ parent }) => parent?.type !== 'image'
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'altText',
            type: 'string',
        }),
    ],
})
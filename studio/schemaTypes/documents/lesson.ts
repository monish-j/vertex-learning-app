import { defineArrayMember, defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const lesson = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Supported providers: YouTube, Vimeo, or Bunny Video',
      validation: (rule) =>
        rule
          .required()
          .uri({ scheme: ['https'] })
          .custom((url) => {
            if (!url) return true
            try {
              const parsed = new URL(url)
              const hostname = parsed.hostname.toLowerCase()
              const allowed = [
                'youtube.com',
                'www.youtube.com',
                'youtu.be',
                'm.youtube.com',
                'vimeo.com',
                'www.vimeo.com',
                'player.vimeo.com',
                'bunny.net',
                'iframe.mediadelivery.net',
                'video.bunnycdn.com',
              ]
              const isAllowed = allowed.some(
                (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
              )
              return isAllowed
                ? true
                : 'Video URL must be hosted on YouTube, Vimeo, or Bunny'
            } catch {
              return 'Invalid URL'
            }
          }),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Duration (in seconds)',
      type: 'number',
      description: 'Total duration of the video in seconds',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'freePreview',
      title: 'Free Preview',
      type: 'boolean',
      description: 'Allow learners to preview this lesson without purchasing/enrolling',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count (Display only)',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'blockContent',
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points',
      description: 'Bullet points for the "In this lesson you will" section (max 6)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (rule) => rule.max(6),
    }),
    defineField({
      name: 'proTip',
      title: 'Pro Tip',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [defineArrayMember({ type: 'resource' })],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      duration: 'duration',
    },
    prepare({ title, media, duration }) {
      const minutes = duration ? Math.floor(duration / 60) : 0
      const seconds = duration ? duration % 60 : 0
      const formatted = duration
        ? `${minutes}:${seconds.toString().padStart(2, '0')}`
        : '0:00'
      return {
        title: title || 'Untitled Lesson',
        media,
        subtitle: `Duration: ${formatted} (${duration || 0}s)`,
      }
    },
  },
})

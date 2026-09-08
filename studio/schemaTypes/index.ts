import { type SchemaTypeDefinition } from 'sanity'

import { blockContent } from './objects/blockContent'
import { learningOutcome } from './objects/learningOutcome'
import { resource } from './objects/resource'
import { module as moduleType } from './objects/module'

import { category } from './documents/category'
import { instructor } from './documents/instructor'
import { lesson } from './documents/lesson'
import { course } from './documents/course'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    course,
    lesson,
    instructor,
    category,

    // Objects
    moduleType,
    learningOutcome,
    resource,
    blockContent,
  ],
}

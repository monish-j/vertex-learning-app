import { defineQuery } from 'next-sanity'

/**
 * Catalog Query: List of courses for catalog and home page cards
 */
export const COURSES_LIST_QUERY = defineQuery(`
  *[_type == "course"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    level,
    price,
    popular,
    studentCount,
    coverImage,
    instructor->{
      _id,
      name,
      "slug": slug.current,
      photo
    },
    category->{
      _id,
      title,
      "slug": slug.current
    },
    "moduleCount": count(modules),
    "totalDuration": math::sum(modules[].lessons[]->duration)
  }
`)

/**
 * Static Params Query: Slugs for all courses
 */
export const COURSE_SLUGS_QUERY = defineQuery(`
  *[_type == "course" && defined(slug.current)] {
    "slug": slug.current
  }
`)

/**
 * Course Detail Query: Full course detail by slug
 */
export const COURSE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage,
    level,
    price,
    popular,
    studentCount,
    learningOutcomes[]{
      _key,
      icon,
      title,
      description
    },
    instructor->{
      _id,
      name,
      "slug": slug.current,
      photo,
      expertise,
      bio
    },
    category->{
      _id,
      title,
      "slug": slug.current
    },
    "totalDuration": math::sum(modules[].lessons[]->duration),
    modules[]{
      _key,
      title,
      summary,
      lessons[]->{
        _id,
        title,
        "slug": slug.current,
        duration,
        freePreview
      }
    }
  }
`)

/**
 * Static Params Query: Slugs for all lessons
 */
export const LESSON_SLUGS_QUERY = defineQuery(`
  *[_type == "lesson" && defined(slug.current)] {
    "slug": slug.current
  }
`)

/**
 * Lesson Detail Query: Full lesson detail with parent course resolution
 */
export const LESSON_BY_SLUG_QUERY = defineQuery(`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    videoUrl,
    thumbnail,
    duration,
    freePreview,
    studentCount,
    notes,
    keyPoints,
    proTip,
    resources[]{
      _key,
      type,
      title,
      description,
      url
    },
    "course": *[_type == "course" && references(^._id)][0] {
      _id,
      title,
      "slug": slug.current,
      instructor->{
        _id,
        name,
        "slug": slug.current,
        photo
      },
      modules[]{
        _key,
        title,
        lessons[]->{
          _id,
          title,
          "slug": slug.current,
          duration,
          freePreview
        }
      }
    }
  }
`)

/**
 * Instructors List Query
 */
export const INSTRUCTORS_LIST_QUERY = defineQuery(`
  *[_type == "instructor"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    photo,
    expertise
  }
`)

/**
 * Instructor Detail Query by slug with their authored courses
 */
export const INSTRUCTOR_BY_SLUG_QUERY = defineQuery(`
  *[_type == "instructor" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    photo,
    expertise,
    bio,
    "courses": *[_type == "course" && references(^._id)] {
      _id,
      title,
      "slug": slug.current,
      summary,
      level,
      price,
      popular,
      studentCount,
      coverImage,
      category->{
        _id,
        title,
        "slug": slug.current
      },
      "moduleCount": count(modules),
      "totalDuration": math::sum(modules[].lessons[]->duration)
    }
  }
`)

/**
 * Categories List Query for filters and navigation
 */
export const CATEGORIES_LIST_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "courseCount": count(*[_type == "course" && references(^._id)])
  }
`)

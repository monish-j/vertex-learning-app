import React from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { PageFrame } from "@/components/layout/page-frame";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/home/hero";
import { ChartDecoration } from "@/components/home/chart-decoration";
import { CourseCard } from "@/components/cards/course-card";
import {
  NextJsMark,
  DockerMark,
  TypeScriptMark,
} from "@/components/brand/course-marks";

// Local placeholder course data shaped for future GROQ fetch integration
const featuredCourses = [
  {
    id: "nextjs-for-production",
    title: "Next.js for Production",
    description:
      "Build scalable, high-performance web applications with Next.js.",
    level: "Intermediate",
    duration: "18h 24m",
    modulesCount: "12 modules",
    icon: <NextJsMark />,
    href: "/courses/nextjs-for-production",
  },
  {
    id: "docker-essentials",
    title: "Docker Essentials",
    description:
      "Containerize applications and streamline your development workflow.",
    level: "Beginner",
    duration: "10h 12m",
    modulesCount: "8 modules",
    icon: <DockerMark />,
    href: "/courses/docker-essentials",
  },
  {
    id: "typescript-deep-dive",
    title: "TypeScript Deep Dive",
    description:
      "Go beyond the basics and write safer, more expressive code.",
    level: "Intermediate",
    duration: "14h 36m",
    modulesCount: "10 modules",
    icon: <TypeScriptMark />,
    href: "/courses/typescript-deep-dive",
  },
];

export default function Home() {
  return (
    <PageFrame>
      {/* Header */}
      <SiteHeader />

      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Section Divider */}
        <div className="w-full border-t border-[#F0E7E0]" />

        {/* All Courses Section */}
        <section
          className="px-6 sm:px-12 pt-10 sm:pt-12 pb-8 flex-1"
          aria-labelledby="all-courses-heading"
        >
          <div className="flex items-center justify-between mb-8">
            <h2
              id="all-courses-heading"
              className="font-display font-bold text-2xl sm:text-[28px] text-neutral-900 tracking-tight"
            >
              All Courses
            </h2>

            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 font-sans text-sm sm:text-[15px] font-medium text-primary-500 hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
            >
              <span>View all courses</span>
              <ArrowRight className="w-4 h-4 stroke-[2.25]" aria-hidden="true" />
            </Link>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredCourses.map((course) => (
              <CourseCard
                key={course.id}
                layout="stacked"
                icon={course.icon}
                title={course.title}
                description={course.description}
                level={course.level}
                duration={course.duration}
                modulesCount={course.modulesCount}
                href={course.href}
              />
            ))}
          </div>

          {/* Bottom Note with Divider */}
          <div className="mt-14 sm:mt-16 mb-4 flex items-center gap-4 text-center">
            <div className="flex-1 border-t border-[#F0E7E0]" />
            <div className="inline-flex items-center gap-2 text-neutral-700 font-sans text-xs sm:text-sm shrink-0 select-none">
              <Star className="w-4 h-4 text-primary-500 stroke-[2] fill-none" aria-hidden="true" />
              <span>New courses and lessons added every week.</span>
            </div>
            <div className="flex-1 border-t border-[#F0E7E0]" />
          </div>
        </section>

        {/* Bottom Decorative Bars */}
        <ChartDecoration />
      </main>
    </PageFrame>
  );
}

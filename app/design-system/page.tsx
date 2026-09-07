import React from "react";
import {
  Bell,
  Search,
  Play,
  FileText,
  Bookmark,
  BarChart2,
  Clock,
  User,
  ChevronRight,
  Eye,
  LayoutGrid,
  Target,
  Accessibility,
  ExternalLink,
  PlayCircle,
} from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusIndicator } from "@/components/ui/status-indicator";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SearchInput } from "@/components/ui/search-input";
import { Select } from "@/components/ui/select";
import { CourseCard } from "@/components/cards/course-card";
import { LessonVideoCard } from "@/components/cards/lesson-video-card";
import { LessonCard } from "@/components/cards/lesson-card";
import { ResourceCard } from "@/components/cards/resource-card";
import { Navbar } from "@/components/nav/navbar";
import { Breadcrumbs } from "@/components/nav/breadcrumbs";
import { Pagination } from "@/components/nav/pagination";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-neutral-900 pb-24">
      {/* Design System Container */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12 space-y-16">
        {/* Top Header & 01 Colors */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Header left */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="lg" />
            <h1 className="text-display-1 text-neutral-900 tracking-tight">
              Design System
            </h1>
            <p className="text-body-large text-neutral-500 leading-relaxed max-w-md">
              A unified design language for Vertex learning platform. Clean, modern and focused on
              clarity, consistency and intuitive learning experiences.
            </p>
            <div className="pt-8 text-xs font-semibold tracking-wider text-neutral-400 uppercase">
              VERSION 1.0 &middot; MAY 2025
            </div>
          </div>

          {/* 01 Colors right */}
          <div className="lg:col-span-8 bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-8">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              01 COLORS
            </div>

            {/* Primary Colors */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Primary
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {[
                  { name: "Primary 500", hex: "#F97316", bg: "bg-[#F97316]" },
                  { name: "Primary 400", hex: "#FB923C", bg: "bg-[#FB923C]" },
                  { name: "Primary 300", hex: "#FDBA74", bg: "bg-[#FDBA74]" },
                  { name: "Primary 200", hex: "#FED7AA", bg: "bg-[#FED7AA]" },
                  { name: "Primary 100", hex: "#FFEEE5", bg: "bg-[#FFEEE5]" },
                ].map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div className={`h-16 rounded-md ${color.bg}`} />
                    <div>
                      <div className="text-xs font-medium text-neutral-900">{color.name}</div>
                      <div className="text-[11px] text-neutral-500 font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Neutral Colors */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Neutral
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
                {[
                  { name: "Neutral 900", hex: "#0F172A", bg: "bg-[#0F172A]", border: false },
                  { name: "Neutral 700", hex: "#334155", bg: "bg-[#334155]", border: false },
                  { name: "Neutral 500", hex: "#64748B", bg: "bg-[#64748B]", border: false },
                  { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-[#CBD5E1]", border: false },
                  { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-[#E2E8F0]", border: false },
                  { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-[#F1F5F9]", border: false },
                  { name: "Neutral 50", hex: "#FAFAFC", bg: "bg-[#FAFAFC]", border: true },
                  { name: "White", hex: "#FFFFFF", bg: "bg-[#FFFFFF]", border: true },
                ].map((color) => (
                  <div key={color.name} className="space-y-2">
                    <div
                      className={`h-16 rounded-md ${color.bg} ${
                        color.border ? "border border-neutral-200" : ""
                      }`}
                    />
                    <div>
                      <div className="text-xs font-medium text-neutral-900 truncate">
                        {color.name}
                      </div>
                      <div className="text-[11px] text-neutral-500 font-mono">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 Typography & 03 Type Scale */}
        <section className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 02 Typography */}
            <div className="lg:col-span-5 space-y-8 lg:border-r lg:border-neutral-200 lg:pr-8">
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                02 TYPOGRAPHY
              </div>

              <div className="space-y-8">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-5xl font-bold text-neutral-900">Ag</span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-neutral-900">
                      Playfair Display
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Elegant &middot; Readable &middot; Timeless
                    </p>
                  </div>
                </div>

                <div className="flex items-baseline gap-6">
                  <span className="font-sans text-5xl font-bold text-neutral-900">Ag</span>
                  <div>
                    <h3 className="font-sans text-2xl font-bold text-neutral-900">Inter</h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Clean &middot; Modern &middot; Highly legible
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 03 Type Scale */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                03 TYPE SCALE
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-neutral-200 text-neutral-400 font-medium">
                      <th className="pb-3 pr-4">Style</th>
                      <th className="pb-3 pr-4">Font</th>
                      <th className="pb-3 pr-4">Size / Line Height</th>
                      <th className="pb-3 pr-4">Weight</th>
                      <th className="pb-3">Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 text-neutral-700">
                    <tr>
                      <td className="py-3 pr-4 font-display font-bold text-neutral-900 text-lg">
                        Display 1
                      </td>
                      <td className="py-3 pr-4">Playfair Display</td>
                      <td className="py-3 pr-4 font-mono">48 / 56</td>
                      <td className="py-3 pr-4">Bold</td>
                      <td className="py-3 text-neutral-500">Page titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-display font-bold text-neutral-900 text-base">
                        Display 2
                      </td>
                      <td className="py-3 pr-4">Playfair Display</td>
                      <td className="py-3 pr-4 font-mono">36 / 44</td>
                      <td className="py-3 pr-4">Bold</td>
                      <td className="py-3 text-neutral-500">Section titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-sans font-semibold text-neutral-900">
                        Heading 1
                      </td>
                      <td className="py-3 pr-4">Inter</td>
                      <td className="py-3 pr-4 font-mono">28 / 36</td>
                      <td className="py-3 pr-4">Semi Bold</td>
                      <td className="py-3 text-neutral-500">Card titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-sans font-semibold text-neutral-900">
                        Heading 2
                      </td>
                      <td className="py-3 pr-4">Inter</td>
                      <td className="py-3 pr-4 font-mono">22 / 30</td>
                      <td className="py-3 pr-4">Semi Bold</td>
                      <td className="py-3 text-neutral-500">Sub section</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-sans font-medium text-neutral-900">Heading 3</td>
                      <td className="py-3 pr-4">Inter</td>
                      <td className="py-3 pr-4 font-mono">18 / 26</td>
                      <td className="py-3 pr-4">Medium</td>
                      <td className="py-3 text-neutral-500">Small titles</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-sans text-neutral-900">Body Large</td>
                      <td className="py-3 pr-4">Inter</td>
                      <td className="py-3 pr-4 font-mono">16 / 24</td>
                      <td className="py-3 pr-4">Regular</td>
                      <td className="py-3 text-neutral-500">Body copy</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-sans text-neutral-900">Body</td>
                      <td className="py-3 pr-4">Inter</td>
                      <td className="py-3 pr-4 font-mono">14 / 20</td>
                      <td className="py-3 pr-4">Regular</td>
                      <td className="py-3 text-neutral-500">Supporting text</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-sans text-neutral-900">Small</td>
                      <td className="py-3 pr-4">Inter</td>
                      <td className="py-3 pr-4 font-mono">12 / 16</td>
                      <td className="py-3 pr-4">Regular</td>
                      <td className="py-3 text-neutral-500">Captions, meta</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Spacing System & 05 Radius & Shadows */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 04 Spacing System */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                04 SPACING SYSTEM
              </div>
              <p className="text-xs text-neutral-500 mt-1">Base unit: 4px</p>
            </div>

            <div className="flex items-end justify-between gap-2 overflow-x-auto pt-8 pb-2">
              {[
                { px: 4, rem: "0.25rem", size: "w-4 h-4" },
                { px: 8, rem: "0.5rem", size: "w-6 h-6" },
                { px: 12, rem: "0.75rem", size: "w-8 h-8" },
                { px: 16, rem: "1rem", size: "w-10 h-10" },
                { px: 24, rem: "1.5rem", size: "w-12 h-12" },
                { px: 32, rem: "2rem", size: "w-14 h-14" },
                { px: 40, rem: "2.5rem", size: "w-16 h-16" },
                { px: 48, rem: "3rem", size: "w-18 h-18" },
                { px: 64, rem: "4rem", size: "w-20 h-20" },
              ].map((space) => (
                <div key={space.px} className="flex flex-col items-center gap-2">
                  <div className={`bg-primary-200 rounded ${space.size}`} />
                  <div className="text-center">
                    <div className="text-xs font-semibold text-neutral-900">{space.px}</div>
                    <div className="text-[10px] text-neutral-400 whitespace-nowrap">
                      ({space.rem})
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 05 Radius & Shadows */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-8">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              05 RADIUS & SHADOWS
            </div>

            {/* Radius */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Radius
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {[
                  { label: "4px", name: "xs", radiusClass: "rounded-xs" },
                  { label: "8px", name: "sm", radiusClass: "rounded-sm" },
                  { label: "12px", name: "md", radiusClass: "rounded-md" },
                  { label: "16px", name: "lg", radiusClass: "rounded-lg" },
                  { label: "24px", name: "xl", radiusClass: "rounded-xl" },
                  { label: "Full", name: "circle", radiusClass: "rounded-full" },
                ].map((rad) => (
                  <div key={rad.name} className="flex flex-col items-center gap-2">
                    <div
                      className={`w-12 h-12 bg-neutral-50 border border-neutral-200 ${rad.radiusClass}`}
                    />
                    <div className="text-center">
                      <div className="text-xs font-medium text-neutral-900">{rad.label}</div>
                      <div className="text-[10px] text-neutral-400">({rad.name})</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shadows */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Shadows
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { name: "Sm", val: "0 1px 2px 0", alpha: "rgba(15, 23, 42, 0.05)", shadowClass: "shadow-sm" },
                  { name: "Md", val: "0 4px 12px -2px", alpha: "rgba(15, 23, 42, 0.08)", shadowClass: "shadow-md" },
                  { name: "Lg", val: "0 12px 24px -4px", alpha: "rgba(15, 23, 42, 0.10)", shadowClass: "shadow-lg" },
                  { name: "Xl", val: "0 20px 40px -8px", alpha: "rgba(15, 23, 42, 0.12)", shadowClass: "shadow-xl" },
                ].map((s) => (
                  <div
                    key={s.name}
                    className={`bg-white border border-neutral-200 rounded-lg p-4 ${s.shadowClass}`}
                  >
                    <div className="text-xs font-bold text-neutral-900">{s.name}</div>
                    <div className="text-[10px] text-neutral-500 font-mono mt-1">{s.val}</div>
                    <div className="text-[9px] text-neutral-400 font-mono">{s.alpha}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 06 Icons & 07 Buttons & 08 Inputs */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* 06 Icons */}
          <div className="lg:col-span-4 bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              06 ICONS
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-medium text-neutral-500 mb-3">Outline Style</h4>
                <div className="flex flex-wrap gap-3.5 text-neutral-700">
                  <Bell className="w-5 h-5 stroke-[2]" />
                  <Search className="w-5 h-5 stroke-[2]" />
                  <Play className="w-5 h-5 stroke-[2]" />
                  <FileText className="w-5 h-5 stroke-[2]" />
                  <Bookmark className="w-5 h-5 stroke-[2]" />
                  <BarChart2 className="w-5 h-5 stroke-[2]" />
                  <Clock className="w-5 h-5 stroke-[2]" />
                  <User className="w-5 h-5 stroke-[2]" />
                  <ChevronRight className="w-5 h-5 stroke-[2]" />
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium text-neutral-500 mb-3">Filled Style</h4>
                <div className="flex flex-wrap gap-3.5 text-neutral-900">
                  <Bell className="w-5 h-5 fill-current stroke-none" />
                  <Search className="w-5 h-5 stroke-[2.5]" />
                  <Play className="w-5 h-5 fill-current stroke-none" />
                  <FileText className="w-5 h-5 stroke-[2]" />
                  <Bookmark className="w-5 h-5 fill-current stroke-none" />
                  <BarChart2 className="w-5 h-5 stroke-[2.5]" />
                  <Clock className="w-5 h-5 stroke-[2]" />
                  <User className="w-5 h-5 fill-current stroke-none" />
                  <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-semibold text-neutral-900 mb-2">Icon Specs</h4>
                <ul className="text-xs text-neutral-500 space-y-1 list-disc list-inside">
                  <li>24x24px grid</li>
                  <li>2px stroke width (outline)</li>
                  <li>Rounded line caps</li>
                  <li>Consistent optical balance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 07 Buttons */}
          <div className="lg:col-span-5 bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              07 BUTTONS
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-neutral-200 text-neutral-400 font-medium">
                    <th className="pb-3 pr-3"></th>
                    <th className="pb-3 pr-3 text-center">Primary</th>
                    <th className="pb-3 pr-3 text-center">Secondary</th>
                    <th className="pb-3 pr-3 text-center">Tertiary</th>
                    <th className="pb-3 text-center">Text</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr>
                    <td className="py-2.5 pr-3 text-neutral-500 font-medium">Default</td>
                    <td className="py-2.5 pr-3">
                      <Button variant="primary" size="md">
                        Get Started
                      </Button>
                    </td>
                    <td className="py-2.5 pr-3">
                      <Button variant="secondary" size="md">
                        Explore Courses
                      </Button>
                    </td>
                    <td className="py-2.5 pr-3">
                      <Button variant="tertiary" size="md">
                        <span>View Lesson</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2]" />
                      </Button>
                    </td>
                    <td className="py-2.5">
                      <Button variant="text" size="md">
                        <span>Watch Video</span>
                        <PlayCircle className="w-4 h-4 stroke-[2]" />
                      </Button>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 pr-3 text-neutral-500 font-medium">Hover</td>
                    <td className="py-2.5 pr-3">
                      <button
                        type="button"
                        className="h-[44px] px-3 gap-1.5 inline-flex items-center justify-center font-sans font-medium text-sm rounded-md bg-primary-600 text-white"
                      >
                        Get Started
                      </button>
                    </td>
                    <td className="py-2.5 pr-3">
                      <button
                        type="button"
                        className="h-[44px] px-3 gap-1.5 inline-flex items-center justify-center font-sans font-medium text-sm rounded-md border border-primary-500 text-primary-500 bg-primary-100"
                      >
                        Explore Courses
                      </button>
                    </td>
                    <td className="py-2.5 pr-3">
                      <button
                        type="button"
                        className="h-[44px] px-3 gap-1.5 inline-flex items-center justify-center font-sans font-medium text-sm rounded-md border border-neutral-200 text-neutral-900 bg-neutral-50"
                      >
                        <span>View Lesson</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2]" />
                      </button>
                    </td>
                    <td className="py-2.5">
                      <button
                        type="button"
                        className="h-[44px] px-3 gap-1.5 inline-flex items-center justify-center font-sans font-medium text-sm rounded-md text-primary-600"
                      >
                        <span>Watch Video</span>
                        <PlayCircle className="w-4 h-4 stroke-[2]" />
                      </button>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-2.5 pr-3 text-neutral-500 font-medium">Disabled</td>
                    <td className="py-2.5 pr-3">
                      <Button variant="primary" size="md" disabled>
                        Get Started
                      </Button>
                    </td>
                    <td className="py-2.5 pr-3">
                      <Button variant="secondary" size="md" disabled>
                        Explore Courses
                      </Button>
                    </td>
                    <td className="py-2.5 pr-3">
                      <Button variant="tertiary" size="md" disabled>
                        <span>View Lesson</span>
                        <ExternalLink className="w-3.5 h-3.5 stroke-[2]" />
                      </Button>
                    </td>
                    <td className="py-2.5">
                      <Button variant="text" size="md" disabled>
                        <span>Watch Video</span>
                        <PlayCircle className="w-4 h-4 stroke-[2]" />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-4 border-t border-neutral-100">
              <h4 className="text-xs font-semibold text-neutral-900 mb-2">Button Specs</h4>
              <ul className="text-xs text-neutral-500 space-y-1 list-disc list-inside">
                <li>Height: 44px (default)</li>
                <li>Padding: 0 16px (lg), 0 12px (md)</li>
                <li>Radius: 12px</li>
                <li>Font: Inter Medium (14–16px)</li>
              </ul>
            </div>
          </div>

          {/* 08 Inputs */}
          <div className="lg:col-span-3 bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              08 INPUTS
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-500 block mb-1.5">
                  Search / Text Input
                </label>
                <SearchInput placeholder="Search anything..." />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-500 block mb-1.5">Select</label>
                <Select
                  options={[
                    { value: "most-relevant", label: "Most Relevant" },
                    { value: "newest", label: "Newest" },
                    { value: "popular", label: "Most Popular" },
                  ]}
                />
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100">
              <h4 className="text-xs font-semibold text-neutral-900 mb-2">Field Specs</h4>
              <ul className="text-xs text-neutral-500 space-y-1 list-disc list-inside">
                <li>Height: 44px</li>
                <li>Radius: 12px</li>
                <li>Border: 1px solid #E2E8F0</li>
                <li>Padding: 0 16px</li>
                <li>Focus: Border color #FB923C</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 09 Badges, 10 Status, 11 Progress Bar */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 09 Badges / Tags */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              09 BADGES / TAGS
            </div>

            <div className="flex items-center gap-6">
              <div className="space-y-2 text-center">
                <span className="text-xs text-neutral-400 block">Video</span>
                <Badge variant="video">VIDEO</Badge>
              </div>
              <div className="space-y-2 text-center">
                <span className="text-xs text-neutral-400 block">Lesson</span>
                <Badge variant="lesson">LESSON</Badge>
              </div>
              <div className="space-y-2 text-center">
                <span className="text-xs text-neutral-400 block">Popular</span>
                <Badge variant="popular">POPULAR</Badge>
              </div>
            </div>
          </div>

          {/* 10 Status / Indicators */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              10 STATUS / INDICATORS
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="now-playing" />
              <StatusIndicator status="locked" />
            </div>
          </div>

          {/* 11 Progress Bar */}
          <div className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              11 PROGRESS BAR
            </div>

            <div className="pt-2">
              <ProgressBar value={35} />
            </div>
          </div>
        </section>

        {/* 12 Cards */}
        <section className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            12 CARDS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Course Card */}
            <div>
              <div className="text-xs text-neutral-400 mb-2">Course Card</div>
              <CourseCard
                iconLetter="N"
                title="Next.js for Production"
                description="Build scalable, high-performance web applications with Next.js."
                level="Intermediate"
                duration="18h 24m"
                modulesCount="12 modules"
              />
            </div>

            {/* Lesson Card (Video) */}
            <div>
              <div className="text-xs text-neutral-400 mb-2">Lesson Card (Video)</div>
              <LessonVideoCard
                badgeLabel="VIDEO"
                title="Data Fetching in Server Components"
                description="Learn how to fetch data on the server using async/await and Next.js best practices."
                lessonNumber="Lesson 5.1"
                timestamp="12:45"
              />
            </div>

            {/* Lesson Card (Lesson) */}
            <div>
              <div className="text-xs text-neutral-400 mb-2">Lesson Card (Lesson)</div>
              <LessonCard
                badgeLabel="LESSON"
                title="Data Fetching & Caching"
                description="Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance."
                moduleLabel="Module 5"
              />
            </div>

            {/* Resource Card */}
            <div>
              <div className="text-xs text-neutral-400 mb-2">Resource Card</div>
              <ResourceCard
                title="Caching and Revalidation Guide"
                description="Deep dive into Next.js caching strategies."
                fileType="PDF"
                fileSize="1.2 MB"
              />
            </div>
          </div>
        </section>

        {/* 13 Navigation */}
        <section className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-8">
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            13 NAVIGATION
          </div>

          <div className="space-y-8">
            {/* Navbar snippet */}
            <div className="border border-neutral-200 rounded-lg overflow-hidden">
              <Navbar />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              {/* Breadcrumbs */}
              <div className="lg:col-span-7 space-y-2">
                <div className="text-xs text-neutral-400">Breadcrumbs</div>
                <Breadcrumbs
                  items={[
                    { label: "All Courses", href: "#" },
                    { label: "Next.js for Production", href: "#" },
                    { label: "Data Fetching & Caching" },
                  ]}
                />
              </div>

              {/* Pagination */}
              <div className="lg:col-span-5 space-y-2 lg:flex lg:flex-col lg:items-end">
                <div className="text-xs text-neutral-400">Pagination</div>
                <Pagination currentPage={1} totalPages={8} />
              </div>
            </div>
          </div>
        </section>

        {/* 14 Principles */}
        <section className="bg-white border border-neutral-200 rounded-lg p-8 shadow-sm space-y-6">
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
            14 PRINCIPLES
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5 text-neutral-700 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-neutral-900">Clarity First</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Every element should communicate clearly.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <LayoutGrid className="w-5 h-5 text-neutral-700 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-neutral-900">Consistency</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Use components and patterns consistently across the platform.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-neutral-700 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-neutral-900">Focus & Calm</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Remove noise and help learners focus on what matters.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                <Accessibility className="w-5 h-5 text-neutral-700 stroke-[2]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-neutral-900">Accessible</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Design with accessibility and inclusivity in mind.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

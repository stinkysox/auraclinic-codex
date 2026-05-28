# AURA Content Editing Guide

This website is data-driven. Most updates happen inside the `data` folder.

## Change Images

Edit:

`data/imagesData.ts`

Recommended local image pattern:

```ts
main: "/images/hero-clinic.jpg"
```

Then place the file here:

`public/images/hero-clinic.jpg`

## Add A Treatment

Edit:

`data/treatmentsData.ts`

Copy `treatmentTemplate`, paste it inside `treatmentsData`, then change:

- `slug`: URL path, for example `acne-scar-treatment`
- `title`: visible treatment name
- `category`: must match a category in `treatmentCategoryOptions`
- `excerpt`: short listing text
- `image`: use an image from `data/imagesData.ts` or a local `/images/...` path
- `keywords`: SEO keywords
- `overview`, `causes`, `symptoms`, `process`, `recovery`, `faqs`

The page will automatically appear at:

`/treatments/your-slug`

## Add A Treatment Category

Edit:

`data/treatmentsData.ts`

Add one object to `treatmentCategoryOptions`:

```ts
{
  label: "New Category",
  slug: "new-category",
  description: "Short category description."
}
```

Then use `"New Category"` in a treatment's `category` field.

## Add A Blog

Edit:

`data/blogsData.ts`

Copy `blogTemplate`, paste it inside `blogsData`, then change:

- `slug`
- `title`
- `category`
- `excerpt`
- `image`
- `author`
- `readTime`
- `publishedAt`
- `sections`
- `faqs`

The article will automatically appear at:

`/blog/your-slug`

## Add A Blog Category

Edit:

`data/blogsData.ts`

Add one object to `blogCategoryOptions`:

```ts
{
  label: "New Blog Category",
  slug: "new-blog-category",
  description: "Short SEO category description."
}
```

Then use `"New Blog Category"` in a blog post's `category` field.

## Add A Gallery Item

Edit:

`data/galleryData.ts`

Copy `galleryTemplate`, paste it inside `galleryData`, then change:

- `id`
- `category`
- `title`
- `before`
- `after`

## Add A Gallery Category

Edit:

`data/galleryData.ts`

Add one object to `galleryCategoryOptions`:

```ts
{ label: "New Gallery Category", slug: "new-gallery-category" }
```

Then use `"New Gallery Category"` in a gallery item's `category` field.

## Add FAQs

Edit:

`data/faqData.ts`

Add questions inside an existing FAQ category, or add a new category to `faqCategoryOptions` first.

## SEO

Global SEO settings live in:

`data/seoData.ts`

Page-specific SEO comes from:

- `data/treatmentsData.ts`
- `data/blogsData.ts`

Sitemap and robots are generated automatically from the data.

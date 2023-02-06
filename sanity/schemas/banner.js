import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image of the Product',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'buttonText',
      title: 'ButtonText',
      type: 'string',
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'string',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{type: 'reference', to: {type: 'product'}}],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'desc',
      title: 'Desc',
      type: 'string',
    }),
    defineField({
      name: 'productName',
      title: 'ProductName',
      type: 'string',
    }),
    defineField({
      name: 'productName2',
      title: 'ProductName2',
      type: 'string',
    }),
    defineField({
      name: 'midText',
      title: 'MidText',
      type: 'string',
    }),
    defineField({
      name: 'midText2',
      title: 'MidText2',
      type: 'string',
    }),
    defineField({
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    }),
    defineField({
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'string',
    }),
    defineField({
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    }),
  ],
})

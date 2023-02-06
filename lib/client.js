// import urlForImage from '@sanity/image-url'
// const sanityClient = require('@sanity/client')
import sanityClient from '@sanity/client';
import Img from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';


export const client = sanityClient({
  projectId: 'wyicq82f', 
  dataset: 'production',
  apiVersion: '2021-10-21', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
  // token: import.meta.env.SANITY_STUDIO_TOKEN // or leave blank for unauthenticated usage
});

// const builder = urlForImage(client);
// const Page = ({ mySanityData }) => {
// 	const imageProps = useNextSanityImage(
// 		configuredSanityClient,
// 		mySanityData.image
// 	);

// 	return (
// 		<Img
// 			{...imageProps}
// 			style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
// 			sizes="(max-width: 800px) 100vw, 800px"
// 			placeholder="blur"
// 			blurDataURL={mySanityData.image.asset.metadata.lqip}
// 		/>
// 	);
// };

// export default Page;

// export const urlFor = (source) => builder.image(source);

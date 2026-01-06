import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/ui/button";
import Card from "../components/ui/card";

type ImageItem = {
  url: string;
  alt: string;
};

const IMAGES: ImageItem[] = [
  {
    url: "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png",
    alt: "Garber Bros logo"
  },
  {
    url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg",
    alt: "Our vessels"
  },
  {
    url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg",
    alt: "Employment application"
  },
  {
    url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg",
    alt: "Contact Garber Bros"
  }
];

const NAV_EXTRA_HREFS: string[] = [
  "javascript:previousSlide6347994()",
  "javascript:nextSlide6347994()",
  "http://www.goodhiring.com/garberbrosinc/apply/open",
  "contact.aspx",
  "#"
];

export default function Page() {
  const heroImage = IMAGES.length > 1 ? IMAGES[1] : IMAGES[0];

  return (
    <>
      <section className="pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">Garber Bros Inc</h1>
              <p className="mt-4 text-gray-700">For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.</p>
              <div className="mt-6">
                <Button href="/vessels" variant="primary">View Our Fleet of Vessels</Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden shadow-md bg-gray-50" style={{minHeight: 260}}>
              {typeof heroImage.url === 'string' && (
                (() => {
                  const safeSrc = encodeURI(heroImage.url);
                  return (
                    <Image src={safeSrc} alt={heroImage.alt} width={1200} height={600} className="w-full h-auto object-cover" unoptimized />
                  );
                })()
              )}
              <div className="absolute left-4 top-4 flex space-x-2">
                <a href="javascript:previousSlide6347994()" className="px-3 py-1 bg-white/80 text-sm rounded">Prev</a>
                <a href="javascript:nextSlide6347994()" className="px-3 py-1 bg-white/80 text-sm rounded">Next</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
              {(() => { const safeSrc = encodeURI(IMAGES[1].url); return <Image src={safeSrc} alt={IMAGES[1].alt} width={400} height={300} className="object-cover w-full h-full" unoptimized /> })()}
            </div>
            <h3 className="mt-4 text-lg font-medium">Our Vessels</h3>
            <p className="mt-2 text-gray-700">Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <div className="mt-4">
              <a href="/vessels" className="text-brand-500 hover:underline">View Our Vessels »</a>
            </div>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
              {(() => { const safeSrc = encodeURI(IMAGES[2].url); return <Image src={safeSrc} alt={IMAGES[2].alt} width={400} height={300} className="object-cover w-full h-full" unoptimized /> })()}
            </div>
            <h3 className="mt-4 text-lg font-medium">Employment</h3>
            <p className="mt-2 text-gray-700">Interested in working at Garber Bros? Download our employment application.</p>
            <div className="mt-4">
              <a href="/websites/garberbrosinc/images/application.pdf" className="text-brand-500 hover:underline">View Our Employment Application »</a>
              <div className="mt-2 text-sm text-gray-600">Or apply: <a href="http://www.goodhiring.com/garberbrosinc/apply/open" className="underline">GoodHiring</a></div>
            </div>
          </Card>

          <Card>
            <div className="aspect-[4/3] bg-gray-100 rounded overflow-hidden">
              {(() => { const safeSrc = encodeURI(IMAGES[3].url); return <Image src={safeSrc} alt={IMAGES[3].alt} width={400} height={300} className="object-cover w-full h-full" unoptimized /> })()}
            </div>
            <h3 className="mt-4 text-lg font-medium">Contact Us</h3>
            <p className="mt-2 text-gray-700">To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <div className="mt-4">
              <a href="/contact" className="text-brand-500 hover:underline">Contact Garber Bros Inc »</a>
              <div className="mt-2 text-sm text-gray-600">Alternate: <a href="contact.aspx" className="underline">contact.aspx</a></div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Array.isArray(IMAGES) ? (Array.isArray(IMAGES) ? IMAGES : []).map((img, idx) => {
            const safeSrc = encodeURI(img.url);
            return (
              <div key={idx} className="rounded overflow-hidden bg-gray-50 border">
                <Image src={safeSrc} alt={img.alt} width={300} height={200} className="w-full h-full object-cover" unoptimized />
              </div>
            );
          }) : null}
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-4">Operations & Links</h2>
        <p className="text-gray-700">Operational pages and resources.</p>
        <ul className="mt-4 space-y-2 text-brand-600">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/lock-status">Lock Status</a></li>
          <li><a href="/vessels">Vessels</a></li>
          <li><a href="/barges">Barges</a></li>
          <li><a href="/websites/garberbrosinc/images/application.pdf">Employment (PDF)</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/transparency-in-coverage">Transparency in Coverage</a></li>
          <li><a href="javascript:previousSlide6347994()">Prev (slider)</a></li>
          <li><a href="javascript:nextSlide6347994()">Next (slider)</a></li>
          <li><a href="http://www.goodhiring.com/garberbrosinc/apply/open">GoodHiring Apply</a></li>
          <li><a href="contact.aspx">contact.aspx</a></li>
          <li><a href="#">Back to top anchor</a></li>
        </ul>
      </section>
    </>
  );
}

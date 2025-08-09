import Image from "next/image";

const galleryImages = [
  // Banner Images
  {
    src: "https://i.ibb.co.com/spJysJhP/132806.jpg",
    title: "Elegant Modern Chair",
  },
  {
    src: "https://i.ibb.co.com/7xz0VZKJ/954.jpg",
    title: "Contemporary Lounge Chair",
  },
  {
    src: "https://i.ibb.co.com/3ySCmYrD/129804.jpg",
    title: "Modern Table Lamp",
  },
  // Blog Images
  {
    src: "https://i.ibb.co.com/Jwjc6Qwz/premium-photo-1683121022649-b38ed074d5e5.jpg",
    title: "Edilis Chair",
  },
  {
    src: "https://i.ibb.co.com/BHwdkc3P/bernd-dittrich-BQlv-Br88-GYU-unsplash.jpg",
    title: "Arvo Seat",
  },
  {
    src: "https://i.ibb.co.com/60pLd7yf/teslariu-mihai-al-GFD0-WSp4-A-unsplash.jpg",
    title: "Noir Lounge Chair",
  },
  {
    src: "https://i.ibb.co.com/MyVptRC2/sam-moghadam-kvmds-Tr-GOBM-unsplash.jpg",
    title: "Driftwood Chair",
  },
  {
    src: "https://i.ibb.co.com/60pLd7yf/teslariu-mihai-al-GFD0-WSp4-A-unsplash.jpg",
    title: "Walnut Armchair",
  },
  {
    src: "https://i.ibb.co.com/DfgrmBBP/guven-gunes-Iy3-GN4i-PLW8-unsplash.jpg",
    title: "Walnut Armchair",
  },
  {
    src: "https://i.ibb.co.com/JRkK8ktx/132809.jpg",
    title: "Walnut Armchair",
  },
];

export default function GalleryPage() {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-12 lg:px-20">
      <div className="custom-width">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Our <span className="text-amber-600">Gallery</span>
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Explore our collection of modern furniture and decor that blends
          style, comfort, and craftsmanship.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              <Image
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

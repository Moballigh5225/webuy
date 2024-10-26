interface Data {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  imageUrl: string;
  stock: number;
  rating: number;
}

const products: Data[] = [
  {
    id: "1",
    title:
      "HP MFP 1188W Multi-function WiFi Monochrome Laser Printer with Voice Activated Printing Google Assistant  (Toner Cartridge, 1 Ink Bottle Included)",
    description:
      "You can conveniently produce high-quality prints for various purposes with the HP Laser MFP 1188w Printer. It offers excellent speeds and performance, delivering high-quality results. And, this printer offers exceptional performance, consistently maintaining high-quality laser printing throughout every page. Furthermore, this printer enables you to produce professional-grade documents that exhibit sharp text, rich blacks, and visually captivating graphics.",
    price: 18299,
    category: "electronics",
    brand: "hp",
    imageUrl:
      "https://media.croma.com/image/upload/v1685519657/Croma%20Assets/Computers%20Peripherals/Printers%20and%20Scanners/Images/272769_3_brkpfg.png",
    stock: 10,
    rating: 4.5,
  },
  {
    id: "2",
    title: "Fluo M Running Shoes For Men",
    description:
      "The Fluo M Running Shoes for Men offer breathable mesh uppers for enhanced comfort and ventilation. A cushioned sole provides excellent shock absorption, while the lightweight design boosts agility. Durable rubber outsoles ensure reliable traction for daily runs and activities.",
    price: 2018,
    category: "fashion",
    brand: "adidas",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/2/w/b/-original-imah4kgax6x5kq3h.jpeg?q=90&crop=false",
    stock: 5,
    rating: 5,
  },
  {
    id: "3",
    title:
      "Virth Fan Air Cooling Portable Charging Standing Fan Mini-Fan USB Rechargeable 3 Blade Table Fan USB Fan",
    description:
      "The Virth Fan Air Cooling Portable Charging Standing Fan is a compact, USB-rechargeable mini-fan designed for convenience and portability. With three powerful blades, it delivers efficient airflow, making it perfect for desktops, bedside tables, or travel. Its adjustable standing feature and long-lasting battery ensure you stay cool anywhere, anytime.",
    price: 1299,
    category: "gadgets",
    brand: "virth",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2024/4/413447397/TO/BK/HH/183456956/rechargeable-table-fan-500x500.jpg",
    stock: 20,
    rating: 3,
  },
  {
    id: "4",
    title: "Crystal Furnitech Elfin Engineered Wood Dressing Table",
    description:
      "The Crystal Furnitech Elfin Engineered Wood Dressing Table is a stylish and functional addition to any bedroom. Made from durable engineered wood, it features a sleek design with ample storage space for all your essentials. Its large mirror and sturdy construction make it both practical and elegant, perfect for modern interiors.",
    price: 8499,
    category: "furniture",
    brand: "crystal furnitech",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/jfwuz680/dressing-table/s/r/x/particle-board-fk-507-crystal-furnitech-wallnut-white-original-imaf49qgfx9byaka.jpeg?q=20&crop=false",
    stock: 8,
    rating: 4,
  },
  {
    id: "5",
    title:
      "Acer Aspire 3 Backlit Intel Core i5 12th Gen 1235U - (16 GB/512 GB SSD/Windows 11 Home) A324-51 Thin and Light Laptop  (14 Inch, Steel Gray, 1.45 Kg)",
    description:
      "Equipped with an Intel Core processor and DDR4 system memory, this laptop delivers lightning-fast performance for seamless multitasking, smooth streaming, and responsive computing. From everyday tasks to demanding applications, experience unmatched speed and efficiency",
    price: 34990,
    category: "electronics",
    brand: "acer",
    imageUrl:
      "https://i5.walmartimages.com/asr/043ea3fa-d8bd-4ed3-b2cd-b70e97658b81.0488b42169dcf55a4fc1398392d97726.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    stock: 20,
    rating: 4.5,
  },
  {
    id: "6",
    title: "PETER ENGLAND Men Solid Casual Jacket",
    description:
      "The PETER ENGLAND Men’s Solid Casual Jacket combines style and comfort, making it a versatile choice for any occasion. Crafted with high-quality fabric, this jacket offers a sleek, modern fit and features a minimalist solid design. Perfect for layering, it’s ideal for casual outings or adding a stylish edge to your everyday look.",
    price: 2149,
    category: "fashion",
    brand: "peter england",
    imageUrl:
      "https://img3.junaroad.com/uiproducts/20686377/pri_175_p-1703319641.jpg",
    stock: 6,
    rating: 3.5,
  },
  {
    id: "7",
    title:
      "Bestor C Multiport Adapter for MacBook Pro Air 2021 2020 31C 4-in-1 4Port USB Hub",
    description:
      "BESTOR 4 PORT USB-C HUB Dual play mirror modes boost your efficiency 2 times. No driver or software is required, and the extra 4 USB ports can be used quickly. You can always connect to your computer and other devices to avoid frequent use of the Type-C interface that comes with your computer. The top charging port gives you easy access for fast, temporary connections of USB sticks, media readers, small accessories such as USB lights and fans and more. Connect a modem, USB printer, scanner and HD to a convenient USB hub. The 4-port hub supports cascading installation with other USB 3.1 hubs, multiple USB 3.1 device ports - a scalable solution for connecting multiple USB devices.",
    price: 356,
    category: "gadgets",
    brand: "bestor",
    imageUrl: "https://m.media-amazon.com/images/I/610Qg0O-LuL.jpg",
    stock: 22,
    rating: 3.5,
  },
  {
    id: "8",
    title:
      "Hypnos Allure Ortho Luxury Gel-Infused Memory Foam 08 inch Single Pocket Spring Mattres",
    description:
      "The Hypnos Allure mattress is designed in such a way that it can be used from both the sides and gives the same comfort as new.Upgrade to fresh, new mornings with a world class pocketed spring mattress that is as easy on your wallet as it is on your back This durable mattress with stands years of use.It's Provides back pain relief by eliminating undue stress on spine and back.Allure mattress are often recommended for orthopedic patients with hip and shoulder problems.",
    price: 5584,
    category: "furniture",
    brand: "hypnos",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/bed-mattress/6/q/e/normal-top-single-08-36-75-allure-ortho-luxury-gel-infused-original-imah4gqjvc4m63k5.jpeg?q=90&crop=false",
    stock: 18,
    rating: 5,
  },
  {
    id: "9",
    title:
      "Hypnos Allure Ortho Luxury Gel-Infused Memory Foam 08 inch Single Pocket Spring Mattres",
    description:
      "The Hypnos Allure mattress is designed in such a way that it can be used from both the sides and gives the same comfort as new.Upgrade to fresh, new mornings with a world class pocketed spring mattress that is as easy on your wallet as it is on your back This durable mattress with stands years of use.It's Provides back pain relief by eliminating undue stress on spine and back.Allure mattress are often recommended for orthopedic patients with hip and shoulder problems.",
    price: 5584,
    category: "furniture",
    brand: "hypnos",
    imageUrl:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/bed-mattress/6/q/e/normal-top-single-08-36-75-allure-ortho-luxury-gel-infused-original-imah4gqjvc4m63k5.jpeg?q=90&crop=false",
    stock: 18,
    rating: 5,
  },
];

export default products;

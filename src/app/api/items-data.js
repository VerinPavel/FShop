const items = [
    {
        id: 1,
        title: 'PÄRUP',
        img: 'PÄRUP.jpg',
        desc: 'Do you believe in love at first sight? Sleek design, quick assembly and easy-care with a removable and washable cover make it easy to love PÄRUP sofa. Welcoming to all of your loved ones!',
        category: 'sofas',
        price: '399',
    },
    {
        id: 2,
        title: 'EKTORP',
        img: 'EKTORP.jpg',
        desc: 'Our beloved EKTORP seating has a timeless design and wonderfully thick, comfy cushions. The covers are easy to change, so buy an extra cover - or two, and change according to mood or season.',
        category: 'sofas',
        price: '629',
    },
    {
        id: 3,
        title: 'VINLIDEN',
        img: 'VINLIDEN.jpg',
        desc: 'Sitting or lying on VINLIDEN sofa feels like a cosy embrace. You sink into large, soft cushions, and the sofa is also super easy to assemble and disassemble ⎼ so you can take it with you if you move!',
        category: 'sofas',
        price: '489',
    },
    {
        id: 4,
        title: 'LANDSKRONA',
        img: 'LANDSKRONA.jpg',
        desc: 'Warm and welcoming, neat and stylish. The supporting seat cushions, the cover’s soft finish and the tight fit gives this sofa a perfect balance between its comfort, functions and look.',
        category: 'sofas',
        price: '1049',
    },
    {
        id: 5,
        title: 'SLATTUM',
        img: 'SLATTUM.jpg',
        desc: 'Upholstered in soft woven fabric that brings a cosy feeling into your bedroom. The headboard is a comfy backrest for late night reading. And what’s more, it all comes in 1 package. Convenient, right?',
        category: 'beds',
        price: '149',
    },
    {
        id: 6,
        title: 'NEIDEN',
        img: 'NEIDEN.jpg',
        desc: 'The natural solid wood is beautiful as it is or you can make it more personal by staining, painting or waxing it. Also, the bed frame is high enough so you can place storage boxes underneath.',
        category: 'beds',
        price: '59',
    },
    {
        id: 7,
        title: 'IDANÄS',
        img: 'IDANÄS.jpg',
        desc: 'The sloping headboard and soft upholstery make IDANÄS ottoman bed extra comfortable. Classic button detailing is timeless, while the space under the bed adds generous everyday storage.',
        category: 'beds',
        price: '699',
    },
    {
        id: 8,
        title: 'BRIMNES',
        img: 'BRIMNES.jpg',
        desc: 'Everything is kept close at hand with integrated storage in the headboard.',
        category: 'beds',
        price: '349',
    },
    {
        id: 9,
        title: 'MICKE',
        img: 'MICKE.jpg',
        desc: 'A clean and simple look that fits just about anywhere. You can combine it with other desks or drawer units in the MICKE series to extend your work space. The clever design at the back hides messy cables.',
        category: 'tables',
        price: '39',
    },
    {
        id: 10,
        title: 'LAGKAPTEN',
        img: 'LAGKAPTEN.jpg',
        desc: 'Limited space doesn’t mean you have to say no to studying or working from home. This desk takes up little floor space yet still has a drawer unit where you can store papers and other important things.',
        category: 'tables',
        price: '109',
    },
    {
        id: 11,
        title: 'TROTTEN',
        img: 'TROTTEN.jpg',
        desc: 'This sturdy desk is guaranteed to outlast years of coffee and hard work. The A shape of the legs is a smart design feature that allows you to use all the space under the desk for your office chair and storage.',
        category: 'tables',
        price: '119',
    },
    {
        id: 12,
        title: 'PAX',
        img: 'PAX.jpg',
        desc: 'Keep it simple. A basic solution to get you started, and space for more interiors if you want to upgrade.',
        category: 'wardrobes',
        price: '387',
    },
    {
        id: 13,
        title: 'BERGSBO',
        img: 'BERGSBO.jpg',
        desc: 'Keep it simple. A basic solution to get you started, and space for more interiors if you want to upgrade.',
        category: 'wardrobes',
        price: '574',
    },
    {
        id: 14,
        title: 'SUNDVIK',
        img: 'SUNDVIK.jpg',
        desc: 'The style is timeless, the materials are durable and the details are made with care. The wardrobe is also deep enough for large hangers, so it can follow your child from the first onesie into adulthood.',
        category: 'wardrobes',
        price: '199',
    },
    {
        id: 15,
        title: 'PLATSA',
        img: 'PLATSA.jpg',
        desc: 'This wardrobe fits a lot in a small space – from a babys onesies to a teenagers jeans. On the clothes rails there’s room for hangers, and on the hooks your child can hang their clothes on their own.',
        category: 'wardrobes',
        price: '177',
    },
    {
        id: 16,
        title: 'PERSILLADE',
        img: 'PERSILLADE.jpg',
        desc: 'Give your plants and home a facelift with new plant pots. Enhance a style or season – or cheer up the room with a new colour. It’s fun and doesn’t have to cost a fortune.',
        category: 'pot',
        price: '4',
    },
    {
        id: 17,
        title: 'BOYSENBAR',
        img: 'BOYSENBAR.jpg',
        desc: 'Frost-resistant concrete plant pot that withstands both outdoor and indoor use. Natural variations make each plant pot unique. Soft protection saves the underlying surface.',
        category: 'pot',
        price: '6',
    },
    {
        id: 18,
        title: 'SKAFTET',
        img: 'SKAFTET.jpg',
        desc: 'Brass-coloured base with clean lines and a black perforated shade on top that spreads a decorative pattern in the room when the lamp is on. Like the style? Decorate with more lamps from the same series.',
        category: 'light',
        price: '64',
    },
    {
        id: 19,
        title: 'HEKTAR',
        img: 'HEKTAR.jpg',
        desc: 'The simple, oversized metal shape is inspired by old lamps from places like factories and theatres. Used together, HEKTAR lamps support different activities and create a unified, rustic look in the room.',
        category: 'light',
        price: '79',
    },
    {
        id: 20,
        title: 'KINNAHULT',
        img: 'KINNAHULT.jpg',
        desc: 'The design idiom of KINNAHULT floor and table lamp is reminiscent of turned wood and has its roots in Scandinavian craftsmanship. Their all-black figures give them both a modern and traditional expression.',
        category: 'light',
        price: '49',
    },
    {
        id: 21,
        title: 'SKURUP',
        img: 'SKURUP.jpg',
        desc: 'Metal, rugged constructions and timeless design – enjoy the SKURUP lamp series for a long time. Simple adjustments and different types of lamps make the series practical and flexible throughout the home.',
        category: 'light',
        price: '44',
    },
    {
        id: 22,
        title: 'KOLBJОRN',
        img: 'KOLBJОRN.jpg',
        desc: 'Perfect to have on the balcony for plant pots and garden tools, in the hallway for shoes or in the bathroom to keep shampoos and towels organised. May be completed with KOLBJÖRN shelving unit on top.',
        category: 'light',
        price: '89',
    },
    {
        id: 23,
        title: 'TROTTEN',
        img: 'TROTTEN.jpg',
        desc: 'TROTTEN double-sided cabinet with open and closed storage is accessible from both sides – perfect as a room divider. You can create a workshop space by mounting TROTTEN notice board to the cabinet.',
        category: 'cabinet',
        price: '249',
    },
    {
        id: 24,
        title: 'BROR',
        img: 'BROR.jpg',
        desc: 'Heavy-duty, our way – a sturdy storage system that withstands moisture, dirt and heavy loads. Also easy to assemble, complete as needed and fits everywhere thanks to its clean design.',
        category: 'cabinet',
        price: '179',
    },
    {
        id: 25,
        title: 'HYLLIS',
        img: 'HYLLIS.jpg',
        desc: 'With HYLLIS cover you can transform the open HYLLIS shelving unit into an enclosed storage solution. Perfect if you want to protect your things from dust or have a small greenhouse indoors or outdoors.',
        category: 'cabinet',
        price: '44',
    },
    {
        id: 26,
        title: 'HEJNE',
        img: 'HEJNE.jpg',
        desc: 'HEJNE storage system is sturdy and strong enough for even the heaviest loads in your garage, basement or attic. By adding posts and shelves you increase the storage possibilities.',
        category: 'cabinet',
        price: '7',
    },
    {
        id: 27,
        title: 'KOLBJORN',
        img: 'KOLBJORN.jpg',
        desc: 'Flexible, durable shelving unit that is great in bathrooms, hallways or on balconies – with space for everything from plant pots and tools to shampoos and shoes. Perfect to combine with KOLBJÖRN cabinet.',
        category: 'cabinet',
        price: '69',
    },
    {
        id: 28,
        title: 'LANDSKRONA',
        img: 'LANDSKRONA.jpg',
        desc: 'Luxury made our way. We used resilient foam filling for comfort, thick grain leather on the contact areas – because it looks amazing, and durable coated fabric elsewhere to keep the price down.',
        category: 'sofas',
        price: '899',
    },
    {
        id: 29,
        title: 'VIMLE',
        img: 'VIMLE.jpg',
        desc: 'This sofa can be formed any way you like for your space at home. Choose the number of seats, design and functions. As your family or home grows, add on to the sofa and let it grow with you.',
        category: 'sofas',
        price: '1023',
    },
    {
        id: 30,
        title: 'MONSTERA',
        img: 'MONSTERA.jpg',
        desc: 'Easy-care plant that inspires a creative, relaxing environment. An epiphyte that climbs on other plants to get closer to the sun. And which can boost your well-being and make a home feel more vibrant.',
        category: 'pot',
        price: '17',
    },
];

export { items };

const products = [
    {
        id: 0,
        name: 'Acer Aspire 5 Slim Laptop, 15.6" Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L',
        category: 'computers',
        price: 314.99,
        image: 'https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg',
        description: 'AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD; 15.6 inches Full HD (1920 x 1080) Widescreen LED backlit IPS Display; AMD Radeon Vega 3 Mobile Graphics; 1 USB 3.1 Gen 1 Port, 2 USB 2.0 Ports & 1 HDMI Port with HDCP support; 802.11ac WiFi; Backlit Keyboard; Up to 7.5 Hours Battery Life; Windows 10 in S mode. Maximum Power Supply Wattage 65 W'
    },
    {
        id: 1,
        name: 'Acer Predator Helios 300 Gaming Laptop PC, 15.6" Full HD 144Hz 3ms IPS Display, Intel i7-9750H, GTX 1660 Ti 6GB, 16GB DDR4, 256GB PCIe NVMe SSD, Backlit Keyboard, PH315-52-78VL',
        category: 'computers',
        price: 1,
        image: 'https://m.media-amazon.com/images/I/712a83USPrL._AC_UY218_.jpg',
        description: '9th Generation Intel Core i7 9750H 6 Core Processor (Up to 4.5GHz) with Windows 10 Home 64 Bit; NVIDIA GeForce GTX 1660 Ti Graphics with 6GB of dedicated GDDR6 VRAM; 15.6 inches Full HD (1920 x 1080) Widescreen LED backlit IPS Display (144Hz Refresh Rate, 3ms Overdrive Response Time, 300nit Brightness and 72 percentage NTSC); 16GB DDR4 2666MHz Memory, 256GB PCIe NVMe SSD (2 x PCIe M.2 Slots; 1 Slot Open for Easy Upgrades) and 1 Available Hard Drive Bay; Backlit Keyboard; LAN: Killer Ethernet E2500 10/100/1000 Gigabit Ethernet LAN; Wireless: Killer DoubleShot Pro Wireless AC 1550 802. 11ac; 4th Gen All Metal AeroBlade 3D Fan'
    },
    {
        id: 2,
        name: 'Acer Predator Helios 300 Gaming Laptop PC, 15.6" FHD IPS w/ 144Hz Refresh, Intel i7-8750H, GTX 1060 6GB, 16GB DDR4, 256GB NVMe SSD, Aeroblade Metal Fans PH315-51-78NP',
        category: 'computers',
        price: 976.99,
        image: 'https://m.media-amazon.com/images/I/61rjV21bzfL._AC_UY218_.jpg',
        description: '8th Generation Intel Core i7-8750H 6-Core Processor (Up to 4.1GHz) with Windows 10 Home 64 Bit; NVIDIA GeForce GTX 1060 Overclockable Graphics with 6 GB of dedicated GDDR5 VRAM; 15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS display (144Hz Refresh Rate, 300nit Brightness & 72% NTSC ); 16GB DDR4 2666MHz DRAM Memory & 256GB PCIe NVMe SSD | Extra empty accessible slot for 2.5 inch hard drive or SSD; Gigabit Wi-Fi |Backlit Keyboard | USB 3.1 (Type C) | Dual All-Metal AeroBlade 3D Fan Cooling | Metal Chassis.Battery Capacity:3320 mAh; Up to 7-hours of battery life'
    },
    {
        id: 3,
        name: 'Acer Aspire 5 Slim Laptop, 15.6" Full HD IPS Display, 8th Gen Intel Core i5-8265U, 8GB DDR4, 256GB PCIe NVMe SSD, Backlit Keyboard, Fingerprint Reader, Windows 10 Home, A515-54-51DJ',
        category: 'computers',
        price: 509.99,
        image: 'https://m.media-amazon.com/images/I/71sesDsw95L._AC_UY218_.jpg',
        description: '8th Generation Intel Core i5 8265u Processor (Up to 3. 9GHz); 8GB DDR4 Memory; 256GB PCIe NVMe SSD; 15. 6 inches Full HD (1920 x 1080) widescreen LED backlit IPS display; Intel UHD Graphics 620; 1 USB 3.1 Type C Gen 1 port, 2 USB 3.1 Gen 1 Ports (one with Power off Charging), 1 USB 2.0 Port & 1 HDMI Port with HDCP support; 802. 11AC Wi Fi; Backlit keyboard; fingerprint reader; up to 9. 5 hours Battery Life; Windows 10 Home'
    },
    {
        id: 4,
        name: 'Samsung Electronics XE500C13 Chromebook 3 2GB RAM 16GB SSD Laptop, 11.6"',
        category: 'computers',
        price: 158,
        image: 'https://m.media-amazon.com/images/I/71OQVVl+MOL._AC_UY218_.jpg',
        description: 'Up to 11 hours battery life on a single charge; Built in security Features ensure you\'re protected from viruses and Malware; 11.6 inches HD anti reflective Display; Spill resistant keyboard protects against accidental Damage; Intel Celeron N3060 Processor with 2G Memory and 16GB storage'
    },
    {
        id: 5,
        name: 'Acer Aspire E 15, 15.6" Full HD, 8th Gen Intel Core i3-8130U, 6GB RAM Memory, 1TB HDD, 8X DVD, E5-576-392H',
        category: 'computers',
        price: 309.99,
        image: 'https://m.media-amazon.com/images/I/618oANL1phL._AC_UY218_.jpg',
        description: '8th Generation Intel Core i3 8130U Processor 2.2 GHz (Up to 3.2GHz); 15.6 inches Full HD (1920 x 1080) widescreen LED lit Display; 6GB Dual Channel Memory, 1TB HDD and 8x DVD; Up to 13.5 Hours of battery life; Windows 10 Home'
    },
    {
        id: 6,
        name: 'Lenovo Chromebook C330 2-in-1 Convertible Laptop, 11.6-Inch HD (1366 x 768) IPS Display, MediaTek MT8173C Processor, 4GB LPDDR3, 64 GB eMMC, Chrome OS, 81HY0000US, Blizzard White',
        category: 'computers',
        price: 249.99,
        image: 'https://m.media-amazon.com/images/I/61UFN2ttPVL._AC_UY218_.jpg',
        description: 'HIGH PERFORMANCE LAPTOP: The Chromebook C330 is equipped with a MediaTek MT8173C Processor, Chrome OS, 4 GB LPDDR3, 64 GB eMMC and so much more; SLEEK & STYLISH DESIGN: Sleek, stylish and secure, this 360 degree convertible laptop is less than one inch thin and 2.6 lbs. light with a 11-inch FHD IPS Touch Display perfect for day-to-day computing and multimedia, on or offline; POWERFUL PROCESSING: Enjoy powerful processing for daily tasks, LPDDR3 memory for multitasking, eMMC storage for quick boot-ups, fast software loading and additional 100 GB of cloud storage via Google Drive, all on your Lenovo Chromebook C330; BUILT TO CONNECT US: Full I/O support comes standard on the Chromebook C330 with USB-C, SD and USB 3.0 for effortless connectivity; EASY TO USE: The Lenovo Chromebook C330 is easy to use, offers built-in virus protection and keeps going with long battery life. No setup is needed, just a Google account so your emails, maps, docs, pics stay with you via cloud storage'
    },
    {
        id: 7,
        name: 'Acer Aspire E 15 Laptop, 15.6" Full HD, 8th Gen Intel Core i5-8250U, GeForce MX150, 8GB RAM Memory, 256GB SSD, E5-576G-5762',
        category: 'computers',
        price: 599.99,
        image: 'https://m.media-amazon.com/images/I/71HaIH7W5gL._AC_UY218_.jpg',
        description: '8th Generation Intel Core i5-8250U Processor (Up to 3.4GHz); 15.6" Full HD (1920 x 1080) widescreen LED-lit IPS Display; 8GB Dual Channel Memory & 256GB SSD; Up to 15-hours of battery life.Adapter: 65 W; Windows 10 Home'
    },
    {
        id: 8,
        name: 'Lenovo Ideapad L340 Gaming Laptop, 15.6 Inch FHD (1920 X 1080) IPS Display, Intel Core i5-9300H Processor, 8GB DDR4 RAM, 512GB Nvme SSD, NVIDIA GeForce GTX 1650, Windows 10, 81LK00HDUS, Black',
        category: 'computers',
        price: 712.49,
        image: 'https://m.media-amazon.com/images/I/61S-VmYrVCL._AC_UY218_.jpg',
        description: 'With 9th-generation Intel Core i7-9750h Processor, 8GB DDR4 RAM, 1TB HDD + 256GB NVMe SSD Storage, This gaming notebook has all the power you need to outshoot, outrun, and outsmart anyone; The 15.6-Inch Screen delivers a stunning full HD IPS Display with 1920 x 1080 resolution, anti-glare technology, 250 nits, 45% Color gamut; Nvidia GeForce GTX 1050 graphics deliver faster, smoother gameplay and more power-efficient performance; This Lenovo Gaming notebook is game ready - are you? With cool blue ambient lighting, extended battery life (up to 9 hours), and a 720P HD camera with privacy shutter, you\'ll be ready to play anytime, anywhere; Final product may vary slightly from image'
    },
    {
        id: 9,
        name: 'Lenovo Flex 14 2-in-1 Convertible Laptop, 14 Inch FHD Touchscreen Display, AMD Ryzen 5 3500U Processor, 12GB DDR4 RAM, 256GB NVMe SSD, Windows 10, 81SS000DUS, Black, Pen Included',
        category: 'computers',
        price: 549.99,
        image: 'https://m.media-amazon.com/images/I/81iUtbasLNL._AC_UY218_.jpg',
        description: 'With a 1920 x 1080 Full HD touch screen Display and the powerful and efficient AMD Ryzen 5 3500U mobile Processor, you can work, stream, and game for hours, along with Radeon Vega 8 for fast video and photo editing. Includes HDMI, USB-C, and USB 3.1 inputs; Comprehensive, built-in, ongoing protection with Windows 10 helps protect you against viruses, malware, and ransomware; Convenient true block privacy shutter allows you to physically close your PC\'s webcam whenever you\'re not using it; With the included active Pen, you can draw or take notes directly on the screen, anywhere you go; Up to 10 hours of battery life with recharge Technology to power your laptop computer up to 80% in just one hour'
    },
    {
        id: 10,
        name: 'HP 2019 Newest Premium 15.6-inch HD Laptop, AMD A6-9225 Dual-Core 2.6 GHz, 8GB RAM, 1TB HDD, AMD Radeon R4, WiFi, HDMI, MaxxAudio, Bluetooth, Windows 10',
        category: 'computers',
        price: 344,
        image: 'https://m.media-amazon.com/images/I/5123FA6TGDL._AC_UY218_.jpg',
        description: 'Intel Dual Core AMD A6-9225 2.6Ghz Base Frequency Burst Frequency up to 3.0Ghz (With DVD Drive, No Touchscreen), AMD Radeon R4.; RAM is upgraded to 8GB memory for multitasking Adequate high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Webcam, 802.11 b/g/n, Bluetooth DVD-RW, 2 x USB 3.0 Type-A, 1 x USB 2.0, 1 x HDMI, 1 x RJ-45, 1 x headphone/microphone combo.; Windows 10 64-bit OS; provide a familiar and productive experience, while delivering enterprise-grade flexibility and security'
    },
    {
        id: 11,
        name: 'ASUS Chromebook C202SA-YS02 11.6" Ruggedized and Water Resistant Design with 180 Degree (Intel Celeron 4 GB, 16GB eMMC, Dark Blue, Silver)',
        category: 'computers',
        price: 199.99,
        image: 'https://m.media-amazon.com/images/I/71S3Rnugf7L._AC_UY218_.jpg',
        description: 'Ready for drops and spills with rugged construction with reinforced rubber guards, easy grip handles, and a spill resistant keyboard; Lightweight 2.65 pound body and rugged construction that can be dropped from 3.9 feet* so you can take it anywhere without disruption; 11.6 inches HD 1366x768 Anti-Glare Display, with 180 degree hinge for easy viewing; Powered by the Intel Celeron N3060 Processor (2M Cache, up to 2.48 GHz) for fast and snappy performance; 4 GB DDR3 RAM; 16GB Flash Storage; No CD or DVD drive; Power adapter: Input: 100 -240 V AC, 50/60 Hz universal; Chromebook runs on Chrome OS - an operating system by Google that is built for the way we live today. It comes with built-in virus protection, updates automatically*, boots up in seconds and continues to stay fast over time; All the Google apps you know and love come standard on every Chromebook, which means you can edit, download, and convert Microsoft Office files in Google Docs, Sheets and Slides; With the Google Play Store, you can access a rich library of apps, games, music, movies, TV, books, magazines, and more, all from your Chromebook; Chromebooks come with built-in storage for offline access to your most important files and an additional 100GB of Google Drive space to ensure that all of your files are backed up automatically'
    },
    {
        id: 12,
        name: '2019 Lenovo 11.6" HD IPS Touchscreen 2-in-1 Chromebook, Quad-Core MediaTek MT8173C (4C, 2X A72 + 2X A53), 4GB RAM, 32GB eMMC, 802.11ac WiFi, Bluetooth 4.2, HDMI, Type-C, Chrome OS',
        category: 'computers',
        price: 240,
        image: 'https://m.media-amazon.com/images/I/51M8fJZcbBL._AC_UY218_.jpg',
        description: '11.6" 1366 x 768 HD resolution. IPS technology for wide viewing angles. Energy-efficient LED backlight.; MediaTek MT8173C Quad-Core Base Clock Speed 1.3 GHz, Maximum Boost Speed 2.16 GHz (4C, 2x A72 @ 2.1GHz + 2x A53 @ 1.7GHz); 4GB LPDDR3 SDRAM, 32 GB Integrated eMMC, No Optical Drive; 802.11a/g/n/ac, 1x1 + BT4.2, 720p HD webcam, 1 x USB 3.1 Gen 1 Type-C, 1 x USB 3.1 Gen 1 Type-A, 1 x HDMI, 1 x 1/8" (3.5 mm) Headphone/Microphone Combo Jack, Integrated Microphone, Integrated Speaker; Google Chrome OS, 10-hours 3-cell Battery'
    },
    {
        id: 13,
        name: 'Apple MacBook Air MJVM2LL/A 11.6-Inch laptop(1.6 GHz Intel i5, 128 GB SSD, Integrated Intel HD Graphics 6000, Mac OS X Yosemite (Renewed)',
        category: 'computers',
        price: 414.95,
        image: 'https://m.media-amazon.com/images/I/71iFVjrzsLL._AC_UY218_.jpg',
        description: '11" Laptop, 1.6GHz Intel Core i5; 4GB Memory, 128GB SSD; Integrated Intel HD Graphics 6000 graphics processor; Connectivity includes 802.11ac Wi-Fi, Bluetooth 4.0, analog audio out, a single Thunderbolt 2 port, and two USB 3.0 ports.; Fresh installation of macOS 10.14 Mojave, includes new MagSafeadapter'
    },
    {
        id: 14,
        name: 'Asus Chromebook Flip C434 2 in 1 Laptop, 14" Touchscreen FHD 4-Way NanoEdge, Intel Core M3-8100Y Processor, 4GB RAM, 64GB eMMC Storage, All-Metal Body, Backlit KB, Silver, Chrome OS, C434TA-DSM4T',
        category: 'computers',
        price: 499.99,
        image: 'https://m.media-amazon.com/images/I/81jMDZtV7PL._AC_UY218_.jpg',
        description: '14 inch touchscreen full HD 1920x1080 4-way NanoEdge Display featuring ultra-narrow bezels (5mm thin) around each side of the display that allows for a 14 inch screen to fit in the body of a 13 inch Laptop footprint; The full HD display has a durable 360 degree hinge that can be used to flip the touchscreen display to tent, stand, and tablet mode; Powered by the Intel Core m3-8100y Processor (4M Cache, up to 3.4 GHz) for super-fast and snappy performance. If you use a ton of tabs or run lots of apps, this has the power to get it all done with ease; 4GB LPDDR3 RAM; 64GB eMMC storage and 2x USB Type-C (Gen 1) and 1x USB Type-A (Gen 1) ports plus a backlit keyboard (*usb transfer speed may vary. Learn more at Asus website); The lightweight (3 lbs) all-aluminum metal body makes the C434 both durable and beautiful for a timeless look that will never go out of style; Chromebook runs on chrome OS - an operating system by Google that is built for the way we live today. It comes with built-in virus protection, updates automatically*, boots up in seconds and continues to stay fast over time; All the Google apps you know and love come standard on every Chromebook, which means you can edit, download, and convert Microsoft Office files in Google Docs, Sheets and slides.; With the Google play store, you can access a rich library of apps, games, music, movies, TV, books, magazines, and more, All from your Chromebook; Chromebooks come with built-in storage for offline access to your most important files and a 12-month Google one TRIAL that gives you additional storage across Gmail, Google Drive and Google Photos'
    },
    {
        id: 15,
        name: 'HP 2019 14" Laptop - Intel Core i3 - 8GB Memory - 128GB Solid State Drive - Ash Silver Keyboard Frame (14-CF0014DX)',
        category: 'computers',
        price: 344.5,
        image: 'https://m.media-amazon.com/images/I/81Q71WtLBlL._AC_UY218_.jpg',
        description: 'Windows 10 operating system Windows 10 brings back the start menu from Windows 7 and introduces new features, like the edge web browser that lets you markup web pages on your screen; 14" Display bright View glossy screen maintains the vivid colors in your photos and videos. Typical 1366 x 768 HD resolution. Wled backlight; 7th Gen Intel Core i3-7100U mobile Processor smart dual-core, four-way processing performance for HD-quality computing; 8GB system Memory for advanced multitasking substantial high-bandwidth RAM; 128GB Solid State Drive (SSD) while offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times'
    },
    {
        id: 16,
        name: 'ASUS ZenBook 13 Ultra-Slim Durable Laptop 13.3” FHD Wideview, Intel Core i7-8565U Up to 4.6GHz, 16GB RAM, 512GB PCIe SSD + TPM Security Chip, Numberpad, Windows 10 Pro - UX333FA-AB77, Royal Blue',
        category: 'computers',
        price: 999.99,
        image: 'https://m.media-amazon.com/images/I/81A9ZobNH+L._AC_UY218_.jpg',
        description: '13.3 inch wide-view full HD NanoEdge bezel Display with a 95% screen-to-body ratio; sleek and lightweight at 2.6 lbs for comfortable portability; Intel Core i7-8565u Quad Core Processor (Up to 4.6GHz); Fast storage and memory featuring 512GB PCIe NVMe SSD and 16GB RAM; Windows 10 Professional; Exclusive dual function touchpad: a touchpad with switchable numeric keypad for immediate data entry to enhance productivity; Exclusive ErgoLift hinge designed for an improved typing position with a backlit keyboard, optimized cooling System, and enhanced audio performance; Built-in IR camera for facial recognition sign in with Windows Hello; Tpm security chip to encrypt data and MIL-STD 810G military standard for reliability and durability of the all-metal body; Extensive connectivity with HDMI, USB Type C, gigabit-class Wi-Fi 5 (802.11AC), Bluetooth 5.0 and Micro SD card reader; Carry Sleeve and USB3.0 to RJ45 cable are included'
    },
    {
        id: 17,
        name: 'Samsung Chromebook Plus V2, 2-in-1, 4GB RAM, 64GB eMMC, 13MP Camera, Chrome OS, 12.2", 16:10 Aspect Ratio, Light Titan (XE520QAB-K03US)',
        category: 'computers',
        price: 398.98,
        image: 'https://m.media-amazon.com/images/I/81mX-4s+guL._AC_UY218_.jpg',
        description: 'TWEIGHT 2 in 1 DESIGN At just under 3 pounds, the Chromebook Plus is incredibly lightweight. You can easily fold it into tablet mode for comfortable viewing and browsing; BUILT IN PEN Experience the power of the incredibly precise built-in pen that never needs charging. It\'s always ready to write, sketch, edit, magnify and even take screenshots; DUAL CAMERA Fold your laptop into tablet mode to capture clear shots and even zoom in for a closer look with the revolutionary 13MP world facing camera with autofocus; CHROME OS AND GOOGLE PLAY STORE Create, explore and browse on a bigger screen with the tools you use every day all on the secure Chrome OS; POWER AND PERFORMANCE Tackle anything with a long lasting battery and Intel Celeron processor. Store more with 64GB of built in memory and add up to 400GB with a microSD card.Bluetooth v4.0'
    },
    {
        id: 18,
        name: 'MSI GL63 8RCS-060 15.6" Gaming Laptop, Intel Core i5-8300H, NVIDIA GTX1050, 8GB, 256GB Nvme SSD, Win10',
        category: 'computers',
        price: 659.99,
        image: 'https://m.media-amazon.com/images/I/51YLSij4IsL._AC_UY218_.jpg',
        description: 'Display: 15.6" Full HD eDP IPS-Level 45% NTSC; Processor: Core i5-8300H 2.3 - 4.0GHz; Graphics: NVIDIA GeForce GTX1050 4G GDDR5; Memory: 8GB (8G*1) DDR4 2666MHz, 2 Sockets; Max Memory 32GB; Storage: 256GB NVMe SSD ; Webcam - HD type (30fps@720p)'
    },
    {
        id: 19,
        name: 'Alienware M15-15.6" FHD Gaming Laptop Thin and Light, i7-8750H Processor, NVIDIA GeForce Graphics Card, 16GB RAM, 1TB Hybrid HDD + 128GB SSD, 17.9mm Thick & 4.78lbs',
        category: 'computers',
        price: 1,
        image: 'https://m.media-amazon.com/images/I/71J7q3UpQnL._AC_UY218_.jpg',
        description: '8th Generation Intel Core i7-8750H (6-Core, 9MB Cache, up to 4.1GHz w/ Turbo Boost); 15.6" Fhd (1920 x 1080) 60Hz anti-glare IPS, 300-nits 72% Color gamut, narrow-border Display; 16GB, 2x8GB, DDR4, 2666MHz; 128GB PCIe M.2 SSD + 1TB (+8GB SSHD) hybrid Drive; Nvidia GeForce GTX 1060 with 6GB GDDR5; Win 10 Home'
    },
    {
        id: 20,
        name: 'ASUS VivoBook L203MA Ultra-Thin Laptop, Intel Celeron N4000 Processor, 4GB RAM, 64GB eMMC storage, 11.6” HD, USB-C, Wi-Fi 5, Windows 10, L203MA-DS04, One Year of Microsoft Office 365',
        category: 'computers',
        price: 209.99,
        image: 'https://m.media-amazon.com/images/I/81o8Tll-5-L._AC_UY218_.jpg',
        description: 'Efficient Intel Celeron N4000 Processor (4M Cache, up to 2. 6 GHz); 11. 6” HD (1366 x 768) Display; 64GB em flash storage; 4GB LPDDR4 RAM; One year of Microsoft Office 365 included; HD Webcam; Slim and portable: 0. 7” thin and weighs only 2. 2 lbs. (Battery included); Usb Type-C (Gen 1), USB Type-A, HDMI, micros connectivity; Wi-Fi 5 (802. 11AC) for speeds up to three times faster than 802. 11N; Windows 10 in S mode is the new standard in app and cloud based operating systems. Windows 10 in S mode is a 100% app based version of Windows where applications are verified and tested for quality on the Microsoft Store'
    },
    {
        id: 21,
        name: 'Lenovo Flex 14 2-in-1 Convertible Laptop, 14 Inch FHD, Touchscreen, AMD Ryzen 5 3500U Processor, Radeon Vega 8 Graphics, 8GB DDR4 RAM, 256GB NVMe SSD, Win 10, Black, Pen Included',
        category: 'computers',
        price: 579,
        image: 'https://m.media-amazon.com/images/I/81oUcmzZwLL._AC_UY218_.jpg',
        description: 'Up to 8 hours of battery life with quick recharge technology to power your laptop computer up to 80%; Comprehensive protection with Windows 10 helps protect against viruses, malware, and ransomware; Convenient TrueBlock privacy shutter allows you to physically close your webcam when you\'re not using it; The included Active Pen lets you draw or take notes directly on the screen, anywhere you go; With a full HD touch display and the AMD Ryzen processor, you can work, stream, game, and edit videos; Includes HDMI, USB-C, USB 3.1 inputs, fingerprint reader; OS : Windows 10'
    },
    {
        id: 22,
        name: 'Samsung Chromebook 3, 11.6in, 4GB RAM, 16GB eMMC, Chromebook (XE500C13-K04US) (Renewed)',
        category: 'computers',
        price: 141.19,
        image: 'https://m.media-amazon.com/images/I/71bfpLByqnL._AC_UY218_.jpg',
        description: 'Intel Celeron N3060 processor with 4GB memory, 16GB SSD; Simple and secure Google Chrome OS; 11.6 HD Anti-Reflective Display with image enhancer; Work or play for up to 11 hours on a single charge'
    },
    {
        id: 23,
        name: 'Acer Chromebook 315, AMD Dual-Core A4-9120C Processor, 15.6" HD, AMD Radeon R4 Graphics, 4GB DDR4, 32GB eMMC, Google Chrome, CB315-2H-25TX',
        category: 'computers',
        price: 219.97,
        image: 'https://m.media-amazon.com/images/I/71Qxi-2HEIL._AC_UY218_.jpg',
        description: 'Chromebook runs on chrome OS - an operating system by Google that is built for the way we live today. It comes with built-in virus protection, updates automatically*, boots up in seconds and continues to stay fast over time. (*Internet connection is required); All the Google apps you know and love come standard on every Chromebook, which means you can edit, download, and convert Microsoft Office files in Google Docs, Sheets and slides; Get access to more than 2 million Android apps from Google Play to learn and do more; Chromebooks come with built-in storage for offline access to your most important files and an additional 100GB of Google Drive space to ensure that all of your files are backed up automatically; CB315-2H-25TX comes with AMD A-series dual-core processor a4-9120c (up to 2. 4GHz), 15. 6" Comfy view HD (1366 x 768) widescreen LED-backlit Display, 4GB dual-channel DDR4 SDRAM Memory, 32GB emcee, Google Chrome and up to 10-hour battery life'
    },
    {
        id: 24,
        name: 'HP Pavilion 15.6 HD 2019 Newest Thin and Light Laptop Notebook Computer, Intel AMD A6-9225, 8GB RAM, 1TB HDD, Bluetooth, Webcam, DVD-RW, WiFi, Win 10',
        category: 'computers',
        price: 340,
        image: 'https://m.media-amazon.com/images/I/5123FA6TGDL._AC_UY218_.jpg',
        description: 'Intel Dual Core AMD A6-9225 2.6Ghz Base Frequency Burst Frequency up to 3.0Ghz, AMD Radeon R4.; RAM is upgraded to 8GB memory for multitasking Adequate high-bandwidth RAM to smoothly run multiple applications and browser tabs all at once. Webcam, 802.11 b/g/n, Bluetooth DVD-RW, 2 x USB 3.0 Type-A, 1 x USB 2.0, 1 x HDMI, 1 x RJ-45, 1 x headphone/microphone combo.; 15.6" HD (1366 x 768) LED backlight display, No Touchscreen; DVD-Writer: reads and writes CDs and DVDs; Full-size island-style keyboard with integrated numeric keypad; Touchpad with multi-touch gesture support; Webcam; Windows 10 64-bit OS; provide a familiar and productive experience, while delivering enterprise-grade flexibility and security'
    },
    {
        id: 25,
        name: 'Lenovo  130S-11IGM 11.6" HD Laptop, Intel Celeron N4000, 4GB RAM, 64GB eMMC, 1-Year Office 365, Windows 10 in S Model - Gray',
        category: 'computers',
        price: 166.99,
        image: 'https://m.media-amazon.com/images/I/51G1NoGTjNL._AC_UY218_.jpg',
        description: '11.6" display Typical 1366 x 768 HD resolution. Energy-efficient LED backlight.; Intel Celeron processor N4000 Entry-level dual-core processor for general e-mail, Internet and productivity tasks.; 4GB system memory for basic multitasking, 64GB eMMC flash memory; Intel UHD Graphics 600; HDMI output; Built-in media reader; Does not include a built-in DVD/CD drive; Windows 10 in S Mode; Office 365 Personal 1-Year Subscription Included; Weighs 2.54 lbs. and measures 0.7" thin; Color: Mineral Gray'
    },
    {
        id: 26,
        name: 'MSI GL63 8SC-059 15.6" Gaming Laptop, Intel Core i7-8750H, NVIDIA GeForce GTX1650, 8GB, 256GB Nvme SSD, Win10',
        category: 'computers',
        price: 845.7,
        image: 'https://m.media-amazon.com/images/I/51YLSij4IsL._AC_UY218_.jpg',
        description: 'Display: 15.6" Fhd wide view NTSC Color Anti-Glare, RGB; Processor: Core i7-8750H 2.2 - 4.1GHz; Graphics: NVIDIA GeForce GTX1650 4G GDDR5; Memory: 8GB (8G*1) DDR4 2666MHz, 2 Sockets; Max Memory 32GB; Storage: 256GB NVMe SSD'
    },
    {
        id: 27,
        name: 'Acer Aspire 5 Slim Laptop, 15.6" Full HD IPS Display, 8th Gen Intel Core i3-8145U, 4GB DDR4, 128GB PCIe Nvme SSD, Backlit Keyboard, Windows 10 in S Mode, A515-54-30BQ',
        category: 'computers',
        price: 349.99,
        image: 'https://m.media-amazon.com/images/I/71NGpuvDJgL._AC_UY218_.jpg',
        description: '8th Generation Intel Core i3-8145u Processor (Up to 3.9GHz) | 4GB DDR4 Memory | 128GB PCIe NVMe SSD; 15.6" Full HD (1920 x 1080) widescreen LED-backlit IPS display | Intel UHD Graphics 620; 1 - USB 3.1 Type C Gen 1 port, 2 - USB 3.1 Gen 1 Ports (one with Power-off Charging), 1 - USB 2.0 Port & 1 - HDMI Port with HDCP support; 802.11AC Wi-Fi | Backlit keyboard | up to 9.5 hours Battery Life; Windows 10 in S mode'
    },
    {
        id: 28,
        name: '2019 Newest Lenovo IdeaPad 15.6" HD High Performance Laptop PC |7th Gen AMD A9-9425 Dual-Core 3.10 GHz| 4GB RAM | 128GB SSD | 802.11ac | Bluetooth | DVD+/-RW | HDMI | Win 10',
        category: 'computers',
        price: 244.69,
        image: 'https://m.media-amazon.com/images/I/61-fLGfCtWL._AC_UY218_.jpg',
        description: 'AMD A9-9425 Dual Core accelerated processor 3.1 GHz (up to 3.7 GHz) ; AMD Radeon R5; 4GB DDR4 RAM; 128GB SSD; DVD-RW; 15.6" 1366 x 768 HD display & Energy-efficient LED backlight; 1 x HDMI, 10/100 Ethernet, 2 x USB 3.0, 1 x Combo Headphone/Mic Jack; Operating System: Windows 10 64-bit; 2-cell lithium ion Battery; Dimensions: (W x D x H)14.80" x 10.00" x 0.90"; Weight: 4.63 lbs ; 0.9" Thin'
    },
    {
        id: 29,
        name: 'Acer Chromebook R 11 Convertible Laptop, Celeron N3060, 11.6" HD Touch, 4GB DDR3L, 32GB eMMC, C738T-C7KD',
        category: 'computers',
        price: 227.86,
        image: 'https://m.media-amazon.com/images/I/616IPB2r0EL._AC_UY218_.jpg',
        description: 'Chromebook runs on chrome OS an operating system by Google that is built for the way we live today. It comes with built in virus protection, updates automatically, boots up in seconds and continues to stay fast over time. (Internet connection is required); All the Google apps you know and love come standard on every Chromebook, which means you can edit, download, and convert Microsoft Office files in Google Docs, Sheets and slides; With the Google play store, you can access a rich library of apps, games, music, movies, TV, books, magazines, and more, All from your Chromebook; Chromebooks come with built in storage for offline access to your most important files and an additional 100GB of Google Drive space to ensure that all of your files are backed up automatically; Intel Celeron N3060, 11. 6 inches HD touch Display, 4GB memory, 32GB eMMC, 802. 11AC Wi Fi, up to 10 hour battery life, convertible laptop'
    },
    {
        id: 30,
        name: 'Acer Spin 3 Convertible Laptop, 14" Full HD IPS Touch, 8th Gen Intel Core i7-8565U, 16GB DDR4, 512GB PCIe NVMe SSD, Backlit KB, Fingerprint Reader, Rechargeable Active Stylus, SP314-53N-77AJ',
        category: 'computers',
        price: 809.99,
        image: 'https://m.media-amazon.com/images/I/81H9y1pPW6L._AC_UY218_.jpg',
        description: '8th Generation Intel Core i7 8565U Processor (Up to 4.6GHz); 14 inches Full HD (1920 x 1080) Widescreen LED backlit IPS Multi Touch Convertible Display; 16GB DDR4 Memory & 512GB PCIe NVMe SSD; Rechargeable Active Stylus; Thin 0.38 inches Bezel; Dual Front Facing Speakers; 802.11acWi Fi featuring 2x2 MU MIMO Technology; Just 0.78 inches Thin, 3.75 pounds and Up to 12 Hours of Battery Life'
    },
    {
        id: 31,
        name: 'Asus ZenBook 13 Ultra-Slim Laptop, 13.3” Full HD Wideview, 8th Gen Intel Core I5-8265U, 8GB LPDDR3, 512GB PCIe SSD, Backlit KB, Fingerprint, Slate Gray, Windows 10, UX331FA-AS51',
        category: 'computers',
        price: 797.8,
        image: 'https://m.media-amazon.com/images/I/81e3OdfLYHL._AC_UY218_.jpg',
        description: '13.3 inch wide-view Full-HD NanoEdge bezel Display; Intel Core i5-8265u Processor (6M Cache, up to 3.9 GHz); Fast storage and memory featuring 512GB PCIe M.2 SSD and 8GB LPDDR3 RAM; Extensive connectivity with HDMI, USB Type C, Wi-Fi 5 (802.11AC) and Micro SD card reader (*usb transfer speed may vary. Learn more at Asus website); Sleek and lightweight 2.5 lbs aluminum body for comfortable portability; Windows 10 Home pre-installed'
    },
    {
        id: 32,
        name: 'Samsung Galaxy S9+ Unlocked - 64gb - Midnight Black - US Warranty (Renewed)',
        category: 'phones',
        price: 359.92,
        image: 'https://m.media-amazon.com/images/I/61Y7XldV1jL._AC_UY218_.jpg',
        description: 'Super Speed Dual Pixel Camera with Rear Dual Camera; Infinity Display: edge-to-edge immersive screen, enhancing your entertainment experience**; IP68 rating: withstands splashes, spills, and rain so it can take a dip, worry-free***; Internal Memory 64 GB. Expandable Storage up to 400GB****'
    },
    {
        id: 33,
        name: 'Apple iPhone 6 16 GB Unlocked, Gold (Renewed)',
        category: 'phones',
        price: 111.99,
        image: 'https://m.media-amazon.com/images/I/51v8Vbyt7ZL._AC_UY218_.jpg',
        description: '4.7-inch LED-backlit IPS LCD Capacitive Touchscreen, 750 x 1334 pixels with Ion-strengthened glass, Oleophobic Coating; iOS, Apple A8 Chipset, Dual-Core 1.4 GHz Processor, PowerVR GX6450 (Quad-Core Graphics); 8MP Camera with f/2.2 aperture, 29mm (Standard), PDAF (Phase-Detection Autofocus) & 1.2MP Front Camera with f/2.2 aperture, 31mm (Standard); Internal Memory: 16GB, 1GB RAM; WLAN - Wi-Fi 802.11 a/b/g/n/ac, dual-band, hotspot; BT - v4.0, A2DP, LE; GPS - Yes, with A-GPS, GLONASS; NFC: Yes (Apple Pay Only)'
    },
    {
        id: 34,
        name: 'Apple iPhone XR, Fully Unlocked, 64 GB - Red (Renewed)',
        category: 'phones',
        price: 617.97,
        image: 'https://m.media-amazon.com/images/I/51oPt03uUsL._AC_UY218_.jpg',
        description: 'Seven-layer color process. The beautiful finishes of the back glass are achieved using an advanced process that allows for deep, rich colors.; Aerospace-grade aluminum bands. A special Apple‑designed alloy is precision‑machined to create structural bands and anodized to complement the color of the back glass.; Wireless charging. The glass back allows iPhone XR to charge easily and wirelessly.; Intelligent A12 Bionic. This is the smartest, most powerful chip in a smartphone, with our next-generation Neural Engine; 12MP rear camera, ƒ/1. 8, wide-angle lens, Portrait mode with Depth Control, 2x faster sensor for Smart HDR across your photos, 4K video up to 60 fps'
    },
    {
        id: 35,
        name: 'Apple iPhone 8 64 GB GSM Unlocked - Gold (Renewed)',
        category: 'phones',
        price: 364.99,
        image: 'https://m.media-amazon.com/images/I/61pRPj+-IYL._AC_UY218_.jpg',
        description: '4.7-Inch (diagonal) widescreen LCD multi-touch display with IPS technology and Retina HD display; 12MP camera with Optical image stabilization and Six-element lens; 4K video recording at 24 fps, 30 fps, or 60 fps; Rated IP67 (maximum depth of 1 meter up to 30 minutes) under IEC standard 60529; A11 Bionic chip Neural Engine'
    },
    {
        id: 36,
        name: 'Samsung Galaxy S10 Factory Unlocked Phone with 128GB - Prism Black',
        category: 'phones',
        price: 899.99,
        image: 'https://m.media-amazon.com/images/I/616PPIgQgUL._AC_UY218_.jpg',
        description: 'An immersive Cinematic Infinity Display, Pro grade Camera and Wireless PowerShare The next generation is here; Ultrasonic in display fingerprint ID protects and unlocks with the first touch; Pro grade Camera effortlessly captures epic, pro quality images of the world as you see it; Intelligently accesses power by learning how and when you use your phone'
    },
    {
        id: 37,
        name: 'Samsung Galaxy A70 128GB/6GB SM-A705MN/DS 6.7" HD+ Infinity-U 4G/LTE Factory Unlocked Smartphone (International Version, No Warranty) (Black)',
        category: 'phones',
        price: 354.97,
        image: 'https://m.media-amazon.com/images/I/61Ygdf5VvoL._AC_UY218_.jpg',
        description: '3G UMTS, HSPA+: 850, 900, 1700, 1900, 2100 MHz - LTE: 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 20, 28, 66 Bands > (ensure to check compatibility with your carrier before purchase); 6.7 inches 1080 x 2400 (FHD+) Super AMOLED - Android 9.0 (Pie) - On-Screen Fingerprint Reader; 128GB ROM + 6GB RAM - MicroSD (Up to 512GB) - USB Type-C - Non-removable Li-Po 4500 mAh battery - CPU Speed:2GHz, 1.7GHz - CPU Type:Octa-Core; Rear Camera - Resolution (Multiple): 32.0 MP + 5.0 MP + 8.0 MP - Front Camera: 32.0 MP - Video: UHD 4K (3840 x 2160)@30fps, 240fps @FHD; Unlocked cellphones are compatible with most of the GSM carriers ( Like T-Mobile or AT&T ) but please be aware that are not compatible with CDMA carriers ( Like Sprint or Verizon Wireless for example )'
    },
    {
        id: 38,
        name: 'BLU Vivo XL4 6.2" HD Display Smartphone 32Gb+3Gb RAM, Black',
        category: 'phones',
        price: 129.99,
        image: 'https://m.media-amazon.com/images/I/81TGHYLM3TL._AC_UY218_.jpg',
        description: '6.2” HD+ 19: 9 All Screen Design with Curved Glass Display; Dual A.I Camera’s: 13MP + 2MP with flash, and Front Camera: 13MP with flash; Your device will be fully charged in less than 2.5 hours; 32GB Internal Memory 3GB RAM Micro SD up to 128GB; 2.0GHz Octa core Mediatek Helio P22 + AI Processor; Large 4,000mAh battery with 5/2A Quick Charge; Encrypted Fingerprint Sensor; 4G LTE (1/2/3/4/5/7/8/12/17/28/66) 3G: (850/900/1700/1900/2100): US compatibility Nationwide on all GSM Networks including AT&T, T-Mobile, Cricket, metro PCS, and others'
    },
    {
        id: 39,
        name: 'Samsung Galaxy A50 SM-A505G 64GB 4GB RAM 25 MP 6.4" Factory Unlocked International Version- Black',
        category: 'phones',
        price: 260,
        image: 'https://m.media-amazon.com/images/I/71Ly8dZuEAL._AC_UY218_.jpg',
        description: 'Memory, Storage and SIM: 4GB RAM | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G); Android Pie V9.0 operating system with 2.29 Ghz Exynos 9610 Octa Core Processor; 4000mAH lithium-ion battery with Type-C fast charging | 15W Charger in the box; 16.21 centimeters (6.4-inch) FHD+ multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution and 16M color support; 25MP + 5MP + 8MP with F1.7, F2.2 wide Angle and F2.2 with Flash | 25 MP front camers with F2.0'
    },
    {
        id: 40,
        name: 'Huawei P30 Lite (128GB, 4GB RAM) 6.15" Display, AI Triple Camera, 32MP Selfie, Dual SIM Global 4G LTE GSM Factory Unlocked MAR-LX3A - International Version (Midnight Black)',
        category: 'phones',
        price: 264.9,
        image: 'https://m.media-amazon.com/images/I/616+kGLMqJL._AC_UY218_.jpg',
        description: 'GSM / 4G LTE Compatible; Rear 24MP Wide-Angle Camera + Rear 8MP Ultra-Wide Camera + Front 32MP Selfie Camera; Latin America Variant/US Compatible LTE; Internal Memory: 128GB, 4GB RAM - microSD Up to 512 GB (uses SIM 2 slot); Android 9.0 (Pie), Hisilicon Kirin 710, Octa-Core (Quad Core 2.2 GHz Cortex-A73 & Quad Core 1.7 GHz Cortex-A53), Mali-G51 MP4'
    },
    {
        id: 41,
        name: 'Apple iPhone 7 , GSM Unlocked, 128GB - Rose Gold (Renewed)',
        category: 'phones',
        price: 237.55,
        image: 'https://m.media-amazon.com/images/I/71x3e0x+M2L._AC_UY218_.jpg',
        description: 'GSM Unlocked Phones are ONLY compatible with GSM carriers like AT&T and T-Mobile as well as other GSM networks around the world. They WILL NOT WORK with CDMA carriers like Sprint and Verizon (Search for "Fully Unlocked iPhones" for CDMA compatible iPhones).; New 12MP camera, optical image stabilization, Quad-LED True Tone flash, and Live Photos LTE Advanced up to 450 Mbps and 802.11a/b/g/n/ac Wi-Fi with MIMO iOS 10 and iCloud.; 7MP FaceTime HD camera with Retina Flash Splash, water, and dust resistant 4K video recording at 30 fps and slo-mo video recording for 1080p at 120 fps Touch ID fingerprint sensor built in. Earpods not included.'
    },
    {
        id: 42,
        name: 'Apple iPhone 8, GSM Unlocked, 64GB - Gold (Renewed)',
        category: 'phones',
        price: 377.22,
        image: 'https://m.media-amazon.com/images/I/61pRPj+-IYL._AC_UY218_.jpg',
        description: 'Gsm Unlocked Phones are ONLY compatible with GSM carriers like AT&T and T-Mobile as well as other GSM networks around the world. They WILL not work with CDMA carriers like Sprint and Verizon (Search for "Fully Unlocked iPhones" For CDMA compatible iPhones).; 4.7-Inch (diagonal) widescreen LCD multi-touch display with IPS technology, 1334-by-750-pixel resolution at 326 ppi; A11 Bionic chip with 64-bit architecture, Neural Engine, embedded M11 motion coprocessor; 12MP camera, 7MP FaceTime HD camera'
    },
    {
        id: 43,
        name: 'Apple iPhone 7, GSM Unlocked, 128GB - Black (Renewed)',
        category: 'phones',
        price: 263.97,
        image: 'https://m.media-amazon.com/images/I/71SzDBdKVxL._AC_UY218_.jpg',
        description: 'GSM Unlocked Phones are ONLY compatible with GSM carriers like AT&T and T-Mobile as well as other GSM networks around the world. They WILL NOT WORK with CDMA carriers like Sprint and Verizon (Search for "Fully Unlocked iPhones" for CDMA compatible iPhones).; 12MP rear camera, optical image stabilization, Quad-LED True Tone flash, and Live Photos LTE Advanced up to 450 Mbps and 802. 11a/b/g/n/ac Wi-Fi with MIMO iOS 10 and iCloud.; 7MP FaceTime HD camera with Retina Flash Splash, water, and dust resistant 4K video recording at 30 fps and slo-mo video recording for 1080p at 120 fps.; Apple A10 Fusion chip with embedded M10 motion coprocessor'
    },
    {
        id: 44,
        name: 'Motorola G6 – 32 GB – Unlocked (AT&T/Sprint/T-Mobile/Verizon) – Black - (U.S. Warranty) - PAAE0000US',
        category: 'phones',
        price: 185,
        image: 'https://m.media-amazon.com/images/I/71FJqHOegyL._AC_UY218_.jpg',
        description: 'Max vision display, 3D glass back. Enjoy edge-to-edge views on a new stunning 5.7" full HD display with a beautifully designed back , Noise- 75 decibel; Creative Camera system. Unleash your creativity with Dual rear cameras and tools for everything from stunning portrait shots to hilarious face filters; All-day battery and turbo power charging. Go all day without recharging, and then get hours of power in just minutes of charging; Fast performance. Get all the speed you need with a 1.8 GHz Octa-Core processor and 4G LTE; Water repellent nano-coating inside and out; Note: Kindly refer user manual before use'
    },
    {
        id: 45,
        name: 'Apple iPhone 7 32GB, Rose Gold (Renewed)',
        category: 'phones',
        price: 214.99,
        image: 'https://m.media-amazon.com/images/I/51GIDp6bCFL._AC_UY218_.jpg',
        description: 'Renewed products look and work like new. These Pre-Owned products have been inspected and tested by Amazon-qualified suppliers, which typically perform a full diagnostic test and a thorough cleaning process. Packaging and accessories may be generic. This product is backed by the Amazon Renewed 90-day guarantee.'
    },
    {
        id: 46,
        name: 'Samsung Galaxy Note 8 N950U 64GB Unlocked GSM 4G LTE Android Smartphone w/Dual 12 MegaPixel Camera (Renewed) (Midnight Black)',
        category: 'phones',
        price: 387,
        image: 'https://m.media-amazon.com/images/I/61OOxwvUanL._AC_UY218_.jpg',
        description: 'See more, scroll less. Do more on the go with Galaxy Note8 beautifully spacious 6.3-inch QHD Super AMOLED infinity display-the possibilities are endless.; Say it your way. Write texts, crop photos and create animated GIFs with Samsungs most advanced S Pen to date. Notes, memos and reminders can even be written on the spot without unlocking your phone.; Shoot like a pro. Snap professional-quality photos anyone would be proud to share with the worlds first dual camera with optical image stabilization on both lenses.; Conquer the elements. Worry less about daily wear and tear as the Samsung Galaxy Note8 is both dust- and water-resistant, backed by an IP68 rating.*'
    },
    {
        id: 47,
        name: 'Samsung Galaxy A50 (64GB, 4GB RAM) 6.4" Display, 25MP, Triple Camera, Global 4G LTE Dual SIM GSM Factory Unlocked A505G/DS (International Model w/ 64GB MicroSD Bundle) (White)',
        category: 'phones',
        price: 260,
        image: 'https://m.media-amazon.com/images/I/81NuMh5e+UL._AC_UY218_.jpg',
        description: 'Memory, Storage and SIM: 4GB RAM | 64GB internal memory expandable up to 512GB | Dual SIM (nano+nano) dual-standby (4G+4G); Android Pie V9.0 operating system with 2.29 Ghz Exynos 9610 Octa Core Processor; 4000mAH lithium-ion battery with Type-C fast charging | 15W Charger in the box; 16.21 centimeters (6.4-inch) FHD+ multi-touch capacitive touchscreen with 2340 x 1080 pixels resolution and 16M color support; 25MP + 5MP + 8MP with F1.7, F2.2 wide Angle and F2.2 with Flash | 25 MP front camers with F2.0'
    },
    {
        id: 48,
        name: 'Huawei Honor 8X (64GB + 4GB RAM) 6.5" HD 4G LTE GSM Factory Unlocked Smartphone - International Version No Warranty JSN-L23 (Blue)',
        category: 'phones',
        price: 176.84,
        image: 'https://m.media-amazon.com/images/I/81f891yYQhL._AC_UY218_.jpg',
        description: '4G LTE bands 1(2100), 2(1900), 3(1800), 4(1700/2100), 5(850), 7(2600), 28(700), 4G LTE tdd: B41, 3G WCDMA: B1/B2/B4/B5/B8, 2G GSM: B2/B3/B5/B8 - Dual SIM (nano-sim, Dual stand-by) check compatibility with your carrier before purchase. North and south American 4G LTE compatible; 6. 5-Inch borderless full view display 1080 x 2340 pixels, 19. 5: 9 ratio (~397 pip density) - glass body with visual grating effect; 64GB + 4GB RAM - micros, up to 400 GB (dedicated slot) - Kirin 710 powerful chipset - non-removable Li-Po 3750 mash battery - GPU Turbo; Rear (main) Camera: 20MP ai camera, depth sensor - front Camera: 16MP selfie camera - Face unlock; Compatible with GSM carriers like AT&T, T-Mobile, Metrics, Straight Talk, etc. Does not work with Verizon/Sprint/Boost. International model, does not have us.'
    },
    {
        id: 49,
        name: 'Google - Pixel 3 XL with 64GB Memory Cell Phone (Unlocked) - Just Black',
        category: 'phones',
        price: 598.98,
        image: 'https://m.media-amazon.com/images/I/718ynShMnpL._AC_UY218_.jpg',
        description: 'Capture the perfect shot every time, get things done with the Google Assistant,1 enjoy an all-day battery, and more.; Get everyone in the picture with Group Selfies—no selfie stick required. Snap portraits like a pro with Portrait Mode. Capture smiles, not blinks, for a great photo every time.; Pixel 3 comes with a battery that charges fast and wirelessly, and lasts all day. It\'s even smart enough to limit battery usage for the apps you don\'t use often to keep you going longer.; Get help from the Google Assistant: reserve a table at your favorite restaurant, buy tickets, get commute times, weather info, and more—all with a simple squeeze, or just by using your voice.; Screen spam, scams, and other nuisance calls. Get real-time transcription and block unwanted callers so you’ll never hear from them again.; Search what you see with Google Lens6 to look up clothing and home decor, copy and translate text, and identify landmarks, plants, and animals.'
    },
    {
        id: 50,
        name: 'Apple iPhone 6S, GSM Unlocked, 64GB - Space Grey (Renewed)',
        category: 'phones',
        price: 269.26,
        image: 'https://m.media-amazon.com/images/I/81s7ZLOGOWL._AC_UY218_.jpg',
        description: 'Professionally inspected and tested to work and look like new, and backed by the 90-day Amazon Renewed Guarantee. Box and relevant accessories (no headphones included) may be generic.; GSM Unlocked Phones are ONLY compatible with GSM carriers like AT&T and T-Mobile as well as other GSM networks around the world. They WILL NOT WORK with CDMA carriers like Sprint and Verizon (Search for "Fully Unlocked iPhones" for CDMA compatible iPhones).; 4.7-inch Retina HD display.'
    },
    {
        id: 51,
        name: 'Samsung Galaxy S8 G950U 64GB Unlocked GSM U.S. Version Phone - w/ 12MP Camera - Orchid Gray (Renewed)',
        category: 'phones',
        price: 255,
        image: 'https://m.media-amazon.com/images/I/31JmJT2qy6L._AC_UY218_.jpg',
        description: 'Infinity Display: a bezel-less, full-frontal, edge-to-edge screen. Default resolution is Full HD+ and can be changed to Quad HD+ (WQHD+) in Settings; Camera resolution - Front: 8 MP AF, Rear: 12 MP OIS AF; Memory: Internal Memory 64 GB, RAM 4GB'
    },
    {
        id: 52,
        name: 'Samsung Galaxy S8 64GB Phone - 5.8in Unlocked Smartphone - Midnight Black (Renewed)',
        category: 'phones',
        price: 267.95,
        image: 'https://m.media-amazon.com/images/I/71pjGN8WsoL._AC_UY218_.jpg',
        description: 'Factory Unlocked (Unlocked by the Manufacturer) and is fully compatible with every GSM Carrier worldwide (a \'GSM Carrier\' is a carrier that uses a SIM card, such as AT&T, T-Mobile, etc and is NOT COMPATIBLE with CDMA carriers such as Verizon Wireless, Sprint, and US Cellular).; 5.8" Infinity Display: a bezel-less, full-frontal, edge-to-edge screen.; Processor: Octa-core (4x2.35 GHz Kryo & 4x1.9 GHz Kryo) CUP; 64GB Internal Memory, 4GB RAM (no memory card slot to expand memory); This Certified Refurbished product has been tested and certified to work and look like new, with minimal to no signs of wear, by a specialized third-party seller approved by Amazon. The product is backed by a minimum 90-day warranty, and may arrive in a generic brown or white box. Accessories may be generic and not directly from the manufacturer.'
    },
    {
        id: 53,
        name: 'Huawei P30 Lite (128GB, 4GB RAM) 6.15" Display, AI Triple Camera, Dual SIM Global GSM Factory Unlocked MAR-LX3A - International Version, No Warranty (Peacock Blue)',
        category: 'phones',
        price: 270,
        image: 'https://m.media-amazon.com/images/I/61ichz+YnFL._AC_UY218_.jpg',
        description: 'Factory GSM Unlocked. International Version. DUAL SIM. 128 GB, 4 GB RAM; LTE Bands LTE B1/B2/B4/B5/B7/B8/B12/B17/B28/B66; IPS LCD capacitive touchscreen, 16M colors. 6.15 inches, 89.1 cm2. 1080 x 2312 pixels (~415 ppi density); Android 9.0 (Pie). Hisilicon Kirin 710 (12 nm). Octa-core (4x2.2 GHz Cortex-A73 & 4x1.7 GHz Cortex-A53).; International Model, Does not have US Warranty. Will work with Most GSM SIM cards in U.S. and world Including AT&T, T-Mobile, Etc. Will NOT work with CDMA Carriers Such as Verizon, Sprint, Boost.'
    },
    {
        id: 54,
        name: 'Samsung Galaxy S10e 128GB+6GB RAM SM-G970 Dual Sim 5.8" LTE Factory Unlocked Smartphone (International Model) (Prism Black)',
        category: 'phones',
        price: 539.99,
        image: 'https://m.media-amazon.com/images/I/51BateZ5iqL._AC_UY218_.jpg',
        description: 'BODY BUILD: Front/back glass (Gorilla Glass 5), aluminum frame; IP68 dust/water proof (up to 1.5m for 30 mins); DISPLAY SIZE: 5.8 inches, 82.8 cm2 (~83.3% screen-to-body ratio); DISPLAY RESOLUTION: 1080 x 2280 pixels, 19:9 ratio (~438 ppi density); Please note, this product is Factory Unlocked International Model. It comes with no warranty in the USA. This product will work with most GSM carriers around the world, this will NOT work with CDMA carriers like Verizon, Sprint, and Boost in the USA.'
    },
    {
        id: 55,
        name: 'Samsung Galaxy J2 Core 2018 International Version, No Warranty Factory Unlocked 4G LTE (USA Latin Caribbean) Android Oreo SM-J260M Dual Sim 8MP 8GB (Black)',
        category: 'phones',
        price: 88,
        image: 'https://m.media-amazon.com/images/I/51MjRcctKLL._AC_UY218_.jpg',
        description: 'Dual Nano Sim 4G LTE Unlocked Any GSM Carrier GSM (NOT FOR VERIZON SPRINT NET10 OR ANY CDMA CARRIER); Bands: B1(2100), B2(1900), B3(1800), B4(AWS), B5(850), B7(2600), B8(900), B17(700), B28(700) 3G UTMS B1(2100), B2(1900), B4(AWS), B5(850), B8(900); Android 8 Oreo (Go edition) 8mp Flash Rear Camera + 5Mp Front Camera; Quad Core 1. 4GHZ / 8GB (4. 1GB USER) 1GB Ram Support Micro SD Up to 256 gb (not included); 5. 0 inch 540 x 960 (qHD) Factory Unlocked International Version Latin Specs'
    },
    {
        id: 56,
        name: 'Apple iPhone 7, AT&T, 32GB - Black (Renewed)',
        category: 'phones',
        price: 184.99,
        image: 'https://m.media-amazon.com/images/I/81zN9dQ2rxL._AC_UY218_.jpg',
        description: 'This iPhone can only work with AT&T and will not work with other carriers.; 12MP rear camera, optical image stabilization, Quad-LED True Tone flash, and Live Photos LTE Advanced up to 450 Mbps and 802.11a/b/g/n/ac Wi-Fi with MIMO iOS 10 and iCloud.; 7MP FaceTime HD camera with Retina Flash Splash, water, and dust resistant 4K video recording at 30 fps and slo-mo video recording for 1080p at 120 fps.; Apple A10 Fusion chip with embedded M10 motion coprocessor'
    },
    {
        id: 57,
        name: 'Apple iPhone 7 Plus, GSM Unlocked, 32GB - Black (Renewed)',
        category: 'phones',
        price: 362.86,
        image: 'https://m.media-amazon.com/images/I/51UOIhWLEPL._AC_UY218_.jpg',
        description: 'GSM Unlocked Phones are ONLY compatible with GSM carriers like AT&T and T-Mobile as well as other GSM networks around the world. They WILL NOT WORK with CDMA carriers like Sprint and Verizon (Search for "Fully Unlocked iPhones" for CDMA compatible iPhones).; 12-megapixel primary camera on the rear and a 7-megapixel front shooter for selfies.; 7 Megapixel FaceTime Camera with 1080p HD Video Recording, Retina Flash, f/2. 2 aperture.; 5. 5-inch Retina HD LED-backlit Display with IPS Technology, 1920 x 1080 pixel resolution (~401ppi pixel density)'
    },
    {
        id: 58,
        name: 'Xiaomi Redmi Note 7 128GB + 4GB RAM 6.3" FHD+ LTE Factory Unlocked 48MP GSM Smartphone (Global Version, No Warranty) (Neptune Blue)',
        category: 'phones',
        price: 204,
        image: 'https://m.media-amazon.com/images/I/51X1YcLSmXL._AC_UY218_.jpg',
        description: '3G Bands: HSDPA 850 / 900 / 1900 / 2100 - 4G LTE Bands: LTE band 1(2100), 3(1800), 5(850), 7(2600), 8(900), 34(2000), 38(2600), 39(1900), 40(2300), 41(2500) - Hybrid Dual SIM (Nano-SIM, dual stand-by) > (ensure to check compatibility with your carrier before purchase); 6.3" FHD+ Dot Notch Display 1080 x 2340 pixels, 19.5:9 ratio (~409 ppi density) - Corning ️Gorilla ️Glass 5 -Gradient glass back finish - Type-C port; 128GB ROM + 4GB RAM - microSD, up to 256 GB (uses SIM 2 slot) - Qualcomm Snapdragon 660 14nm Octa-core, up to 2.2GHz - Non-removable Li-Po 4000 mAh High-capacity battery; Rear Camera: 48MP + 5MP AI Dual camera - Front: 13 MP, f/2.2, 1.25µm - Video:1080p@30fps; Unlocked cellphones are compatible with most of the GSM carrier ( Like T-Mobile or AT&T ) but please be aware that are not compatible with CDMA carriers ( Like Sprint or Verizon Wireless for example ) - FCC ID: 2AFZZ-RMSF7H'
    },
    {
        id: 59,
        name: 'BLU G9 – 6.3” HD Infinity Display Smartphone, 64GB+4GB RAM -Blue',
        category: 'phones',
        price: 179.99,
        image: 'https://m.media-amazon.com/images/I/A1QTZDMGkqL._AC_UY218_.jpg',
        description: '6. 3” HD+ Infinity Display with Curved Glass; Android 9 Pie; Dual Main Camera: 13MP + 2MP Depth Sensor with Flash and up to 52MP Super Zoom capability, Front Selfie Camera: 13MP; 64GB Internal Memory 4GB RAM and MicroSD up to 128GB, 2. 0GHz Octacore MediaTek Helio P22+ AI Accelerated Exp Processor; 4, 000mAh Super Battery, 5V/2A Quick Charge your device will be ready in less than 2. 5 Hours, and Fingerprint sensor; 4G LTE (1/2/3/4/5/7/8/12/13/17/28) 3G: (850/900/1700/1900/2100): US compatibility Nationwide on all GSM Networks including AT&T, T-Mobile, Cricket, metro PCS, and others. Not compatible with CDMA networks like Verizon, Sprint and Boost mobile)'
    },
    {
        id: 60,
        name: 'Samsung Galaxy S7 G930A 32GB Gold Platinum - Unlocked GSM (Renewed)',
        category: 'phones',
        price: 161,
        image: 'https://m.media-amazon.com/images/I/41mgFtqfj-L._AC_UY218_.jpg',
        description: 'ATT Unlocked Version, works for all GSM networks including ATT, TMobile, Ultra, MetroPCS, Cricket, and more as well as all GSM international carriers. Will not work with CDMA carriers like Verizon, Boost or Sprint. No SIM card included.; 12 Megapixel Camera with f/1.7, 26mm, phase detection autofocus, OIS, LED flash, 1/2.5" sensor size, 1.4 m pixel size, geo-tagging, simultaneous 4K video and 9MP image recording, touch focus, face/smile detection, Auto HDR, panorama + 5 Megapixel Front Camera with 1/4.1" sensor size, 1.34 m pixel size, f/1.7, 22mm, dual video call, Auto HDR; Video Capture: 2160p @ 30fps, 1080p @ 60fps, 720p @ 240fps, HDR, dual-video rec.; 5.1-inch QHD sAMOLED, 1440 x 2560 pixel resolution (~577ppi pixel density) + Corning Gorilla Glass 4 w/ Always-on Dispay; Internal Memory: 32GB, 4GB RAM - microSD Up to 256GB'
    },
    {
        id: 61,
        name: 'Google Pixel 2 64 GB, Black Factory Unlocked (Renewed)',
        category: 'phones',
        price: 218,
        image: 'https://m.media-amazon.com/images/I/7108ZFza5gL._AC_UY218_.jpg',
        description: 'The latest Qualcomm Snapdragon 835 processor; Up to 7 hours of battery on 15 minutes of charging; Water resistant metal unibody; A smart camera with dual pixel autofocus 12.2 MP rear 8 MP front cameras; 5.0 inch AMOLED screen (16:9) FHD 1920 x 1080'
    },
    {
        id: 62,
        name: 'Xiaomi Mi 9T (128GB, 6GB RAM) 6.39" AMOLED FHD + Full Screen Display, 48MP Triple Camera, Global 4G LTE Dual SIM GSM Factory Unlocked (Carbon Black)',
        category: 'phones',
        price: 331,
        image: 'https://m.media-amazon.com/images/I/51H0DAakl9L._AC_UY218_.jpg',
        description: 'GSM: B2/B3/B5/B8 - LTE FDD: B1/B2/B3/B4/B5/B7/B8/B20/B28 LTE FDD: B1/B2/B3/B4/B5/B7/B8/B20/B28 - Dual SIM (Nano-SIM, dual stand-by) > (ensure to check compatibility with your carrier before purchase); 6.39" AMOLED FHD + Full Screen Display, 2340 x 1080 FHD+ 403 PPI, Corning Gorilla Glass 5 - Supports GAME Turbo 2.0; 128GB + 6GB RAM - Qualcomm Snapdragon 730 processor Up to 2.2GHz - Non-removable Li-Po 4000 mAh battery - Supports 2.4G Wi-Fi / 5G Wi-Fi - Supports dual SIM VoLTE HD calling; Rear Camera:48MP ultra high-resolution wide camera + 8MP telephoto camera + 13MP, ultra 124.8° wide-angle camera - Front Camera: 20MP Pop-up selfie camera - Video:4K recording, 960 fps slow motion video; Unlocked cellphones are compatible with most of the GSM carriers ( Like T-Mobile or AT&T ) but please be aware that are not compatible with CDMA carriers ( Like Sprint or Verizon Wireless for example ) - FCC ID:2AFZZ-XMSF10G'
    },
    {
        id: 63,
        name: 'BLU VIVO XI+ - 6.2" Full HD+ Smartphone GSM Unlocked and Verizon Compatible, 128GB+6GB RAM, AI Dual Cameras -Silver',
        category: 'phones',
        price: 199.99,
        image: 'https://m.media-amazon.com/images/I/714sV6yv3KL._AC_UY218_.jpg',
        description: '6.2” Full HD+ All Screen Design with Gorilla Glass 3 Curved Glass Display; Android 8. 1 Oreo upgradable to Android 9. 0 Pie; Dual A.I Camera’s: 16 MP + 5MP with flash, and Front Camera: 16MP Super Selfie; 128GB Internal Memory 6GB RAM Micro SD up to 128GB; 2. 0GHz Octa core MediaTek Helio P60 with A. I. Technology Processor; Unlocked for the freedom to choose your carrier. Compatible with AT&T, T-Mobile, and Verizon networks. SIM card not included. Customers may need to contact Verizon for activation on Verizon’s network; Single SIM; 4G LTE (1/2/3/4/5/7/8/12/13/17/28/66) 3G: (850/900/1700/1900/2100): US compatibility Nationwide on the following networks including Verizon Wireless, AT&T, T-Mobile, Cricket, Metro PCS, Straight Talk, Tracfone, and all GSM Networks. Does not work with Sprint or Boost mobile'
    }
];


function getProducts(category = null) {
    if (category) {
        return products.filter((product) => product.category === category);
    }
    return products;
}

function findProduct(id) {
    return products.find((product) => product.id === id);
}

export {getProducts, findProduct};

/**
 * menu-data.js
 * ملف الإعدادات والبيانات العام للمطعم
 * القائمة الرسمية: "تيليانو | TELLIANO" - المطبخ الإيطالي الأصيل
 */

const restaurantData = {
    // 1. هوية البراند والبيانات العامة
    brand: {
        name: {
            ar: "تيليانو",
            en: "TELLIANO"
        },
        nameFull: {
            ar: "تيليانو | TELLIANO",
            en: "TELLIANO | Authentic Italian"
        },
        tagline: {
            ar: "المطبخ الإيطالي الأصيل - بينسا، باستا، وريزوتو فاخر",
            en: "Authentic Italian Cuisine - Artisan Pinsa, Pasta & Risotto"
        },
        logo: "asset/telliano.webp", // مسار شعار تيليانو
        favicon: "asset/telliano.webp",
        address: {
            ar: "الرياض، المملكة العربية السعودية",
            en: "Riyadh, Saudi Arabia"
        },
        socialLinks: {
            tiktok: "https://www.tiktok.com/@tellianosa",
            instagram: "https://www.instagram.com/tellianosa/",
            maps: "https://maps.app.goo.gl/89MGzvNqrn7bJKV5A",
            phone: "",
            whatsapp: ""
        },
        footerCopyright: {
            ar: "Telliano. جميع الحقوق محفوظة.",
            en: "Telliano. All Rights Reserved."
        }
    },

    // 2. قواميس نصوص الواجهة (UI Dictionary)
    ui: {
        ar: {
            dir: "rtl",
            langSwitchLabel: "English",
            langSwitchShort: "EN",
            currency: "ر.س",
            caloriesLabel: "سعرة",
            zoomHint: "انقر للتكبير",
            ingredientsTitle: "المكونات الأساسية",
            noResults: "لا توجد وجبات تطابق الفلاتر المحددة.",
            closeModal: "إغلاق"
        },
        en: {
            dir: "ltr",
            langSwitchLabel: "العربية",
            langSwitchShort: "عربي",
            currency: "SAR",
            caloriesLabel: "Cal",
            zoomHint: "Click to zoom",
            ingredientsTitle: "Key Ingredients & Details",
            noResults: "No items match your selected filters.",
            closeModal: "Close"
        }
    },

    // 3. إعدادات الثيم والألوان (هوية تيليانو: الأخضر الغابي الإيطالي مع البرتقالي الدافئ لحرف O)
    theme: {
        primaryColor: "#0F4625",        // الأخضر الغابي الإيطالي الأصلي لشعار تيليانو (Telliano Green)
        accentColor: "#E8501E",         // البرتقالي الدافئ المميز المستوحى من حرف O في الشعار (Telliano Orange)
        primaryContainer: "#E5F0E8",    // خلفية خضراء ناعمة للأزرار والشارات
        accentContainer: "#FDF0EB",     // خلفية برتقالية دافئة للأسعار والتمييز
        onPrimary: "#F6F3EB",           // أبيض عاجي ناعم مع لمسة دافئة متناسقة مع خط الشعار
        backgroundColor: "#FAF7F2",     // عاجي دافئ وراقي مريح للعين
        surfaceColor: "#F3EDE4",        // لون البطاقات الدافئ
        textMain: "#1A241E",            // أسود فحمي مع لمسة عميقة
        textMuted: "#5F6B63",           // رمادي غابي دافئ للنصوص الثانوية
        borderColor: "#DFD8CD"          // حدود متناسقة وناعمة
    },

    // 4. إعدادات الفلترة ومسببات الحساسية
    config: {
        allergenMap: {
            "nuts": ["مكسرات", "صنوبر", "بندق", "جوز", "فستق", "nuts", "hazelnuts", "hazelnut", "pine nuts", "pistachio"],
            "dairy": ["حليب", "أجبان", "مشتقات الحليب", "جبنة", "بارميزان", "موزاريلا", "بوراتا", "ريكوتا", "ماسكاربوني", "كريمة", "dairy", "milk", "cheese", "parmesan", "mozzarella", "burrata", "ricotta", "mascarpone", "cream"],
            "gluten": ["جلوتين", "قمح", "طحين", "عجينة", "ساوردو", "باستا", "معكرونة", "gluten", "wheat", "dough", "sourdough", "pasta"],
            "egg": ["بيض", "egg", "eggs"],
            "seafood": ["سمك", "بحري", "سيباس", "برانزينو", "seafood", "fish", "seabass", "branzino"],
            "soy": ["صويا", "soy", "soya"],
            "mustard": ["خردل", "مسطردة", "mustard"],
            "celery": ["كرفس", "celery"],
            "sulphites": ["كبريتيت", "sulphites", "sulfites", "sulphite"]
        }
    },

    // 5. أزرار الفلاتر العلوية
    filters: [
        { id: "all", name: { ar: "جميع الأصناف", en: "All Items" } },
        { id: "dairy", name: { ar: "خالٍ من الألبان", en: "Dairy-Free" } },
        { id: "gluten", name: { ar: "خالٍ من الجلوتين", en: "Gluten-Free" } },
        { id: "egg", name: { ar: "خالٍ من البيض", en: "Egg-Free" } },
        { id: "nuts", name: { ar: "خالٍ من المكسرات", en: "Nut-Free" } },
        { id: "seafood", name: { ar: "خالٍ من البحريات", en: "Seafood-Free" } }
    ],

    // 6. الأقسام (Categories)
    categories: [
        { id: "soups", name: { ar: "الشوربة", en: "Soup" } },
        { id: "salads", name: { ar: "السلطات", en: "Salad" } },
        { id: "appetizers", name: { ar: "المقبلات", en: "Antipasti" } },
        { id: "pasta", name: { ar: "الباستا", en: "Pasta" } },
        { id: "risotto", name: { ar: "ريزوتو", en: "Risotto" } },
        { id: "pinsa", name: { ar: "بينسا رومانية بعجينة الساوردو", en: "Roman Sourdough Pinsa" } },
        { id: "main-dishes", name: { ar: "الاطباق الرئيسيه", en: "Main Course" } },
        { id: "desserts", name: { ar: "الحلويات", en: "Dessert" } },
        { id: "beverages", name: { ar: "المشروبات", en: "Beverages" } }
    ],

    // 7. قائمة الأصناف (Items)
    items: [
        // ==========================================
        // 1. الشوربة / SOUP
        // ==========================================
        {
            id: 1,
            categoryId: "soups",
            title: {
                ar: "مينستروني بالخضار",
                en: "Minestrone di Verdure"
            },
            price: "32",
            calories: "320",
            allergens: {
                ar: "كرفس",
                en: "Celery"
            },
            ingredients: {
                ar: "شوربة إيطالية تقليدية غنية بالخضروات الطازجة الموسمية.",
                en: "Italian authentic traditional soup with seasonal vegetables."
            },
            shortDesc: {
                ar: "شوربة ايطالية تقليدية غنية بالخضروات الطازجة.",
                en: "Italian authentic traditional soup with seasonal vegetables."
            },
            image: "asset/minestrone-di-verdure.webp"
        },

        // ==========================================
        // 2. السلطات / SALAD
        // ==========================================
        {
            id: 2,
            categoryId: "salads",
            title: {
                ar: "سلطة خضراء",
                en: "Insalata Verde"
            },
            price: "32",
            calories: "345",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "طبقة غنية من الخضار الطازجة مع الطماطم الكرزية، جبنة بارميزان، وصلصة الليمون والسيترونيت وزيت الزيتون. (إضافات: الطماطم المجففة +8 ر.س)",
                en: "A vibrant bed of crisp greens, cherry tomatoes, parmesan, and Citronette sauce. (Add-ons: Sun-dried tomatoes +8 SAR)"
            },
            shortDesc: {
                ar: "طبقة غنية من الخضار الطازجة مع الطماطم الكرزية، وصلصة الليمون و زيت الزيتون. (إضافات: الطماطم المجففة +8)",
                en: "A vibrant bed of crisp greens, cherry tomatoes, parmesan, and Citronette sauce. (Add-ons: Sun-dried tomatoes +8)"
            },
            image: "asset/insalata-verde.webp"
        },
        {
            id: 3,
            categoryId: "salads",
            title: {
                ar: "سلطة تيليانو",
                en: "Insalata Telliano"
            },
            price: "45",
            calories: "602",
            allergens: {
                ar: "حليب, بيض, خردل",
                en: "Milk, Egg, Mustard"
            },
            ingredients: {
                ar: "طبقة غنية من الخضار الطازجة مع الشمندر الحلو، الدجاج المشوي، البصل المقلي، جبن البارميزان، وصوص تيليانو. (إضافات: الدجاج +10 ر.س، الطماطم المجففة +8 ر.س)",
                en: "A vibrant bed of crisp greens, sweet beetroot, grilled chicken, fried onions, parmesan, and Telliano sauce. (Add-ons: Grilled chicken +10 SAR, Sun-dried tomatoes +8 SAR)"
            },
            shortDesc: {
                ar: "طبقة غنية من الخضار الطازجة مع الشمندر، الدجاج المشوي، البصل المقلي، جبن البارميزان، وصوص تيليانو.",
                en: "A vibrant bed of crisp greens, sweet beetroot, grilled chicken, fried onions, parmesan, and Telliano sauce."
            },
            image: "asset/insalata-telliano.webp"
        },
        {
            id: 4,
            categoryId: "salads",
            title: {
                ar: "سلطة الخرشوف",
                en: "Insalata di Carciofi"
            },
            price: "49",
            calories: "730",
            allergens: {
                ar: "حليب, خردل, كبريتيت",
                en: "Milk, Mustard, Sulphite"
            },
            ingredients: {
                ar: "خليط طازج من الخضار الورقية، وخرشوف روما والطماطم المجفّفة وجبن البارميزان مع لمسة من صوص المسطردة والبلسميك. (إضافات: الطماطم المجففة +8 ر.س)",
                en: "A fresh mix of leafy greens, Roman artichokes, sun-dried tomatoes, parmesan, and mustard-balsamic drizzle. (Add-ons: Sun-dried tomatoes +8 SAR)"
            },
            shortDesc: {
                ar: "خليط طازج من الخضار الورقية، وخرشوف روما والطماطم المجفّفة وجبن البارميزان مع لمسة من صوص المسطردة والبلسميك.",
                en: "A fresh mix of leafy greens, Roman artichokes, sun-dried tomatoes, parmesan, and mustard-balsamic drizzle."
            },
            image: "asset/insalata-di-carciofi.webp"
        },

        // ==========================================
        // 3. المقبلات / ANTIPASTI
        // ==========================================
        {
            id: 5,
            categoryId: "appetizers",
            title: {
                ar: "بروسكتا بومودورو",
                en: "Bruschetta al Pomodoro"
            },
            price: "39",
            calories: "360",
            allergens: {
                ar: "جلوتين, قمح",
                en: "Gluten, Wheat"
            },
            ingredients: {
                ar: "خبز إيطالي محمّص مغطّى بالطماطم الطازجة، والأوريجانو ولمسة من زيت الزيتون.",
                en: "Toasted bread crowned with juicy tomatoes, oregano, and a drizzle of olive oil."
            },
            shortDesc: {
                ar: "خبز محمّص مغطّى بالطماطم الطازجة، والأوريجانو ولمسة من زيت الزيتون.",
                en: "Toasted bread crowned with juicy tomatoes, oregano, and a drizzle of olive oil."
            },
            image: "asset/bruschhetta-al-pomodoro.webp"
        },
        {
            id: 6,
            categoryId: "appetizers",
            title: {
                ar: "بريزاولا و بارميزان",
                en: "Bresaola e Parmigiano"
            },
            price: "74",
            calories: "484",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "شرائح رقيقة من بريزاولا وجبن البارميزان على طبقة من الجرجير مع صوص الليمون المنعش والسيترونيت.",
                en: "Paper-thin bresaola and parmesan on peppery arugula with a zesty citronette."
            },
            shortDesc: {
                ar: "شرائح رقيقة من بريزاولا وجبن البارميزان على طبقة من الجرجير مع صوص الليمون المنعش.",
                en: "Paper-thin bresaola and parmesan on peppery arugula with a zesty citronette."
            },
            image: "asset/bresaola-e-parmigiano.webp"
        },
        {
            id: 7,
            categoryId: "appetizers",
            title: {
                ar: "باذنجان بارميجيانا",
                en: "Melanzane alla Parmigiana"
            },
            price: "54",
            calories: "720",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "باذنجان بالفرن بطبقات من صلصة الطماطم والريحان، مغطّى بجبن البارميزان والموزاريلا الذائبة.",
                en: "Oven cooked eggplant layered with tomato sauce, basil, parmesan, and melted mozzarella."
            },
            shortDesc: {
                ar: "باذنجان بالفرن بطبقات من صلصة الطماطم والريحان، مغطّى بجبن البارميزان والموزاريلا الذائبة.",
                en: "Oven cooked eggplant layered with tomato sauce, basil, parmesan, and melted mozzarella."
            },
            image: "asset/melanzane-alla-parmigiana.webp"
        },
        {
            id: 8,
            categoryId: "appetizers",
            title: {
                ar: "سلطة البوراتا",
                en: "Burrata con Pomodorini"
            },
            price: "59",
            calories: "409",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "جبنة بوراتا كريمية مع الطماطم الكرزية الحلوة والأوريجانو ولمسة زيت زيتون.",
                en: "Creamy burrata layered with sweet cherry tomatoes, oregano, and a touch of olive oil."
            },
            shortDesc: {
                ar: "جبنة بوراتا كريمية مع الطماطم الكرزية الحلوة والأوريجانو ولمسة زيت زيتون.",
                en: "Creamy burrata layered with sweet cherry tomatoes, oregano, and a touch of olive oil."
            },
            image: "asset/burrata-con-pomodorini.webp"
        },
        {
            id: 9,
            categoryId: "appetizers",
            title: {
                ar: "بطاطس مقلي",
                en: "Patatine Fritte"
            },
            price: "18",
            calories: "320",
            allergens: {
                ar: "",
                en: ""
            },
            ingredients: {
                ar: "بطاطس مقلي ذهبي ومقرمش.",
                en: "French Fries."
            },
            shortDesc: {
                ar: "بطاطس مقلي.",
                en: "French Fries."
            },
            image: "asset/patatine-fritte.webp"
        },

        // ==========================================
        // 4. الباستا / PASTA
        // ==========================================
        {
            id: 10,
            categoryId: "pasta",
            title: {
                ar: "بيني الفريدو",
                en: "Penne Alfredo"
            },
            price: "56",
            calories: "370",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "باستا بيني كريمية بصلصة ألفريدو الغنية ذات القوام الناعم اللذيذ.",
                en: "Creamy penne pasta tossed in a rich Alfredo sauce, finished to a smooth and indulgent texture."
            },
            shortDesc: {
                ar: "باستا بيني كريمية بصلصة ألفريدو الغنية.",
                en: "Creamy penne pasta tossed in a rich Alfredo sauce, finished to a smooth and indulgent texture."
            },
            image: "asset/penne-alfredo.webp"
        },
        {
            id: 11,
            categoryId: "pasta",
            title: {
                ar: "بيني أرابياتا",
                en: "Penne all' Arrabbiata"
            },
            price: "49",
            calories: "346",
            allergens: {
                ar: "جلوتين, قمح",
                en: "Gluten, Wheat"
            },
            ingredients: {
                ar: "معكرونة بيني مطهيّة بجودة مثاليّة مع صوص الطماطم الحار بالفلفل.",
                en: "Al dente penne cloaked in a spicy tomato chili sauce."
            },
            shortDesc: {
                ar: "معكرونة بيني مطهيّة بجودة مثاليّة مع صوص الطماطم الحار.",
                en: "Al dente penne cloaked in a spicy tomato chili sauce."
            },
            image: "asset/penne-all_-arrabiata.webp"
        },
        {
            id: 12,
            categoryId: "pasta",
            title: {
                ar: "بيني بمودورو",
                en: "Penne al Pomodoro"
            },
            price: "49",
            calories: "349",
            allergens: {
                ar: "جلوتين, قمح",
                en: "Gluten, Wheat"
            },
            ingredients: {
                ar: "معكرونة بيني مطهيّة بجودة مثاليّة مع صوص الطماطم الكلاسيكي الغني.",
                en: "Perfectly cooked penne in a classic, rich tomato sauce."
            },
            shortDesc: {
                ar: "معكرونة بيني مطهيّة بجودة مثاليّة مع صوص الطماطم الكلاسيكي.",
                en: "Perfectly cooked penne in a classic, rich tomato sauce."
            },
            image: "asset/penne-al-pomodoro.webp"
        },
        {
            id: 13,
            categoryId: "pasta",
            title: {
                ar: "فوسيلي بالكريمة",
                en: "Fusilli Aurora"
            },
            price: "54",
            calories: "421",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "معكرونة فوسيلي حلزونية ممزوجة بصلصة وردية كريمية. (إضافات: الدجاج +10 ر.س)",
                en: "Spirals of fusilli tossed in a velvety pink sauce. (Add-ons: Grilled chicken +10 SAR)"
            },
            shortDesc: {
                ar: "معكرونة فوسيلي حلزونية ممزوجة بصلصة وردية كريمية.",
                en: "Spirals of fusilli tossed in a velvety pink sauce."
            },
            image: "asset/fusilli-aurora.webp"
        },
        {
            id: 14,
            categoryId: "pasta",
            title: {
                ar: "ريغاتوني بولونيز",
                en: "Rigatoni alla Bolognese"
            },
            price: "59",
            calories: "373",
            allergens: {
                ar: "جلوتين, قمح, كرفس",
                en: "Gluten, Wheat, Celery"
            },
            ingredients: {
                ar: "معكرونة ريجاتوني غنية بصلصة راجو اللحم البقري المطهو ببطء.",
                en: "Hearty rigatoni smothered in slow-cooked beef ragù."
            },
            shortDesc: {
                ar: "معكرونة ريغاتوني غنية بصلصة راجو اللحم البقري المطهو ببطء.",
                en: "Hearty rigatoni smothered in slow-cooked beef ragù."
            },
            image: "asset/rigatoni-alla-bolognese.webp"
        },
        {
            id: 15,
            categoryId: "pasta",
            title: {
                ar: "فارفالي الفريدو الدجاج",
                en: "Farfalle al Funghi e Pollo"
            },
            price: "59",
            calories: "827",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "معكرونة الفراشة في صلصة كريمية غنية مع الدجاج والفطر. (إضافات: الدجاج +10 ر.س، سوتيه الفطر +8 ر.س)",
                en: "Bow-tie pasta in a creamy sauce with chicken and mushrooms. (Add-ons: Grilled chicken +10 SAR, Roasted mushrooms +8 SAR)"
            },
            shortDesc: {
                ar: "معكرونة الفراشة في صلصة كريمية غنية مع الدجاج والفطر.",
                en: "Bow-tie pasta in a creamy sauce with chicken and mushrooms."
            },
            image: "asset/farfalle-ai-funghi-e-pollo.webp"
        },
        {
            id: 16,
            categoryId: "pasta",
            title: {
                ar: "لازانيا بولونيز",
                en: "Lasagna alla Bolognese"
            },
            price: "59",
            calories: "536",
            allergens: {
                ar: "جلوتين, قمح, حليب, كرفس",
                en: "Gluten, Wheat, Milk, Celery"
            },
            ingredients: {
                ar: "طبقات من باستا اللازانيا و صلصة راجو اللحم البقري المطهو ببطء وصلصة البشاميل الكريمية مع جبنة البارميزان محمرة في الفرن.",
                en: "Oven Baked layers of pasta, slow-simmered beef ragù, creamy béchamel sauce, and Parmesan Cheese."
            },
            shortDesc: {
                ar: "طبقات من باستا اللازانيا و صلصة راجو اللحم البقري المطهو ببطء وصلصة البشاميل الكريمية مع جبنة البارميزان محمرة في الفرن.",
                en: "Oven Baked layers of pasta, slow-simmered beef ragù, creamy béchamel sauce, and Parmesan Cheese."
            },
            image: "asset/lasagna-alla-bolognese.webp"
        },
        {
            id: 17,
            categoryId: "pasta",
            title: {
                ar: "ريغاتوني بومودورو والبوراتا",
                en: "Rigatoni Pomodoro con Burrata"
            },
            price: "64",
            calories: "550",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "معكرونة ريجاتوني غنية بصلصة الطماطم و معها جبنة البوراتا الطازجة الذائبة. (إضافات: الفريش بوراتا +20 ر.س)",
                en: "Hearty rigatoni smothered in slow-cooked pomodoro sauce topped with melting fresh Burrata. (Add-ons: Fresh Burrata +20 SAR)"
            },
            shortDesc: {
                ar: "معكرونة ريجاتوني غنية بصلصة الطماطم و معها جبنة البوراتا الطازجة الذائبة.",
                en: "Hearty rigatoni smothered in slow-cooked pomodoro sauce topped with melting fresh Burrata."
            },
            image: "asset/rigatoni-con-burrata.webp"
        },
        {
            id: 18,
            categoryId: "pasta",
            title: {
                ar: "باستا الفوزيلي بالبيستو والكريمة",
                en: "Fusilli al Pesto Cremoso"
            },
            price: "59",
            calories: "480",
            allergens: {
                ar: "جلوتين, قمح, حليب, مكسرات",
                en: "Gluten, Wheat, Milk, Nuts"
            },
            ingredients: {
                ar: "باستا فوزيلي الحلزونية بصلصة البيستو وجبن البارميزان والكريمة لمذاق ناعم وغني.",
                en: "Spiral Fusilli pasta tossed in pesto sauce and parmesan cheese, finished with a touch of cream for a smooth and rich flavor."
            },
            shortDesc: {
                ar: "باستا فوزيلي الحلزونية بصلصة البيستو وجبن البارميزان والكريمة.",
                en: "Spiral Fusilli pasta tossed in pesto sauce and parmesan cheese, finished with a touch of cream for a smooth and rich flavor."
            },
            image: "asset/fusilli-al-pesto-cremoso.webp"
        },
        {
            id: 19,
            categoryId: "pasta",
            title: {
                ar: "رافيولي بالريكوتا والبيستو بصلصة الطماطم",
                en: "Ravioli al Pesto e Pomodoro"
            },
            price: "64",
            calories: "600",
            allergens: {
                ar: "جلوتين, قمح, حليب, بيض, مكسرات",
                en: "Gluten, Wheat, Milk, Egg, Nuts"
            },
            ingredients: {
                ar: "رافيولي محشي بجبنة الريكوتا والبيستو يُقدَّم مع صلصة الطماطم الكلاسيكية.",
                en: "Homemade Ricotta & Pesto-filled ravioli served with classic pomodoro sauce."
            },
            shortDesc: {
                ar: "رافيولي محشي بجبنة الريكوتا والبيستو يُقدَّم مع اختيارك من صلصة الطماطم الكلاسيكية.",
                en: "Homemade Ricotta & Pesto-filled ravioli served with classic pomodoro sauce."
            },
            image: "asset/ravioli-al-pesto-e-pomodoro.webp"
        },
        {
            id: 20,
            categoryId: "pasta",
            title: {
                ar: "رافيولي بالريكوتا والبيستو بصلصة أورورا الكريمية",
                en: "Ravioli alla Ricotta e Pesto con Salsa Aurora"
            },
            price: "64",
            calories: "490",
            allergens: {
                ar: "جلوتين, قمح, حليب, بيض, مكسرات",
                en: "Gluten, Wheat, Milk, Egg, Nuts"
            },
            ingredients: {
                ar: "رافيولي محشي بجبنة الريكوتا والبيستو يُقدَّم مع صلصة أورورا الكريمية الوردية.",
                en: "Homemade Ricotta & Pesto-filled ravioli served with creamy Aurora sauce."
            },
            shortDesc: {
                ar: "رافيولي محشي بجبنة الريكوتا والبيستو يُقدَّم مع صلصة أورورا الكريمية.",
                en: "Homemade Ricotta & Pesto-filled ravioli served with creamy Aurora sauce."
            },
            image: "asset/ravioli-alla-ricotta-e-pesto-con-salsa-aurora.webp"
        },
        {
            id: 21,
            categoryId: "pasta",
            title: {
                ar: "رافيولي ريكوتا وبيستو بصلصة البارميزان الكريمية",
                en: "Ravioli di Ricotta e Pesto in Crema di Parmigiano"
            },
            price: "69",
            calories: "590",
            allergens: {
                ar: "جلوتين, قمح, حليب, بيض, مكسرات",
                en: "Gluten, Wheat, Milk, Egg, Nuts"
            },
            ingredients: {
                ar: "رافيولي محشوة بجبنة الريكوتا الطازجة والبيستو العطري، تُقدّم في صلصة كريمية غنية بجبنة البارميزان، بطعم متوازن وقوام ناعم يذوب في الفم.",
                en: "Delicate ravioli filled with fresh ricotta and aromatic pesto, served in a rich, creamy Parmesan sauce with a smooth, velvety finish."
            },
            shortDesc: {
                ar: "رافيولي محشوة بجبنة الريكوتا الطازجة والبيستو العطري، تُقدّم في صلصة كريمية غنية بجبنة البارميزان، بطعم متوازن وقوام ناعم يذوب في الفم.",
                en: "Delicate ravioli filled with fresh ricotta and aromatic pesto, served in a rich, creamy Parmesan sauce with a smooth, velvety finish."
            },
            image: "asset/ravioli-di-ricotta-e-pesto-in-crema-di-parmigiano.webp"
        },

        // ==========================================
        // 5. ريزوتو / Risotto
        // ==========================================
        {
            id: 22,
            categoryId: "risotto",
            title: {
                ar: "ريزوتو مع الفطر والبورشيني",
                en: "Risotto ai Funghi con Porcini"
            },
            price: "59",
            calories: "580",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "ريزوتو ايطالي كريمي مطهو ببطء مع فطر البورشيني و مزيج من انواع الفطر الأخرى والزبدة وجبن البارميزان لنكهة غنية ترابية.",
                en: "Creamy Italian risotto slowly cooked with porcini mushrooms and other mushrooms, finished with butter and Parmesan for a rich, earthy flavor."
            },
            shortDesc: {
                ar: "ريزوتو ايطالي كريمي مع فطر البورشيني و مزيج من انواع الفطر الأخرى وجبن البارميزان.",
                en: "Creamy Italian risotto slowly cooked with porcini mushrooms and other mushrooms, finished with butter and Parmesan for a rich, earthy flavor."
            },
            image: "asset/risotto-ai-funghi-con-porcini.webp"
        },
        {
            id: 23,
            categoryId: "risotto",
            title: {
                ar: "ريزوتو ميلانيز",
                en: "Risotto alla Milanese"
            },
            price: "54",
            calories: "480",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "ريزوتو ايطالي كريمي مطهو ببطء مع الزعفران والزبدة وجبن البارميزان لنكهة عطرية غنية على الطريقة الميلانية الأصيلة.",
                en: "Creamy Italian risotto slowly cooked with saffron, butter and Parmesan cheese, delivering a rich, aromatic flavor in true Milanese style."
            },
            shortDesc: {
                ar: "ريزوتو ايطالي كريمي مع الزعفران والزبدة وجبن البارميزان.",
                en: "Creamy Italian risotto slowly cooked with saffron, butter and Parmesan cheese, delivering a rich, aromatic flavor in true Milanese style."
            },
            image: "asset/risotto-alla-milanese.webp"
        },
        {
            id: 24,
            categoryId: "risotto",
            title: {
                ar: "ريزوتو بالبارميزان",
                en: "Risotto alla Parmigiana"
            },
            price: "54",
            calories: "480",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "ريزوتو ايطالي كلاسيكي مطهو ببطء مع جبنة البارميزان والزبدة، مما يمنحه قواماً ناعماً كريمياً ونكهة لذيذة وعميقة.",
                en: "Classic Italian risotto slowly cooked wth rich Parmesan cheese and butter, creating a smooth creamy texture and deep, savory flavor."
            },
            shortDesc: {
                ar: "ريزوتو ايطالي كريمي والزبدة وجبن البارميزان.",
                en: "Classic Italian risotto slowly cooked wth rich Parmesan cheese and butter, creating a smooth creamy texture and deep, savory flavor."
            },
            image: "asset/risotto-alla-parmigiana.webp"
        },

        // ==========================================
        // 6. بينسا رومانية / Roman Sourdough Pinsa
        // ==========================================
        {
            id: 25,
            categoryId: "pinsa",
            title: {
                ar: "بينسا الفطر إي بولو",
                en: "Pinsa Funghi e Pollo"
            },
            price: "49",
            calories: "1122",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة كريمة، جبنة موزاريلا وبارميزان، مغطاة بالدجاج والفطر. (إضافات: الدجاج +10 ر.س، سوتيه الفطر +8 ر.س، جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsa dough lavished with creamy sauce, mozzarella, parmesan, chicken, and mushrooms. (Add-ons: Grilled chicken +10 SAR, Roasted mushrooms +8 SAR, Mozzarella cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا الرومانية هشة و مقرمشة مع صلصة كريمة، جبنة موزاريلا وبارميزان، مغطاة بالدجاج والفطر.",
                en: "Light airy, crisp Roman-style pinsa dough lavished with creamy sauce, mozzarella, parmesan, chicken, and mushrooms."
            },
            image: "asset/pinsa-funghi-e-pollo.webp"
        },
        {
            id: 26,
            categoryId: "pinsa",
            title: {
                ar: "بينسا مارغريتا",
                en: "Pinsa Margherita"
            },
            price: "45",
            calories: "985",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة طماطم، جبنة موزاريلا ذائبة و ريحان طازج. (إضافات: سوتيه الفطر +8 ر.س، جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsa dough topped with tomato sauce, melted mozzarella, and fresh basil. (Add-ons: Roasted mushrooms +8 SAR, Mozzarella cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا الرومانية هشة و مقرمشة مع صلصة طماطم، جبنة موزاريلا و ريحان طازج.",
                en: "Light airy, crisp Roman-style pinsa dough topped with tomato sauce, melted mozzarella, and fresh basil."
            },
            image: "asset/pinsa-margherita.webp"
        },
        {
            id: 27,
            categoryId: "pinsa",
            title: {
                ar: "بينسا بيبروني بيكانتي",
                en: "Pinsa Pepperoni Piccante"
            },
            price: "49",
            calories: "1099",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة طماطم، بيبروني حار، جبنة موزاريلا وريحان طازج. (إضافات: بيبيروني +10 ر.س، سوتيه الفطر +8 ر.س، جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsa dough layered with spicy pepperoni, tomato sauce, mozzarella, and basil. (Add-ons: Pepperoni +10 SAR, Roasted mushrooms +8 SAR, Mozzarella cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا الرومانية هشة و مقرمشة مع صلصة طماطم، بيبروني، جبنة موزاريلا وريحان طازج.",
                en: "Light airy, crisp Roman-style pinsa dough layered with spicy pepperoni, tomato sauce, mozzarella, and basil."
            },
            image: "asset/pinsa-pepperoni-piccante.webp"
        },
        {
            id: 28,
            categoryId: "pinsa",
            title: {
                ar: "بينسا بوراتا",
                en: "Pinsa Burrata"
            },
            price: "59",
            calories: "1320",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة طماطم، جبنة موزاريلا وبوراتا، مغطاة بالريحان الطازج. (إضافات: الفريش بوراتا بالفرن +20 ر.س، جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsa dough spread with tomato sauce, mozzarella, burrata, and fresh basil. (Add-ons: Baked Fresh Burrata +20 SAR, Mozzarella cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا الرومانية هشة و مقرمشة مع صلصة طماطم، جبنة موزاريلا وبوراتا، مغطاة بالريحان الطازج.",
                en: "Light airy, crisp Roman-style pinsa dough spread with tomato sauce, mozzarella, burrata, and fresh basil."
            },
            image: "asset/pinsa-con-burrata.webp"
        },
        {
            id: 29,
            categoryId: "pinsa",
            title: {
                ar: "بينسا بالخضار",
                en: "Pinsa Vegetariana"
            },
            price: "49",
            calories: "1230",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة الطماطم، خضار مشوي وجبنة الموزاريلا. (إضافات: جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsa dough with tomato sauce topped with grilled vegetables and mozzarella. (Add-ons: Mozzarella cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا الرومانية هشة و مقرمشة مع صلصة الطماطم، خضار مشوي وجبنة الموزاريلا.",
                en: "Light airy, crisp Roman-style pinsa dough with tomato sauce topped with grilled vegetables and mozzarella."
            },
            image: "asset/pinsa-vegetariana.webp"
        },
        {
            id: 30,
            categoryId: "pinsa",
            title: {
                ar: "بينسا البوراتا الطازجة والجرجير",
                en: "Pinsa Burrata Fresca e Rucola"
            },
            price: "64",
            calories: "1080",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة طماطم، جبنة الموزاريلا، أوراق الجرجير، جبنة البوراتا الطازجة. (إضافات: البوراتا الطازجة +20 ر.س، جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsa dough topped with tomato sauce, melted mozzarella, topped with Fresh Burrata and wild arugula. (Add-ons: Fresh Burrata +20 SAR, Mozzarella Cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا الرومانية هشة و مقرمشة مع صلصة طماطم، جبنة الموزاريلا، أوراق الجرجير، جبنة البوراتا الطازجة.",
                en: "Light airy, crisp Roman-style pinsa dough topped with tomato sauce, melted mozzarella, topped with Fresh Burrata and wild arugula."
            },
            image: "asset/pinsa-burrata-fresca-e-rucola.webp"
        },
        {
            id: 31,
            categoryId: "pinsa",
            title: {
                ar: "بينسا بالبريزاولا والجرجير",
                en: "Pinsa Bresaola e Rucola"
            },
            price: "69",
            calories: "1060",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة طماطم، جبنة موزاريلا، مع البريزاولة البقري, أوراق الجرجير الطازجة و جبنة البارميزان. (إضافات: البريزاولا البقري +20 ر.س، جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsa dough topped with tomato sauce, melted mozzarella, bresaola and wild arugula. (Add-ons: Bresaola +20 SAR, Mozzarella Cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا الرومانية هشة و مقرمشة مع صلصة طماطم، جبنة موزاريلا، مع البريزاولة البقري, أوراق الجرجير الطازجة و جبنة البارميزان.",
                en: "Light airy, crisp Roman-style pinsa dough topped with tomato sauce, melted mozzarella, bresaola and wild arugula."
            },
            image: "asset/pinsa-bresaola-e-rucola.webp"
        },
        {
            id: 32,
            categoryId: "pinsa",
            title: {
                ar: "بينسا بطماطم البروسكيتا والجرجير",
                en: "Pinsa Bruschettina e Rucola"
            },
            price: "54",
            calories: "1060",
            allergens: {
                ar: "جلوتين, قمح, حليب",
                en: "Gluten, Wheat, Milk"
            },
            ingredients: {
                ar: "عجينة بينسا الرومانية هشة وخفيفة ومقرمشة مع صلصة طماطم، جبنة موزاريلا، مع طماطم متبلة بالأعشاب الايطالية، أوراق الجرجير الطازجة و جبنة البارميزان. (إضافات: جبنة الموزاريلا +10 ر.س)",
                en: "Light airy, crisp Roman-style pinsadough topped with tomato sauce, melted mozzarella, marinated tomatoes, wild arugula and parmesan cheese. (Add-ons: Mozzarella Cheese +10 SAR)"
            },
            shortDesc: {
                ar: "عجينة بينسا بطماطم البروسكيتا والجرجير.",
                en: "Light airy, crisp Roman-style pinsadough topped with tomato sauce, melted mozzarella, marinated tomatoes, wild arugula and parmesan cheese."
            },
            image: "asset/pinsa-bruschettina.webp"
        },

        // ==========================================
        // 7. الأطباق الرئيسية / MAIN COURSE
        // ==========================================
        {
            id: 33,
            categoryId: "main-dishes",
            title: {
                ar: "دجاج الميلانيز",
                en: "Pollo alla Milanese"
            },
            price: "69",
            calories: "680",
            allergens: {
                ar: "جلوتين, قمح, بيض",
                en: "Gluten, Wheat, Egg"
            },
            ingredients: {
                ar: "صدر دجاج مقرمش ومغطّى بالبقسماط ومقلي بخفة حتى يصبح ذهبيًا ومقرمشًا، يُقدَّم مع سلطة خضراء طازجة أو بطاطس مقلية.",
                en: "Crispy breaded chicken breast, lightly fried until golden and crispy, served with a fresh green salad or French Fries."
            },
            shortDesc: {
                ar: "صدر دجاج مغطّى بالبقسماط ومقلي حتى يصبح ذهبيًا ومقرمشًا، يُقدَّم مع سلطة خضراء طازجة أو بطاطس مقلية.",
                en: "Crispy breaded chicken breast, lightly fried until golden and crispy, served with a fresh green salad or French Fries."
            },
            image: "asset/pollo-alla-milanese.webp"
        },
        {
            id: 34,
            categoryId: "main-dishes",
            title: {
                ar: "لحم العجل الميلانيز",
                en: "Cotoletta di vitello alla Milanese"
            },
            price: "79",
            calories: "646",
            allergens: {
                ar: "جلوتين, قمح, بيض",
                en: "Gluten, Wheat, Egg"
            },
            ingredients: {
                ar: "شريحة لحم عجل مقرمشة مغذاة على الحليب مغطاة بالبقسماط ومقلية ذهبية، تقدم مع الجرجير الطازج وشرائح الليمون.",
                en: "Crispy breaded Milk fed veal cutlet with fresh arugula and lemon slices."
            },
            shortDesc: {
                ar: "لحم عجل مغذى على الحليب مقلي ومغطى بالبقسماط يقدم مع الجرجير والليمون.",
                en: "Crispy breaded Milk fed veal cutlet with fresh arugula and lemon slices."
            },
            image: "asset/cotoletta-di-vitello-alla-milanese.webp"
        },
        {
            id: 35,
            categoryId: "main-dishes",
            title: {
                ar: "برانزينو فيليه",
                en: "Branzino con ciliegini e Olive"
            },
            price: "89",
            calories: "202",
            allergens: {
                ar: "سمك",
                en: "Fish"
            },
            ingredients: {
                ar: "فيليه سمك السيباس مع الطماطم الكرزية المشويّة والزيتون المالح.",
                en: "Seabass fillet with burst cherry tomatoes and briny olives."
            },
            shortDesc: {
                ar: "فيليه سمك السيباس مع الطماطم الكرزية المشويّة والزيتون المالح.",
                en: "Seabass fillet with burst cherry tomatoes and briny olives."
            },
            image: "asset/branzino-con-ciliegini-e-olive.webp"
        },

        // ==========================================
        // 8. الحلويات / DESSERT
        // ==========================================
        {
            id: 36,
            categoryId: "desserts",
            title: {
                ar: "تيراميسو",
                en: "Tiramisù"
            },
            price: "42",
            calories: "827",
            allergens: {
                ar: "جلوتين, قمح, حليب, بيض",
                en: "Gluten, Wheat, Milk, Egg"
            },
            ingredients: {
                ar: "بسكويت مغموس بالإسبريسو مع طبقات من الماسكاربوني المخملي الكريمي ومسحوق الكاكاو الفاخر.",
                en: "Espresso-soaked biscuits layered with velvety mascarpone and cocoa."
            },
            shortDesc: {
                ar: "بسكويت مغموس بالإسبريسو مع طبقات من الماسكاربوني الكريمي ومسحوق الكاكاو.",
                en: "Espresso-soaked biscuits layered with velvety mascarpone and cocoa."
            },
            image: "asset/tiramisu.webp"
        },
        {
            id: 37,
            categoryId: "desserts",
            title: {
                ar: "أفوجاتو تليانو",
                en: "Affogato Telliano"
            },
            price: "28",
            calories: "720",
            allergens: {
                ar: "حليب",
                en: "Milk"
            },
            ingredients: {
                ar: "آيس كريم فانيليا سوفت كريمية تقدم مع دوبل شوت إسبريسو ساخن.",
                en: "Vanilla soft serve ice cream served with double shot espresso."
            },
            shortDesc: {
                ar: "اّيس كريم فانيليا كريمية تقدم مع دوبل اسبريسو.",
                en: "Vanilla soft serve ice cream served with double shot espresso."
            },
            image: "asset/affogato-telliano.webp"
        },
        {
            id: 38,
            categoryId: "desserts",
            title: {
                ar: "كاستانيولي والشوكولاتة",
                en: "Castagnole e Cioccolato"
            },
            price: "32",
            calories: "830",
            allergens: {
                ar: "جلوتين, قمح, حليب, بيض",
                en: "Gluten, Wheat, Milk, Egg"
            },
            ingredients: {
                ar: "كرات عجين مقلية ذهبية بحجم اللقمة، مقرمشة من الخارج وطرية من الداخل، مرشوشة بالسكر وتقدم مع صلصة الشوكولاتة اللذيذة.",
                en: "Golden, bite-sized fried dough balls, crisp from the outside and soft from the inside, lightly disted with sugar and served with chocolate sauce."
            },
            shortDesc: {
                ar: "كرات عجين مقلية ذهبية ومقرمشة من الخارج وطرية من الداخل مع السكر و صلصة الشوكولاتة.",
                en: "Golden, bite-sized fried dough balls, crisp from the outside and soft from the inside, lightly disted with sugar and served with chocolate sauce."
            },
            image: "asset/castagnole-e-cioccolato.webp"
        },
        {
            id: 39,
            categoryId: "desserts",
            title: {
                ar: "اّيس كريم فانيليا كريمية والشوكولاتة",
                en: "Vaniglia Gelato Soft e Cioccolato"
            },
            price: "32",
            calories: "1060",
            allergens: {
                ar: "حليب, مكسرات",
                en: "Milk, Nuts"
            },
            ingredients: {
                ar: "آيس كريم فانيليا سوفت كريمية تُقدَّم مع صلصة الشوكولاتة والبندق المقرمش.",
                en: "Vanilla soft serve ice cream served with Chocolate sauce and hazelnuts."
            },
            shortDesc: {
                ar: "اّيس كريم فانيليا كريمية تقدم مع صلصة الشوكولاتة والبندق.",
                en: "Vanilla soft serve ice cream served with Chocolate sauce and hazelnuts."
            },
            image: "asset/vaniglia-gelato-soft-e-cioccolato.webp"
        },

        // ==========================================
        // 9. المشروبات / BEVERAGES
        // ==========================================
        // 9.1 الساخنة / HOT
        {
            id: 40,
            categoryId: "beverages",
            title: {
                ar: "إسبريسو",
                en: "Espresso"
            },
            price: "13",
            calories: "5",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "قهوة إسبريسو إيطالية غنية ومركزة. (مشروبات ساخنة)",
                en: "Rich and intense Italian espresso shot. (Hot Beverages)"
            },
            shortDesc: {
                ar: "قهوة إسبريسو إيطالية غنية ومركزة.",
                en: "Rich and intense Italian espresso shot."
            },
            image: "asset/espresso.webp"
        },
        {
            id: 41,
            categoryId: "beverages",
            title: {
                ar: "إسبريسو دبل",
                en: "Espresso Double"
            },
            price: "18",
            calories: "7",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "جرعة مضاعفة من قهوة الإسبريسو الإيطالية. (مشروبات ساخنة)",
                en: "Double shot of rich and intense Italian espresso. (Hot Beverages)"
            },
            shortDesc: {
                ar: "جرعة مضاعفة من قهوة الإسبريسو الإيطالية.",
                en: "Double shot of rich and intense Italian espresso."
            },
            image: "asset/espresso.webp"
        },
        {
            id: 42,
            categoryId: "beverages",
            title: {
                ar: "أمريكانو",
                en: "Americano"
            },
            price: "18",
            calories: "5",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "إسبريسو ممدد بالماء الساخن بنكهة متوازنة. (مشروبات ساخنة)",
                en: "Espresso diluted with hot water for a smooth, balanced flavor. (Hot Beverages)"
            },
            shortDesc: {
                ar: "إسبريسو ممدد بالماء الساخن بنكهة متوازنة.",
                en: "Espresso diluted with hot water for a smooth, balanced flavor."
            },
            image: "asset/americano.webp"
        },
        {
            id: 43,
            categoryId: "beverages",
            title: {
                ar: "كافيه لاتيه",
                en: "Café Latte"
            },
            price: "22",
            calories: "164",
            allergens: { ar: "حليب", en: "Milk" },
            ingredients: {
                ar: "إسبريسو غني ممزوج بالحليب المبخر مع طبقة رغوة خفيفة. (مشروبات ساخنة)",
                en: "Rich espresso combined with steamed milk and a light layer of foam. (Hot Beverages)"
            },
            shortDesc: {
                ar: "إسبريسو غني ممزوج بالحليب المبخر.",
                en: "Rich espresso combined with steamed milk and a light layer of foam."
            },
            image: "asset/cafe-latte.webp"
        },
        {
            id: 44,
            categoryId: "beverages",
            title: {
                ar: "كابتشينو",
                en: "Cappuccino"
            },
            price: "22",
            calories: "144",
            allergens: { ar: "حليب", en: "Milk" },
            ingredients: {
                ar: "مزيج متساوٍ من الإسبريسو والحليب المبخر والرغوة الحريرية الكثيفة. (مشروبات ساخنة)",
                en: "Equal parts espresso, steamed milk, and silky thick foam. (Hot Beverages)"
            },
            shortDesc: {
                ar: "إسبريسو مع حليب مبخر ورغوة غنية.",
                en: "Equal parts espresso, steamed milk, and silky thick foam."
            },
            image: "asset/cappuccino.webp"
        },
        {
            id: 45,
            categoryId: "beverages",
            title: {
                ar: "الشاي",
                en: "Tea"
            },
            price: "13",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "شاي فاخر منتقى بعناية. (مشروبات ساخنة)",
                en: "Carefully selected premium hot tea. (Hot Beverages)"
            },
            shortDesc: {
                ar: "شاي ساخن فاخر.",
                en: "Carefully selected premium hot tea."
            },
            image: "asset/tea.webp"
        },

        // 9.2 الباردة / COLD
        {
            id: 46,
            categoryId: "beverages",
            title: {
                ar: "عصير برتقال طازج",
                en: "Fresh Orange Juice"
            },
            price: "28",
            calories: "208",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "عصير برتقال طبيعي 100% معصور طازجاً. (مشروبات باردة)",
                en: "100% freshly squeezed natural orange juice. (Cold Beverages)"
            },
            shortDesc: {
                ar: "عصير برتقال طبيعي معصور طازجاً.",
                en: "100% freshly squeezed natural orange juice."
            },
            image: "asset/fresh-orange-juice.webp"
        },
        {
            id: 47,
            categoryId: "beverages",
            title: {
                ar: "أمريكانو بارد",
                en: "Iced Americano"
            },
            price: "18",
            calories: "5",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "إسبريسو طازج مع ماء بارد ومكعبات الثلج. (مشروبات باردة)",
                en: "Fresh espresso shot poured over cold water and ice. (Cold Beverages)"
            },
            shortDesc: {
                ar: "إسبريسو مثلج منعش.",
                en: "Fresh espresso shot poured over cold water and ice."
            },
            image: "asset/iced-americano.webp"
        },
        {
            id: 48,
            categoryId: "beverages",
            title: {
                ar: "لاتيه بارد",
                en: "Iced Café Latte"
            },
            price: "24",
            calories: "164",
            allergens: { ar: "حليب", en: "Milk" },
            ingredients: {
                ar: "إسبريسو وحليب بارد مع الثلج. (مشروبات باردة)",
                en: "Smooth espresso blended with cold milk and ice. (Cold Beverages)"
            },
            shortDesc: {
                ar: "لاتيه مثلج منعش مع الحليب.",
                en: "Smooth espresso blended with cold milk and ice."
            },
            image: "asset/iced-latte.webp"
        },
        {
            id: 49,
            categoryId: "beverages",
            title: {
                ar: "مياه بيرين صغير",
                en: "Berain still small water"
            },
            price: "6",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه نقية طبيعية معبأة (حجم صغير).",
                en: "Pure natural bottled still water (Small)."
            },
            shortDesc: {
                ar: "مياه نقية معبأة (صغير).",
                en: "Pure natural bottled still water (Small)."
            },
            image: "asset/still-water.webp"
        },
        {
            id: 50,
            categoryId: "beverages",
            title: {
                ar: "مياه بيرين كبير",
                en: "Berain still large water"
            },
            price: "15",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه نقية طبيعية معبأة (حجم كبير).",
                en: "Pure natural bottled still water (Large)."
            },
            shortDesc: {
                ar: "مياه نقية معبأة (كبير).",
                en: "Pure natural bottled still water (Large)."
            },
            image: "asset/still-water.webp"
        },
        {
            id: 51,
            categoryId: "beverages",
            title: {
                ar: "مياه غازية بيرين صغير",
                en: "Berain sparkling small water"
            },
            price: "7",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه غازية فوارة منعشة (حجم صغير).",
                en: "Refreshing sparkling carbonated water (Small)."
            },
            shortDesc: {
                ar: "مياه غازية فوارة (صغير).",
                en: "Refreshing sparkling carbonated water (Small)."
            },
            image: "asset/sparkling-water.webp"
        },
        {
            id: 52,
            categoryId: "beverages",
            title: {
                ar: "مياه غازية بيرين كبير",
                en: "Berain sparkling large water"
            },
            price: "18",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه غازية فوارة منعشة (حجم كبير).",
                en: "Refreshing sparkling carbonated water (Large)."
            },
            shortDesc: {
                ar: "مياه غازية فوارة (كبير).",
                en: "Refreshing sparkling carbonated water (Large)."
            },
            image: "asset/sparkling-water.webp"
        },
        {
            id: 53,
            categoryId: "beverages",
            title: {
                ar: "مياه سان بليغرينو صغير",
                en: "S.Pellegrino small water"
            },
            price: "13",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه إيطالية فوارة طبيعية فاخرة (حجم صغير).",
                en: "Premium Italian natural sparkling mineral water (Small)."
            },
            shortDesc: {
                ar: "مياه إيطالية فوارة فاخرة (صغير).",
                en: "Premium Italian natural sparkling mineral water (Small)."
            },
            image: "asset/sparkling-water.webp"
        },
        {
            id: 54,
            categoryId: "beverages",
            title: {
                ar: "مياه سان بليغرينو كبير",
                en: "S. Pellegrino large water"
            },
            price: "27",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه إيطالية فوارة طبيعية فاخرة (حجم كبير).",
                en: "Premium Italian natural sparkling mineral water (Large)."
            },
            shortDesc: {
                ar: "مياه إيطالية فوارة فاخرة (كبير).",
                en: "Premium Italian natural sparkling mineral water (Large)."
            },
            image: "asset/sparkling-water.webp"
        },
        {
            id: 55,
            categoryId: "beverages",
            title: {
                ar: "مياه اكوابانا صغير",
                en: "Acqua Panna small water"
            },
            price: "12",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه توسكانية طبيعية غير فوارة فائقة النقاء (حجم صغير).",
                en: "Tuscan natural still mineral water (Small)."
            },
            shortDesc: {
                ar: "مياه توسكانية طبيعية (صغير).",
                en: "Tuscan natural still mineral water (Small)."
            },
            image: "asset/still-water.webp"
        },
        {
            id: 56,
            categoryId: "beverages",
            title: {
                ar: "مياه اكوابانا كبير",
                en: "Acqua Panna large water"
            },
            price: "25",
            calories: "0",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "مياه توسكانية طبيعية غير فوارة فائقة النقاء (حجم كبير).",
                en: "Tuscan natural still mineral water (Large)."
            },
            shortDesc: {
                ar: "مياه توسكانية طبيعية (كبير).",
                en: "Tuscan natural still mineral water (Large)."
            },
            image: "asset/still-water.webp"
        },
        {
            id: 57,
            categoryId: "beverages",
            title: {
                ar: "مشروبات غازية",
                en: "Soft Drinks"
            },
            price: "8",
            calories: "",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "تشكيلة مشروبات غازية منعشة (السعرات مسجلة على العبوة).",
                en: "Assorted cold soft drinks (Calories as per can)."
            },
            shortDesc: {
                ar: "مشروبات غازية متنوعة.",
                en: "Assorted cold soft drinks (As per can)."
            },
            image: "asset/sparkling-water.webp"
        },

        // 9.3 الموجيتو / MOJITOS
        {
            id: 58,
            categoryId: "beverages",
            title: {
                ar: "موجيتو بالباسيون",
                en: "Mojito Passione"
            },
            price: "28",
            calories: "166",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "موجيتو منعش بفاكهة الباشن فروت الاستوائية مع النعناع والليمون والصودا.",
                en: "Tropical passion fruit mojito with fresh mint, lime, and sparkling soda."
            },
            shortDesc: {
                ar: "موجيتو منعش بفاكهة الباشن فروت.",
                en: "Tropical passion fruit mojito with fresh mint, lime, and sparkling soda."
            },
            image: "asset/mojito-passione.webp"
        },
        {
            id: 59,
            categoryId: "beverages",
            title: {
                ar: "موجيتو بليمون اليوزو",
                en: "Mojito Yuzu"
            },
            price: "28",
            calories: "176",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "موجيتو فاخر بنكهة ليمون اليوزو الياباني المنعش مع النعناع والليمون والصودا.",
                en: "Zesty Japanese yuzu citrus mojito with fresh mint, lime, and sparkling soda."
            },
            shortDesc: {
                ar: "موجيتو بنكهة ليمون اليوزو المنعش.",
                en: "Zesty Japanese yuzu citrus mojito with fresh mint, lime, and sparkling soda."
            },
            image: "asset/mojito-yuzu.webp"
        },
        {
            id: 60,
            categoryId: "beverages",
            title: {
                ar: "موجيتو بالفراولة",
                en: "Mojito Fargola"
            },
            price: "28",
            calories: "157",
            allergens: { ar: "", en: "" },
            ingredients: {
                ar: "موجيتو الفراولة الطبيعية الطازجة مع النعناع والليمون والصودا الفوارة.",
                en: "Fresh strawberry mojito with crushed mint leaves, lime, and sparkling soda."
            },
            shortDesc: {
                ar: "موجيتو الفراولة المنعش.",
                en: "Fresh strawberry mojito with crushed mint leaves, lime, and sparkling soda."
            },
            image: "asset/mojito-fargola.webp"
        }
    ]
};

// إتاحة البيانات بشكل عام على كائن window
if (typeof window !== 'undefined') {
    window.restaurantData = restaurantData;
}

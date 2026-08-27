/**
 * app.js - مشغل القائمة الديناميكي والتفاعلات البرمجية (النسخة المحسنة للإنتاج)
 * يدعم:
 * 1. تعدد اللغات الفوري والسلس (عربي / إنجليزي) بدون تسريب مستمعي الأحداث
 * 2. تفويض الأحداث الشامل (Event Delegation) لأقصى أداء وسرعة
 * 3. تحريكات FLIP الذكية للفلاتر مع Web Animations API
 * 4. تحول مورفنج انسيابي فائق النعومة للنافذة المنبثقة (Hero Morphing Modal)
 * 5. سهولة الوصول الشاملة (WCAG 2.1 Focus Trap & Keyboard Navigation)
 * 6. استراتيجية تحميل الصور غير المتزامنة الذكية (Async Decoding & Smart Lazy Loading)
 */
'use strict';

// 1. جلب كائن البيانات بأمان تام عبر النطاق العام أو كائن window
function getRestaurantData() {
    if (typeof window !== 'undefined' && window.restaurantData) {
        return window.restaurantData;
    }
    if (typeof restaurantData !== 'undefined') {
        return restaurantData;
    }
    return {};
}

// 2. كائن التعامل الآمن مع التخزين المحلي (لحماية التطبيق في وضع التصفح الخفي والتطبيقات المضمنة)
const SafeStorage = {
    get(key, fallback = null) {
        try {
            return localStorage.getItem(key) || fallback;
        } catch {
            return fallback;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch {
            /* تجاهل أخطاء الحصص أو قيود الأمان */
        }
    }
};

// 3. التعرف على اللغة الأولية
function getInitialLanguage() {
    const savedLang = SafeStorage.get('user_lang');
    if (savedLang === 'ar' || savedLang === 'en') return savedLang;

    const browserLang = (navigator.languages && navigator.languages.length 
        ? navigator.languages[0] 
        : (navigator.language || '')).toLowerCase();

    return browserLang.startsWith('en') ? 'en' : 'ar';
}

// حالة التطبيق العامة
let currentLang = getInitialLanguage();
const activeFilters = new Set();
let isClickScrolling = false;
let clickScrollTimeout = null;
let sectionObserver = null;
let currentOriginCard = null;
let isModalAnimating = false;

// 4. بدء التشغيل عند اكتمال تحميل المستند
document.addEventListener('DOMContentLoaded', () => {
    applyBrandTheme();
    applyLanguageDirection();
    renderApp();
    initGlobalInteractions();
});

// الدوال المساعدة للترجمة والنصوص
function t(val) {
    if (!val) return '';
    if (typeof val === 'object') return val[currentLang] || val['ar'] || val['en'] || '';
    return String(val);
}

function getUi(key) {
    const data = getRestaurantData();
    if (data?.ui?.[currentLang]?.[key]) {
        return data.ui[currentLang][key];
    }
    return '';
}

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// تطبيق اتجاه ولغة المستند
function applyLanguageDirection() {
    const data = getRestaurantData();
    const dir = data?.ui?.[currentLang]?.dir || (currentLang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.lang = currentLang;
    document.documentElement.dir = dir;
    document.body.dir = dir;
}

// تبديل لغة التطبيق
function switchLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    SafeStorage.set('user_lang', currentLang);
    applyLanguageDirection();
    renderApp();
    syncDynamicState();
}

// تطبيق ثيم وهوية البراند برمجياً
function applyBrandTheme() {
    const data = getRestaurantData();
    const theme = data?.theme;
    if (!theme) return;
    const root = document.documentElement;

    const themeVariables = {
        '--brand-primary-color': theme.primaryColor,
        '--brand-accent-color': theme.accentColor || '#E8501E',
        '--brand-primary-container': theme.primaryContainer,
        '--brand-accent-container': theme.accentContainer || '#FDF0EB',
        '--brand-on-primary': theme.onPrimary,
        '--sys-color-background': theme.backgroundColor,
        '--sys-color-surface': theme.surfaceColor,
        '--sys-color-text-main': theme.textMain,
        '--sys-color-text-muted': theme.textMuted,
        '--sys-color-border': theme.borderColor
    };

    for (const [property, value] of Object.entries(themeVariables)) {
        if (value) root.style.setProperty(property, value);
    }
}

// ضبط البيانات الوصفية للموقع
function setupBrandMetadata() {
    const data = getRestaurantData();
    const brand = data?.brand;
    if (!brand) return;

    const brandName = t(brand.name);
    const brandTagline = t(brand.tagline);

    if (brandName) {
        document.title = brandTagline ? `${brandName} | ${brandTagline}` : brandName;
    }

    const ogTitle = document.getElementById('og-title');
    const ogDesc = document.getElementById('og-desc');
    const ogImage = document.getElementById('og-image');
    const favicon = document.getElementById('dynamic-favicon');

    if (ogTitle && brandName) ogTitle.content = brandName;
    if (ogDesc && brandTagline) ogDesc.content = brandTagline;
    if (ogImage && brand.logo) ogImage.content = brand.logo;
    if (favicon && brand.favicon) favicon.href = brand.favicon;

    const logoWrapper = document.getElementById('brand-logo-wrapper');
    if (logoWrapper) {
        logoWrapper.innerHTML = brand.logo 
            ? `<img src="${escapeHTML(brand.logo)}" alt="${escapeHTML(brandName || 'Logo')}">` 
            : `<h1>${escapeHTML(brandName || '')}</h1>`;
    }
}

// خط أنابيب التوليد والريندر الشامل (Render Pipeline)
function renderApp() {
    setupBrandMetadata();
    renderLanguageButton();
    renderNavbar();
    renderFilters();
    renderMenuGrid();
    renderFooter();
    updateModalStaticTexts();
}

function renderLanguageButton() {
    const btn = document.getElementById('langSwitchBtn');
    const textSpan = document.getElementById('langSwitchText');
    if (!btn || !textSpan) return;

    const nextLang = currentLang === 'ar' ? 'en' : 'ar';
    const nextLangLabel = nextLang === 'en' ? 'English' : 'العربية';
    textSpan.textContent = nextLang === 'en' ? 'EN' : 'عربي';
    btn.setAttribute('aria-label', `Switch to ${nextLangLabel}`);
}

function renderNavbar() {
    const navContainer = document.getElementById('dynamic-navbar');
    const data = getRestaurantData();
    const categories = data?.categories;
    if (!navContainer || !categories) return;

    let navHTML = '<div class="md-tab-indicator" id="tab-indicator"></div>';
    categories.forEach((cat, index) => {
        navHTML += `<a href="#${escapeHTML(cat.id)}" class="md-tab ${index === 0 ? 'active' : ''} ripple-surface" data-target="${escapeHTML(cat.id)}">${escapeHTML(t(cat.name))}</a>`;
    });
    navContainer.innerHTML = navHTML;
}

function renderFilters() {
    const filtersContainer = document.getElementById('dynamic-filters');
    const data = getRestaurantData();
    const filters = data?.filters;
    if (!filtersContainer || !filters) return;

    let filtersHTML = '';
    filters.forEach((filter) => {
        const isAll = filter.id === 'all';
        const isActive = (isAll && activeFilters.size === 0) || activeFilters.has(filter.id) ? 'active' : '';
        filtersHTML += `
        <button type="button" class="md-chip ${isActive} ripple-surface filter-chip" data-filter="${escapeHTML(filter.id)}">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>${escapeHTML(t(filter.name))}</span>
        </button>`;
    });
    filtersContainer.innerHTML = filtersHTML;
}

function renderMenuGrid() {
    const menuContainer = document.getElementById('dynamic-menu');
    const data = getRestaurantData();
    const { categories, items } = data || {};
    if (!menuContainer || !categories || !items) return;

    let menuHTML = '';
    const currency = getUi('currency') || 'ر.س';
    const calLabel = getUi('caloriesLabel') || 'سعرة';
    let globalCardIndex = 0;

    categories.forEach(cat => {
        const catItems = items.filter(item => item.categoryId === cat.id);
        if (catItems.length === 0) return;

        let cardsHTML = '';
        catItems.forEach(item => {
            globalCardIndex++;
            const itemTitle = t(item.title);
            const itemDesc = t(item.shortDesc);
            const itemFullDesc = t(item.fullDesc) || itemDesc;
            const itemIngredients = t(item.ingredients);
            const itemAllergens = t(item.allergens);

            // أول 4 بطاقات تُحمل بأولوية فورية Eager مع فك تشفير غير متزامن، والباقي بتكاسل Lazy
            const isEager = globalCardIndex <= 4;
            const loadingAttr = isEager ? 'loading="eager"' : 'loading="lazy"';

            let allergyChips = '';
            if (itemAllergens) {
                itemAllergens.split(',').forEach(a => {
                    const trimmed = a.trim();
                    if (trimmed) allergyChips += `<span class="assist-chip">⚠️ ${escapeHTML(trimmed)}</span>`;
                });
            }

            cardsHTML += `
            <div class="md-card ripple-surface item-card" 
                 data-id="${item.id}"
                 data-allergens="${escapeHTML(itemAllergens)}" 
                 data-ingredients="${escapeHTML(itemIngredients)}" 
                 data-title="${escapeHTML(itemTitle)}"
                 data-price="${escapeHTML(item.price || '')}"
                 data-image="${escapeHTML(item.image || '')}"
                 data-full-desc="${escapeHTML(itemFullDesc)}"
                 tabindex="0"
                 role="button"
                 aria-label="${escapeHTML(itemTitle)}">
                <div class="card-media">
                    ${item.image 
                        ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(itemTitle)}" ${loadingAttr} decoding="async">` 
                        : `<div class="placeholder-img"><svg viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg></div>`
                    }
                </div>
                <div class="card-content">
                    <div class="card-header">
                        <h3 class="card-title">${escapeHTML(itemTitle)}</h3>
                        <span class="card-price">${escapeHTML(item.price)} ${escapeHTML(currency)}</span>
                    </div>
                    <p class="card-body">${escapeHTML(itemDesc)}</p>
                    <div class="assist-chips">
                        ${item.calories ? `<span class="assist-chip">🔥 ${escapeHTML(item.calories)} ${escapeHTML(calLabel)}</span>` : ''}
                        ${allergyChips}
                    </div>
                </div>
            </div>`;
        });

        menuHTML += `
        <section id="${escapeHTML(cat.id)}" class="menu-section" data-section="${escapeHTML(cat.id)}">
            <h2>${escapeHTML(t(cat.name))}</h2>
            <div class="menu-grid">${cardsHTML}</div>
        </section>`;
    });

    menuHTML += `
    <div id="no-results-msg" class="no-results-box hidden">
        <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 12.01 5 9.5S7.01 5 9.5 5 14 6.99 14 9.5 12.01 14 9.5 14z"/></svg>
        <p>${escapeHTML(getUi('noResults') || 'لا توجد أصناف تطابق الفلاتر المحددة.')}</p>
    </div>`;

    menuContainer.innerHTML = menuHTML;
}

function renderFooter() {
    const footer = document.getElementById('dynamic-footer');
    const data = getRestaurantData();
    const brand = data?.brand;
    if (!footer || !brand) return;

    const currentYear = new Date().getFullYear();
    let brandTitlesHTML = '';
    const brandName = t(brand.name);
    const brandNameFull = t(brand.nameFull);

    if (brand.name?.ar && brand.name?.en) {
        brandTitlesHTML = `
        <div class="footer-brand-title">
            <span class="brand-en">${escapeHTML(brand.name.en)}</span>
            <span class="brand-divider">|</span>
            <span class="brand-ar">${escapeHTML(brand.name.ar)}</span>
        </div>`;
    } else {
        brandTitlesHTML = `<div class="footer-brand-title"><span class="brand-main">${escapeHTML(brandNameFull || brandName)}</span></div>`;
    }

    const address = t(brand.address);
    const addressHTML = address ? `<p class="footer-address">${escapeHTML(address)}</p>` : '';

    let socialIcons = '';
    const links = brand.socialLinks || {};
    if (links.tiktok) {
        socialIcons += `<a href="${escapeHTML(links.tiktok)}" target="_blank" rel="noopener noreferrer" class="footer-social-btn ripple-surface" aria-label="TikTok"><svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.52c-.66-.46-1.12-1.16-1.3-1.95a4.88 4.88 0 0 1 3.3-2.05z"/></svg></a>`;
    }
    if (links.instagram) {
        socialIcons += `<a href="${escapeHTML(links.instagram)}" target="_blank" rel="noopener noreferrer" class="footer-social-btn ripple-surface" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>`;
    }
    if (links.maps) {
        socialIcons += `<a href="${escapeHTML(links.maps)}" target="_blank" rel="noopener noreferrer" class="footer-social-btn ripple-surface" aria-label="Location"><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></a>`;
    }

    const copyrightText = t(brand.footerCopyright) || `${brandName || ''}. All Rights Reserved.`;

    footer.innerHTML = `
    <div class="footer-container">
        ${brandTitlesHTML}
        ${addressHTML}
        ${socialIcons ? `<div class="footer-social-links">${socialIcons}</div>` : ''}
        <p class="footer-copyright">© ${currentYear} ${escapeHTML(copyrightText)}</p>
    </div>`;
}

function updateModalStaticTexts() {
    const zoomText = document.getElementById('zoomHintText');
    if (zoomText) zoomText.textContent = getUi('zoomHint') || 'انقر للتكبير';

    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) closeBtn.setAttribute('aria-label', getUi('closeModal') || 'إغلاق');

    const ingredientsHeading = document.getElementById('ingredientsHeading');
    if (ingredientsHeading) ingredientsHeading.textContent = getUi('ingredientsTitle') || 'المكونات الأساسية';
}

function updateHeaderOffset() {
    const topBar = document.querySelector('.top-app-bar');
    if (topBar) {
        const barHeight = topBar.offsetHeight;
        document.documentElement.style.setProperty('--top-app-bar-height', `${barHeight}px`);
        document.documentElement.style.setProperty('--header-offset', `${barHeight + 10}px`);
    }
}

// 5. نظام تفويض الأحداث العام الفردي (Zero-Leak Architecture)
function initGlobalInteractions() {
    updateHeaderOffset();
    window.addEventListener('resize', () => {
        updateHeaderOffset();
        const activeTab = document.querySelector('.md-tab.active');
        if (activeTab) updateIndicator(activeTab);
    }, { passive: true });

    // تموج النقر (Ripple Effect)
    document.addEventListener('mousedown', (e) => {
        const surface = e.target.closest('.ripple-surface');
        if (!surface) return;

        const rect = surface.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        surface.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });

    // زر تبديل اللغة
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchLanguage();
        });
    }

    // التنقل بين التبويبات عبر التفويض
    const navBar = document.getElementById('dynamic-navbar');
    if (navBar) {
        navBar.addEventListener('click', (e) => {
            const tab = e.target.closest('.md-tab');
            if (!tab) return;
            e.preventDefault();

            isClickScrolling = true;
            clearTimeout(clickScrollTimeout);

            document.querySelectorAll('.md-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateIndicator(tab);

            const targetSection = document.getElementById(tab.getAttribute('data-target'));
            if (targetSection) {
                const currentOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-offset')) || 120;
                const offsetPos = targetSection.getBoundingClientRect().top + window.scrollY - currentOffset;
                window.scrollTo({ top: offsetPos, behavior: 'smooth' });
            }
            clickScrollTimeout = setTimeout(() => { isClickScrolling = false; }, 800);
        });
    }

    // فلاتر الأصناف عبر التفويض
    const filtersBar = document.getElementById('dynamic-filters');
    if (filtersBar) {
        filtersBar.addEventListener('click', (e) => {
            const chip = e.target.closest('.filter-chip');
            if (!chip) return;

            const filter = chip.getAttribute('data-filter');
            if (filter === 'all') {
                activeFilters.clear();
                document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
            } else {
                const btnAll = document.querySelector('.filter-chip[data-filter="all"]');
                if (btnAll) btnAll.classList.remove('active');

                if (activeFilters.has(filter)) {
                    activeFilters.delete(filter);
                    chip.classList.remove('active');
                    if (activeFilters.size === 0 && btnAll) btnAll.classList.add('active');
                } else {
                    activeFilters.add(filter);
                    chip.classList.add('active');
                }
            }
            applyFiltersWithFLIP();
        });
    }

    initModal();
    initImageLightbox();
    syncDynamicState();
}

function updateIndicator(activeTab) {
    const indicator = document.getElementById('tab-indicator');
    const nav = document.getElementById('dynamic-navbar');
    if (!activeTab || !indicator || !nav) return;

    indicator.style.width = `${activeTab.offsetWidth}px`;
    indicator.style.left = `${activeTab.offsetLeft}px`;

    // تمرير شريط التبويبات بالمنتصف
    const navRect = nav.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();
    const diff = (tabRect.left + tabRect.width / 2) - (navRect.left + navRect.width / 2);
    if (Math.abs(diff) > 2) {
        nav.scrollBy({ left: diff, behavior: 'smooth' });
    }
}

function syncDynamicState() {
    updateHeaderOffset();
    const activeTab = document.querySelector('.md-tab.active');
    if (activeTab) updateIndicator(activeTab);

    // إعادة ربط الـ IntersectionObserver للتمرير السلس
    if (sectionObserver) sectionObserver.disconnect();
    const sections = document.querySelectorAll('.menu-section');

    sectionObserver = new IntersectionObserver((entries) => {
        if (isClickScrolling) return;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const targetTab = document.querySelector(`.md-tab[data-target="${id}"]`);
                if (targetTab && !targetTab.classList.contains('active')) {
                    document.querySelectorAll('.md-tab').forEach(t => t.classList.remove('active'));
                    targetTab.classList.add('active');
                    updateIndicator(targetTab);
                }
            }
        });
    }, { rootMargin: '-15% 0px -75% 0px', threshold: 0 });

    sections.forEach(sec => sectionObserver.observe(sec));

    if (activeFilters.size > 0) {
        applyFiltersWithFLIP();
    }
}

// 6. تطبيق حركة FLIP الذكية للفلاتر
function applyFiltersWithFLIP() {
    const items = document.querySelectorAll('.item-card');
    const sections = document.querySelectorAll('.menu-section');
    const noResultsMsg = document.getElementById('no-results-msg');
    const data = getRestaurantData();
    let totalVisibleItems = 0;

    // 1. تسجيل المواقع السابقة (First)
    const firstPositions = new Map();
    items.forEach(item => {
        if (!item.classList.contains('hidden')) {
            firstPositions.set(item, item.getBoundingClientRect());
        }
    });

    if (activeFilters.size === 0) {
        items.forEach(item => item.classList.remove('hidden'));
        sections.forEach(sec => sec.classList.remove('hidden'));
        if (noResultsMsg) noResultsMsg.classList.add('hidden');
    } else {
        items.forEach(item => {
            const itemAllergens = (item.getAttribute('data-allergens') || '').toLowerCase();
            let shouldHide = false;

            for (const filter of activeFilters) {
                const keywords = data?.config?.allergenMap?.[filter] || [filter];
                if (keywords.some(kw => itemAllergens.includes(kw.toLowerCase()))) {
                    shouldHide = true;
                    break;
                }
            }

            if (shouldHide) {
                item.classList.add('hidden');
            } else {
                item.classList.remove('hidden');
                totalVisibleItems++;
            }
        });

        sections.forEach(sec => {
            const visible = sec.querySelectorAll('.item-card:not(.hidden)');
            sec.classList.toggle('hidden', visible.length === 0);
        });

        if (noResultsMsg) {
            noResultsMsg.classList.toggle('hidden', totalVisibleItems > 0);
        }
    }

    // 2. التحريك الانسيابي (Invert & Play)
    items.forEach(item => {
        if (!item.classList.contains('hidden')) {
            const first = firstPositions.get(item);
            if (first) {
                const last = item.getBoundingClientRect();
                const deltaX = first.left - last.left;
                const deltaY = first.top - last.top;

                if (Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5) {
                    item.animate([
                        { transform: `translate(${deltaX}px, ${deltaY}px)` },
                        { transform: 'translate(0, 0)' }
                    ], {
                        duration: 320,
                        easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
                    });
                }
            }
        }
    });
}

// 7. النافذة المنبثقة الذكية (Accessible Hero Morphing Modal)
function initModal() {
    const modal = document.getElementById('itemModal');
    if (!modal) return;

    const modalSurface = modal.querySelector('.modal-surface');
    const modalScrollable = modal.querySelector('.modal-scrollable');
    const modalImg = document.getElementById('modalImg');
    const modalPlaceholder = document.getElementById('modalPlaceholder');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDesc = document.getElementById('modalDesc');
    const modalChips = document.getElementById('modalChips');
    const ingredientsBox = document.getElementById('ingredientsBox');
    const ingredientsList = document.getElementById('ingredientsList');
    const closeBtn = document.getElementById('modalCloseBtn');
    const zoomHintBtn = document.getElementById('zoomHintBtn');

    // مصيدة التركيز للوحة المفاتيح (Focus Trap)
    function trapFocus(e) {
        if (e.key !== 'Tab' || !modal.classList.contains('active')) return;
        const focusable = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
            last.focus();
            e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
            first.focus();
            e.preventDefault();
        }
    }

    document.addEventListener('keydown', trapFocus);

    // فتح النافذة عبر تفويض النقر
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.item-card');
        if (!card || isModalAnimating) return;

        currentOriginCard = card;
        const title = card.getAttribute('data-title') || '';
        const price = card.getAttribute('data-price') || '';
        const currency = getUi('currency') || 'ر.س';
        const desc = card.getAttribute('data-full-desc') || '';
        const ingredients = card.getAttribute('data-ingredients') || '';
        const imgSrc = card.getAttribute('data-image') || '';
        const chipsHtml = card.querySelector('.assist-chips')?.innerHTML || '';

        if (imgSrc) {
            modalImg.src = imgSrc;
            modalImg.alt = title;
            modalImg.style.display = 'block';
            modalPlaceholder.style.display = 'none';
            if (zoomHintBtn) zoomHintBtn.style.display = 'flex';
        } else {
            modalImg.style.display = 'none';
            modalPlaceholder.style.display = 'flex';
            if (zoomHintBtn) zoomHintBtn.style.display = 'none';
        }

        modalTitle.textContent = title;
        modalPrice.textContent = `${price} ${currency}`;
        modalDesc.innerHTML = escapeHTML(desc).replace(/\n/g, '<br>');
        modalChips.innerHTML = chipsHtml;

        ingredientsList.innerHTML = '';
        if (ingredients && ingredients.trim() !== '') {
            ingredients.split(',').forEach(ing => {
                const trimmed = ing.trim();
                if (trimmed) {
                    const li = document.createElement('li');
                    li.textContent = trimmed;
                    ingredientsList.appendChild(li);
                }
            });
            if (ingredientsBox) ingredientsBox.style.display = 'block';
        } else {
            if (ingredientsBox) ingredientsBox.style.display = 'none';
        }

        const cardRect = card.getBoundingClientRect();
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (modalScrollable) modalScrollable.scrollTop = 0;

        const surfaceRect = modalSurface.getBoundingClientRect();
        const deltaX = (cardRect.left + cardRect.width / 2) - (surfaceRect.left + surfaceRect.width / 2);
        const deltaY = (cardRect.top + cardRect.height / 2) - (surfaceRect.top + surfaceRect.height / 2);
        const scaleX = Math.max(0.15, cardRect.width / surfaceRect.width);
        const scaleY = Math.max(0.15, cardRect.height / surfaceRect.height);

        const isMobile = window.innerWidth < 600;
        const targetRadius = isMobile ? '28px 28px 0 0' : '24px';

        isModalAnimating = true;
        const morphAnim = modalSurface.animate([
            { transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`, borderRadius: '18px 6px 18px 6px', opacity: 0.7 },
            { transform: 'translate(0, 0) scale(1, 1)', borderRadius: targetRadius, opacity: 1 }
        ], {
            duration: 320,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'both'
        });

        morphAnim.onfinish = () => {
            isModalAnimating = false;
            closeBtn?.focus();
        };
    });

    // دعم لوحة المفاتيح لفتح البطاقات بـ Enter أو Space
    document.addEventListener('keydown', (e) => {
        if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('item-card')) {
            e.preventDefault();
            e.target.click();
        }
    });

    function closeModal() {
        if (isModalAnimating) return;
        isModalAnimating = true;

        let canMorphBack = false;
        let deltaX = 0, deltaY = 0, scaleX = 0.5, scaleY = 0.5;

        if (currentOriginCard && document.body.contains(currentOriginCard)) {
            const cRect = currentOriginCard.getBoundingClientRect();
            if (cRect.bottom > 0 && cRect.top < window.innerHeight) {
                canMorphBack = true;
                const sRect = modalSurface.getBoundingClientRect();
                deltaX = (cRect.left + cRect.width / 2) - (sRect.left + sRect.width / 2);
                deltaY = (cRect.top + cRect.height / 2) - (sRect.top + sRect.height / 2);
                scaleX = Math.max(0.15, cRect.width / sRect.width);
                scaleY = Math.max(0.15, cRect.height / sRect.height);
            }
        }

        const isMobile = window.innerWidth < 600;
        const closeKeyframes = canMorphBack ? [
            { transform: 'translate(0, 0) scale(1, 1)', opacity: 1 },
            { transform: `translate(${deltaX}px, ${deltaY}px) scale(${scaleX}, ${scaleY})`, opacity: 0 }
        ] : [
            { transform: 'translateY(0)', opacity: 1 },
            { transform: isMobile ? 'translateY(100%)' : 'translateY(30px) scale(0.95)', opacity: 0 }
        ];

        modal.style.transition = 'opacity 0.26s cubic-bezier(0.16, 1, 0.3, 1)';
        modal.style.opacity = '0';

        const closeAnim = modalSurface.animate(closeKeyframes, {
            duration: 260,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            fill: 'both'
        });

        closeAnim.onfinish = () => {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            modal.style.opacity = '';
            modal.style.transition = '';
            modalSurface.style.transform = '';
            document.body.style.overflow = '';
            isModalAnimating = false;

            // استعادة تركيز لوحة المفاتيح للبطاقة الأصلية
            if (currentOriginCard) {
                currentOriginCard.focus();
                currentOriginCard = null;
            }
        };
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    if (modalImg) {
        modalImg.addEventListener('click', () => openLightbox(modalImg.src, modalTitle.textContent));
    }
    if (zoomHintBtn) {
        zoomHintBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (modalImg?.src) openLightbox(modalImg.src, modalTitle.textContent);
        });
    }

    // إيماءة السحب للأسفل لإغلاق النافذة على الجوال (Pull-to-Dismiss)
    let touchStartY = 0;
    let touchCurrentY = 0;
    let isDraggingModal = false;

    modalSurface.addEventListener('touchstart', (e) => {
        if (modalScrollable && modalScrollable.scrollTop > 5) return;
        touchStartY = e.touches[0].clientY;
        touchCurrentY = touchStartY;
        isDraggingModal = true;
    }, { passive: true });

    modalSurface.addEventListener('touchmove', (e) => {
        if (!isDraggingModal) return;
        touchCurrentY = e.touches[0].clientY;
        const diffY = touchCurrentY - touchStartY;
        if (diffY > 0 && modalScrollable && modalScrollable.scrollTop <= 0) {
            modalSurface.style.transform = `translateY(${Math.pow(diffY, 0.85)}px)`;
        }
    }, { passive: true });

    modalSurface.addEventListener('touchend', () => {
        if (!isDraggingModal) return;
        isDraggingModal = false;
        const diffY = touchCurrentY - touchStartY;
        if (diffY > 70 && modalScrollable && modalScrollable.scrollTop <= 0) {
            closeModal();
        } else {
            modalSurface.style.transition = 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)';
            modalSurface.style.transform = '';
            setTimeout(() => { modalSurface.style.transition = ''; }, 300);
        }
    });
}

// 8. عارض الصور بملء الشاشة (Fullscreen Lightbox)
function initImageLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    if (!lightbox) return;

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.id === 'lightboxImg') closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
}

function openLightbox(imgSrc, caption) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = imgSrc;
    lightboxImg.alt = caption || '';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';

    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.getElementById('lightboxClose')?.focus();
}

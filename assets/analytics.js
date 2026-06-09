(function () {
    'use strict';

    var GA_MEASUREMENT_ID = 'G-T35VD4H8ND';
    var CONSENT_KEY = 'cookie_consent';
    var analyticsInitialized = false;
    var eventListenersAttached = false;
    var lastTrackedSection = null;

    var SECTION_TITLES = {
        inicio: 'Início',
        servicos: 'Serviços',
        sobre: 'Sobre',
        contato: 'Contato'
    };

    function getStoredConsent() {
        try {
            return localStorage.getItem(CONSENT_KEY);
        } catch (e) {
            return null;
        }
    }

    function setStoredConsent(value) {
        try {
            localStorage.setItem(CONSENT_KEY, value);
        } catch (e) {
            // Ignore storage errors (private browsing, etc.)
        }
    }

    function hideBanner() {
        var banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.hidden = true;
            banner.classList.remove('cookie-banner--visible');
        }
    }

    function showBanner() {
        var banner = document.getElementById('cookieBanner');
        if (banner) {
            banner.hidden = false;
            banner.classList.add('cookie-banner--visible');
        }
    }

    function updateConsent(granted) {
        gtag('consent', 'update', {
            analytics_storage: granted ? 'granted' : 'denied',
            ad_storage: granted ? 'granted' : 'denied',
            ad_user_data: granted ? 'granted' : 'denied',
            ad_personalization: granted ? 'granted' : 'denied'
        });
    }

    function initAnalytics() {
        if (analyticsInitialized) {
            return;
        }

        analyticsInitialized = true;

        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
        document.head.appendChild(script);

        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID, {
            send_page_view: true
        });

        attachEventListeners();

        if (window.scrollY < 150) {
            lastTrackedSection = 'inicio';
        }
    }

    function isAnalyticsActive() {
        return analyticsInitialized && getStoredConsent() === 'granted';
    }

    function trackSectionView(sectionId) {
        if (!isAnalyticsActive() || !sectionId || sectionId === lastTrackedSection) {
            return;
        }

        lastTrackedSection = sectionId;

        var pageTitle = SECTION_TITLES[sectionId] || sectionId;
        var pagePath = '/#' + sectionId;

        gtag('event', 'page_view', {
            page_title: pageTitle,
            page_location: window.location.origin + pagePath,
            page_path: pagePath
        });
    }

    function attachEventListeners() {
        if (eventListenersAttached) {
            return;
        }

        eventListenersAttached = true;

        document.addEventListener('click', function (e) {
            if (!isAnalyticsActive()) {
                return;
            }

            var link = e.target.closest('a[href]');
            if (!link) {
                return;
            }

            var href = link.getAttribute('href') || '';

            if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) {
                gtag('event', 'generate_lead', {
                    method: 'whatsapp',
                    link_url: href
                });
                return;
            }

            if (href.indexOf('instagram.com') !== -1) {
                gtag('event', 'click', {
                    method: 'instagram',
                    link_url: href
                });
                return;
            }

            if (href.indexOf('facebook.com') !== -1) {
                gtag('event', 'click', {
                    method: 'facebook',
                    link_url: href
                });
                return;
            }

            if (link.classList.contains('btn-primary') && href === '#contato') {
                gtag('event', 'select_content', {
                    content_type: 'cta',
                    item_id: 'hero_contact'
                });
            }
        });

        document.addEventListener('sectionchange', function (e) {
            if (e.detail && e.detail.sectionId) {
                trackSectionView(e.detail.sectionId);
            }
        });
    }

    function acceptConsent() {
        setStoredConsent('granted');
        hideBanner();
        updateConsent(true);
        initAnalytics();
    }

    function rejectConsent() {
        setStoredConsent('denied');
        hideBanner();
        updateConsent(false);
    }

    function bindBannerButtons() {
        var acceptBtn = document.getElementById('cookieAccept');
        var rejectBtn = document.getElementById('cookieReject');

        if (acceptBtn) {
            acceptBtn.addEventListener('click', acceptConsent);
        }

        if (rejectBtn) {
            rejectBtn.addEventListener('click', rejectConsent);
        }
    }

    function initConsentFlow() {
        bindBannerButtons();

        var stored = getStoredConsent();

        if (stored === 'granted') {
            updateConsent(true);
            initAnalytics();
            return;
        }

        if (stored === 'denied') {
            hideBanner();
            return;
        }

        showBanner();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initConsentFlow);
    } else {
        initConsentFlow();
    }
})();

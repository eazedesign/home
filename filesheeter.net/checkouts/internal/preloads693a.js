
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CLC_3jHV.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.F1hTtkeP.js","/cdn/shopifycloud/checkout-web/assets/c1/dist-vendor-legacy.hV6XAEr3.js","/cdn/shopifycloud/checkout-web/assets/c1/browser-legacy.iJyT8Vw6.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-FullScreenBackground-legacy.hMCC0FQs.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-unactionable-errors-legacy.DKiqgQff.js","/cdn/shopifycloud/checkout-web/assets/c1/actions-shop-discount-offer-legacy.JTFUnjZt.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-alternativePaymentCurrency-legacy.COj9Q3xg.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shared-legacy.j1kPaQ3s.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-BusinessCustomerShippingAddressManager-legacy.COLE69h2.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-shared-legacy.D3fjl_hK.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-Page-legacy.CsJ7GatH.js","/cdn/shopifycloud/checkout-web/assets/c1/images-flag-icon-legacy.Bfupgm8k.js","/cdn/shopifycloud/checkout-web/assets/c1/images-payment-icon-legacy.BbBFqdfu.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.CvPEinED.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.IWt-PdfC.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-MarketsProDisclaimer-legacy.Bzrg4UWa.js","/cdn/shopifycloud/checkout-web/assets/c1/Menu-CrossBorderConsolidation-legacy.DBrfM6x4.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSubscribeMessenger-legacy.CzIgnzso.js","/cdn/shopifycloud/checkout-web/assets/c1/types-useHasOrdersFromMultipleShops-legacy.C4aWz1cC.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-PaymentButtons-legacy.CbwfqUUF.js","/cdn/shopifycloud/checkout-web/assets/c1/icons-OffsitePaymentFailed-legacy.CZ4ovcdQ.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.Cp9754_L.js","/cdn/shopifycloud/checkout-web/assets/c1/BuyWithPrimeChangeLink-VaultedPayment-legacy.DtnJS8eU.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMacros-ShippingGroupsSummaryLine-legacy.gmVUBEJd.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandisePreviewThumbnail-StackedMerchandisePreview-legacy.zPTdasdg.js","/cdn/shopifycloud/checkout-web/assets/c1/Map-PickupPointCarrierLogo-legacy.d2dJ58xR.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-legacy.o2HzLu_9.js","/cdn/shopifycloud/checkout-web/assets/c1/PostPurchaseShouldRender-LocalizationExtensionField-legacy.DLDO-nfe.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-ShopPayOptInDisclaimer-legacy.Cg4WP6Iu.js","/cdn/shopifycloud/checkout-web/assets/c1/adapter-RememberMeDescriptionText-legacy.D5vyZkLJ.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-MobileOrderSummary-legacy.Cn19-74p.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-OrderEditVaultedDelivery-legacy.BZBN3bdm.js","/cdn/shopifycloud/checkout-web/assets/c1/captcha-SeparatePaymentsNotice-legacy.CM9yIZoZ.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.DL4yPPal.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-useShopCashCheckoutEligibility-legacy.Bjk_VAWT.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-ShipmentBreakdown-legacy.CIbUpkrn.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-MerchandiseModal-legacy.Bf_kQgdg.js","/cdn/shopifycloud/checkout-web/assets/c1/utilities-shipping-options-legacy.Darntj-v.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-DutyOptions-legacy.BvhlDesP.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryInstructionsFooter-ShippingMethodSelector-legacy.BooA2JRE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-SubscriptionPriceBreakdown-legacy.d3mNWQTi.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  
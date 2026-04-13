export const trackEvent = (eventName: string, params?: Record<string, string>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
};

// Pre-defined events
export const trackTopUp = (source: string) =>
  trackEvent("top_up_click", { source });

export const trackDownloadApp = (source: string) =>
  trackEvent("download_app_click", { source });

export const trackWhatsAppBot = (source: string) =>
  trackEvent("whatsapp_bot_click", { source });

export const trackFacebookBot = (source: string) =>
  trackEvent("facebook_bot_click", { source });

export const trackOfflinePurchase = (source: string) =>
  trackEvent("offline_purchase_click", { source });

export const trackContactSupport = () =>
  trackEvent("contact_support_click");

export const trackReferStart = (source: string) =>
  trackEvent("refer_start_click", { source });

export const trackReferPopupShown = () =>
  trackEvent("refer_popup_shown");

export const trackReferPopupDismissed = () =>
  trackEvent("refer_popup_dismissed");

export const trackReferWhatsAppShare = () =>
  trackEvent("refer_whatsapp_share");

export const trackReferMethodChosen = (method: string) =>
  trackEvent("refer_method_chosen", { method });

export const trackExploreServices = (source: string) =>
  trackEvent("explore_services_click", { source });

export const trackFacebookPage = (source: string) =>
  trackEvent("facebook_page_click", { source });
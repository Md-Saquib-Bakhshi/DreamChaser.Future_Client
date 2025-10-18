export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface NewsletterSubscription {
  email: string;
  subscribed: boolean;
  timestamp: string;
}
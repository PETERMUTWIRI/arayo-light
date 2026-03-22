// WhatsApp Integration Utility
// Format and send messages via WhatsApp API

// Default WhatsApp number - should be set in environment variables
const DEFAULT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';

interface ClientRequestData {
  name: string;
  phone: string;
  location: string;
  serviceType: string;
  duration: string;
  notes?: string;
}

interface CaregiverApplicationData {
  name: string;
  phone: string;
  email: string;
  experience: string;
  services: string;
  cvMethod?: 'email' | 'upload';
  cvLink?: string;
}

/**
 * Format client request message for WhatsApp
 */
export function formatClientRequestMessage(data: ClientRequestData): string {
  const message = `*New Client Request*%0A%0A` +
    `*Name:* ${encodeURIComponent(data.name)}%0A` +
    `*Phone:* ${encodeURIComponent(data.phone)}%0A` +
    `*Location:* ${encodeURIComponent(data.location)}%0A` +
    `*Service Needed:* ${encodeURIComponent(data.serviceType)}%0A` +
    `*Duration:* ${encodeURIComponent(data.duration)}%0A`;
  
  if (data.notes) {
    return message + `*Additional Notes:* ${encodeURIComponent(data.notes)}`;
  }
  
  return message;
}

/**
 * Format caregiver application message for WhatsApp
 */
export function formatCaregiverApplicationMessage(data: CaregiverApplicationData): string {
  let message = `*New Caregiver Application*%0A%0A` +
    `*Name:* ${encodeURIComponent(data.name)}%0A` +
    `*Phone:* ${encodeURIComponent(data.phone)}%0A` +
    `*Email:* ${encodeURIComponent(data.email)}%0A` +
    `*Experience:* ${encodeURIComponent(data.experience)} years%0A` +
    `*Services:* ${encodeURIComponent(data.services)}%0A`;
  
  // Handle CV information
  if (data.cvMethod === 'email') {
    message += `*CV:* Sent via email (check inbox)`;
  } else if (data.cvLink) {
    message += `*CV:* ${encodeURIComponent(data.cvLink)}`;
  } else {
    message += `*CV:* Will be sent separately`;
  }
  
  return message;
}

/**
 * Open WhatsApp with pre-filled message
 */
export function openWhatsApp(message: string, phoneNumber?: string): void {
  const number = phoneNumber || DEFAULT_WHATSAPP_NUMBER;
  
  if (!number) {
    console.error('WhatsApp number not configured');
    return;
  }
  
  // Remove any non-numeric characters from phone number
  const cleanNumber = number.replace(/\D/g, '');
  
  // Construct WhatsApp URL
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${message}`;
  
  // Open in new tab
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Submit client request - opens WhatsApp with formatted message
 */
export function submitClientRequest(data: ClientRequestData, phoneNumber?: string): void {
  const message = formatClientRequestMessage(data);
  openWhatsApp(message, phoneNumber);
}

/**
 * Submit caregiver application - opens WhatsApp with formatted message
 */
export function submitCaregiverApplication(data: CaregiverApplicationData, phoneNumber?: string): void {
  const message = formatCaregiverApplicationMessage(data);
  openWhatsApp(message, phoneNumber);
}

/**
 * Generate mailto link for CV submission
 * This is used as a fallback when WhatsApp can't receive files
 */
export function generateCVMailto(data: {
  name: string;
  email: string;
  phone: string;
  recipientEmail: string;
}): string {
  const subject = encodeURIComponent(`Caregiver Application - CV from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\n` +
    `Email: ${data.email}\n` +
    `Phone: ${data.phone}\n\n` +
    `Please attach your CV to this email.`
  );
  
  return `mailto:${data.recipientEmail}?subject=${subject}&body=${body}`;
}

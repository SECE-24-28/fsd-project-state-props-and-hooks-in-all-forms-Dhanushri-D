export function getJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}
export function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function pushEnquiry(enquiry) {
  const key = 'tn_enquiries';
  const enquiries = getJSON(key, []);
  enquiries.push(enquiry);
  setJSON(key, enquiries);
  return enquiry;
}
export function getEnquiryDraft(fallback) {
  return getJSON('tn_enquiryDraft', fallback);
}
export function setEnquiryDraft(draft) {
  setJSON('tn_enquiryDraft', draft);
}
export function clearEnquiryDraft() {
  localStorage.removeItem('tn_enquiryDraft');
}
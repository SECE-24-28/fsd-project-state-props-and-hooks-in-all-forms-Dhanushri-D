import {
  destSantorini, destKyoto, destMachuPicchu, destMaldives, destKenya, destParis, destBali, destNewYork,
  pkgGreece, pkgJapan, pkgMaldives, pkgKenya, pkgBali, pkgParis,
  hotelSantorini, hotelKyoto, hotelMaldives, hotelBali, hotelParis, hotelNYC,
  galMountain, galBeach, galKyoto, galSafari, galParis, galBali, galMachuPicchu,
  galMaldives, galSantorini, galNewYork, galKenya, galGreece,
  teamSarah, teamJames, teamPriya, teamMarco,
} from '../assets/images/index';
export const destinations = [
  { id: 1, name: 'Santorini', country: 'Greece', category: 'Beach', rating: 4.9, price: 1200, image: destSantorini, description: 'Iconic white-washed buildings perched on volcanic cliffs overlooking the deep blue Aegean Sea.', highlights: ['Oia Sunset', 'Caldera Views', 'Black Sand Beach', 'Wine Tasting', 'Boat Tours'], duration: '5-7 days', bestTime: 'April - October' },
  { id: 2, name: 'Kyoto', country: 'Japan', category: 'Culture', rating: 4.8, price: 1500, image: destKyoto, description: 'Ancient temples, traditional tea houses, and stunning bamboo groves define this cultural gem.', highlights: ['Fushimi Inari', 'Arashiyama Bamboo', 'Geisha District', 'Kinkaku-ji', 'Tea Ceremony'], duration: '4-6 days', bestTime: 'March - May' },
  { id: 3, name: 'Machu Picchu', country: 'Peru', category: 'Adventure', rating: 4.9, price: 1800, image: destMachuPicchu, description: 'The legendary Incan citadel set high in the Andes Mountains, shrouded in mist and mystery.', highlights: ['Sun Gate', 'Inca Trail', 'Huayna Picchu', 'Temple of the Sun', 'Intihuatana Stone'], duration: '3-5 days', bestTime: 'May - September' },
  { id: 4, name: 'Maldives', country: 'Maldives', category: 'Beach', rating: 5.0, price: 2500, image: destMaldives, description: 'Crystal-clear lagoons, overwater bungalows, and vibrant coral reefs in the Indian Ocean.', highlights: ['Overwater Villas', 'Snorkeling', 'Dolphin Watching', 'Sunset Cruise', 'Spa Retreat'], duration: '5-8 days', bestTime: 'November - April' },
  { id: 5, name: 'Safari Kenya', country: 'Kenya', category: 'Adventure', rating: 4.7, price: 2200, image: destKenya, description: 'Witness the Great Migration and encounter the Big Five in their natural habitat.', highlights: ['Masai Mara', 'Great Migration', 'Hot Air Balloon', 'Maasai Village', 'Sundowner'], duration: '7-10 days', bestTime: 'July - October' },
  { id: 6, name: 'Paris', country: 'France', category: 'City', rating: 4.8, price: 1400, image: destParis, description: 'The City of Light dazzles with iconic landmarks, world-class cuisine, and timeless romance.', highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Montmartre', 'Versailles'], duration: '4-6 days', bestTime: 'April - June' },
  { id: 7, name: 'Bali', country: 'Indonesia', category: 'Beach', rating: 4.7, price: 900, image: destBali, description: 'Tropical paradise with terraced rice fields, ancient temples, and vibrant surf culture.', highlights: ['Ubud Rice Terraces', 'Tanah Lot', 'Seminyak Beach', 'Mount Batur', 'Cooking Class'], duration: '6-9 days', bestTime: 'April - October' },
  { id: 8, name: 'New York', country: 'USA', category: 'City', rating: 4.6, price: 1600, image: destNewYork, description: 'The city that never sleeps — iconic skyline, Broadway shows, and endless energy.', highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Brooklyn Bridge', 'Broadway'], duration: '5-7 days', bestTime: 'September - November' },
];
export const packages = [
  { id: 1, name: 'Greek Island Hopper', destination: 'Greece', duration: 10, price: 2499, rating: 4.8, image: pkgGreece, includes: ['Flights', 'Hotels', 'Breakfast', 'Island Ferry'], tag: 'Best Seller', description: 'Explore Santorini, Mykonos, and Crete in one epic journey.' },
  { id: 2, name: 'Japan Cultural Tour', destination: 'Japan', duration: 14, price: 3299, rating: 4.9, image: pkgJapan, includes: ['Flights', 'Ryokan Stay', 'All Meals', 'JR Pass'], tag: 'Premium', description: 'Tokyo, Kyoto, Osaka — immerse in Japanese culture and cuisine.' },
  { id: 3, name: 'Maldives Escape', destination: 'Maldives', duration: 7, price: 3999, rating: 5.0, image: pkgMaldives, includes: ['Flights', 'Overwater Villa', 'All-Inclusive', 'Snorkeling'], tag: 'Luxury', description: 'Ultimate luxury escape with private overwater bungalow.' },
  { id: 4, name: 'African Safari Adventure', destination: 'Kenya', duration: 8, price: 4500, rating: 4.7, image: pkgKenya, includes: ['Flights', 'Safari Lodge', 'Game Drives', 'Guide'], tag: 'Adventure', description: 'Witness the Great Migration and Big Five up close.' },
  { id: 5, name: 'Bali Bliss', destination: 'Bali', duration: 9, price: 1799, rating: 4.6, image: pkgBali, includes: ['Flights', 'Villa', 'Breakfast', 'Spa Session'], tag: 'Popular', description: 'Relax in a private villa surrounded by lush tropical nature.' },
  { id: 6, name: 'Paris Romance', destination: 'France', duration: 6, price: 2199, rating: 4.8, image: pkgParis, includes: ['Flights', 'Boutique Hotel', 'Breakfast', 'City Tour'], tag: 'Romantic', description: 'A dreamy Parisian getaway for couples.' },
];

export const hotels = [
  { id: 1, name: 'Oia Sunset Suites', location: 'Santorini, Greece', rating: 5, price: 450, image: hotelSantorini, amenities: ['Pool', 'Spa', 'Restaurant', 'WiFi', 'Bar', 'Concierge'], category: 'Luxury' },
  { id: 2, name: 'Kyoto Ryokan Inn', location: 'Kyoto, Japan', rating: 4, price: 220, image: hotelKyoto, amenities: ['Onsen', 'Traditional Meals', 'WiFi', 'Garden', 'Tea Room'], category: 'Boutique' },
  { id: 3, name: 'Maldives Water Villa', location: 'North Malé Atoll', rating: 5, price: 850, image: hotelMaldives, amenities: ['Private Pool', 'Snorkeling', 'All-Inclusive', 'Spa', 'Dive Center'], category: 'Overwater' },
  { id: 4, name: 'Bali Jungle Resort', location: 'Ubud, Bali', rating: 4, price: 180, image: hotelBali, amenities: ['Infinity Pool', 'Yoga', 'Restaurant', 'WiFi', 'Cooking Class'], category: 'Resort' },
  { id: 5, name: 'Paris Boutique Hotel', location: 'Paris, France', rating: 4, price: 320, image: hotelParis, amenities: ['Restaurant', 'Bar', 'WiFi', 'Concierge', 'Gym'], category: 'Boutique' },
  { id: 6, name: 'NYC Skyline Hotel', location: 'Manhattan, New York', rating: 4, price: 380, image: hotelNYC, amenities: ['Rooftop Bar', 'Gym', 'WiFi', 'Restaurant', 'Business Center'], category: 'City' },
];

export const galleryImages = [
  { id: 1, url: galMountain, caption: 'Mountain Adventure', category: 'Nature' },
  { id: 2, url: galBeach, caption: 'Tropical Beach', category: 'Beach' },
  { id: 3, url: galKyoto, caption: 'Kyoto Temples', category: 'Culture' },
  { id: 4, url: galSafari, caption: 'African Safari', category: 'Adventure' },
  { id: 5, url: galParis, caption: 'Paris at Night', category: 'City' },
  { id: 6, url: galBali, caption: 'Bali Sunrise', category: 'Beach' },
  { id: 7, url: galMachuPicchu, caption: 'Machu Picchu', category: 'Adventure' },
  { id: 8, url: galMaldives, caption: 'Maldives Lagoon', category: 'Beach' },
  { id: 9, url: galSantorini, caption: 'Santorini Sunset', category: 'Beach' },
  { id: 10, url: galNewYork, caption: 'New York Skyline', category: 'City' },
  { id: 11, url: galKenya, caption: 'Kenya Wildlife', category: 'Adventure' },
  { id: 12, url: galGreece, caption: 'Greek Islands', category: 'Beach' },
];

export const teamMembers = [
  { id: 1, name: 'Sarah Mitchell', role: 'CEO & Founder', image: teamSarah, bio: '15+ years in luxury travel' },
  { id: 2, name: 'James Chen', role: 'Head of Operations', image: teamJames, bio: 'Expert in Asia-Pacific routes' },
  { id: 3, name: 'Priya Sharma', role: 'Travel Curator', image: teamPriya, bio: 'Specialist in cultural experiences' },
  { id: 4, name: 'Marco Rivera', role: 'Adventure Lead', image: teamMarco, bio: 'Certified mountain guide' },
];

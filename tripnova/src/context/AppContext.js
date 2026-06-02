import React, { createContext, useContext, useState, useEffect } from 'react';
const AppContext = createContext();
export function AppProvider({ children }) {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('tn_user')) || null);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('tn_wishlist')) || []);
  const [savedTrips, setSavedTrips] = useState(() => JSON.parse(localStorage.getItem('tn_trips')) || []);
  const [activities, setActivities] = useState(() => JSON.parse(localStorage.getItem('tn_activities')) || []);
  useEffect(() => { localStorage.setItem('tn_wishlist', JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem('tn_trips', JSON.stringify(savedTrips)); }, [savedTrips]);
  useEffect(() => { localStorage.setItem('tn_activities', JSON.stringify(activities)); }, [activities]);
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('tn_user', JSON.stringify(userData));
    addActivity(`Logged in as ${userData.name}`);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('tn_user');
  };
  const toggleWishlist = (item) => {
    setWishlist(prev => {
      const exists = prev.find(w => w.id === item.id);
      if (exists) {
        addActivity(`Removed ${item.name} from wishlist`);
        return prev.filter(w => w.id !== item.id);
      }
      addActivity(`Added ${item.name} to wishlist`);
      return [...prev, item];
    });
  };
  const saveTrip = (trip) => {
    setSavedTrips(prev => {
      if (prev.find(t => t.id === trip.id)) return prev;
      addActivity(`Saved trip: ${trip.name}`);
      return [...prev, trip];
    });
  };
  const addActivity = (text) => {
    const entry = { id: Date.now(), text, time: new Date().toLocaleString() };
    setActivities(prev => [entry, ...prev].slice(0, 10));
  };
  const isWishlisted = (id) => wishlist.some(w => w.id === id);
  return (
    <AppContext.Provider value={{ user, login, logout, wishlist, toggleWishlist, isWishlisted, savedTrips, saveTrip, activities }}>
      {children}
    </AppContext.Provider>
  );
}
export const useApp = () => useContext(AppContext);
import { User } from "@/types/trip";

const USER_STORAGE_KEY = 'tripai_user';

export const auth = {
  login: (email: string, password: string): User => {
    // Mock authentication - in real app this would call an API
    const mockUser: User = {
      id: '1',
      name: 'John Doe',
      email: email,
      phone: '+1 (555) 123-4567',
      address: '123 Main St, San Francisco, CA'
    };
    
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));
    return mockUser;
  },

  signup: (name: string, email: string, password: string): User => {
    // Mock signup - in real app this would call an API
    const mockUser: User = {
      id: '1',
      name: name,
      email: email,
    };
    
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(mockUser));
    return mockUser;
  },

  logout: (): void => {
    localStorage.removeItem(USER_STORAGE_KEY);
  },

  getCurrentUser: (): User | null => {
    try {
      const userStr = localStorage.getItem(USER_STORAGE_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch {
      return null;
    }
  },

  updateUser: (userData: Partial<User>): User | null => {
    const currentUser = auth.getCurrentUser();
    if (!currentUser) return null;
    
    const updatedUser = { ...currentUser, ...userData };
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updatedUser));
    return updatedUser;
  }
};

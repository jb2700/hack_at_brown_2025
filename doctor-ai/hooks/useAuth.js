import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; 

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    setUser(user);
    console.log("SUCCESS");
  };

  const signup = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    setUser(user);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return { user, loading, login, signup, logout };
};

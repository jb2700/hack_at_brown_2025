import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://fmdtpdkiywizfnihkllz.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZHRwZGtpeXdpemZuaWhrbGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NDY0MDgsImV4cCI6MjA1NDAyMjQwOH0.szT8riokAAOmucRr8uqRsWjyP_oaV4qdSN0t_9aAFI4";

export const supabase = createClient(supabaseURL, supabaseAnonKey);

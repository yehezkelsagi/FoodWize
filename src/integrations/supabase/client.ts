import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ofxnuhgxipqfaxjjtflg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9meG51aGd4aXBxZmF4amp0ZmxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM2OTQ2MjYsImV4cCI6MjA0OTI3MDYyNn0.W2BrSMpkwts-Pctq8UnKpB50oii4Xo31SawwLWqcx4o";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

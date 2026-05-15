import { createClient } from '@supabase/supabase-js'

// VVAHID Supabase Connection
const supabaseUrl = 'https://xlebmiloovzrwoukeqgh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZWJtaWxvb3Z6cndvdWtlcWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3NzQyNjgsImV4cCI6MjA5NDM1MDI2OH0.CXeLTtwiss_6fykcbvrT8Gsrtu6S6bguYhMBjG3RADg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
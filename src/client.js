import { createClient } from "@supabase/supabase-js";


export const supaBase = createClient(
    "https://hlndmsicitkvetsamnxa.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsbmRtc2ljaXRrdmV0c2FtbnhhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk1MjA1NDgsImV4cCI6MTk3NTA5NjU0OH0.1p20tppKnDpAcHL5guCuiG8oqMZ0rdoizf7mnijI6N8",
)

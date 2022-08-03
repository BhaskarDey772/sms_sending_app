import { createClient } from "@supabase/supabase-js";


export const supaBase = createClient(
    process.env.CLIENT_URL,
    process.env.CLIENT_SECRET ,
)
